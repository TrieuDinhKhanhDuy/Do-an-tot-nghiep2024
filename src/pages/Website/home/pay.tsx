import "../../../styles/Website/pay.css";
import Breadcrumb from "@/components/Breadcrumb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import numeral from "numeral";
import { SeatApiResponse } from "@/types/IChosesSeat";

const Pay = () => {
    const duongDan = [
        { nhan: 'Trang Chủ', duongDan: '/' },
        { nhan: 'List Vé', duongDan: 'list' },
        { nhan: 'Thanh Toán', duongDan: 'pay' },
    ];

    // Lấy URL hiện tại và search params
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const handleChange = (event: any) => {
        setPayment_method_id(event.target.value); // Lấy giá trị của method.id
    };

    // Lấy các giá trị từ URL
    const tripId = params.get('trip_id');
    const busId = params.get('bus_id');
    const routeId = params.get('route_id');
    const timeStart = params.get('time_start');
    const total_price = parseFloat(params.get('total_price') || "0");
    const date = params.get('date');
    const nameSeat = params.get('name_seat');
    const locationStart = params.get('location_start');
    const idStartStop = params.get('id_start_stop');
    // const idStartStop = 13;
    // const idEndStop = 22;

    const locationEnd = params.get('location_end');
    const idEndStop = params.get('id_end_stop');
    const name = params.get('name');
    const phone = params.get('phone');
    const email = params.get('email');
    const note = params.get('note');
    const fare = parseFloat(params.get('fare') || "0");
    const user_id = params.get('userId');
    const code_voucher = params.get('vouchercode') || null;
    const discount = params.get('discount') ? parseFloat(params.get('discount')!) : 0;
    const id_change = params.get('id_change') === 'null' ? null : params.get('id_change');
    const price = params.get('total_old_price') === 'null' ? null : params.get('total_old_price');
    const start_stop_name = params.get("start_stop_name");
    const end_stop_name = params.get("end_stop_name");

    const nav = useNavigate();

    const [data, setData] = useState<SeatApiResponse | null>(null);
    const [payment_method_id, setPayment_method_id] = useState<number | null>(null);

    const formattedFare = numeral(fare).format('0,0');
    const formattedPrice = numeral(price).format('0,0');
    const priceNumber = price ? parseFloat(price) : 0;

    const discountedPrice = discount > 0 ? total_price * (1 - discount / 100) : total_price;
    const discountOldPrice = discountedPrice - priceNumber;
    const formatteddiscountedPrice = numeral(discountedPrice).format('0,0');
    const formattedDiscountedPrice = numeral(discountOldPrice).format('0,0');

    useEffect(() => {
        if (!tripId || !date) return;

        let intervalId: NodeJS.Timeout;

        const fetchStops = async () => {
            try {
                const response = await axios.get('http://doantotnghiep.test/api/stops', {
                    params: {
                        trip_id: tripId,
                        date: date,
                    },
                });
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchStops();
        intervalId = setInterval(fetchStops, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [tripId, date]);


    // Hàm xử lý khi nhấn nút "Thanh toán"
    const handlePayment = async () => {
        const priceNumber = price ? parseFloat(price) : 0;

        if (discountedPrice < priceNumber) {
            Swal.fire({
                title: "Giá vé không hợp lệ",
                text: "Tổng tiền phải lớn hơn giá vé cũ để thực hiện thanh toán.",
                icon: "error",
                showCancelButton: false,
            });
            return; 
        }

        let paymentInfo = {
            trip_id: tripId,
            bus_id: busId,
            route_id: routeId,
            time_start: timeStart,
            total_price: discountOldPrice,
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
            user_id: user_id,
            code_voucher: code_voucher,
            discount: discount,
            id_change: id_change,
            price: discountedPrice,
            pay_url: "", 
        };

        console.log("Initial Payment Info:", paymentInfo);

        try {
            if (paymentInfo.payment_method_id !== null) {
                const response = await axios.post('http://doantotnghiep.test/api/stops', paymentInfo);

                let redirectUrl = ""; 
                if (response.data.redirect_url) {
                    redirectUrl = response.data.redirect_url;
                } else if (response.data.payUrl) {
                    redirectUrl = response.data.payUrl;
                }

                if (redirectUrl) {
                    paymentInfo = {
                        ...paymentInfo,
                        pay_url: redirectUrl,
                    };

                    window.location.href = redirectUrl;
                } else {
                    Swal.fire({
                        title: "Không tìm thấy URL thanh toán",
                        text: "Hãy thử lại sau.",
                        icon: "error",
                        showCancelButton: false,
                    });
                }
            } else {
                Swal.fire({
                    title: "Vui Lòng Chọn Phương Thức Thanh Toán",
                    icon: "error",
                    showCancelButton: false,
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Đặt vé không thành công",
                text: "Có vẻ như bạn đang nhập thiếu thông tin",
                icon: "error",
                showCancelButton: false,
            });
            console.error("Lỗi thanh toán:", error);
        }
    };


    const handleClosePayment = () => {
        Swal.fire({
            title: "Đã hủy vé",
            icon: "success",
            showConfirmButton: false,
            showCancelButton: false,
            timer: 1000,
        }).then(() => {
            nav('/');
        });
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
                            <p style={{ fontSize: "12px" }}>Ghế của bạn sẽ được giữ chỗ khi ấn thanh toán</p>
                        </div>
                        <div className="info-box">
                            <p style={{ fontSize: '15px', textAlign: "center" }}>Tất cả thông tin của card sẽ được mã hoá, bảo mật và bảo vệ</p>
                        </div>
                        <div className="payment-options">
                            {data?.methods.map((method, index) => (
                                <div className={method.id === 1 ? "hidden" : "payment-options-item"} key={index}>
                                    <input type={method.id === 1 ? "hidden" : "radio"} name="payment_method_id" id={method.name} key={method.id} value={method.id} onChange={handleChange} />
                                    <label htmlFor={method.name} className={method.id === 1 ? "hidden" : ""}>{method.name}</label>
                                </div>
                            ))}
                        </div>
                        <div className="price-summary">
                            <p>Số Ghế: <span>{nameSeat}</span></p>
                            <p>Giá vé: <span>{formattedFare} VNĐ</span></p>
                            {price && (<p>Tổng tiền: <span>{formatteddiscountedPrice} VNĐ</span></p>)}
                            {price && (<p>Tổng tiền vé cũ: <span>- {formattedPrice} VNĐ</span></p>)}

                            <p>Mã giảm giá: <span>{code_voucher ? `${code_voucher} Giảm ${discount}%` : '--'}</span></p>
                            <hr />
                            <p className="total">Tổng tiền phải trả: <span>{formattedDiscountedPrice} VNĐ</span></p>
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
                                        <td>{start_stop_name}({locationStart})</td>
                                    </tr>

                                    <tr>
                                        <td>Điểm đến:</td>
                                        <td>{end_stop_name}({locationEnd})</td>
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
                                <button className="btn-secondary" onClick={handleClosePayment} >Hủy thanh toán</button>
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
