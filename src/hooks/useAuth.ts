
import { useState } from 'react';
import { login } from '../service/authService';
import { UserLoginType } from '@/types/IUser';

const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (email: string, password: string) => {
        setLoading(true);
        setError(null);

        try {
            const loginData: UserLoginType = { email, password };
            const response = await login(loginData);

            // Đăng nhập thành công, token đã được lưu vào localStorage
            console.log('Đăng nhập thành công:', response);
        } catch (error) {
            setError('Đăng nhập không thành công');
        } finally {
            setLoading(false);
        }
    };

    return { handleLogin, loading, error };
};

export default useAuth;
