import React from "react";
import "../style/LeaveReport.scss";
import { useDispatch, useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import { getLeaveRequest, leaveAction } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const TeacherLeaveReport = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { leaves } = useSelector((state) => state.leaves);
  const handleApprov = (id) => {
    leaveAction(id, { status: "Approved" });
    dispatch(getLeaveRequest());
    navigate("/leavereport");
  };
  const handleReject = (id) => {
    leaveAction(id, { status: "Rejected" });
    dispatch(getLeaveRequest());
    navigate("/leavereport");
  };
  return (
    <div className="tea-leave-wrapper">
      {leaves?.map((item) => {
        return (
          <div key={item.id} className="leavedetails">
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
      })}
    </div>
  );
};

export default TeacherLeaveReport;
