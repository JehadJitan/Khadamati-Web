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

export const getAdmin = async (email) => {
    console.log(email);
    const res = await axios.get(`${API_BASE_URL}/admin/${email}`);
    return res;
};


export const addRequest = async (data) => {
    const res = await axios.post(`${API_BASE_URL}/request`, { data });
    return res;
};

export const getRequest2 = async (role) => {
    const res = await axios.get(`${API_BASE_URL}/request/role/${role}`);
    return res.data.data;
};

export const getDashboardContent = async (data) => {
    const res = await axios.get(`${API_BASE_URL}/dashboard`);
    return res;
};

export const editStatus = async (data) => {
    const res = await axios.post(`${API_BASE_URL}/citizen/status`, { data });
    return res;
};

export const acceptRequest = async (data) => {
    const res = await axios.post(`${API_BASE_URL}/citizen/accept/request`, { data });
    return res;
};
export const addVaccinatedCitizen = async (data) => {
    const res = await axios.post(`${API_BASE_URL}/covid`, { data });
    return res;
};

export const editVaccinatedCitizen = async (data) => {
    const res = await axios.get(`${API_BASE_URL}/covid/edit`, { data });
    return res;
};

export const getVaccinatedCitizen = async (type) => {
    const res = await axios.get(`${API_BASE_URL}/covid/${type}`);
    return res;
};