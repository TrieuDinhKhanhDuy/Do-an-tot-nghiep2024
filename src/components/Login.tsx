import React, { useState } from "react";
import Header from "./Header";
import "../styles/Website/Login.css";
import Login1 from "../assets/image/Login2.png";
import Heading from "./Heading";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import { Link } from "react-router-dom";
type Props = {};

const Login = (props: Props) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const duongDan = [
        { nhan: 'Trang Chủ', duongDan: '/' },
        { nhan: 'Đăng Nhập', duongDan: 'login' },
      ];
    return (
        <>
         <Breadcrumb items={duongDan} />
            <div className="login-container">
                <img src={Login1} alt="" className="img-hidden"/>
                <div className="login-container-form">
                    <h2 className="login-container__title">
                      Đăng nhập tài khoản
                    </h2>
                    <div className="login-container__tabs">
                        <span className="login-container__tab login-container__tab--active">
                         <Link to={'/login'}>Đăng Nhập</Link>
                        </span>
                        <span className="login-container__tab">
                            <Link to={'/register'}>Đăng Ký </Link>
                        </span>
                    </div>
                    <form className="login-form">
                        <input
                            type="email"
                            placeholder="Nhập Email"
                            className="login-form__input"
                        />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Nhập mật khẩu"
                            className="login-form__input"
                        />
                        <div className="login-form__checkbox-container">
                            <input
                                type="checkbox"
                                id="show-password"
                                onChange={togglePasswordVisibility}
                                className="login-form__checkbox"
                            />
                            <label
                                htmlFor="show-password"
                                className="login-form__label"
                            >
                                Hiện mật khẩu
                            </label>
                            <p>Quên mật khẩu</p>
                        </div>
                        <button
                            type="submit"
                            className="login-form__submit-btn"
                        >
                            Đăng nhập
                        </button>
                    </form>
                </div>
            </div>
            <Heading />
        </>
    );
};

export default Login;
