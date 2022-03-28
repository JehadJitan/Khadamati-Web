import axios from "axios";
import { API_BASE_URL } from "./config";

export const addEmployee = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/employee`, { data });
  return res;
};

export const getEmployees = async (role) => {
  const res = await axios.get(`${API_BASE_URL}/employees/${role}`);
  return res;
};
