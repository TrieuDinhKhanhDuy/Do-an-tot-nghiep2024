import { logout } from '@/service/authService';
import { UserType } from '@/types/IUser';
import { faCog, faGift, faSignOutAlt, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { FaUserCircle, FaTasks, FaGift, FaCogs, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const LeftBar = () => {

    const [userRespon, setUserRespon] = useState<UserType | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("userId");

        if (storedUser) {
            setUserRespon(JSON.parse(storedUser)); // Parse JSON để chuyển thành object
        }
    }, []);

    const handleLogout = async () => {
        try {
            await logout("all");
        } catch (error) {
            console.error("Đăng xuất thất bại:", error);
        }
    };

    return (
        <div className="userProfile-sidebar">



            {userRespon ? (
                <>
                    <div className="userProfile-sidebar__profile">


                        <div className="userProfile-sidebar__avatar">
                            <FaUserCircle size={70} />
                        </div>
                        <div className="userProfile-sidebar__name">
                            <p> {userRespon.name}</p>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="userProfile-sidebar__profile">


                        <div className="userProfile-sidebar__avatar">
                            <FaUserCircle size={70} />
                        </div>
                        <div className="userProfile-sidebar__name">
                            <p> Khách</p>
                        </div>
                    </div>
                </>
            )}
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
                <li className="userProfile-sidebar__menu-item" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    Đăng xuất
                </li>
            </ul>
        </div>
    );
};

export default LeftBar;
