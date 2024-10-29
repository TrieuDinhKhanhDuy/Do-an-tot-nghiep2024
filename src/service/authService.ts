import { LoginResponse, UserLoginType } from "@/types/IUser.ts";
import axios from "axios";
import Swal from "sweetalert2";



export const login = async (data: UserLoginType): Promise<LoginResponse> => {
    const response = await axios.post<LoginResponse>('http://doantotnghiep_backend.test/api/login', data);

    localStorage.setItem('access_token', response.data.access_token);
    localStorage.setItem('token_type', response.data.token_type);
    return response.data;
};

// Hàm đăng xuất
export const logout = async (type: 'all' | 'current') => {

    const accessToken = localStorage.getItem('access_token');
    const tokenType = localStorage.getItem('token_type');

    if (!accessToken || !tokenType) {
        console.warn("Không tìm thấy token đăng nhập.");
        Swal.fire({
            title: "Bạn Chưa Đăng Nhập",
            icon: "error",
            showConfirmButton: false,
            timer: 1500
        })
        return {
            status: "Lỗi",
            message: "Không thể đăng xuất, vui lòng đăng nhập lại."

        };
    }

    try {
        const response = await axios.post('http://doantotnghiep_backend.test/api/logout', { type });

        // Xóa token khỏi localStorage sau khi đăng xuất thành công
        localStorage.removeItem('access_token');
        localStorage.removeItem('token_type');
        Swal.fire({
            title: "Đã Đăng xuất",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        })
        return response.data;
    } catch (error) {
        console.error('Lỗi đăng xuất:', error);
        throw error;
    }
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