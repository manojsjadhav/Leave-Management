import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentLeaveReport from "../components/StudentLeaveReport";
import TeacherLeaveReport from "../components/TeacherLeaveReport";
import { getLeaveRequest } from "../redux/actions";

const LeaveReport = () => {
  const dispatch = useDispatch();
  const { userdata } = useSelector((state) => state.userDetail);
  console.log(userdata)
  useEffect(() => {
    dispatch(getLeaveRequest());
  }, []);
  return (
    <>
      {userdata.userType === "S" ? (
        <StudentLeaveReport />
      ) : (
        <TeacherLeaveReport />
      )}
    </>
  );
};

export default LeaveReport;
