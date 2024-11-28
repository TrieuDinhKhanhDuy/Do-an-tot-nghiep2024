import { useState } from "react";
import "../styles/Website/Login.css";
import Login1 from "../assets/image/Login2.png";
import Heading from "./Heading";
import Breadcrumb from "./Breadcrumb";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import { UserLoginType } from "@/types/IUser";
import Swal from "sweetalert2";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const duongDan = [
        { nhan: "Trang Chủ", duongDan: "/" },
        { nhan: "Đăng Nhập", duongDan: "login" },
    ];

    const loginSchema = z.object({
        email: z.string().nonempty("Email không được để trống").email("Email không hợp lệ"),
        password: z.string().nonempty("Mật Khẩu không được để trống").min(8, "Mật Khẩu phải có ít nhất 8 ký tự"),
    });

    const { handleLogin, loading } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm<UserLoginType>({
        resolver: zodResolver(loginSchema),
    });

    const nav = useNavigate();
    const location = useLocation();

    const onSubmit = async (data: UserLoginType) => {
        await handleLogin(data.email, data.password);
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
                nav("/"); // Quay về trang chủ nếu không có redirect
            }
        });
    };

    return (
        <>
            <Breadcrumb items={duongDan} />
            <div className="login-container">
                <img src={Login1} alt="Login" className="img-hidden" />
                <div className="login-container-form">
                    <h2 className="login-container__title">Đăng nhập tài khoản</h2>
                    <div className="login-container__tabs">
                        <span className="login-container__tab login-container__tab--active">
                            <Link to={"/login"}>Đăng Nhập</Link>
                        </span>
                        <span className="login-container__tab">
                            <Link to={"/register"}>Đăng Ký </Link>
                        </span>
                    </div>
                    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
                            fullWidth
                            margin="normal"
                            label="Email"
                            type="email"
                            {...register("email")}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                        <TextField
                            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
                            fullWidth
                            margin="normal"
                            label="Mật Khẩu"
                            type={showPassword ? "text" : "password"}
                            {...register("password")}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />
                        <div className="login-form__checkbox-container">
                            <input
                                type="checkbox"
                                id="show-password"
                                onChange={togglePasswordVisibility}
                                className="login-form__checkbox"
                            />
                            <label htmlFor="show-password" className="login-form__label">
                                Hiện mật khẩu
                            </label>
                            <p>Quên mật khẩu</p>
                        </div>
                        <button
                            type="submit"
                            className="login-form__submit-btn"
                            disabled={loading}
                        >
                            {loading ? "Đang Đăng Nhập..." : "Đăng Nhập"}
                        </button>
                        <div className="social-register">
                            <p className="social-register__text">Hoặc</p>
                            <div className="social-register__buttons">
                                <button className="social-register__btn facebook-btn">
                                    <FaFacebookF /> Facebook
                                </button>
                                <button className="social-register__btn google-btn">
                                    <FaGoogle /> Google
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Heading />
        </>
    );
};

export default Login;
