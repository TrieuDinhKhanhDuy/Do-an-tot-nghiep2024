import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faPhone,
    faEnvelope,
    faCar,
    faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";
import "../../../styles/Website/bill.css";

const Bill = () => {
    const nav = useNavigate();
    

    const location = useLocation();
    const params = new URLSearchParams(location.search);

    // Lấy các giá trị từ URL
    const tripId = params.get('trip_id');
    const busId = params.get('bus_id');
    const routeId = params.get('route_id');
    const timeStart = params.get('time_start');
    const total_price = params.get('total_price');
    const date = params.get('date');
    const nameSeat = params.get('name_seat');
    const locationStart = params.get('location_start');
    const idStartStop = params.get('id_start_stop');
    const locationEnd = params.get('location_end');
    const idEndStop = params.get('id_end_stop');
    const name = params.get('name');
    const phone = params.get('phone');
    const email = params.get('email');
    const note = params.get('note');
    const fare = params.get('fare');


    return (
        <>
            <div className="invoice-container">
                <div className="schedule-header">
                    <div className="header-item step2">Chọn chỗ</div>
                    <div className="header-item step2">Thanh Toán</div>
                    <div className="header-item">Hoàn Thành</div>
                </div>
                <div className="invoice-container-item">
                    <div className="header_bill">
                        <h2>
                            <FontAwesomeIcon icon={faFileInvoice} style={{ color: '#405187' }} /> Hóa đơn
                            điện tử
                        </h2>
                        <p className="ticket-code">Mã vé: 012913914</p>
                    </div>

                    <hr className="section-divider" />

                    <table className="info-table">
                        <tbody>
                            <tr>
                                <td className="left-section-bill">
                                    <strong>Thông tin hành khách</strong>
                                    <p>
                                        <FontAwesomeIcon icon={faUser} /> Họ và
                                        tên: {name}
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faPhone} /> Số
                                        điện thoại: {phone}
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faEnvelope} />{" "}
                                        Email: {email}
                                    </p>
                                </td>
                                <td className="right-section-bill vehicle-info">
                                    <div className="vehicle-info-content">
                                        <div>
                                            <strong>Thông tin xe</strong>
                                            <p>
                                                <FontAwesomeIcon
                                                    icon={faUser}
                                                />{" "}
                                                Tên tài xế: -
                                            </p>
                                            <p>
                                                <FontAwesomeIcon
                                                    icon={faPhone}
                                                />{" "}
                                                Số điện thoại: -
                                            </p>
                                            <p>
                                                <FontAwesomeIcon icon={faCar} />{" "}
                                                Biển số xe: -
                                            </p>
                                        </div>

                                        <div className="driver-image">
                                            <div className="driver-image">
                                                {" "}
                                                <img
                                                    src="https://static.vecteezy.com/system/resources/previews/018/865/413/non_2x/car-driver-simple-flat-icon-illustration-free-vector.jpg"
                                                    alt="Driver"
                                                />{" "}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={2}>
                                    <hr className="section-divider" />
                                </td>
                            </tr>

                            <tr>
                                <td className="left-section-bill">
                                    <strong>Thông tin chính</strong>
                                    <p>Tuyến: Mỹ Đình - Tuyên Quang</p>
                                    <p>Ngày: {date}</p>
                                    <p>Điểm đi: {idStartStop}({locationStart})</p>
                                    <p>Điểm đến: {idEndStop}({locationEnd})</p>
                                    <p>Vị trí ngồi: {nameSeat}</p>
                                </td>
                                <td className="right-section-bill">
                                    <strong>Thông tin thêm</strong>
                                    <p>Mã khuyến mãi: LAIXEANTOAN</p>
                                    <p>Ghi chú: {note}</p>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={2}>
                                    <hr className="section-divider" />
                                </td>
                            </tr>

                            <tr>
                                <td className="pricing-left">
                                    <p>Giá vé:</p>
                                    <p>Mã giảm giá:</p>
                                    <p>
                                        <strong>Tổng tiền:</strong>
                                    </p>
                                    <p>Tình trạng:</p>
                                </td>
                                <td className="pricing-right">
                                    <p>{fare}</p>
                                    <p>{total_price}</p>
                                    <p>
                                        <strong>{total_price}</strong>
                                    </p>
                                    <p className="status-pay">Đã thanh toán</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Bill;
