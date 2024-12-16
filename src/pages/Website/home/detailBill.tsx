import Breadcrumb from "@/components/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../styles/Website/bill.css";
import { faCar, faEnvelope, faFileInvoice, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BillDetailResponse, OrderDataDetail } from "@/types/IBill";
import Swal from "sweetalert2";
import axios from "axios";
import numeral from "numeral";

const DetailBill = () => {
    const duongDan = [
        { nhan: "Trang Chủ", duongDan: "/" },
        { nhan: "Vé Của Tôi", duongDan: "myticket" },
        { nhan: "Chi Tiết Vé", duongDan: "detailbill" },
    ];

    const nav = useNavigate();


    const location = useLocation();
    const params = new URLSearchParams(location.search);



    const [billData, setBillData] = useState<OrderDataDetail | null>(null);

    const order_code = params.get("order_code");


    useEffect(() => {
        const fetchBillDetails = async () => {
            try {
                const response = await axios.get<BillDetailResponse>(
                    `http://doantotnghiep.test/api/ticket-booking/${order_code}`
                );
                setBillData(response.data.data);
            } catch (err) {
                Swal.fire({
                    title: "Hóa Đơn Không Tồn Tại",
                    icon: "error",
                    showConfirmButton: false
                })
                nav('/**/');
            }
        };

        fetchBillDetails();
    }, [order_code]);

        const formatPrice = (price: string): string => {
            return numeral(price).format('0,0') + ' VND'; 
        };

    return (
        <>
            <Breadcrumb items={duongDan} />

            <div className="invoice-container">
                <div className="schedule-header"></div>


                {billData && (

                    <div className="invoice-container-item">

                        <div className="header_bill">
                            <h2>
                                <FontAwesomeIcon icon={faFileInvoice} style={{ color: '#405187' }} /> Hóa đơn
                                điện tử
                            </h2>
                            <p className="ticket-code">Mã vé: {billData.order_code}</p>
                        </div>

                        <hr className="section-divider" />

                        <table className="info-table">
                            <tbody>
                                <tr>
                                    <td className="left-section-bill">
                                        <strong>Thông tin hành khách</strong>
                                        <p>
                                            <FontAwesomeIcon icon={faUser} /> Họ và
                                            tên: {billData.name}
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faPhone} /> Số
                                            điện thoại: {billData.phone}
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faEnvelope} />{" "}
                                            Email: {billData.email}
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
                                                    Tên tài xế: {billData.driver_name}
                                                </p>
                                                <p>
                                                    <FontAwesomeIcon
                                                        icon={faPhone}
                                                    />{" "}
                                                    Số điện thoại: {billData.driver_phone}
                                                </p>
                                                <p>
                                                    <FontAwesomeIcon icon={faCar} />{" "}
                                                    Biển số xe: {billData.license_plate}
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

                                {billData?.ticket_details.map((ticket) => (
                                    <tr>
                                        <td className="left-section-bill">
                                            <strong>Thông tin chính - {billData.route_name}</strong>
                                            <p>Vị Trí Ghế: {ticket.name_seat}</p>
                                            <p>Giá vé: {formatPrice(ticket.price)}</p>
                                            <p>Mã Vé: {ticket.ticket_code}</p>
                                            <p>Ngày: {billData.date_start}</p>
                                            <p>Điểm đi: {billData?.start_point}({billData.location_start})</p>
                                            <p>Điểm đến: {billData?.end_point}({billData.location_end})</p>
                                        </td>
                                        <td className="right-section-bill">
                                            <strong>Thông tin thêm</strong>
                                            <p>Mã khuyến mãi: LAIXEANTOAN</p>
                                            <p>Ghi chú: lai xe an toan</p>
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan={2}>
                                        <hr className="section-divider" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="pricing-left">
                                        <p>Mã giảm giá:</p>
                                        <p>
                                            <strong>Tổng tiền:</strong>
                                        </p>
                                        <p>Tình trạng:</p>
                                    </td>
                                    <td className="pricing-right">
                                        <p>{billData.code_voucher} - {billData.discount}%</p>
                                        <p><strong>{numeral(billData.total_price).format("0,0")} VND</strong></p>
                                        <p className={`status-pay ${billData.status === "paid" ? "paid" : "unpaid"}`}>
                                            {billData.status === "paid" ? "Đã thanh toán" : "Chưa thanh toán"}
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    );
};

export default DetailBill;
