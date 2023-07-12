import React, { useContext, useEffect } from "react";
import "../style/Profile.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getLocalStorData, getUserDetails } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { store } from "../context/Context";
import Loader from "../components/Loader";

const Profile = () => {
  const { userdata, loading } = useSelector((state) => state.userDetail);
  const { setTeacherInitValue, setStudentInitValue } = useContext(store);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userid = getLocalStorData("userId");
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete your data")) {
      deleteUser(id);
      localStorage.removeItem("userId");
      navigate("/");
    }
  };
  const handleEdit = (data) => {
    if (data?.userType === "T") {
      setTeacherInitValue(data);
      navigate(`/updateteaprofile/${data.id}`);
    } else {
      setStudentInitValue(data);
      navigate(`/updatestuprofile/${data.id}`);
    }
  };

  useEffect(() => {
    if (userid) {
      dispatch(getUserDetails(userid));
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="userDetail-wrapper">
          <h1>Profile</h1>
          {userdata?.userType === "S" ? (
            <>
              <div>
                <h2>Fullname : </h2>
                <p>{userdata?.fullname}</p>
              </div>
              <div>
                <h2>Email :</h2>
                <p>{userdata?.email}</p>
              </div>
              <div>
                <h2>Mobile Number :</h2>
                <p>{userdata?.number}</p>
              </div>
              <div>
                <h2>Password :</h2>
                <p>{userdata?.password}</p>
              </div>
              <div>
                <h2>Gender :</h2>
                <p>{userdata?.gender}</p>
              </div>
              <div>
                <h2>Date of Birth :</h2>
                <p>{userdata?.birthdate}</p>
              </div>
              <div>
                <h2>Admission No :</h2>
                <p>{userdata?.admissionNo}</p>
              </div>
              <div>
                <h2>Class :</h2>
                <p>{userdata?.class}</p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h2>Fullname : </h2>
                <p>{userdata?.fullname}</p>
              </div>
              <div>
                <h2>Email :</h2>
                <p>{userdata?.email}</p>
              </div>
              <div>
                <h2>Mobile Number :</h2>
                <p>{userdata?.number}</p>
              </div>
              <div>
                <h2>Password :</h2>
                <p>{userdata?.password}</p>
              </div>
              <div>
                <h2>Gender :</h2>
                <p>{userdata?.gender}</p>
              </div>
              <div>
                <h2>Qualification :</h2>
                <p>{userdata?.qualification}</p>
              </div>
            </>
          )}
          <div>
            <button className="btn edit" onClick={() => handleEdit(userdata)}>
              Edit
            </button>
            <button
              className="btn delete"
              onClick={() => handleDelete(userdata?.id)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Profile;
