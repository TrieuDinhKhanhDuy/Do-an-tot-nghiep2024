import logo from "../assets/image/logo.png";
import { FaRegUser } from "react-icons/fa";
import "../styles/Website/Header.css";

const Header = () => {
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
                <FaRegUser />
                <span>!</span>
            </div>
        </div>
        
    );
};
export default Header;