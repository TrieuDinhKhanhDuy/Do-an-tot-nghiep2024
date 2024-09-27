import {
    faBus,
    faCalendarAlt,
    faCreditCard,
    faMapMarkerAlt,
    faSearch,
    faTicketAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../styles/Website/BokingForm.css";
import fblogo from "../../../assets/image/facebooklogo.jpg";
import zllogo from "../../../assets/image/zalologo.png"
import momoLogo from "../../../assets/image/momologo.jpg"
import vnpaylogo from "../../../assets/image/vnpaylogo.png"
import smslogo from "../../../assets/image/smslogo.png"


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

            </div>

            <div className="booking-section">
                <div className="booking-steps">
                    <h2 className="booking-title title-center">Quy Trình Đặt Vé Online Đơn Giản</h2>
                    <ul className="steps-list">
                        <li className="step-item"> <div className="bookingForm-icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>1. Chọn thông tin hành trình và ấn Tìm chuyến.</li>
                        <li className="step-item"><div className="bookingForm-icon"><FontAwesomeIcon icon={faBus} /></div>2. Chọn chuyến, chỗ ngồi phù hợp và điền thông tin.</li>
                        <li className="step-item"><div className="bookingForm-icon"><FontAwesomeIcon icon={faCreditCard} /></div>3. Tiến hành thanh toán online.</li>
                        <li className="step-item"><div className="bookingForm-icon"><FontAwesomeIcon icon={faTicketAlt} /></div>4. Nhận mã và lên xe.</li>
                    </ul>
                    <h3 className="payment-title title-center">Hỗ Trợ Thanh Toán Online</h3>
                    <div className="info-box">
                        <p style={{ fontSize: '16px', textAlign: "center" }}>Tất cả thông tin của bạn sẽ được mã hoá, bảo mật và bảo vệ</p>
                    </div>
                    <div className="payment-step-options">
                        <div className="payment-methods">
                            <img src={momoLogo} alt="Momo" className="payment-icon" />
                            <img src={vnpaylogo} alt="VNPAY" className="payment-icon" />
                        </div>
                        <p className="payment-description">
                            <h2>Thanh toán bằng QR Code</h2>
                            Quý khách có thể thanh toán qua Momo và VNPAY
                        </p>
                    </div>
                </div>
                <div className="hr_center"></div>
                <div className="ticket-section">
                    <h2 className="ticket-title title-center">Các Hình Thức Mua Vé</h2>
                    <ol className="purchase-options">
                        <li className="purchase-item">
                            1. Trực tiếp lên website, nhanh nhất - tiện nhất. <br />
                            <a href="https://hongnhung.vn" className="website-link">hongnhung.vn</a>
                        </li>
                        <li className="purchase-item">
                            2. Qua chat với các ứng dụng:
                            <div className="social-icons">
                                <img src={fblogo} alt="Facebook" className="social-icon" />
                                <img src={zllogo} alt="Zalo" className="social-icon" />
                                <img src={smslogo} alt="sms" className="social-icon" />
                            </div>
                        </li>
                        <li className="purchase-item"> 3. Gọi điện đến hotline:   <span className="hotline-number">034567678</span></li>
                        <li className="purchase-item">
                            4. Mua trực tiếp tại quầy giao dịch:
                            <div className="booking-step-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093705!2d144.95373531531592!3d-37.81627937975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e9fdf4a64dbb!2sFederation+Square!5e0!3m2!1sen!2sau!4v1548059447096"
                                    width="100%"
                                    height="100%"
                                    style={{ border: '0' }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>

        </div>
    );
};

export default BookingForm;
