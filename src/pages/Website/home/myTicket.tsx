import { Link, useNavigate } from "react-router-dom";
import "../../../styles/Website/myTicket.css";
import Breadcrumb from "@/components/Breadcrumb";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import axios from "axios";
import LeftBar from "@/components/leftBar_user";
import { LinearProgress } from "@mui/material";
import numeral from "numeral";
import moment from "moment"; // Import moment.js for date/time formatting
import { BillDetailResponse, BillResponse, OrderData } from "@/types/IBill";

interface BusOption {
    ticket_booking_id: string;
    cancelbtn: string;
    date_start: string; // Ngày bắt đầu, định dạng ISO như "YYYY-MM-DD"
    driver_phone: string; // Số điện thoại tài xế
    image: string; // URL hoặc đường dẫn hình ảnh
    order_code: string; // Mã đặt vé
    route_name: string; // Tên tuyến đường
    status: "paid" | "unpaid" | "refund" | "overdue"; // Trạng thái, có thể giới hạn giá trị
    time_start: string; // Thời gian bắt đầu, định dạng "HH:mm:ss"
    total_price: string; // Tổng giá, dạng chuỗi số
    total_tickets: number;
}

const MyTicket = () => {
    const nav = useNavigate();
    const [ticket, setTicket] = useState<BusOption[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedStatus, setSelectedStatus] = useState<string>("all"); // Thêm state quản lý trạng thái

    const getUserId = (): number | null => {
        const userString = localStorage.getItem("userId");
        if (userString) {
            try {
                const user = JSON.parse(userString);
                return user.id;
            } catch (error) {
                console.error("Không tìm thấy userId trên localStorage:", error);
            }
        }
        return null;
    };

    const userId = getUserId();
    useEffect(() => {
        const fetchMyTicket = async () => {
            try {
                const response = await axios.get(
                    `http://doantotnghiep.test/api/my_ticket/${userId}`
                );
                const sortedTickets = response.data.orders.sort((a: BusOption, b: BusOption) => {
                    const dateA = new Date(a.date_start);
                    const dateB = new Date(b.date_start);
                    return dateB.getTime() - dateA.getTime();
                });
                setTicket(sortedTickets);
                setLoading(false);
            } catch (error: any) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.status === 429) {
                        console.error("Too Many Requests - Please try again later");
                    } else {
                        console.error("Lỗi khi lấy dữ liệu ghế:", error.message);
                    }
                } else {
                    console.error("Unexpected error:", error);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchMyTicket();
    }, []);

    const duongDan = [
        { nhan: "Trang Chủ", duongDan: "/" },
        { nhan: "Vé Của Tôi", duongDan: "myticket" },
    ];

    const handleChangeTicket = async (order_id: string) => {
        nav(`/changeticket?id_change=${order_id}`);
    };

    const isBeforeStartDate = (date_start: string): boolean => {
        const today = new Date();
        const startDate = new Date(date_start);
        return startDate > today;
    };

    const formatPrice = (price: string): string => {
        return numeral(price).format('0,0') + ' VND';
    };

    const formatDate = (date: string): string => {
        return moment(date).format("DD/MM/YYYY");
    };

    const formatTime = (time: string): string => {
        return moment(time, "HH:mm:ss").format("hh:mm A");
    };

    const filteredTickets = ticket.filter((ticketItem) => {
        if (selectedStatus === "all") return true;
        if (selectedStatus === "overdue") {
            const today = new Date();
            return new Date(ticketItem.date_start) < today;
        }
        return ticketItem.status === selectedStatus;
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            {loading ? <LinearProgress /> : null}

            <Breadcrumb items={duongDan} />



            <div className="tickets-container">
                <div className="bus-comp-container">
                    <LeftBar />

                    <div className="bus-comp-list">
                        <div className="schedule-header">
                            <div
                                className={`header-item ${selectedStatus === "all" ? "active" : "step2"}`}
                                onClick={() => setSelectedStatus("all")}
                            >
                                Vé Đã Đặt
                            </div>
                            <div
                                className={`header-item  ${selectedStatus === "paid" ? "active" : "step2"}`}
                                onClick={() => setSelectedStatus("paid")}
                            >
                                Đã Thanh Toán
                            </div>
                            <div
                                className={`header-item  ${selectedStatus === "unpaid" ? "active" : "step2"}`}
                                onClick={() => setSelectedStatus("unpaid")}
                            >
                                Chưa Thanh Toán
                            </div>
                            <div
                                className={`header-item  ${selectedStatus === "refund" ? "active" : "step2"}`}
                                onClick={() => setSelectedStatus("refund")}
                            >
                                Đã Hủy
                            </div>
                            <div
                                className={`header-item ${selectedStatus === "overdue" ? "active" : "step2"}`}
                                onClick={() => setSelectedStatus("overdue")}
                            >
                                Vé Hết Hạn
                            </div>
                        </div>
                        {filteredTickets.map((ticketItem) => (
                            <div key={ticketItem.order_code} className="bus-comp-option">
                                <div className="bus-comp-image-container">
                                    <img
                                        src={
                                            'https://tophomestay.vn/upload/img/9fba44d71932a89fa06a21703c0bfbed/2020/08/28/xe_giuong_nam_1598597002820.jpg'
                                        }
                                        alt={ticketItem.route_name}
                                        className="bus-comp-image"
                                    />
                                </div>
                                <div className="bus-comp-info">
                                    <div className="bus-comp-info-header">
                                        <h3>{ticketItem.route_name}</h3>
                                        {isBeforeStartDate(ticketItem.date_start) && (
                                            <p className="bus-comp-cancelBtn" onClick={openModal}>Hủy</p>
                                        )}
                                    </div>
                                    <div className="bus-comp-info-header">
                                        <p>🕒 {formatTime(ticketItem.time_start)} - {formatDate(ticketItem.date_start)}</p>
                                        <h3>{ticketItem.driver_phone}</h3>
                                    </div>
                                    <div className="bus-comp-info-header">
                                        <p>{formatPrice(ticketItem.total_price)}</p>
                                        {ticketItem.status}
                                    </div>
                                    <div className="bus-comp-info-header">
                                        <p>Số Vé: {ticketItem.total_tickets}</p>
                                        <div className="bus-comp-action">
                                            {isBeforeStartDate(ticketItem.date_start) && (
                                                <button onClick={() => handleChangeTicket(ticketItem.ticket_booking_id)}>Đổi chuyến</button>
                                            )}
                                            <Link to={'/billdetail?order_code=' + ticketItem.order_code}>
                                                <button>Chi Tiết</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div id="cancelModal" className={`modal ${isModalOpen ? "show" : ""}`}>
                <div className="modal-content">
                    <div className="header_modal">
                        <div className="modal-tilte">Đơn xác nhận hủy</div>
                        <button className="close-btn-modal" onClick={() => closeModal()}>✖</button>
                    </div>
                    <form id="cancelTicketForm" className="space-y-6 form-cancel">
                        <div className="form-group formgroup_modal">
                            <input
                                id="fullName"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                type="text"
                                placeholder="Nhập họ và tên"
                                style={{ lineHeight: '3rem' }}
                            />
                            <p id="fullNameError" className="mt-1 text-sm text-red-500 hidden text-left">Vui lòng nhập họ và tên!</p>
                        </div>
                        <div className="form-group">
                            <input
                                id="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                type="email"
                                placeholder="Nhập email"
                                style={{ lineHeight: '3rem' }}
                            />
                            <p id="emailError" className="mt-1 text-sm text-red-500 hidden text-left">Email không hợp lệ!</p>
                        </div>
                        <div className="form-group">
                            <input
                                id="bankNumber"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                type="text"
                                placeholder="Số tài khoản"
                                style={{ lineHeight: '3rem' }}
                            />
                            <p id="bankNumberError" className="mt-1 text-sm text-red-500 hidden text-left">Chưa nhập số tài khoản</p>
                        </div>
                        <div className="form-group">
                            <input
                                id="bank"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                type="text"
                                placeholder="Nhập tên ngân hàng"
                                style={{ lineHeight: '3rem' }}
                            />
                            <p id="bankError" className="mt-1 text-sm text-red-500 hidden text-left">Ngân hàng không hợp lệ</p>
                        </div>
                        <div className="form-group">
                            <textarea
                                id="bank"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                placeholder="Nhập Lý do"
                                style={{ lineHeight: '3rem' }}
                            />
                            <p id="bankError" className="mt-1 text-sm text-red-500 hidden text-left">Ngân hàng không hợp lệ</p>
                        </div>
                        <div className="form-action">
                            <button type="submit" className="cancel-btn">Xác nhận hủy</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default MyTicket;

