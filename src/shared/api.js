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

//////////////////////////////////////////////////////////////////////////

export const getCitizens = async (data) => {
  const res = await axios.get(`${API_BASE_URL}/citizens`);
  return res;
};

//////////////////////////////////////////////////////////////////////////
export const getCitizen = async (data) => {
  const res = await axios.get(`${API_BASE_URL}/citizen/${data}`);
  return res;
};

export const getRowsLength = async (role) => {
  const res = await axios.get(`${API_BASE_URL}/employees/rowLength`);
  return res;
};

//////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////

export const getAdmin = async (email) => {
  console.log(email);
  const res = await axios.get(`${API_BASE_URL}/admin/${email}`);
  return res;
};

//////////////////////////////////////////////////////////////////////////

export const addRequest = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/request`, { data });
  return res;
};

export const getRequest2 = async (role) => {
  const res = await axios.get(`${API_BASE_URL}/request/role/${role}`);
  return res.data.data;
};

//////////////////////////////////////////////////////////////////////////

export const getDashboardContent = async (data) => {
  const res = await axios.get(`${API_BASE_URL}/dashboard`);
  return res;
};

//////////////////////////////////////////////////////////////////////////

export const editStatus = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/citizen/status`, { data });
  return res;
};

export const editCovidStatus = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/citizen/status/covid`, {
    data,
  });
  return res;
};

export const acceptRequest = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/citizen/accept/request`, {
    data,
  });
  return res;
};

//////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////

export const getCurrentImage = async (data) => {
  const res = await axios.get(`${API_BASE_URL}/images/${data}`);
  return res;
};

export const getNewImage = async (data) => {
  const res = await axios.get(`${API_BASE_URL}/images/New/${data}`);
  return res;
};

//////////////////////////////////////////////////////////////////////////

export const addNewBorn = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/newBorn`, { data });
  return res;
};

//////////////////////////////////////////////////////////////////////////

export const addLandProperty = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/property`, { data });
  return res;
};

export const getCitizenLands = async (id) => {
  const res = await axios.get(`${API_BASE_URL}/property/citizen/${id}`);
  return res;
};

export const getAllLands = async (type) => {
  const res = await axios.get(`${API_BASE_URL}/property/${type}`);
  return res;
};

export const editLand = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/property/edit`, { data });
  return res;
};

export const moveLand = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/property/move`, { data });
  return res;
};

//////////////////////////////////////////////////////////////////////////

export const addVisit = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/visit`, { data });
  return res;
};

export const getCitizenVisits = async (citizenId) => {
  const res = await axios.get(`${API_BASE_URL}/citizen/visits/${citizenId}`);
  return res;
};

export const getAllVisits = async (type) => {
  const res = await axios.get(`${API_BASE_URL}/visits`);
  return res;
};

export const editCitizenVisits = async (data) => {
  const res = await axios.get(`${API_BASE_URL}/visit/edit`, { data });
  return res;
};

//////////////////////////////////////////////////////////////////////////

export const addRealEstate = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/realEstate`, { data });
  return res;
};

export const getCitizenRealEstate = async (id) => {
  const res = await axios.get(`${API_BASE_URL}/realEstate/citizen/${id}`);
  return res;
};

export const getAllRealEstates = async (type) => {
  const res = await axios.get(`${API_BASE_URL}/realEstate/${type}`);
  return res;
};

export const editRealEsate = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/realEstate/edit`, { data });
  return res;
};

////////////////////////////////////////////////////////////////////

export const getCitizenVisits2 = async (id) => {
  const res = await axios.get(`${API_BASE_URL}/citizen/visits/${id}`);
  return res;
};
export const saveNewBorn = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/newBorn`, {
    data,
  });
  return res;
};

export const acceptNewIdenty = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/request/identy-card`, {
    data,
  });
  return res;
};

export const activatePassport = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/request/issue-passport`, {
    data,
  });
  return res;
};

export const jawwalPay = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/payment/jawalWeb`, {
    data,
  });
  return res;
};

///////////////////////////////////////////////////////////////////////////////

export const addNewTransfer = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/addNewTransfer`, { data });
  return res;
};

export const getTransferredLands = async (data) => {
  const res = await axios.get(`${API_BASE_URL}/transferredLands`);
  return res;
};

////////////////////////////////////////////////////////////////////////////

export const addNewAccident = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/newAccident`, { data });
  return res;
};

// export const addVisit = async (data) => {
//   const res = await axios.post(`${API_BASE_URL}/visit`, {
//     data,
//   });
//   return res;
// };

// export const getAllVisits = async () => {
//   const res = await axios.get(`${API_BASE_URL}/visits`);
//   return res;
// };
