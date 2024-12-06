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
import { useEffect, useState } from "react";
import { BillResponse, OrderData } from "@/types/IBill";
import axios from "axios";
import numeral from "numeral";
import Swal from "sweetalert2";

const Bill = () => {
    const nav = useNavigate();


    const location = useLocation();
    const params = new URLSearchParams(location.search);



    const [billData, setBillData] = useState<OrderData | null>(null);

    const oder_id = params.get("order_id");


    useEffect(() => {
        const fetchBillDetails = async () => {
            try {
                const response = await axios.get<BillResponse>(
                    `http://doantotnghiep.test/api/bill?order_id=${oder_id}`
                );
                setBillData(response.data.data);
                Swal.fire({
                    title: "Thanh Toán Thành Công",
                    text: "Cảm ơn bạn đã chọn HONG NHUNG",
                    icon: "success",
                    showConfirmButton: false
                })
            } catch (err) {
                Swal.fire({
                    title: "Hóa Đơn Không Tồn Tại",
                    icon: "error",
                    showConfirmButton: false
                })
                nav('/**/')
            }
        };

        fetchBillDetails();
    }, [oder_id]);



    return (
        <>
            <div className="invoice-container">
                <div className="schedule-header">
                    <div className="header-item step2">Chọn chỗ</div>
                    <div className="header-item step2">Thanh Toán</div>
                    <div className="header-item">Hoàn Thành</div>
                </div>
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

                                <tr>
                                    <td className="left-section-bill">
                                        <strong>Thông tin chính</strong>
                                        <p>Chuyến: {billData.route_name}</p>
                                        <p>Ngày: {billData.date_start}</p>
                                        <p>Điểm đi: {billData.start_point}({billData.point_up})</p>
                                        <p>Điểm đến: {billData.end_point}({billData.point_down})</p>
                                        <p>Vị trí ngồi: {billData.name_seat.join(',')}</p>
                                    </td>
                                    <td className="right-section-bill">
                                        <strong>Thông tin thêm</strong>
                                        <p>Mã khuyến mãi: LAIXEANTOAN</p>
                                        <p>Ghi chú: {billData.note}</p>
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
                                        <p>{numeral(billData.ticket_price).format("0,0")} VNĐ</p>
                                        <p>- 0%</p>
                                        <p><strong>{numeral(billData.total_price).format("0,0")} VNĐ</strong></p>
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

export default Bill;
