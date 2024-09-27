import "../styles/Website/headerFix.css";
import logoBlue from "../assets/image/logofixpading.png";
import homeIcon from "../assets/icons/homeicon.png";
import option_icon from "../assets/icons/whitecloroption.jpg";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTicket,
    faGift,
    faCog,
    faSignOutAlt,
    faHome,
    faNewspaper,
    faPhone,
    faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const HeaderFix = () => {
    const [isOpen, setIsOpen] = useState(false);
    const submenuRef = useRef<HTMLDivElement>(null);
    const [isClose, setClose] = useState(true);
    const toggleSubmenu = () => {
        setIsOpen(!isOpen);
        setClose(!isClose);
    };
    const handleItemClick = () => {
        setIsOpen(false);
        setClose(true);
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                submenuRef.current &&
                !submenuRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                setClose(true);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            <header className="header">
                <div className="header__top">
                    <div className="header__top-actions">
                        <ul className="header__top-list">
                            <li>
                                <a href="/help?">Trợ giúp</a>
                            </li>
                            <li>
                                <a href="/login">Đăng nhập</a>
                            </li>
                            <li>
                                <a href="/register">Đăng ký</a>
                            </li>
                            <li>
                                <a href="/vie?">VIETNAM - Tiếng Việt</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="header__nav">
                    <ul className="header__nav-list">
                        <div className="list_conten">
                            <li>
                                <a href="/bustracking">Tra cứu</a>
                            </li>
                            <li>
                                <a href="/news">Tin tức</a>
                            </li>
                            <li>
                                <a href="/contact">Liên hệ</a>
                            </li>
                            <li>
                                <a href="/about">Giới thiệu</a>
                            </li>
                        </div>
                        <div className="list_icon">
                            <li>
                                <Link to={"/"}>
                                    <img
                                        src={homeIcon}
                                        className="home_icon"
                                        alt=""
                                    />
                                </Link>
                            </li>
                            <li>
                                <div className="row_white"></div>
                            </li>
                            <li
                                className="link-submenu"
                                onClick={toggleSubmenu}
                            >
                                <div
                                    className={`sp-link-submenu ${isClose ? "close" : ""}`}
                                    ref={submenuRef}
                                >
                                    <img
                                        src={option_icon}
                                        className="option_icon"
                                        alt=""
                                    />
                                </div>
                            </li>
                        </div>
                    </ul>
                </div>

                <div className="header__logo">
                    <img src={logoBlue} className="header__logo-img" />
                </div>

                <div
                    className={`submenu ${isOpen ? "open" : ""}`}
                    ref={submenuRef}
                >
                    <div className="user-menu_fix">
                        <div className="user-info_fix">
                            <div className="user-avatar_fix">
                                <span role="img" aria-label="avatar">
                                    👤
                                </span>
                            </div>
                            <div className="user-details_fix">
                                <span className="user-name_fix">
                                    Admin hieu
                                </span>
                                <span className="user-role_fix">admin</span>
                            </div>
                        </div>

                        <div className="menu-options_fix">
                            <div className="menu-item_fix">
                                <Link
                                    to={"/myticket"}
                                    onClick={handleItemClick}
                                >
                                    {" "}
                                    <span role="img" aria-label="ticket">
                                        {" "}
                                        <FontAwesomeIcon icon={faTicket} />
                                    </span>{" "}
                                    Vé của tôi
                                </Link>
                            </div>
                            <div className="menu-item_fix">
                                <span
                                    role="img"
                                    aria-label="offer"
                                    onClick={handleItemClick}
                                >
                                    {" "}
                                    <FontAwesomeIcon icon={faGift} />
                                </span>{" "}
                                Ưu đãi
                            </div>
                            <div className="menu-item_fix">
                                <span
                                    role="img"
                                    aria-label="settings"
                                    onClick={handleItemClick}
                                >
                                    {" "}
                                    <FontAwesomeIcon icon={faCog} />
                                </span>{" "}
                                Cài đặt
                            </div>
                        </div>

                        <div
                            className="logout_fix"
                            style={{ display: "flex", alignItems: "center" }}
                        >
                            <span style={{ marginRight: "10px" }}>
                                <FontAwesomeIcon icon={faSignOutAlt} />
                            </span>
                            Đăng xuất
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderFix;
