import axios from "axios";
import { API_BASE_URL } from "./shared";

export const addEmployee = async (data) => {
  try {
    axios.post(`${API_BASE_URL}/employee`, { data }).then((res) => {
      console.log(res.data);
      return res.success;
    });
  } catch (err) {
    console.log(err);
  }
};
