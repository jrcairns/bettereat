import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const API_KEYS = {
  RESTAURANT: '/restaurant/random_restaurant',
  USER: '/users/random_user',
};

api.interceptors.request.use((config) => {
  return config;
});

const onResponseFulfilled = (response) => {
  return response;
};

const onResponseRejected = (error) => {
  return Promise.reject(error);
};

api.interceptors.response.use(onResponseFulfilled, onResponseRejected);

export const queries = {
  getRestaurants: (params) => api.get(API_KEYS.RESTAURANT, {
    params: { ...params }
  }).then((res) => res.data),
  getTopReviewerUsers: (params) => api.get(API_KEYS.USER, {
    params: { ...params }
  }).then((res) => res.data),
  getMostCheckInUsers: (params) => api.get(API_KEYS.USER, {
    params: { ...params }
  }).then((res) => res.data),
};
