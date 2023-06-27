import { useFormik } from "formik";
import React from "react";
import "../style/Leavereq.scss";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { postLeaveRequest } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const LeaveRequest = () => {
  const leaveInitValue = {
    fullname: "",
    admissionNo: "",
    startdate: "",
    enddate: "",
    reason: "",
    status: "Pending",
  };
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.users);
  const stuFilter = users?.filter((item) => item.userType === "S");
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: leaveInitValue,
    onSubmit: (values, action) => {
      const userFind = stuFilter.find(
        (item) =>
          item.fullname === values.fullname &&
          item.admissionNo === values.admissionNo
      );
      if (userFind && values.startdate !== "" && values.enddate !== "") {
        postLeaveRequest({ ...values, id: uuidv4() });
        action.resetForm();
        navigate("/leavereport");
      } else {
        alert(
          "please enter correct fullname and admission number and check Dates"
        );
      }
    },
  });
  return (
    <form className="reg-container" onSubmit={handleSubmit}>
      <div className="header-wrapper">
        <h1>Leave Request</h1>
      </div>
      <div className="regi-input">
        <label htmlFor="fullname">Fullname</label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          value={values.fullname}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div className="regi-input">
        <label htmlFor="admino">Admission No.</label>
        <input
          type="text"
          name="admissionNo"
          id="admino"
          value={values.admissionNo}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div style={{ width: "47%" }}>
        <div className="birth-day">
          <label> From : </label>
          <input
            type="date"
            placeholder="Enter BirthDate"
            value={values.startdate}
            name="startdate"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </div>
      <div style={{ width: "47%" }}>
        <div className="birth-day">
          <label> To : </label>
          <input
            type="date"
            placeholder="Enter BirthDate"
            value={values.enddate}
            name="enddate"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </div>
      <div className="regi-input reason-rwapper">
        <label>Reason</label>
        <textarea
          name="reason"
          value={values.reason}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div className="btn-wrapper">
        <button className="btn leave-btn" type="submit">
          Send Leave Request
        </button>
      </div>
    </form>
  );
};

export default LeaveRequest;
