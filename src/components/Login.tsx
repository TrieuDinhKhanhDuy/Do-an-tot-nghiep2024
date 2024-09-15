import React, { useState } from "react";
import Header from "./Header";
import "../styles/Website/Login.css";
import Login1 from "../assets/image/Login2.png";
import Heading from "./Heading";
import Footer from "./Footer";
type Props = {};

const Login = (props: Props) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <Header />
            <div className="login-container">
                <img src={Login1} alt="" />
                <div className="login-container-form">
                    <h2 className="login-container__title">
                      Đăng nhập tài khoản
                    </h2>
                    <div className="login-container__tabs">
                        <span className="login-container__tab login-container__tab--active">
                           Đăng Nhập
                        </span>
                        <span className="login-container__tab">
                            Đăng Ký
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
            <Footer />
        </>
    );
};

export default Login;
