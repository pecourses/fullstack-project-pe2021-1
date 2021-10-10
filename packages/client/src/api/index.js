import axios from 'axios';

const axiosOptions = {
  baseUrl: 'http://127.0.0.1:5000/api',
};

const apiInstance = axios.create(axiosOptions);

const users = [
  {
    id: Date.now() + Math.trunc(Math.random() * 1000000),
    name: 'name1',
    telNumber: '+380123456789',
    isBanned: false,
  },
  {
    id: Date.now() + Math.trunc(Math.random() * 1000000),
    name: 'name2',
    telNumber: '+380123456789',
    isBanned: false,
  },
];

// 'http://127.0.0.1:5000/api/users'
// export const getUsers = () => apiInstance.get('/users');

//{data:users}

export const getUsers = () => {
  return Promise.resolve({ data: users });
};

// export const createUser = user => apiInstance.post('/users', user);
export const createUser = user => {
  const newUser = { ...user, id: Date.now() };
  users.push(newUser);
  return Promise.resolve({ data: newUser });
};

// 'http://127.0.0.1:5000/api/users/id'
// export const deleteUser = id => apiInstance.delete(`/users/${id}`)
export const deleteUser = id => {
  const index = users.findIndex(u => u.id === id);
  return Promise.resolve({ data: users.splice(index, 1) });
};
