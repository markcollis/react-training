import { api } from '../api/api-client';

import { UserData } from './users-slice';

export const getUsersEffect = () => api.request({
    url: '/users',
});

export const addUserEffect = (data: UserData) => api.request({
    url: '/users',
    method: 'POST',
    data,
});