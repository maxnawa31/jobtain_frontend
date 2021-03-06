import axios from 'axios';
import { getToken } from '../token';
const API_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export async function callAPI(method, path, authRequired, payload) {
  const requestHeaders = {};
  if (authRequired) {
    requestHeaders.authorization = `Bearer ${getToken()}`;
  }
  try {
    method = method.toLowerCase();
    const methods = new Set(['get', 'post', 'patch', 'delete']);
    if (!methods.has(method)) {
      throw new Error(
        'You can only call the API with one of the following methods: `GET`, `POST`, `PATCH`, `DELETE`',
      );
    }

    const response = await api.request({
      method,
      url:path,
      headers: requestHeaders,
      data: payload
    })
    return response.data
  } catch (error) {
    return Promise.reject(error.response.data.error);
  }
}
