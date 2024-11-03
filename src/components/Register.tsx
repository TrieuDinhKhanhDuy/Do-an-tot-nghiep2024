import { useState } from "react";
import "../styles/Website/Register.css";
import Register1 from "../assets/image/Register.png";
import Heading from "./Heading";
import Breadcrumb from "./Breadcrumb";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../hooks/useAuth"; // Import hook useAuth
import { handleRegister } from '../service/authService';
import { UserType } from "@/types/IUser";

// Định nghĩa schema validation với zod
const schema = z
    .object({
        name: z.string().min(1, "Tên là bắt buộc"),
        phone: z.string().regex(/^(\d{10})$/, "Số điện thoại không hợp lệ"),
        address: z.string().min(6, "Địa chỉ phải ít nhất 6 ký tự"),
        email: z.string().email("Email không hợp lệ"),
        password: z.string().min(8, "Mật khẩu ít nhất 8 ký tự"),
        password_confirmation: z.string().min(8, "Xác nhận mật khẩu là bắt buộc"),
    })
    .refine((data) => data.password === data.password_confirmation, {
        path: ["password_confirmation"],
        message: "Xác nhận mật khẩu không khớp",
    });

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { handleLogin, loading, error } = useAuth(); // Sử dụng hook
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserType>({
        resolver: zodResolver(schema),
    });

    const duongDan = [
        { nhan: "Trang Chủ", duongDan: "/" },
        { nhan: "Đăng Ký", duongDan: "register" },
    ];

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const onSubmit = async (data: UserType) => {
        await handleRegister(data);
        if (error) {
            toast.error(error);
        } else {
            await handleLogin(data.email, data.password);
        }
    };

    return (
        <>
            <Breadcrumb items={duongDan} />
            <div className="register-container">
                <img src={Register1} alt="" className="img-hidden" />
                <div className="register-container-form">
                    <h2 className="register-container__title">Đăng ký tài khoản</h2>
                    <div className="register-container__tabs">
                        <span className="register-container__tab">
                            <Link to="/login">Đăng Nhập</Link>
                        </span>
                        <span className="register-container__tab register-container__tab--active">
                            <Link to="/register">Đăng Ký</Link>
                        </span>
                    </div>
                    <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Họ Và Tên"
                            {...register("name")}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Số Điện Thoại"
                            {...register("phone")}
                            error={!!errors.phone}
                            helperText={errors.phone?.message}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Địa Chỉ"
                            {...register("address")}
                            error={!!errors.address}
                            helperText={errors.address?.message}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Email"
                            {...register("email")}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Mật Khẩu"
                            type={showPassword ? "text" : "password"}
                            {...register("password")}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Xác Nhận Mật Khẩu"
                            type={showPassword ? "text" : "password"}
                            {...register("password_confirmation")}
                            error={!!errors.password_confirmation}
                            helperText={errors.password_confirmation?.message}
                        />
                        <div className="register-form__checkbox-container">
                            <input
                                type="checkbox"
                                id="show-password"
                                onChange={togglePasswordVisibility}
                                className="register-form__checkbox"
                            />
                            <label htmlFor="show-password" className="register-form__label">
                                Hiện mật khẩu
                            </label>
                        </div>
                        <button type="submit" className="register-form__submit-btn" disabled={loading}>
                            {loading ? "Đang đăng ký..." : "Đăng ký"}
                        </button>
                    </form>
                </div>
            </div>
            <Heading />
            <ToastContainer />
        </>
    );
};

export default Register;
