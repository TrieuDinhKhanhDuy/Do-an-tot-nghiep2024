import logo from "../assets/image/logo.png";
import { FaRegUser } from "react-icons/fa";
import "../styles/Website/Header.css";
import { useState } from "react";

const Header = () => {

    // State để quản lý hiển thị của submenu
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    // Hàm để bật/tắt submenu
    const toggleSubmenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen);
    };
    return (
        <div className="header-container">
            <img src={logo} alt="logo" />
            <ul>
                <li>Trang Chủ</li>
                <li>Giới thiệu</li>
                <li>Dịch Vụ</li>
                <li>Tra Cứu</li>
                <li>Liên Hệ</li>
            </ul>
            <div className="header-icons">
                <div
                    className="menu"
                    onMouseEnter={toggleSubmenu}
                    onMouseLeave={toggleSubmenu}
                >
                    <button className="menu-button"><FaRegUser/></button>
                    {isSubmenuOpen && (
                        <div className="user-menu">
                        <div className="user-info">
                          <div className="user-avatar">
                            <span role="img" aria-label="avatar">👤</span>
                          </div>
                          <div className="user-details">
                            <span className="user-name">Admin hieu</span>
                            <span className="user-role">admin</span>
                          </div>
                        </div>
                  
                        <div className="menu-options">
                          <div className="menu-item">
                            <span role="img" aria-label="ticket">🎟️</span> Vé của tôi
                          </div>
                          <div className="menu-item">
                            <span role="img" aria-label="offer">🎫</span> Ưu đãi
                          </div>
                          <div className="menu-item">
                            <span role="img" aria-label="settings">⚙️</span> Cài đặt
                          </div>
                        </div>
                  
                        <div className="logout">
                          Đăng xuất
                        </div>
                      </div>
                    )}
                </div>
            </div>
        </div>

    );
};
export default Header;