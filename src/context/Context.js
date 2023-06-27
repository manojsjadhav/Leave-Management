import React, { createContext, useState } from "react";
export const store = createContext();

const Context = ({ children }) => {
  const [isToggle, setISToggle] = useState(false);
  const [studentInitValue, setStudentInitValue] = useState({
    fullname: "",
    email: "",
    password: "",
    number: "",
    gender: "",
    birthdate: "",
    admissionNo: "",
    class: "",
    conditions: false,
    userType: "S",
  });
  const [teacherInitValue, setTeacherInitValue] = useState({
    fullname: "",
    email: "",
    password: "",
    number: "",
    gender: "",
    qualification: "",
    conditions: false,
    userType: "T",
  });
  function setToggle(toggleValue) {
    setISToggle(toggleValue);
  }
  return (
    <store.Provider
      value={{
        isToggle,
        setToggle,
        teacherInitValue,
        setTeacherInitValue,
        studentInitValue,
        setStudentInitValue,
      }}
    >
      {children}
    </store.Provider>
  );
};

export default Context;
