import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./components/Login";
import StudentRegister from "./components/StudentRegister";
import TeacherRegister from "./components/TeacherRegister";
import Profile from "./pages/Profile";
import PriveteRoute from "./priveteRoute/PriveteRoute";
import Teachers from "./pages/Teachers";
import Students from "./pages/Students";
import LeaveRequest from "./pages/LeaveRequest";
import LeaveReport from "./pages/LeaveReport";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="studentregister" element={<StudentRegister />} />
          <Route path="teacherregister" element={<TeacherRegister />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="profile"
            element={<PriveteRoute Component={Profile} />}
          />
          <Route
            path="teachers"
            element={<PriveteRoute Component={Teachers} />}
          />
          <Route
            path="students"
            element={<PriveteRoute Component={Students} />}
          />
          <Route
            path="leaverequest"
            element={<PriveteRoute Component={LeaveRequest} />}
          />
          <Route
            path="leavereport"
            element={<PriveteRoute Component={LeaveReport} />}
          />
          <Route path="updateteaprofile/:id" element={<TeacherRegister />} />
          <Route path="updatestuprofile/:id" element={<StudentRegister />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
