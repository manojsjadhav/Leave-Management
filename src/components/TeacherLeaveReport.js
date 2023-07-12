import React, { useEffect, useLayoutEffect, useState } from "react";
import "../style/LeaveReport.scss";
import { useDispatch, useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import { deleteLeaveReq, getLeaveRequest, leaveAction } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Loader from "./Loader";

const TeacherLeaveReport = () => {
  const [istoggle, setIsToggle] = useState(false);
  const dispatch = useDispatch();
  const { leaves, loading } = useSelector((state) => state.leaves);
  console.log(loading);
  const handleApprov = (id) => {
    leaveAction(id, { status: "Approved" });
    setIsToggle(!istoggle);
  };
  const handleReject = (id) => {
    leaveAction(id, { status: "Rejected" });
    setIsToggle(!istoggle);
  };
  const deleteLeave = (id) => {
    if (window.confirm("Are you sure delete this leave request")) {
      deleteLeaveReq(id);
      setIsToggle(!istoggle);
    }
  };
  useEffect(() => {
    dispatch(getLeaveRequest());
  }, [istoggle]);
  return (
    <div className="tea-leave-wrapper">
      {loading ? (
        <Loader />
      ) : (
        leaves?.map((item) => {
          return (
            <div key={item.id} className="leavedetails">
              <div className="delete-icon">
                <FaTimes
                  className="d-icon"
                  onClick={() => deleteLeave(item.id)}
                />
              </div>
              <div>
                <h2>Fullname : </h2>
                <p>{item?.fullname}</p>
              </div>
              <div>
                <h2>Admission No :</h2>
                <p>{item?.admissionNo}</p>
              </div>
              <div>
                <h2>Date :</h2>
                <p>
                  {item?.startdate} To {item?.enddate}
                </p>
              </div>
              <div>
                <h2>Reason :</h2>
                <p>{item?.reason}</p>
              </div>
              <div>
                <h2>Status :</h2>
                <p>{item?.status}</p>
              </div>
              <div>
                {item?.status === "Pending" ? (
                  <div>
                    <button
                      className="btn bg-green"
                      onClick={() => handleApprov(item.id)}
                    >
                      Approve
                    </button>
                    <button
                      className="btn bg-red"
                      onClick={() => handleReject(item.id)}
                    >
                      Reject
                    </button>
                  </div>
                ) : (
                  <div
                    className={`checked ${
                      item.status === "Approved" ? "green" : "red"
                    }`}
                  >
                    <FaCheckCircle />
                    {item.status}
                  </div>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default TeacherLeaveReport;
