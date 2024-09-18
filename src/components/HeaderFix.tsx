
import "../styles/Website/headerFix.css"
import logoBlue from "../assets/image/logofixpading.png"
import homeIcon from "../assets/icons/homeicon.png"
import option_icon from "../assets/icons/whitecloroption.jpg"
import { useRef, useState } from "react";


const HeaderFix = () => {
    const [isOpen, setIsOpen] = useState(false);
    const submenuRef = useRef<HTMLDivElement>(null);
    const [isClose, setClose] = useState(true);
    const toggleSubmenu = () => {
        setIsOpen(!isOpen);
        setClose(!isClose)
    };
    
    return (
        <>
            <header className="header">

                <div className="header__top">
                    <div className="header__top-actions">
                        <ul className="header__top-list">
                            <li><a href="/">Trợ giúp</a></li>
                            <li><a href="/">Đăng nhập</a></li>
                            <li><a href="/">Đăng ký</a></li>
                            <li><a href="/">VIETNAM - Tiếng Việt</a></li>
                        </ul>
                    </div>
                </div>

                <div className="header__nav">
                    <ul className="header__nav-list">
                        <div className="list_conten">
                            <li><a href="/">Tra cứu</a></li>
                            <li><a href="/">Tin tức</a></li>
                            <li><a href="/">Liên hệ</a></li>
                            <li><a href="/">Giới thiệu</a></li>
                        </div>
                        <div className="list_icon">


                            <li><img src={homeIcon} className="home_icon" alt="" /></li>
                            <li><div className="row_white"></div></li>
                            <li className="link-submenu" onClick={toggleSubmenu} >
                                <div className={`sp-link-submenu ${isClose ? 'close' : ''}`} ref={submenuRef}>
                                    <img src={option_icon} className="option_icon" alt="" />
                                </div>


                            </li>


                        </div>
                    </ul>
                </div>

                <div className="header__logo">
                    <img src={logoBlue} className="header__logo-img" />
                </div>


                <div
                    className={`submenu ${isOpen ? 'open' : ''}`}
                    ref={submenuRef}
                >

                    <div className="user-menu_fix">
                        <div className="user-info_fix">
                            <div className="user-avatar_fix">
                                <span role="img" aria-label="avatar">👤</span>
                            </div>
                            <div className="user-details_fix">
                                <span className="user-name_fix">Admin hieu</span>
                                <span className="user-role_fix">admin</span>
                            </div>
                        </div>

                        <div className="menu-options_fix">
                            <div className="menu-item_fix">
                                <span role="img" aria-label="ticket">🎟️</span> Vé của tôi
                            </div>
                            <div className="menu-item_fix">
                                <span role="img" aria-label="offer">🎫</span> Ưu đãi
                            </div>
                            <div className="menu-item_fix">
                                <span role="img" aria-label="settings">⚙️</span> Cài đặt
                            </div>
                        </div>

                        <div className="logout_fix">
                            Đăng xuất
                        </div>
                    </div>
                </div>

            </header>



        </>
    );
};

export default HeaderFix;
