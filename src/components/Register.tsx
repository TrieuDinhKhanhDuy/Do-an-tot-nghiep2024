import React, { useState } from "react";
import Header from "./Header";
import "../styles/Website/Register.css";
import Register1 from "../assets/image/Register.png";
import Heading from "./Heading";
import Footer from "./Footer";
type Props = {};

const Register = (props: Props) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <Header />
            <div className="register-container">
                <img src={Register1} alt="" />
                <div className="register-container-form">
                    <h2 className="register-container__title">
                        Đăng ký tài khoản
                    </h2>
                    <div className="register-container__tabs">
                        <span className="register-container__tab">
                            Đăng Nhập
                        </span>
                        <span className="register-container__tab register-container__tab--active">
                            Đăng Ký
                        </span>
                    </div>
                    <form className="register-form">
                        <input
                            type="text"
                            placeholder="Nhập Tên"
                            className="register-form__input"
                        />
                        <input
                            type="email"
                            placeholder="Nhập Email"
                            className="register-form__input"
                        />
                        <input
                            type="tel"
                            placeholder="Nhập số điện thoại"
                            className="register-form__input"
                        />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Nhập mật khẩu"
                            className="register-form__input"
                        />
                        <div className="register-form__checkbox-container">
                            <input
                                type="checkbox"
                                id="show-password"
                                onChange={togglePasswordVisibility}
                                className="register-form__checkbox"
                            />
                            <label
                                htmlFor="show-password"
                                className="register-form__label"
                            >
                                Hiện mật khẩu
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="register-form__submit-btn"
                        >
                            Đăng ký
                        </button>
                    </form>
                </div>
            </div>
            <Heading />
            <Footer />
        </>
    );
};

export default Register;
