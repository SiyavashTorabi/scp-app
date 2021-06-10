import axios from "axios";

const apiKey = process.env.REACT_APP_AIRTABLE_KEY;
const baseURL = "https://api.airtable.com/v0/app4akQCQecToEdQV/Table%201";


const config = {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
};

export const getAllScps = async () => {
  try {
    const res = await axios.get(baseURL, config);
    return res.data.records;
    console.log(res.data.records)
  } catch (error) {
    console.error(error);
  }
};

export const getOneScp = async (id) => {
  try {
    const res = await axios.get(`${baseURL}/${id}`, config);
    console.log(res.data)
    return res.data;
    
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const createScp = async (form) => {
  try {
    const res = await axios.post(`${baseURL}`, { fields: form }, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const editScp = async (id, form) => {
  try {
    const res = await axios.put(`${baseURL}/${id}`, { fields: form }, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteScp = async (id) => {
  try {
    const res = await axios.delete(`${baseURL}/${id}`, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
