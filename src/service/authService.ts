import { LoginResponse, UserLoginType } from "@/types/IUser.ts";
import axios from "axios";



export const login = async (data: UserLoginType): Promise<LoginResponse> => {
    const response = await axios.post<LoginResponse>('http://doantotnghiep_backend.test/api/login', data);
    // Lưu token vào localStorage
    localStorage.setItem('access_token', response.data.access_token);
    localStorage.setItem('token_type', response.data.token_type);
    return response.data;
};
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        const tokenType = localStorage.getItem('token_type');

        if (token) {
            config.headers.Authorization = `${tokenType} ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);