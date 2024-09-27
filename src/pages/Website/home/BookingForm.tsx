import {
    faBus,
    faCalendarAlt,
    faCircleArrowRight,
    faCreditCard,
    faMapMarkerAlt,
    faSearch,
    faTicketAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../styles/Website/BokingForm.css";

const BookingForm = () => {
    return (
        <div className="bookingForm-container">
            <div className="bookingForm-search">
                <div className="bookingForm-input">
                    <div className="bookingForm-input-top">
                        <span>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </span>
                        <label>Điểm đi</label>
                    </div>
                    <select>
                        <option>Chọn điểm lên</option>
                    </select>
                </div>
                <div className="bookingForm-input">
                    <div className="bookingForm-input-top">
                        <span>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </span>
                        <label>Điểm đến</label>
                    </div>
                    <select>
                        <option>Chọn điểm đến</option>
                    </select>
                </div>
                <div className="bookingForm-input">
                    <div className="bookingForm-input-top">
                        <span>
                            <FontAwesomeIcon icon={faCalendarAlt} />
                        </span>
                        <label>Ngày khởi hành</label>
                    </div>
                    <input type="date" defaultValue="2024-08-27" />
                </div>
                <div className="bookingForm-button">
                    <FontAwesomeIcon icon={faSearch} size="lg" />
                    <a href={"/list"}>
                        <button>Tìm chuyến</button>
                    </a>
                </div>
            </div>

            <div className="bookingForm-process">
                <h2>Quy Trình Đặt Xe Trên Website</h2>
                <div className="bookingForm-steps">
                    <div className="bookingForm-step">
                        <div className="bookingForm-icon">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </div>
                        <p>Chọn thông tin hành</p>
                    </div>
                    <div className="bookingForm-arrow">
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                    </div>
                    <div className="bookingForm-step">
                        <div className="bookingForm-icon">
                            <FontAwesomeIcon icon={faBus} />
                        </div>
                        <p>Chọn chuyến, chỗ</p>
                    </div>
                    <div className="bookingForm-arrow">
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                    </div>
                    <div className="bookingForm-step">
                        <div className="bookingForm-icon">
                            <FontAwesomeIcon icon={faCreditCard} />
                        </div>
                        <p>Thanh toán online</p>
                    </div>
                    <div className="bookingForm-arrow">
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                    </div>
                    <div className="bookingForm-step">
                        <div className="bookingForm-icon">
                            <FontAwesomeIcon icon={faTicketAlt} />
                        </div>
                        <p>Nhận mã vé xe</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
