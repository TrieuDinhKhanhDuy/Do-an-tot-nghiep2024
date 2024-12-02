import React from 'react'
import "../../../styles/Website/changeInformation.css"
import { FaCogs, FaGift, FaSave, FaSignOutAlt, FaTasks, FaTimes, FaUserCircle,FaArrowRight  } from 'react-icons/fa'
import { IoMdArrowDropright } from "react-icons/io";
type Props = {}

const ChangeInformation = (props: Props) => {
  return (
    <div className="changeInformation-container">
  <div className="changeInformation-sidebar">
    <div className="changeInformation-sidebar__profile">
      <div className="changeInformation-sidebar__avatar">
        <FaUserCircle size={70} />
      </div>
      <div className="changeInformation-sidebar__name">
        <p> Admin hieu</p>
        <span>admin</span>
      </div>
    </div>
    <ul className="changeInformation-sidebar__menu">
      <li className="changeInformation-sidebar__menu-item">
        <FaTasks className="changeInformation-sidebar__menu-icon" />
        Về của tôi
      </li>
      <li className="changeInformation-sidebar__menu-item">
        <FaGift className="changeInformation-sidebar__menu-icon" />
        Ưu đãi
      </li>
      <li className="changeInformation-sidebar__menu-item">
        <FaCogs className="changeInformation-sidebar__menu-icon" />
        Cài đặt
      </li>
      <li className="changeInformation-sidebar__menu-item">
        <FaSignOutAlt className="changeInformation-sidebar__menu-icon" />
        Đăng xuất
      </li>
    </ul>
  </div>

  {/* Main Content */}
  <div className="changeInformation-main">
  <div className="changeInformation-buttons">
    <button className="changeInformation-button-infor">
      Thông tin của tôi
      <IoMdArrowDropright className="changeInformation-button-icon" />
    </button>
    <button className="changeInformation-buttonchangeInformation-button-passowrd">
      Đổi mật khẩu
      <IoMdArrowDropright className="changeInformation-button-icon" />
    </button>
  </div>
</div>

</div>

  )
}

export default ChangeInformation