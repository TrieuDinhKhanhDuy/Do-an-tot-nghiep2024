import React from 'react';
import { FaUserCircle, FaTasks, FaGift, FaCogs, FaSignOutAlt, FaKey, FaPaperPlane, FaTimes, FaSave } from 'react-icons/fa';
import "../../../styles/Website/UserProfile.css";
const UserProfile = () => {
  return (
    <div className="userProfile-container">
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
          <li className="userProfile-sidebar__menu-item">
            <FaTasks className="userProfile-sidebar__menu-icon" />
            Về của tôi
          </li>
          <li className="userProfile-sidebar__menu-item">
            <FaGift className="userProfile-sidebar__menu-icon" />
            Ưu đãi
          </li>
          <li className="userProfile-sidebar__menu-item">
            <FaCogs className="userProfile-sidebar__menu-icon" />
            Cài đặt
          </li>
          <li className="userProfile-sidebar__menu-item">
            <FaSignOutAlt className="userProfile-sidebar__menu-icon" />
            Đăng xuất
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="userProfile-main">
        <div className="userProfile-form__title">
         Đổi mật khẩu
        </div>
        <form className="userProfile-form">
          <div className="userProfile-form__input-group">
           
            <input type="password" className="userProfile-form__input" placeholder="Mật khẩu mới" />
          </div>
          <div className="userProfile-form__input-group">
            
            <input type="password" className="userProfile-form__input" placeholder="Xác nhận mật khẩu" />
          </div>
          <div className="userProfile-form__input-group">
         
            <input type="email" className="userProfile-form__input" placeholder="Email" />
          </div>
          <div className="userProfile-form__input-group">
         
            <div className="userProfile-form__otp-group" style={{display:'flex',gap:'20px'}}>
              <input type="text" className="userProfile-form__input userProfile-form__otp-input" placeholder="OTP" />
              <div className="userProfile-form__otp-group-text">
              <span>Đã gửi OTP - 300 giây</span>
              <p style={{fontWeight:'bold'}}>Gửi OTP</p>
              </div>
           
            </div>
           
          </div>
          <div className="userProfile-form__button-group">
            <button className="userProfile-form__cancel-button" style={{background:'#d6d6d6' , color:'white'}}>
              <FaTimes /> Hủy
            </button>
            <button className="userProfile-form__submit-button">
              <FaSave /> Sửa thông tin
            </button>
         
         
          </div>
       
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
