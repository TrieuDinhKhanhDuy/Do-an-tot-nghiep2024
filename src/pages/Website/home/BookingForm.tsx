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
import zllogo from "../../../assets/image/zalologo.png";
import momoLogo from "../../../assets/image/momologo.jpg";
import vnpaylogo from "../../../assets/image/vnpaylogo.png";
import smslogo from "../../../assets/image/smslogo.png";
import { useEffect, useState } from "react";
import { Select } from "antd";
import axios from "axios";

const BookingForm = () => {
    const [minDate, setMinDate] = useState<string>("");
    const [formData, setFormData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    "http://doantotnghiep_backend.test/api/home",
                );
                setFormData(res.data); 
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    console.log(formData);

    useEffect(() => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate());
        const isoDate = tomorrow.toISOString().split("T")[0];
        setMinDate(isoDate);
    }, []);

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
                    <Select
                        showSearch
                        className="custom-select"
                        placeholder="Chọn điểm lên"
                        optionFilterProp="label"
                        options={formData.map((location) => ({
                            value: location.id,
                            label: (
                                <span style={{ fontWeight: location.parent_id === null ? "bold" : "normal"  ,fontSize: location.parent_id === null ? "16px" : "14px" }}>
                                    {location.stop_name}
                                </span>
                            ),
                        }))}
                    />
                </div>
                <div className="bookingForm-input">
                    <div className="bookingForm-input-top">
                        <span>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </span>
                        <label>Điểm đến</label>
                    </div>
                    <Select
                showSearch
                className="custom-select"
                placeholder="Chọn điểm lên"
                optionFilterProp="label"
                options={formData.map((location) => ({
                    value: location.id,
                    label: (
                        <span style={{ fontWeight: location.parent_id === null ? "bold" : "normal"  ,fontSize: location.parent_id === null ? "16px" : "14px" }}>
                            {location.stop_name}
                        </span>
                    ),
                }))}
            />
                </div>
                <div className="bookingForm-input">
                    <div className="bookingForm-input-top">
                        <span>
                            <FontAwesomeIcon icon={faCalendarAlt} />
                        </span>
                        <label>Ngày khởi hành</label>
                    </div>
                    <input type="date" id="date" name="date" min={minDate} />
                </div>
                <div className="bookingForm-button">
                    <FontAwesomeIcon icon={faSearch} size="lg" />
                    <a href={"/list"}>
                        <button>Tìm chuyến</button>
                    </a>
                </div>
            </div>

            <div className="bookingForm-process"></div>

            <div className="booking-section">
                <div className="booking-steps">
                    <h2 className="booking-title title-center">
                        Quy Trình Đặt Vé Online Đơn Giản
                    </h2>
                    <ul className="steps-list">
                        <li className="step-item">
                            <div className="bookingForm-icon">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            1. Chọn thông tin hành trình và ấn Tìm chuyến.
                        </li>
                        <li className="step-item">
                            <div className="bookingForm-icon">
                                <FontAwesomeIcon icon={faBus} />
                            </div>
                            2. Chọn chuyến, chỗ ngồi phù hợp và điền thông tin.
                        </li>
                        <li className="step-item">
                            <div className="bookingForm-icon">
                                <FontAwesomeIcon icon={faCreditCard} />
                            </div>
                            3. Tiến hành thanh toán online.
                        </li>
                        <li className="step-item">
                            <div className="bookingForm-icon">
                                <FontAwesomeIcon icon={faTicketAlt} />
                            </div>
                            4. Nhận mã và lên xe.
                        </li>
                    </ul>
                    <h3 className="payment-title title-center">
                        Hỗ Trợ Thanh Toán Online
                    </h3>
                    <div className="info-box">
                        <p style={{ fontSize: "16px", textAlign: "center" }}>
                            Tất cả thông tin của bạn sẽ được mã hoá, bảo mật và
                            bảo vệ
                        </p>
                    </div>
                    <div className="payment-step-options">
                        <div className="payment-methods">
                            <img
                                src={momoLogo}
                                alt="Momo"
                                className="payment-icon"
                            />
                            <img
                                src={vnpaylogo}
                                alt="VNPAY"
                                className="payment-icon"
                            />
                        </div>
                        <p className="payment-description">
                            <h2>Thanh toán bằng QR Code</h2>
                            Quý khách có thể thanh toán qua Momo và VNPAY
                        </p>
                    </div>
                </div>
                <div className="hr_center"></div>
                <div className="ticket-section">
                    <h2 className="ticket-title title-center">
                        Các Hình Thức Mua Vé
                    </h2>
                    <ol className="purchase-options">
                        <li className="purchase-item">
                            1. Trực tiếp lên website, nhanh nhất - tiện nhất.{" "}
                            <br />
                            <a
                                href="https://hongnhung.vn"
                                className="website-link"
                            >
                                hongnhung.vn
                            </a>
                        </li>
                        <li className="purchase-item">
                            2. Qua chat với các ứng dụng:
                            <div className="social-icons">
                                <img
                                    src={fblogo}
                                    alt="Facebook"
                                    className="social-icon"
                                />
                                <img
                                    src={zllogo}
                                    alt="Zalo"
                                    className="social-icon"
                                />
                                <img
                                    src={smslogo}
                                    alt="SMS"
                                    className="social-icon"
                                />
                            </div>
                        </li>
                        <li className="purchase-item">
                            3. Gọi điện đến hotline:{" "}
                            <span className="hotline-number">02345556555</span>
                        </li>
                        <li className="purchase-item">
                            4. Mua trực tiếp tại quầy giao dịch:
                            <div className="booking-step-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1063645750455!2d105.77569377572404!3d21.02842968062079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b2f431c099%3A0xe44043bacd461128!2zQuG6v24gWGUgTeG7uSDEkMOsbmg!5e0!3m2!1svi!2s!4v1728287236739!5m2!1svi!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: "0" }}
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
