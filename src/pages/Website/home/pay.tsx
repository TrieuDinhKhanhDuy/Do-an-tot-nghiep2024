import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "@/components/Breadcrumb";
import "../../../styles/Website/pay.css";
import {VNPay} from 'vnpay'

interface PaymentMethod {
    id: number;
    name: string;
}

const Pay: React.FC = () => {
    const duongDan = [
        { nhan: "Trang Chủ", duongDan: "/" },
        { nhan: "List Vé", duongDan: "list" },
        { nhan: "Thanh Toán", duongDan: "pay" },
    ];

    const location = useLocation();
    const params = new URLSearchParams(location.search);

    // Form state
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [paymentMethodId, setPaymentMethodId] = useState<number | null>(null);
    const [data, setData] = useState<{ methods: PaymentMethod[] } | null>(null);

    // Parameters from URL
    const tripId = params.get("trip_id") || "";
    const busId = params.get("bus_id") || "";
    const routeId = params.get("route_id") || "";
    const timeStart = params.get("time_start") || "";
    const totalPrice = params.get("total_price") || "0";
    const date = params.get("date") || "";
    const nameSeat = params.get("name_seat") || "";
    const locationStart = params.get("location_start") || "";
    const idStartStop = params.get("id_start_stop") || "";
    const locationEnd = params.get("location_end") || "";
    const idEndStop = params.get("id_end_stop") || "";
    const name = params.get("name") || "";
    const phone = params.get("phone") || "";
    const email = params.get("email") || "";
    const note = params.get("note") || "";
    const fare = params.get("fare") || "0";

    useEffect(() => {
        // Bước 1: Lấy phương thức thanh toán từ API
        const fetchPaymentMethods = async () => {
            try {
                const paramsData = { trip_id: tripId, date,fare  }; // Dữ liệu params
                console.log("Params gửi lên API:", paramsData); // Log dữ liệu params

                const response = await axios.get("http://doantotnghiep_backend.test/api/stops", {
                    params: paramsData,
                });

                console.log("API Response:", response.data); // Log dữ liệu phản hồi từ API
                setData(response.data);
            } catch (error) {
                console.error("API Error:", error); // Log lỗi
                Swal.fire("Lỗi", "Đã xảy ra lỗi khi lấy dữ liệu", "error");
            }
        };

        fetchPaymentMethods();
    }, [tripId, date]);

    const handlePayment = async () => {
        if (!paymentMethodId) {
            Swal.fire("Lỗi", "Bạn cần chọn phương thức thanh toán.", "error");
            return;
        }

        try {
        
            const amount = Math.round(parseFloat(totalPrice) * 100); // Chuyển đổi tổng tiền sang số nguyên
            if (isNaN(amount) || amount <= 0) {
                Swal.fire("Lỗi", "Giá trị tổng tiền không hợp lệ.", "error");
                return;
            }

            const vnpParams = {
                vnp_Version: "2.1.0",
                vnp_TmnCode: "6H9JFR7W",
                vnp_Amount: amount.toString(),
                vnp_Command: "pay",
                vnp_CreateDate: new Date().toISOString().replace(/[-:T.Z]/g, "").slice(0, 14),
                vnp_CurrCode: "VND",
                vnp_IpAddr: window.location.hostname,
                vnp_Locale: "vn",
                vnp_OrderInfo: `Thanh toán chuyến xe ${tripId}`,
                vnp_OrderType: "other",
                vnp_ReturnUrl: "http://localhost:5173/",
                vnp_TxnRef: new Date().getTime().toString(),
                vnp_ExpireDate: new Date(new Date().setMinutes(new Date().getMinutes() + 15))
                    .toISOString()
                    .replace(/[-:T.Z]/g, "")
                    .slice(0, 14),
            };

            console.log("Dữ liệu gửi lên VNPay:", vnpParams); // Log dữ liệu gửi lên VNPay

            const vnpayUrl = `https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?` +
                new URLSearchParams(vnpParams).toString(); // Tạo URL VNPay
            
          //  window.location.href = vnpayUrl; 
        } catch (error) {
            Swal.fire("Lỗi", "Có lỗi xảy ra khi thanh toán", "error");
            console.error("Lỗi thanh toán:", error); // Log lỗi
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
                            <h2>
                                <FontAwesomeIcon icon={faCreditCard} style={{ color: "#405187" }} />{" "}
                                Xác nhận để thanh toán
                            </h2>
                            <p style={{ fontSize: "12px" }}>
                                Xin hãy thanh toán trong vòng <span style={{ color: "red", fontWeight: "bold" }}>01 : 20 : 30</span>
                            </p>
                        </div>
                        <div className="info-box">
                            <p style={{ fontSize: "15px", textAlign: "center" }}>
                                Tất cả thông tin của card sẽ được mã hoá, bảo mật và bảo vệ
                            </p>
                        </div>
                        <div className="payment-options">
                            <select
                                value={paymentMethodId || ""}
                                onChange={(e) => setPaymentMethodId(Number(e.target.value))}
                            >
                                <option value="" disabled>
                                    Chọn phương thức
                                </option>
                                {data?.methods.map((method) => (
                                    <option key={method.id} value={method.id}>
                                        {method.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="price-summary">
                            <p>Giá vé: <span>{fare}</span></p>
                            <p>Số Ghế: <span>{nameSeat}</span></p>
                            <p>Mã giảm giá: <span>-</span></p>
                            <hr />
                            <p className="total">Tổng tiền: <span>{totalPrice}</span></p>
                        </div>

                        <p className="agreement-text">
                            Khi nhấp vào "Thanh toán", bạn đồng ý rằng bạn đã đọc và hiểu
                            <a href="/"> Điều khoản sử dụng</a> và
                            <a href="/"> Chính sách hoàn huỷ</a>.
                        </p>
                    </div>

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
                                        <td>Địa điểm đi:</td>
                                        <td>{locationStart}</td>
                                    </tr>
                                    <tr>
                                        <td>Địa điểm đến:</td>
                                        <td>{locationEnd}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="payment-btn">
                            <button className="pay-button" onClick={handlePayment}>Thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pay;
