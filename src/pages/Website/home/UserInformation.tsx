import React from 'react'
import { FaCogs, FaGift, FaSave, FaSignOutAlt, FaTasks, FaTimes, FaUserCircle } from 'react-icons/fa'
import "../../../styles/Website/UserInformation.css"
type Props = {}

const UserInformation = (props: Props) => {
  return (
    <div className="userInformation-container">
    <div className="userInformation-sidebar">
      <div className="userInformation-sidebar__profile">
        <div className="userInformation-sidebar__avatar">
          <FaUserCircle size={70} />
        </div>
        <div className="userInformation-sidebar__name">
          <p> Admin hieu</p>
          <span>admin</span>
        </div>
      </div>
      <ul className="userInformation-sidebar__menu">
        <li className="userInformation-sidebar__menu-item">
          <FaTasks className="userInformation-sidebar__menu-icon" />
          Về của tôi
        </li>
        <li className="userInformation-sidebar__menu-item">
          <FaGift className="userInformation-sidebar__menu-icon" />
          Ưu đãi
        </li>
        <li className="userInformation-sidebar__menu-item">
          <FaCogs className="userInformation-sidebar__menu-icon" />
          Cài đặt
        </li>
        <li className="userInformation-sidebar__menu-item">
          <FaSignOutAlt className="userInformation-sidebar__menu-icon" />
          Đăng xuất
        </li>
      </ul>
    </div>
  
    {/* Main Content */}
    <div className="userInformation-main">
      <div className="userInformation-form__title">
       Thông tin của tôi
      </div>
      <form className="userInformation-form">
        <div className="userInformation-form__input-group">
          <input
            type="text"
            className="userInformation-form__input"
            placeholder="Họ tên"
          />
        </div>
        <div className="userInformation-form__input-group">
          <input
            type="text"
            className="userInformation-form__input"
            placeholder="Số điện thoại"
          />
        </div>
        <div className="userInformation-form__input-group">
          <input
            type="email"
            className="userInformation-form__input"
            placeholder="Email"
          />
        </div>
        <div className="userInformation-form__input-group">
          <input
            type="password"
            className="userInformation-form__input"
            placeholder="Địa chỉ"
          />
        </div>
        <div className="userInformation-form__button-group">
          <button
            className="userInformation-form__cancel-button"
            style={{ background: "#d6d6d6", color: "white" }}
          >
            <FaTimes /> Hủy
          </button>
          <button className="userInformation-form__submit-button">
            <FaSave /> Sửa thông tin
          </button>
        </div>
      </form>
    </div>
  </div>
  
  )
}

export default UserInformation