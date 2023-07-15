import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentLeaveReport from "../components/StudentLeaveReport";
import TeacherLeaveReport from "../components/TeacherLeaveReport";
import { getLeaveRequest } from "../redux/actions";
import Loader from "../components/Loader";

const LeaveReport = () => {
  const dispatch = useDispatch();
  const { userdata, loading } = useSelector((state) => state.userDetail);
  useEffect(() => {
    dispatch(getLeaveRequest());
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : userdata.userType === "S" ? (
        <StudentLeaveReport />
      ) : (
        <TeacherLeaveReport />
      )}
    </>
  );
};

export default LeaveReport;
