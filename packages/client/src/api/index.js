import axios from 'axios';

const axiosOptions = {
  baseURL: 'http://127.0.0.1:5000/api',
};

const apiInstance = axios.create(axiosOptions);

// 'http://127.0.0.1:5000/api/users'
export const getUsers = () => apiInstance.get('/users');

//{data:users}

export const createUser = user => apiInstance.post('/users', user);

// 'http://127.0.0.1:5000/api/users/id'
export const deleteUser = id => apiInstance.delete(`/users/${id}`);
