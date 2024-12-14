import { Link, useNavigate } from "react-router-dom";
import "../../../styles/Website/myTicket.css";
import Breadcrumb from "@/components/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket, faGift, faCog } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import axios from "axios";

interface BusOption {
    cancelbtn: string;
    date_start: string;
    driver_phone: string;
    image: string;
    order_code: string;
    route_name: string;
    status: "paid" | "unpaid" | "cancelled";
    time_start: string;
    total_price: string;
    total_tickets: number;
}

const MyTicket = () => {
    const nav = useNavigate();
    const [ticket, setTicket] = useState<BusOption[]>([]);
    const [ticketId, setTicketId] = useState<string>("");

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
            }
        };

        fetchMyTicket();
    }, [userId]);

    const duongDan = [
        { nhan: "Trang Chủ", duongDan: "/" },
        { nhan: "Vé Của Tôi", duongDan: "myticket" },
    ];

    const isBeforeStartDate = (date_start: string): boolean => {
        const today = new Date();
        const startDate = new Date(date_start);
        console.log(startDate);
        
        return startDate > today;
    };

    const handleCancelTicket = (ticketId: string) => {
        setTicketId(ticketId); // Lưu ticketId để khi mở popup có thể lấy
        Swal.fire({
            title: "Hủy Vé",
            html: `
                <form id="cancelTicketForm" class="space-y-6"> 
    <div class="form-group">
        <input id="fullName" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" type="text" placeholder="Nhập họ và tên" style="line-height: 3rem;">
        <p id="fullNameError" class="mt-1 text-sm text-red-500 hidden text-left">Vui lòng nhập họ và tên!</p>
    </div>
    <div class="form-group">
        <input id="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" type="email" placeholder="Nhập email" style="line-height: 3rem;">
        <p id="emailError" class="mt-1 text-sm text-red-500 hidden text-left">Email không hợp lệ!</p>
    </div>
    <div class="form-group">
        <input id="phoneNumber" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" type="text" placeholder="Nhập số điện thoại" style="line-height: 3rem;">
        <p id="phoneNumberError" class="mt-1 text-sm text-red-500 hidden text-left">Số điện thoại không hợp lệ!</p>
    </div>
    <div class="form-group">
        <select id="reason" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" style="line-height: 3rem;">
            <option value="" disabled selected>Chọn lý do hủy vé</option>
            <option value="busy">Tôi bận không đi nữa</option>
            <option value="wrong-date">Tôi đặt nhầm ngày giờ</option>
            <option value="wrong-route">Tôi đặt nhầm tuyến đường</option>
            <option value="other">Lý do khác</option>
        </select>
        <p id="reasonError" class="mt-1 text-sm text-red-500 hidden text-left">Vui lòng chọn lý do hủy vé!</p>
    </div>
    <div class="form-group">
        <textarea id="otherReason" class="mt-1 block w-full h-32 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Nhập lý do khác (nếu có)" style="line-height: 3rem;"></textarea> 
    </div>
</form>

            `,
            showCancelButton: true,
            confirmButtonText: "Xác Nhận",
            cancelButtonText: "Hủy",
            preConfirm: () => {
                const fullName = (document.getElementById("fullName") as HTMLInputElement).value.trim();
                const email = (document.getElementById("email") as HTMLInputElement).value.trim();
                const phoneNumber = (document.getElementById("phoneNumber") as HTMLInputElement).value.trim();
                const reason = (document.getElementById("reason") as HTMLSelectElement).value;
                const otherReason = (document.getElementById("otherReason") as HTMLTextAreaElement).value.trim();
    
                let isValid = true;
    
                // Reset all error messages
                document.getElementById("fullNameError")?.classList.add("hidden");
                document.getElementById("emailError")?.classList.add("hidden");
                document.getElementById("phoneNumberError")?.classList.add("hidden");
                document.getElementById("reasonError")?.classList.add("hidden");
    
                // Validate form inputs
                if (!fullName) {
                    document.getElementById("fullNameError")?.classList.remove("hidden");
                    isValid = false;
                }
                if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    document.getElementById("emailError")?.classList.remove("hidden");
                    isValid = false;
                }
                if (!phoneNumber || !/^[0-9]{10,11}$/.test(phoneNumber)) {
                    document.getElementById("phoneNumberError")?.classList.remove("hidden");
                    isValid = false;
                }
                if (!reason) {
                    document.getElementById("reasonError")?.classList.remove("hidden");
                    isValid = false;
                }
    
                if (!isValid) return false;
    
                return { fullName, email, phoneNumber, reason, otherReason };
            },
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                const { fullName, email, phoneNumber, reason, otherReason } = result.value;
                console.log("Thông tin hủy vé:", { fullName, email, phoneNumber, reason, otherReason });
    
                Swal.fire("Thành Công!", "Yêu cầu hủy vé của bạn đã được gửi thành công.", "success");
            }
        });
    };
    
    
    
    
    return (
        <>
            <Breadcrumb items={duongDan} />
            <div className="tickets-container">
                <div className="bus-comp-container">
                    <div className="bus-comp-left-sidebar">
                        <div className="bus-comp-sort-options">
                            <div className="menu-options_fix">
                                <div className="menu-item_fix insite">
                                    <Link to={"/myticket"}>
                                        <FontAwesomeIcon icon={faTicket} /> Vé của tôi
                                    </Link>
                                </div>
                                <div className="menu-item_fix">
                                    <Link to={"/listvoucher"}>
                                        <FontAwesomeIcon icon={faGift} /> Voucher
                                    </Link>
                                </div>
                                <div className="menu-item_fix">
                                    <Link to={"/myinfo"}>
                                        <FontAwesomeIcon icon={faCog} /> Cài đặt
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bus-comp-list">
                        <div className="schedule-header">
                            <div className="header-item">Vé Đã Đặt</div>
                            <div className="header-item step2">Vé Hết Hạn</div>
                            <div className="header-item step2">Vé Đã Hủy</div>
                        </div>
                        {ticket.map((ticketItem) => (
                            <Link to={'/billdetail?order_code=' + ticketItem.order_code} key={ticketItem.order_code}>
                                <div className="bus-comp-option">
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
                                            {isBeforeStartDate(ticketItem.date_start) && (
                                                <p
                                                    className="bus-comp-cancelBtn"
                                                    style={{
                                                        padding: '5px 10px',
                                                        background: 'red',
                                                        borderRadius: '5px',
                                                        color: 'white',
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleCancelTicket(ticketItem.order_code);
                                                    }}
                                                >
                                                    Hủy vé
                                                </p>
                                            )}
                                        </div>
                                        <div className="bus-comp-info-header">
                                            <p>🕒 {ticketItem.time_start} </p>
                                            <h3>{ticketItem.driver_phone}</h3>
                                        </div>
                                        <div className="bus-comp-info-header">
                                            <p>{ticketItem.total_price}</p>
                                            {ticketItem.status && (
                                                <p className="bus-comp-support-online">Đã Thanh Toán</p>
                                            )}
                                        </div>
                                        <p>{ticketItem.date_start}</p>
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
