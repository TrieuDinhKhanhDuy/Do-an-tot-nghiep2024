import { useState } from 'react';
import { login, handleRegister, handleUpdate } from '../service/authService';
import { UserLoginType, UserType } from '@/types/IUser';
import Swal from 'sweetalert2';

const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (email: string, password: string) => {
        setLoading(true);
        setError(null);

        try {
            const loginData: UserLoginType = { email, password };
            const response = await login(loginData);
            Swal.fire({
                title: "Đăng Nhập Thành Công",
                text: "Tự động chuyển về trang chủ....",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                window.location.href = "/";
            });
            console.log('Đăng nhập thành công:', response);
        } catch (error) {
            Swal.fire({
                title: "Đăng Nhập Thất Bạt",
                icon: "error",
                text: "Có vẻ như bạn nhập sai thông tin",
                showConfirmButton: false,
            })
            setError('Đăng nhập không thành công');
        } finally {
            setLoading(false);
        }
    };

    const UpdateUser = async (userData: UserType) => {
        setLoading(true);
        setError(null);

        try {
            const response = await handleUpdate(userData);
            console.log('Cập Nhật Thành công:', response);
            return response;
        } catch (error) {
            setError('Đăng ký không thành công');
        } finally {
            setLoading(false);
        }
    };

    const registerUser = async (userData: UserType) => {
        setLoading(true);
        setError(null);

        try {
            const response = await handleRegister(userData);
            console.log('Đăng ký thành công:', response);
            return response;
        } catch (error) {
            setError('Đăng ký không thành công');
        } finally {
            setLoading(false);
        }
    };

    return { handleLogin, registerUser,UpdateUser, loading, error };
};

export default useAuth;
