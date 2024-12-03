import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../../styles/Website/myTicket.css";
import Breadcrumb from "@/components/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTicket,
    faGift,
    faCog,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import axios from "axios";
import LeftBar from "@/components/leftBar_user";
interface BusOption {
    cancelbtn: string;
    date_start: string; // Ngày bắt đầu, định dạng ISO như "YYYY-MM-DD"
    driver_phone: string; // Số điện thoại tài xế
    image: string; // URL hoặc đường dẫn hình ảnh
    order_code: string; // Mã đặt vé
    route_name: string; // Tên tuyến đường
    status: "paid" | "unpaid" | "cancelled"; // Trạng thái, có thể giới hạn giá trị
    time_start: string; // Thời gian bắt đầu, định dạng "HH:mm:ss"
    total_price: string; // Tổng giá, dạng chuỗi số
    total_tickets:number;
}
const MyTicket = () => {


    const nav = useNavigate();

    const [ticket, setTicket] = useState<BusOption[]>([]);

    const getUserId = (): number | null => {
        const userString = localStorage.getItem("userId"); // Lấy chuỗi JSON từ localStorage
        if (userString) {
            try {
                const user = JSON.parse(userString); // Parse chuỗi JSON thành object
                return user.id; // Trả về id
            } catch (error) {
                console.error("Không tìm thấy userId trên localStorage:", error);
            }
        }
        return null; // Nếu không có user hoặc lỗi, trả về null
    };
    const userId = getUserId();

    console.log("id nguoi dung nha", userId);




    useEffect(() => {
        const fetchMyTicket = async () => {

            try {
                const response = await axios.get(
                    `http://doantotnghiep.test/api/my_ticket/${userId}`
                );
                setTicket(response.data.orders);
            } catch (error: any) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.status === 429) {
                        console.error(
                            "Too Many Requests - Please try again later"
                        );
                    } else {
                        console.error(
                            "Lỗi khi lấy dữ liệu ghế:",
                            error.message
                        );
                    }
                } else {
                    console.error("Unexpected error:", error);
                }
            }
        };

        fetchMyTicket();
    }, []);

    const duongDan = [
        { nhan: "Trang Chủ", duongDan: "/" },
        { nhan: "Vé Của Tôi", duongDan: "myticket" },
    ];
    const isUpdating = () => {
        Swal.fire({
            title: "Chức Đăng Đang Cập Nhật",
            icon: "warning",
            showConfirmButton: false
        })
    }
    return (
        <>
            <Breadcrumb items={duongDan} />

            <div className="tickets-container">
                <div className="bus-comp-container">
                    <LeftBar/>

                    <div className="bus-comp-list" >
                        <div className="schedule-header">
                            <div className="header-item">Vé Đã Đặt</div>
                            <div className="header-item step2">Vé Hết Hạn</div>
                            <div className="header-item step2">Vé Đã Hủy</div>
                        </div>
                        {ticket.map((ticketItem) => (
                            <Link to={'/billdetail?order_code='+ticketItem.order_code} >

                                <div key={ticketItem.order_code} className="bus-comp-option" >
                                    <div className="bus-comp-image-container">
                                        <img src={ticketItem.image} alt={ticketItem.route_name} className="bus-comp-image" />
                                    </div>
                                    <div className="bus-comp-info">
                                        <div className="bus-comp-info-header">
                                            <h3>{ticketItem.route_name}</h3>
                                            <p className="bus-comp-cancelBtn" onClick={isUpdating}>Hủy</p>
                                        </div>
                                        <div className="bus-comp-info-header">
                                            <p>🕒 {ticketItem.time_start} </p>
                                            <h3 >{ticketItem.driver_phone}</h3>
                                        </div>
                                        <div className="bus-comp-info-header">
                                            <p>{ticketItem.total_price}</p>
                                            {ticketItem.status && (
                                                <p className="bus-comp-support-online">Đã Thanh Toán</p>
                                            )}                                        </div>
                                        <div className="bus-comp-info-header">
                                            <p>Số Vé: {ticketItem.total_tickets} </p>
                                            <div className="bus-comp-action">
                                                <button>Chi Tiết</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Link>

                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyTicket;
