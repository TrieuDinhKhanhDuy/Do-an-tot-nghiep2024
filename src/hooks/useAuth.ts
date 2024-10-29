import { useState } from 'react';
import { login, handleRegister } from '../service/authService';
import { UserLoginType, UserType } from '@/types/IUser';

const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (email: string, password: string) => {
        setLoading(true);
        setError(null);

        try {
            const loginData: UserLoginType = { email, password };
            const response = await login(loginData);
            console.log('Đăng nhập thành công:', response);
        } catch (error) {
            setError('Đăng nhập không thành công');
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

    return { handleLogin, registerUser, loading, error };
};

export default useAuth;
