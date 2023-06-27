import React from "react";
import "../style/Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../schemas/schema";
import { useSelector } from "react-redux";
import { setLocalStorData } from "../redux/actions";

const Login = () => {
  const loginInitialvalue = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.users);
  const { values, handleBlur, handleChange, touched, handleSubmit, errors } =
    useFormik({
      initialValues: loginInitialvalue,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        const loggedInUser = users.filter(
          (item) =>
            item.password == values.password && item.email == values.email
        );
        if (loggedInUser.length) {
          setLocalStorData("userId", loggedInUser?.[0].id);
          navigate("/");
          action.resetForm();
        } else {
          alert("please enter valid email and password ");
        }
      },
    });

  return (
    <form className="login-cont" onSubmit={handleSubmit}>
      <h1 className="heading">Login</h1>
      <div className="login-field">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? (
          <p className="error">{errors.email}</p>
        ) : null}
      </div>
      <div className="login-field">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? (
          <p className="error">{errors.password}</p>
        ) : null}
      </div>
      <button className="btn log-btn" type="submit">
        Login
      </button>
      <p>
        Don't have an account? <Link to="/studentregister">Register Now</Link>
      </p>
    </form>
  );
};

export default Login;
