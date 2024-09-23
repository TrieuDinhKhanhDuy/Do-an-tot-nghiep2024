import '../../../styles/Website/BokingForm.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const BookingForm = () => {
  return (
    <div className="bookingForm-container">
      <div className="bookingForm-search">
        <div className="bookingForm-input">
          <div className="bookingForm-input-top">
            <span><FaMapMarkerAlt /></span>
            <label>Điểm đi</label>
          </div>
          <select>
            <option>Chọn điểm lên</option>
          </select>
        </div>
        <div className="bookingForm-input">
          <div className="bookingForm-input-top">
            <span><FaMapMarkerAlt /></span>
            <label>Điểm đến</label>
          </div>
          <select>
            <option>Chọn điểm đến</option>
          </select>
        </div>
        <div className="bookingForm-input">
          <div className="bookingForm-input-top">
            <span><AiOutlineCalendar /></span>
            <label >Ngày khởi hành</label>
          </div>
          <input type="date" defaultValue="2024-08-27" />
        </div>
        <div className="bookingForm-button">
          <CiSearch size={28} />
          <a href={"/list"}><button>Tìm chuyến</button>  </a>

        </div>
      </div>

      <div className="bookingForm-process">
        <h2>Quy Trình Đặt Xe Trên Website</h2>
        <div className="bookingForm-steps">
          <div className="bookingForm-step">
            <div className="bookingForm-icon">📍</div>
            <p>Chọn thông tin hành </p>
          </div>
          <div className="bookingForm-arrow"><FaCircleArrowRight /></div>
          <div className="bookingForm-step">
            <div className="bookingForm-icon">🚌</div>
            <p>Chọn chuyến,chỗ </p>
          </div>
          <div className="bookingForm-arrow"><FaCircleArrowRight /></div>
          <div className="bookingForm-step">
            <div className="bookingForm-icon">💳</div>
            <p>Thanh toán online</p>
          </div>
          <div className="bookingForm-arrow"><FaCircleArrowRight /></div>
          <div className="bookingForm-step">
            <div className="bookingForm-icon">🎫</div>
            <p>Nhận mã vé xe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
