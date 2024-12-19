import { Link, useNavigate } from "react-router-dom";
import "../../../styles/Website/myTicket.css";
import Breadcrumb from "@/components/Breadcrumb";
import { useEffect, useState } from "react";
import axios from "axios";
import LeftBar from "@/components/leftBar_user";
import { LinearProgress } from "@mui/material";
import numeral from "numeral";
import moment from "moment";
import { useForm } from "react-hook-form";
import { cancelTicketType } from "@/types/IUser";
import Swal from "sweetalert2";

type BusOption = {
    ticket_booking_id: string;
    cancelbtn: string;
    date_start: string;
    driver_phone: string;
    image: string;
    order_code: string;
    route_name: string;
    status: "paid" | "unpaid" | "refunded" | "overdue" | "failed" | "requested";
    time_start: string;
    total_price: string;
    total_tickets: number;
    pay_url: string
}

const MyTicket = () => {
    const nav = useNavigate();
    const [ticket, setTicket] = useState<BusOption[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedStatus, setSelectedStatus] = useState<string>("all");


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
        let intervalId: NodeJS.Timeout;

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
        intervalId = setInterval(fetchMyTicket, 2000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const duongDan = [
        { nhan: "Trang Chủ", duongDan: "/" },
        { nhan: "Vé Của Tôi", duongDan: "myticket" },
    ];

    const handleChangeTicket = async (ticketItem: BusOption) => {
        nav(`/changeticket?id_change=${ticketItem.ticket_booking_id}`);
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
        // if (selectedStatus === "overdue") {
        //     const today = new Date();
        //     return new Date(ticketItem.date_start) < today;
        // }
        return ticketItem.status === selectedStatus;
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (ticketItem: BusOption) => {
        setIsModalOpen(true);
        setValue('ticket_booking_id', ticketItem.ticket_booking_id);
        setValue('order_code', ticketItem.order_code)

    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<cancelTicketType>();

    const onSubmit = async (data: cancelTicketType) => {

        try {
            await axios.post('http://doantotnghiep.test/api/home', data);
            setIsModalOpen(false);
            Swal.fire({
                title: "Gửi yêu cầu hủy vé thành công",
                text: "Vé của bạn sẽ được hủy sau vài giờ!",
                icon: "success",
                showConfirmButton: false,
                showCancelButton: false,
                timer: 1000,
            })
        } catch (error) {
            Swal.fire({
                title: "Gửi yêu cầu hủy vé thất bại",
                text: "Có vé bạn đã gửi yêu cầu ở vé này trước đó",
                icon: "error",
                showConfirmButton: false,
                showCancelButton: false,
                timer: 1000,
            })
        } finally {
            reset();
        }
    };
    const handlePayment = (pay_url: string) => {
        window.location.href = pay_url;
    }
    return (
        <>
            {loading ? <LinearProgress /> : null}
            <Breadcrumb items={duongDan} />
            <div className="tickets-container">
                <div className="bus-comp-container">
                    <LeftBar />

                    <div className="bus-comp-list">
                        <div className="schedule-header ">
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
                                className={`header-item  ${selectedStatus === "refunded" ? "active" : "step2"}`}
                                onClick={() => setSelectedStatus("refunded")}
                            >
                                Đã Hủy
                            </div>
                            <div
                                className={`header-item ${selectedStatus === "overdue" ? "active" : "step2"}`}
                                onClick={() => setSelectedStatus("overdue")}
                            >
                                Vé Hết Hạn
                            </div>
                            <div
                                className={`header-item ${selectedStatus === "failed" ? "active" : "step2"}`}
                                onClick={() => setSelectedStatus("failed")}
                            >
                                Thất Bại
                            </div>
                        </div>
                        {filteredTickets.map((ticketItem) => (
                            <div key={ticketItem.order_code} className="bus-comp-option">
                                <div className="bus-comp-image-container">
                                    <img
                                        src={ticketItem.image}
                                        alt={ticketItem.route_name}
                                        className="bus-comp-image"
                                    />
                                </div>
                                <div className="bus-comp-info">
                                    <div className="bus-comp-info-header">
                                        <h3>{ticketItem.route_name}</h3>
                                        {isBeforeStartDate(ticketItem.date_start) && ticketItem.status !== 'refunded' && ticketItem.status == 'paid' && (
                                            <p className="bus-comp-cancelBtn" onClick={() => openModal(ticketItem)}>Hủy</p>
                                        )}

                                    </div>
                                    <div className="bus-comp-info-header">
                                        <p>🕒 {formatTime(ticketItem.time_start)} - {formatDate(ticketItem.date_start)}</p>
                                        <h3>{ticketItem.driver_phone}</h3>
                                    </div>
                                    <div className="bus-comp-info-header">
                                        <p>{formatPrice(ticketItem.total_price)}</p>
                                        {
                                            ticketItem.status === "paid" ? "Đã thanh toán" :
                                                ticketItem.status === "unpaid" ? "Chưa thanh toán" :
                                                    ticketItem.status === "refunded" ? "Đã hủy" :
                                                        ticketItem.status === "overdue" ? "Vé hết hạn" :
                                                            ticketItem.status === "failed" ? "Thất bại" : "Trạng thái không xác định"
                                        }
                                    </div>
                                    <div className="bus-comp-info-header">
                                        <p>Số Vé: {ticketItem.total_tickets}</p>
                                        <div className="bus-comp-action">
                                            {isBeforeStartDate(ticketItem.date_start) && ticketItem.status == 'paid' && (
                                                <button onClick={() => handleChangeTicket(ticketItem)}>Đổi chuyến</button>
                                            )}
                                            {isBeforeStartDate(ticketItem.date_start) && ticketItem.status == 'unpaid' && (
                                                <button onClick={() => handlePayment(ticketItem.pay_url)}>Thanh Toán</button>
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
                    <form id="cancelTicketForm" className="space-y-6 form-cancel" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group formgroup_modal">
                            <input
                                id="fullName"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                type="hidden"
                                placeholder="Nhập họ và tên"
                                style={{ lineHeight: '3rem' }}
                                {...register('ticket_booking_id')}
                            />
                            <input
                                id="fullName"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                type="hidden"
                                placeholder="Nhập họ và tên"
                                style={{ lineHeight: '3rem' }}
                                {...register('order_code')}
                            />
                            <input
                                id="fullName"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                type="text"
                                placeholder="Nhập họ và tên"
                                style={{ lineHeight: '3rem' }}
                                {...register('name')}
                            />
                            {errors.name && <div className="text-sm text-red-500">{errors.name.message}</div>}
                        </div>
                        <div className="form-group formgroup_modal">
                            <input
                                id="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                type="email"
                                placeholder="Nhập email"
                                style={{ lineHeight: '3rem' }}
                                {...register('email')}
                            />
                            {errors.email && <div className="text-sm text-red-500">{errors.email.message}</div>}
                        </div>
                        <div className="form-group formgroup_modal">
                            <input
                                id="phone"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                type="phone"
                                placeholder="Nhập số điện thoại"
                                style={{ lineHeight: '3rem' }}
                                {...register('phone')}
                            />
                            {errors.email && <div className="text-sm text-red-500">{errors.email.message}</div>}
                        </div>
                        <div className="form-group formgroup_modal">
                            <input
                                id="bankNumber"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                type="text"
                                placeholder="Số tài khoản"
                                style={{ lineHeight: '3rem' }}
                                {...register('account_number')}
                            />
                            {errors.account_number && <div className="text-sm text-red-500">{errors.account_number.message}</div>}
                        </div>
                        <div className="form-group formgroup_modal">
                            <input
                                id="bank"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                type="text"
                                placeholder="Nhập tên ngân hàng"
                                style={{ lineHeight: '3rem' }}
                                {...register('bank')}
                            />
                            {errors.bank && <div className="text-sm text-red-500">{errors.bank.message}</div>}
                        </div>
                        <div className="form-group formgroup_modal">
                            <textarea
                                id="bank"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                placeholder="Nhập Lý do"
                                style={{ lineHeight: '3rem' }}
                                {...register('reason')}
                            />
                            {errors.reason && <div className="text-sm text-red-500">{errors.reason.message}</div>}
                            {errors.ticket_booking_id && <div className="text-sm text-red-500">{errors.ticket_booking_id.message}</div>}
                            {errors.order_code && <div className="text-sm text-red-500">{errors.order_code.message}</div>}
                        </div>
                        <div className="changeTicket__info-note">
                            Khi nhấp vào "Gửi yêu cầu hủy chuyến", bạn đồng ý rằng bạn đã đọc và hiểu{" "}
                            <a href="#" className="changeTicket__info-link">Điều khoản sử dụng</a> và{" "}
                            <a href="#" className="changeTicket__info-link">Chính sách hoàn hủy</a>.
                        </div>
                        <div className="form-action">
                            <button type="submit" className="cancel-btn">Gửi yêu cầu hủy</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default MyTicket;