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

export const editEmployee = async (data) => {
    const res = await axios.post(`${API_BASE_URL}/employee/edit`, { data });
    return res;
};

export const getCitizens = async (data) => {
    const res = await axios.get(`${API_BASE_URL}/citizens`);
    return res;
};

export const getRowsLength = async (role) => {
    const res = await axios.get(`${API_BASE_URL}/employees/rowLength`);
    return res;
};

export const editService = async (data) => {
    const res = await axios.post(`${API_BASE_URL}/service/edit`, { data });
    return res;
};

export const addService = async (data) => {
    const res = await axios.post(`${API_BASE_URL}/service`, { data });
    return res;
};

export const getService = async (type) => {
    const res = await axios.get(`${API_BASE_URL}/service/${type}`);
    return res;
};