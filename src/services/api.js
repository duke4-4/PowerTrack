import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = {
  // Users
  getUsers: () => axios.get(`${API_BASE_URL}/users`),
  createUser: (userData) => axios.post(`${API_BASE_URL}/users`, userData),
  updateUser: (id, userData) => axios.put(`${API_BASE_URL}/users/${id}`, userData),
  deleteUser: (id) => axios.delete(`${API_BASE_URL}/users/${id}`),

  // Notifications
  getNotifications: () => axios.get(`${API_BASE_URL}/notifications`),
  createNotification: (data) => axios.post(`${API_BASE_URL}/notifications`, data),
  updateNotification: (id, data) => axios.put(`${API_BASE_URL}/notifications/${id}`, data),
  deleteNotification: (id) => axios.delete(`${API_BASE_URL}/notifications/${id}`),

  // Tips
  getTips: () => axios.get(`${API_BASE_URL}/tips`),
  createTip: (tipData) => axios.post(`${API_BASE_URL}/tips`, tipData),
  updateTip: (id, tipData) => axios.put(`${API_BASE_URL}/tips/${id}`, tipData),
  deleteTip: (id) => axios.delete(`${API_BASE_URL}/tips/${id}`),

  // Payments
  getPayments: () => axios.get(`${API_BASE_URL}/payments`),
  createPayment: (paymentData) => axios.post(`${API_BASE_URL}/payments`, paymentData),

  // Faults
  getFaults: () => axios.get(`${API_BASE_URL}/faults`),
  createFault: (faultData) => axios.post(`${API_BASE_URL}/faults`, faultData),
  updateFault: (id, faultData) => axios.put(`${API_BASE_URL}/faults/${id}`, faultData)
};

export default api; 