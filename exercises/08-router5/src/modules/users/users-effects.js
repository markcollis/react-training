import apiClient from 'modules/api/api-client';

const wrapApiCall = call => async (...params) => {
  const { data } = await call(...params);
  return data;
};

export const getUsers = wrapApiCall(() => apiClient.get('/users'));
export const addUser = wrapApiCall(user => apiClient.post('/users', user));
export const getUser = wrapApiCall(id => apiClient.get(`/users/${id}`));
