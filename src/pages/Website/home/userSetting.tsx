import "../../../styles/Website/UserProfile.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import LeftBar from "@/components/leftBar_user";
import Breadcrumb from "@/components/Breadcrumb";


const UserSetting = () => {


  const duongDan = [
    { nhan: "Trang Chủ", duongDan: "/" },
    { nhan: "Cài Đặt", duongDan: "/usersetting" },
  ];



  return (
    <>
      <Breadcrumb items={duongDan} />
     <div className=" tickets-container">
      <div className="bus-comp-container">
        <LeftBar />
        <div className="bus-comp-list " >
          <div className="contactForm-group">
            <Link to={'changeinfo'}>
              <div className="userseting-option ">
                <span>Sửa thông tin</span>
                <div className="icon-setting"><FontAwesomeIcon icon={faAngleRight} /></div>
              </div>
            </Link>
            <Link to={'changepassword'}>
              <div className="userseting-option ">
                <span>Sửa mật khẩu</span>
                <div className="icon-setting"><FontAwesomeIcon icon={faAngleRight} /></div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default UserSetting;
