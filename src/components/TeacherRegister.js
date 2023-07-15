import React, { useContext, useEffect } from "react";
import "../style/Register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { teaSignUpSchema } from "../schemas/schema";
import { store } from "../context/Context";
import {
  getLocalStorData,
  getUsersData,
  postUserData,
  updataUser,
} from "../redux/actions";
// import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

const TeacherRegister = () => {
  // const teaInitialValue = {
  //   fullname: "",
  //   email: "",
  //   password: "",
  //   number: "",
  //   gender: "",
  //   qualification: "",
  //   conditions: false,
  //   userType: "T",
  //   id: uuidv4(),
  // };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userid = getLocalStorData("userId");
  const { isToggle, setToggle, teacherInitValue } = useContext(store);
  const { values, handleBlur, touched, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: teacherInitValue,
      validationSchema: teaSignUpSchema,
      onSubmit: async(values, action) => {
        if (teacherInitValue.id) {
          updataUser(teacherInitValue.id, values);
          navigate("/profile");
        } else {
          await postUserData({ ...values, id: uuidv4() });
          await dispatch(getUsersData());
          navigate("/login");
        }
        action.resetForm();
      },
    });

  useEffect(() => {
    setToggle(true);
  }, []);

  return (
    <form className="reg-container" onSubmit={handleSubmit}>
      <div className="header-wrapper">
        <h1>{userid ? "Update" : "Registration"}</h1>
        <div>
          <div style={{ marginTop: "30px" }}>
            <Link
              style={{ display: `${userid && "none"}` }}
              className={isToggle ? "btn stu-btn" : "btn bs"}
              to="/studentregister"
            >
              Student
            </Link>
            <Link
              style={{ display: `${userid && "none"}` }}
              className={!isToggle ? "btn stu-btn" : "btn bs"}
              to="/teacherregister"
            >
              Teacher
            </Link>
          </div>
        </div>
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
        {errors.fullname && touched.fullname ? (
          <p className="error">{errors.fullname}</p>
        ) : null}
      </div>
      <div className="regi-input">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? (
          <p className="error">{errors.email}</p>
        ) : null}
      </div>
      <div className="regi-input">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? (
          <p className="error">{errors.password}</p>
        ) : null}
      </div>
      <div className="regi-input">
        <label htmlFor="number">Number</label>
        <input
          type="text"
          name="number"
          id="number"
          value={values.number}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.number && touched.number ? (
          <p className="error">{errors.number}</p>
        ) : null}
      </div>
      <div style={{ width: "47%" }}>
        <div className="gender">
          <label>Gender : </label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={values.gender === "Male"}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span>Male</span>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={values.gender === "Female"}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span>Female </span>
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={values.gender === "Other"}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span>Other </span>
        </div>
        {errors.gender && touched.gender ? (
          <p className="error">{errors.gender}</p>
        ) : null}
      </div>
      <div className="regi-input">
        <label htmlFor="qualification">Qualification</label>
        <input
          type="text"
          id="qualification"
          name="qualification"
          value={values.qualification}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.qualification && touched.qualification ? (
          <p className="error">{errors.qualification}</p>
        ) : null}
      </div>
      <div>
        <div className="condition-checkbox">
          <input
            type="checkbox"
            name="conditions"
            checked={values.conditions}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p>I accept the Terms and Conditions</p>
        </div>
        {errors.conditions && touched.conditions ? (
          <p className="error">{errors.conditions}</p>
        ) : null}
      </div>
      <div className="button-wrapper">
        <p style={{ display: `${userid ? "none" : ""}` }}>
          Already have an account? <Link to="/login">Login Now</Link>
        </p>
        <button className="btn" type="submit">
          {userid ? "Update" : "Register"}
        </button>
      </div>
    </form>
  );
};

export default TeacherRegister;
