import { faCog, faGift, faSignOutAlt, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaUserCircle, FaTasks, FaGift, FaCogs, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const LeftBar = () => {
    return (
        <div className="userProfile-sidebar">
            <div className="userProfile-sidebar__profile">
                <div className="userProfile-sidebar__avatar">
                    <FaUserCircle size={70} />
                </div>
                <div className="userProfile-sidebar__name">
                    <p> Admin hieu</p>
                    <span>admin</span>
                </div>
            </div>
            <ul className="userProfile-sidebar__menu">
                <Link to={'/myticket'}>
                <li className="userProfile-sidebar__menu-item">
                    <FontAwesomeIcon icon={faGift} />
                    Vé của tôi
                </li>
                </Link>
                <Link to={'/listvoucher'}>
                <li className="userProfile-sidebar__menu-item">
                    <FaGift className="userProfile-sidebar__menu-icon" />
                    Ưu đãi
                </li>
                </Link>
                <Link to={'/usersetting'}>

                <li className="userProfile-sidebar__menu-item">
                    <FontAwesomeIcon icon={faCog} />
                    Cài đặt
                </li>
                </Link>
                <li className="userProfile-sidebar__menu-item">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    Đăng xuất
                </li>
            </ul>
        </div>
    );
};

export default LeftBar;