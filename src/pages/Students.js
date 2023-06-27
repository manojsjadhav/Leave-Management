import React from "react";
import "../style/Teachers.scss";
import "../style/Table.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsersData } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const Students = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.users);
  const filterData = users.filter((item) => item.userType === "S");
  const { userdata } = useSelector((state) => state.userDetail);
  const deleteStudent = (id) => {
    deleteUser(id);
    dispatch(getUsersData());
    navigate("/students");
  };
  return (
    <div className="t-data">
      <div>
        <h1>Students List</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Admission No.</th>
            <th>Full name</th>
            <th>Email</th>
            <th>class Name</th>
            <th
              style={{
                display: `${userdata?.userType === "S" && "none"}`,
              }}
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {filterData?.map((item, i) => {
            return (
              <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.admissionNo}</td>
                <td>{item.fullname}</td>
                <td>{item.email}</td>
                <td>{item.class}</td>
                <td
                  style={{
                    display: `${userdata?.userType === "S" && "none"}`,
                  }}
                >
                  <button
                    className="btn"
                    style={{ background: "rgb(182, 26, 26)" }}
                    onClick={() => deleteStudent(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Students;