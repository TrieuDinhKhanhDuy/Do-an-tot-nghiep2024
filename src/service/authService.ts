import axios from "axios";
import Swal from "sweetalert2";
import { ChangePasswordType, LoginResponse, OtpReponse, UserLoginType, UserType } from "@/types/IUser.ts";

export const login = async (data: UserLoginType): Promise<LoginResponse> => {
    try {
        const response = await axios.post<LoginResponse>('http://doantotnghiep.test/api/login', data);
        sessionStorage.setItem('access_token', response.data.access_token);
        sessionStorage.setItem('token_type', response.data.token_type);
    
        sessionStorage.setItem('userId', JSON.stringify(response.data.user));
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            Swal.fire({
                title: "Cập nhật thất bại!",
                text: error.response.data.message || "Vui lòng thử lại.",
                icon: "error",
                confirmButtonText: "OK",
                allowOutsideClick: false,
                allowEscapeKey: false,
            });
        } else {
            Swal.fire({
                title: "Lỗi không xác định!",
                text: "Đã xảy ra lỗi không mong muốn.",
                icon: "error",
                confirmButtonText: "OK",
                allowOutsideClick: false,
                allowEscapeKey: false,
            });
        }
        throw error;
    }

};

export const handleRegister = async (data: UserType) => {

    try {
        const response = await axios.post(
            "http://doantotnghiep.test/api/register",
            {
                name: data.name,
                phone: data.phone,
                address: data.address,
                email: data.email,
                password: data.password,
                password_confirmation: data.password_confirmation,
            }
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            Swal.fire({
                title: "Đăng ký thất bại!",
                text: error.response.data.message || "Vui lòng thử lại.",
                icon: "error",
                confirmButtonText: "OK",
                allowOutsideClick: false,
                allowEscapeKey: false,
            });
        } else {
            Swal.fire({
                title: "Lỗi không xác định!",
                text: "Đã xảy ra lỗi không mong muốn.",
                icon: "error",
                confirmButtonText: "OK",
                allowOutsideClick: false,
                allowEscapeKey: false,
            });
        }
        throw error;
    }
};

export const handleUpdate = async (data: UserType) => {
    try {
        const response = await axios.put(
            "http://doantotnghiep.test/api/account/update",
            {
                name: data.name,
                phone: data.phone,
                address: data.address,
                email: data.email,
            }
        );
        Swal.fire({
            title: "Cập nhật thông tin thành công",
            text: "Vui lòng đăng nhập lại",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            window.location.href = "/login";
            
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            Swal.fire({
                title: "Cập nhật thất bại!",
                text: error.response.data.message || "Vui lòng thử lại.",
                icon: "error",
                confirmButtonText: "OK",
                allowOutsideClick: false,
                allowEscapeKey: false,
            });
        } else {
            Swal.fire({
                title: "Lỗi không xác định!",
                text: "Đã xảy ra lỗi không mong muốn.",
                icon: "error",
                confirmButtonText: "OK",
                allowOutsideClick: false,
                allowEscapeKey: false,
            });
        }
        throw error;
    }
};

export const handleChangePassword = async (data: ChangePasswordType) => {
    try {
        const response = await axios.post(
            "http://doantotnghiep.test/api/reset-password",
            {
                password: data.password,
                password_confirmation: data.password_confirmation,
                email: data.email,
                otp: data.otp,
            }
        );
        Swal.fire({
            title: "Cập nhật thông tin thành công",
            text: "Vui lòng đăng nhập lại",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            window.location.href = "/login";

        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            Swal.fire({
                title: "Cập nhật thất bại!",
                text: error.response.data.message || "Vui lòng thử lại.",
                icon: "error",
                confirmButtonText: "OK",
                allowOutsideClick: false,
                allowEscapeKey: false,
            });
        } else {
            Swal.fire({
                title: "Lỗi không xác định!",
                text: "Đã xảy ra lỗi không mong muốn.",
                icon: "error",
                confirmButtonText: "OK",
                allowOutsideClick: false,
                allowEscapeKey: false,
            });
        }
        throw error;
    }
}

export const handleGetOtpService = async (data: OtpReponse) => {
    try {
        const response = await axios.post(
            "http://doantotnghiep.test/api/request-password-reset",
            {
                email: data.email,
            }
        );
        Swal.fire({
            title: "đã gửi otp",
            text: "okk",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        })
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            Swal.fire({
                title: "Cập nhật thất bại!",
                text: error.response.data.message || "Vui lòng thử lại.",
                icon: "error",
                confirmButtonText: "OK",
                allowOutsideClick: false,
                allowEscapeKey: false,
            });
        } else {
            Swal.fire({
                title: "Lỗi không xác định!",
                text: "Đã xảy ra lỗi không mong muốn.",
                icon: "error",
                confirmButtonText: "OK",
                allowOutsideClick: false,
                allowEscapeKey: false,
            });
        }
        throw error;
    }
}

export const logoutKhongThongBao = async (type: 'all' | 'current') => {
    try {
        const response = await axios.post('http://doantotnghiep.test/api/logout', { type });
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('token_type');
        sessionStorage.removeItem('userId');
        return response.data;
    } catch (error) {
        console.error('Lỗi đăng xuất:', error);
        throw error;
    }
};

export const logout = async (type: 'all' | 'current') => {
    const accessToken = sessionStorage.getItem('access_token');
    const tokenType = sessionStorage.getItem('token_type');

    if (!accessToken || !tokenType) {
        console.warn("Không tìm thấy token đăng nhập.");
        Swal.fire({
            title: "Bạn Chưa Đăng Nhập",
            icon: "error",
            showConfirmButton: false,
            timer: 1500
        });
        return {
            status: "Lỗi",
            message: "Không thể đăng xuất, vui lòng đăng nhập lại."
        };
    }

    try {
        const response = await axios.post('http://doantotnghiep.test/api/logout', { type });

        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('token_type');
        sessionStorage.removeItem('userId');

        Swal.fire({
            title: "Đã Đăng xuất",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            window.location.href = "/login";
        });
        return response.data;
    } catch (error) {
        console.error('Lỗi đăng xuất:', error);
        throw error;
    }
};

axios.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('access_token');
        const tokenType = sessionStorage.getItem('token_type');

        if (token) {
            config.headers.Authorization = `${tokenType} ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
