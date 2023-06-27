import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLocalStorData = (key) => {
  return localStorage.getItem(key);
};
export const setLocalStorData = (key, data) => {
  return JSON.stringify(localStorage.setItem(key, data));
};

export const postUserData = async (data) => {
  await axios.post("http://localhost:5500/user", data);
};

export const deleteUser = async (id) => {
  await axios.delete(`http://localhost:5500/user/${id}`);
};
export const updataUser = async (id, data) => {
  await axios.put(`http://localhost:5500/user/${id}`, data);
};

export const getUserDetails = createAsyncThunk("userDetail", async (id) => {
  const result = await axios.get(`http://localhost:5500/user/${id}`);
  return result.data;
});
export const getUsersData = createAsyncThunk("users", async () => {
  const result = await axios.get("http://localhost:5500/user");
  return result.data;
});
export const postLeaveRequest = async (data) => {
  await axios.post("http://localhost:5500/leaves", data);
};
export const getLeaveRequest = createAsyncThunk("leaves", async () => {
  const result = await axios.get("http://localhost:5500/leaves");
  console.log(result.data);
  return result.data;
});
export const leaveAction = async (id, data) => {
  await axios.patch(`http://localhost:5500/leaves/${id}`, data);
};
