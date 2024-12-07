import { useState } from 'react';
import { login, handleRegister, handleUpdate, handleChangePassword, handleGetOtpService } from '../service/authService';
import { ChangePasswordType, OtpReponse, UserLoginType, UserType } from '@/types/IUser';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';

const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [countdown, setCountdown] = useState(0);
    const location = useLocation();
    const [isOtpSent, setIsOtpSent] = useState(false);




    const handleLogin = async (email: string, password: string) => {
        setLoading(true);
        setError(null);

        try {
            const loginData: UserLoginType = { email, password };
            const response = await login(loginData);
            Swal.fire({
                title: "Đăng Nhập Thành Công",
                text: "Tự động chuyển về trang trước đó....",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                const queryParams = new URLSearchParams(location.search);
                const redirectUrl = queryParams.get("redirect");
                if (redirectUrl) {
                    window.location.href = decodeURIComponent(redirectUrl);
                } else {
                    window.location.href = "/";
                }
            });
            console.log('Đăng nhập thành công:', response);
        } catch (error) {
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

    const GetOtp = async (userData: OtpReponse) => {
        setLoading(true);
        setError(null);

        try {
            const response = await handleGetOtpService(userData);
            console.log('Cập Nhật Thành công:', response);
            startCountdown(300);
            return response;
        } catch (error) {
            setError('Đăng ký không thành công');
        } finally {
            setLoading(false);
        }
    };

    const ChangePassword = async (userData: ChangePasswordType) => {
        setLoading(true);
        setError(null);

        try {
            const response = await handleChangePassword(userData);
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
            return response;
        } catch (error) {
            setError('Đăng ký không thành công');
        } finally {
            setLoading(false);
        }
    };


    const startCountdown = (seconds: number) => {
        setCountdown(seconds);
        const timer = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              setIsOtpSent(false);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      };
    
    return { handleLogin, registerUser, UpdateUser, ChangePassword, GetOtp , loading, error,countdown, isOtpSent };
};

export default useAuth;
