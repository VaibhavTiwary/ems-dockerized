import axios from "axios";

const BASE_URL = import.meta.env.VITE_REST_API_BASE_URL;

export const listEmployees = () => {
    return axios.get(`${BASE_URL}/employees`);
};

export const createEmployee = (employee) => axios.post(`${BASE_URL}/employees`, employee);

export const getEmployee = (employeeId) => axios.get(`${BASE_URL}/employees/${employeeId}`);

export const updateEmployee = (employeeId, employee) => axios.put(`${BASE_URL}/employees/${employeeId}`, employee);

export const deleteEmployee = (employeeId) => axios.delete(`${BASE_URL}/employees/${employeeId}`);
