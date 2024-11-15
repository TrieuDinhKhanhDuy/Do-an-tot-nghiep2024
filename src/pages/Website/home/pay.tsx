import "../../../styles/Website/pay.css";
import vnpayLogo from "../../../assets/image/vnpaylogo.png";
import momoLogo from "../../../assets/image/momologo.jpg";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "@/components/Breadcrumb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";

// Định nghĩa kiểu cho từng phương thức thanh toán (methods)
interface PaymentMethod {
    id: number;
    name: string;
    created_at: string;
    updated_at: string | null;
}

// Định nghĩa kiểu cho trạng thái ghế ngồi (seatsStatus)
interface SeatsStatus {
    [seatName: string]: string;
}

// Định nghĩa kiểu tổng quát cho phản hồi API
interface ApiResponse {
    methods: PaymentMethod[]; // Mảng các phương thức thanh toán
    seatsStatus: SeatsStatus; // Trạng thái các ghế
    seatCount: number; // Số lượng ghế
}

const Pay = () => {
    const duongDan = [
        { nhan: 'Trang Chủ', duongDan: '/' },
        { nhan: 'List Vé', duongDan: 'list' },
        { nhan: 'Thanh Toán', duongDan: 'pay' },
    ];
    // Lấy URL hiện tại và search params
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleChange = (event: any) => {
        setPayment_method_id(event.target.value); // Lấy giá trị của method.id
      };
    
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

    const nav = useNavigate()
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<ApiResponse | null>(null);
    const [payment_method_id, setPayment_method_id] = useState<number | null>(null);

    useEffect(() => {
        // Gọi API với axios
        const fetchStops = async () => {
            try {
                const response = await axios.get('http://doantotnghiep_backend.test/api/stops', {
                    params: {
                        trip_id: tripId,
                        date: date,
                    },
                });
                // Lưu dữ liệu vào state
                setData(response.data);
            } catch (error) {
                setError('Đã xảy ra lỗi khi lấy dữ liệu');
            }
        };

        fetchStops();
    }, [tripId, date]);

    // Hàm xử lý khi nhấn nút "Thanh toán"
    const handlePayment = async () => {
        const paymentInfo = {
            trip_id: tripId,
            bus_id: busId,
            route_id: routeId,
            time_start: timeStart,
            total_price: total_price,
            date: date,
            name_seat: nameSeat,
            location_start: locationStart,
            id_start_stop: idStartStop,
            location_end: locationEnd,
            id_end_stop: idEndStop,
            name: name,
            phone: phone,
            email: email,
            payment_method_id: payment_method_id,
            note: note,
            fare: fare,
        };

        try {
            // Gửi thông tin thanh toán lên API
            const response = await axios.post('http://doantotnghiep_backend.test/api/stops', paymentInfo);
            Swal.fire({
                title: "Đặt vé thành công",
                text: "Bạn có muốn về trang chủ?",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                cancelButtonText: "Xem hóa đơn",
                confirmButtonText: "Về Trang Chủ",
            }).then((result) => {
                if (result.isConfirmed) {
                    nav("/");
                }
            });
            // nav(`/bill?trip_id=${paymentInfo.trip_id}&bus_id=${paymentInfo?.bus_id}&fare=${paymentInfo?.fare}&total_price=${paymentInfo?.total_price}&route_id=${paymentInfo?.route_id}&time_start=${paymentInfo?.time_start}&date=${paymentInfo?.date}&name_seat=${paymentInfo?.name_seat}&location_start=${paymentInfo?.location_start}&id_start_stop=${paymentInfo?.id_start_stop}&location_end=${paymentInfo?.location_end}&id_end_stop=${paymentInfo?.id_end_stop}&name=${paymentInfo?.name}&phone=${paymentInfo?.phone}&email=${paymentInfo?.email}&total_price=${paymentInfo?.fare}&note=${paymentInfo?.note}`);
        } catch (error) {
            Swal.fire({
                title: "Đặt vé không thành công",
                text: "Có vẻ như bạn đang nhập thiếu thông tin",
                icon: "error",
                showCancelButton: false,
            })
            setError('Đã xảy ra lỗi khi thanh toán');
            console.error('Lỗi thanh toán:', error);
        }

    };

    return (
        <>
            <Breadcrumb items={duongDan} />
            <div className="container">
                <div className="schedule-header payseting">
                    <div className="header-item step2">Chọn chỗ</div>
                    <div className="header-item">Thanh Toán</div>
                    <div className="header-item step2">Hoàn Thành</div>
                </div>
                <div className="pay-container">
                    <div className="payment-section">
                        <div className="header-payment">
                            <h2><FontAwesomeIcon icon={faCreditCard} style={{ color: '#405187' }} /> Xác nhận để thanh toán</h2>
                            <p style={{ fontSize: "12px" }}>Xin hãy thanh toán trong vòng <span style={{ color: "red", fontWeight: "bold" }}>01 : 20 : 30</span></p>
                        </div>
                        <div className="info-box">
                            <p style={{ fontSize: '15px', textAlign: "center" }}>Tất cả thông tin của card sẽ được mã hoá, bảo mật và bảo vệ</p>
                        </div>
                        <div className="payment-options">

                           
                            {data?.methods.map((method) => (
                            <div className="payment-options-item">
                                <input type="radio" name="payment_method_id" id={method.name} key={method.id} value={method.id} onChange={handleChange}  />
                                <label htmlFor={method.name} >{method.name}</label>
                            </div>
                        ))}

                           

                        </div>

                        <div className="price-summary">
                            <p>Giá vé: <span>{fare}</span></p>
                            <p>Số Ghế: <span>{nameSeat}</span></p>
                            <p>Mã giảm giá: <span>-</span></p>
                            <hr />
                            <p className="total">Tổng tiền: <span>{total_price}</span></p>
                        </div>

                        <p className="agreement-text">
                            Khi nhấp vào "Thanh toán", bạn đồng ý rằng bạn đã đọc và hiểu
                            <a href="/"> Điều khoản sử dụng</a> và
                            <a href="/"> Chính sách hoàn huỷ</a>.
                        </p>
                    </div>

                    {/* Customer Information Section */}
                    <div className="customer-info">
                        <div className="ticket-container">
                            <table className="ticket-table">
                                <tbody>
                                    <tr>
                                        <td className="section-title" colSpan={2}>Thông tin khách hàng</td>
                                    </tr>
                                    <tr>
                                        <td>Họ và tên:</td>
                                        <td>{name}</td>
                                    </tr>
                                    <tr>
                                        <td>Số điện thoại:</td>
                                        <td>{phone}</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>{email}</td>
                                    </tr>
                                    <tr>
                                        <td className="section-title" colSpan={2}>Thông tin chuyến xe</td>
                                    </tr>
                                    <tr>
                                        <td>Tuyến:</td>
                                        <td>Mỹ Đình - Tuyên Quang</td>
                                    </tr>
                                    <tr>
                                        <td>Giờ xuất bến:</td>
                                        <td>{timeStart}</td>
                                    </tr>
                                    <tr>
                                        <td>Điểm đi:</td>
                                        <td>{idStartStop}({locationStart})</td>
                                    </tr>

                                    <tr>
                                        <td>Điểm đến:</td>
                                        <td>{idEndStop}({locationEnd})</td>
                                    </tr>
                                    <tr>
                                        <td>Vị trí ghế:</td>
                                        <td>{nameSeat}</td>
                                    </tr>
                                    <tr>
                                        <td>Mã khuyến mãi:</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>Ghi chú:</td>
                                        <td>{note}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="button-container">

                                <button className="btn-secondary">Hủy thanh toán</button>
                                <button className="btn-primary" onClick={handlePayment}>Thanh toán</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pay;