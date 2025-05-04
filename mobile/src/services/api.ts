import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for API calls
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = await AsyncStorage.getItem('refreshToken');
        const response = await axios.post(`${BASE_URL}/token/refresh/`, {
          refresh: refreshToken,
        });

        const { access } = response.data;
        await AsyncStorage.setItem('token', access);

        originalRequest.headers.Authorization = `Bearer ${access}`;
        return api(originalRequest);
      } catch (err) {
        // Refresh token failed, redirect to login
        await AsyncStorage.clear();
        // You might want to dispatch a logout action here
        return Promise.reject(err);
      }
    }


  

    return Promise.reject(error);
  }
);

export const login = async (username: string, password: string) => {
  try{
  const response = await axios.post('/token/', { username, password });
  return response.data;
}
  catch(err){
    return Promise.reject(err);
    
}
};

export const register = async (userData: {
  username: string;
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
}) => {
  const response = await api.post('/users/', userData);
  return response.data;
};

export const updateProfile = async (userId: number, profileData: any) => {
  const response = await api.put(`/users/${userId}/`, profileData);
  return response.data;
};

export const getProfile = async () => {
  const response = await api.get('/users/me/');
  return response.data;
};

export default api; 