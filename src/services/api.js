import axios from 'axios';

const DEV_API_BASE_URL = 'http://localhost:5000';

function resolveApiBaseUrl() {
  const configured = import.meta.env.VITE_API_BASE_URL?.trim();

  if (configured) {
    return configured;
  }

  if (import.meta.env.DEV) {
    return DEV_API_BASE_URL;
  }

  return '';
}

const api = axios.create({
  baseURL: resolveApiBaseUrl(),
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('interviewprep_token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED') {
      throw new Error('The server took too long to respond. Please try again.');
    }

    if (!error.response) {
      throw new Error('Unable to reach the backend service. Check the API URL or server status.');
    }

    const backendMessage = error.response.data?.message;
    const fallback = `Request failed with status ${error.response.status}.`;
    throw new Error(backendMessage || fallback);
  },
);

export default api;
