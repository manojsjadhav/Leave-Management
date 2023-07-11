import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const url = "http://localhost:5500";
const url = "https://leave-api.onrender.com";

export const getLocalStorData = (key) => {
  return localStorage.getItem(key);
};
export const setLocalStorData = (key, data) => {
  return JSON.stringify(localStorage.setItem(key, data));
};

export const postUserData = async (data) => {
  await axios.post(`${url}/user`, data);
};

export const deleteUser = async (id) => {
  await axios.delete(`${url}/user/${id}`);
};
export const updataUser = async (id, data) => {
  await axios.put(`${url}/user/${id}`, data);
};

export const getUserDetails = createAsyncThunk("userDetail", async (id) => {
  const result = await axios.get(`${url}/user/${id}`);
  return result.data;
});
export const getUsersData = createAsyncThunk("users", async () => {
  const result = await axios.get(`${url}/user`);
  return result.data;
});
export const postLeaveRequest = async (data) => {
  await axios.post(`${url}/leaves`, data);
};
export const getLeaveRequest = createAsyncThunk("leaves", async () => {
  const result = await axios.get(`${url}/leaves`);
  console.log(result.data);
  return result.data;
});
export const leaveAction = async (id, data) => {
  await axios.patch(`${url}/leaves/${id}`, data);
};
