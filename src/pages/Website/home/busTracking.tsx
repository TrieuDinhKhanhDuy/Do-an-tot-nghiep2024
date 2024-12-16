import Breadcrumb from "@/components/Breadcrumb";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faIdCard,
    faPhone,
    faEnvelope,
    faBus,
    faClock,
    faChair,
    faTicketAlt,
    faClipboardCheck,
    faMapMarkerAlt,
    faCalendarAlt,
    faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import "../../../styles/Website/busTracking.css";
import { useState } from "react";
import Swal from "sweetalert2";

interface TicketData {
    ticket_code: string;
    name: string;
    email: string;
    phone: string;
    route_name: string;
    start_point: string;
    end_point: string;
    seat: string;
    date_start: string;
    time_start: string;
    status: string;
    total_price: string;
}

interface BusTrackingReponse {
    data: TicketData;
}

const BusTracking = () => {
    const duongDan = [
        { nhan: "Trang Chủ", duongDan: "/" },
        { nhan: "Tra Cứu", duongDan: "bustracking" },
    ];

    const { register, handleSubmit, reset } = useForm<{ ticket_code: string }>();
    const [ticketInfo, setTicketInfo] = useState<TicketData | null>(null);
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (data: { ticket_code: string }) => {
        try {
            const response = await axios.post<BusTrackingReponse>(
                "http://doantotnghiep.test/api/check",
                {
                    ticket_code: data.ticket_code,
                }
            );
            if (response.data && response.data.data) {
                setTicketInfo(response.data.data);
                setError(null);
                reset();
            } else {
                throw new Error("Invalid data structure");
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                Swal.fire({
                    title: "Cập nhật thất bại!",
                    text: error.response.data.message || "Vui lòng thử lại.",
                    icon: "error",
                    confirmButtonText: "OK",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                });
            } else {
                Swal.fire({
                    title: "Lỗi không xác định!",
                    text: "Đã xảy ra lỗi không mong muốn.",
                    icon: "error",
                    confirmButtonText: "OK",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                });
            }
            throw error;
        }
    };

    return (
        <>
            <Breadcrumb items={duongDan} />

            <div className="ticket-info-container">
                <div className="ticket-form-section">
                    <h2 className="ticket-form-title">Nhập thông tin vé xe</h2>
                    <form className="ticket-form" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            className="ticket-input"
                            placeholder="Mã vé"
                            {...register("ticket_code", { required: true })}
                        />
                        <button type="submit" className="ticket-submit-button">
                            Kiểm tra vé
                        </button>
                    </form>
                    <div className="ticket-notice">
                        <p className="ticket-notice-title">Lưu ý:</p>
                        <span className="ticket-notice-content">
                            Trường hợp bạn không thể thấy vé qua mạng hoặc muốn
                            đổi sang đơn hàng khác vui lòng liên hệ chúng tôi
                            qua số điện thoại 1900 7070
                        </span>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                </div>

                <div className="ticket-info-section">
                    <table className="ticket-info-table">


                        <>                            <thead>
                            <tr>
                                <th
                                    className="ticket-info-header"
                                    colSpan={2}
                                >
                                    Thông tin vé xe
                                </th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr>
                                    <td className="ticket-info-label">
                                        <FontAwesomeIcon icon={faTicketAlt} />{" "}
                                        Mã vé:
                                    </td>
                                    <td className="ticket-info-value">

                                        {ticketInfo && (<>{ticketInfo.ticket_code} </>)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="ticket-info-label">
                                        <FontAwesomeIcon icon={faIdCard} /> Tên
                                        khách hàng:
                                    </td>
                                    <td className="ticket-info-value">
                                        {ticketInfo && (<>{ticketInfo.name} </>)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="ticket-info-label">
                                        <FontAwesomeIcon icon={faEnvelope} />{" "}
                                        Email:
                                    </td>
                                    <td className="ticket-info-value">
                                        {ticketInfo && (<>{ticketInfo.email} </>)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="ticket-info-label">
                                        <FontAwesomeIcon icon={faPhone} /> Số
                                        điện thoại:
                                    </td>
                                    <td className="ticket-info-value">
                                        {ticketInfo && (<>{ticketInfo.phone} </>)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="ticket-info-label">
                                        <FontAwesomeIcon icon={faBus} /> Tuyến:
                                    </td>
                                    <td className="ticket-info-value">
                                        {ticketInfo && (<>{ticketInfo.route_name} </>)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="ticket-info-label">
                                        <FontAwesomeIcon
                                            icon={faMapMarkerAlt}
                                        />{" "}
                                        Điểm đi:
                                    </td>
                                    <td className="ticket-info-value">
                                        {ticketInfo && (<>{ticketInfo.start_point} </>)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="ticket-info-label">
                                        <FontAwesomeIcon
                                            icon={faMapMarkerAlt}
                                        />{" "}
                                        Điểm đến:
                                    </td>
                                    <td className="ticket-info-value">
                                        {ticketInfo && (<>{ticketInfo.end_point} </>)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="ticket-info-label">
                                        <FontAwesomeIcon icon={faChair} /> Vị
                                        trí ghế:
                                    </td>
                                    <td className="ticket-info-value">
                                        {ticketInfo && (<>{ticketInfo.seat} </>)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="ticket-info-label">
                                        <FontAwesomeIcon icon={faCalendarAlt} />{" "}
                                        Ngày khởi hành:
                                    </td>
                                    <td className="ticket-info-value">
                                        {ticketInfo && (<>{ticketInfo.date_start} </>)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="ticket-info-label">
                                        <FontAwesomeIcon icon={faClock} /> Giờ
                                        khởi hành:
                                    </td>
                                    <td className="ticket-info-value">
                                        {ticketInfo && (<>{ticketInfo.time_start} </>)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="ticket-info-label">
                                        <FontAwesomeIcon
                                            icon={faClipboardCheck}
                                        />{" "}
                                        Trạng thái:
                                    </td>
                                    <td className="ticket-info-value">
                                        {ticketInfo && (
                                            <>
                                                {ticketInfo.status === "unpaid" ? "Chưa thanh toán" : "Đã thanh toán"} </>)}

                                    </td>
                                </tr>
                                <tr>
                                    <td className="ticket-info-label">
                                        <FontAwesomeIcon icon={faDollarSign} />{" "}
                                        Tổng tiền:
                                    </td>
                                    <td className="ticket-info-value">
                                        {ticketInfo && (<>{parseFloat(
                                            ticketInfo.total_price
                                        ).toLocaleString("vi-VN", {
                                            style: "currency",
                                            currency: "VND",
                                        })}</>)}

                                    </td>
                                </tr>
                            </tbody></>

                    </table>
                </div>

            </div>
        </>
    );
};

export default BusTracking;
