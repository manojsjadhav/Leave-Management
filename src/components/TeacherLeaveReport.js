import React from "react";
import "../style/LeaveReport.scss";
import { useDispatch, useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import { deleteLeaveReq, getLeaveRequest, leaveAction } from "../redux/actions";
import { FaTimes } from "react-icons/fa";
import Loader from "./Loader";

const TeacherLeaveReport = () => {
  const dispatch = useDispatch();
  const { leaves, loading } = useSelector((state) => state.leaves);
  const handleApprov = async (id) => {
    await leaveAction(id, { status: "Approved" });
    await dispatch(getLeaveRequest());
  };
  const handleReject = async (id) => {
    await leaveAction(id, { status: "Rejected" });
    await dispatch(getLeaveRequest());
  };
  const deleteLeave = async (id) => {
    if (window.confirm("Are you sure delete this leave request")) {
      await deleteLeaveReq(id);
      await dispatch(getLeaveRequest());
    }
  };
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
