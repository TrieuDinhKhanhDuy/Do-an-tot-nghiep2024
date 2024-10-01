import Breadcrumb from "@/components/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../../styles/Website/bill.css";
import { faCar, faEnvelope, faFileInvoice, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

const DetailBill = () => {
    const duongDan = [
        { nhan: "Trang Chủ", duongDan: "/" },
        { nhan: "Vé Của Tôi", duongDan: "myticket" },
        { nhan: "Chi Tiết Vé", duongDan: "detailbill" },
    ];

    return (
        <>
            <Breadcrumb items={duongDan} />

            <div className="invoice-container">
                <div className="schedule-header"></div>
                <div className="invoice-container-item">
                    <div className="header_bill">
                        <h2>
                            <FontAwesomeIcon
                                icon={faFileInvoice}
                                style={{ color: "#405187" }}
                            />{" "}
                            Hóa đơn điện tử
                        </h2>
                        <p className="ticket-code">Mã vé: 012913914</p>
                    </div>

                    <hr className="section-divider" />

                    <table className="info-table">
                        <tbody>
                            <tr>
                                <td className="left-section-bill">
                                    <strong>Thông tin hành khách</strong>
                                    <p>
                                        <FontAwesomeIcon icon={faUser} /> Họ và
                                        tên: Phạm Trung Hiếu
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faPhone} /> Số
                                        điện thoại: 0345476764
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faEnvelope} />{" "}
                                        Email: hieubackkhoa@gmail.com
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
                                                Tên tài xế: Phạm Trung Hiếu
                                            </p>
                                            <p>
                                                <FontAwesomeIcon
                                                    icon={faPhone}
                                                />{" "}
                                                Số điện thoại: 0345476764
                                            </p>
                                            <p>
                                                <FontAwesomeIcon icon={faCar} />{" "}
                                                Biển số xe: 98C - 099.00
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
                                    <p>Tuyến: Mỹ Đình - Tuyên Quang</p>
                                    <p>Giờ xuất bến: 08:10</p>
                                    <p>Điểm đi: Bến xe Mỹ Đình</p>
                                    <p>Điểm đến: Bến xe Tuyên Quang</p>
                                    <p>Vị trí ngồi: A11</p>
                                </td>
                                <td className="right-section-bill">
                                    <strong>Thông tin thêm</strong>
                                    <p>Mã khuyến mãi: LAIXEANTOAN</p>
                                    <p>Ghi chú: Lái xe cẩn thận vào</p>
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
                                    <p>300,000đ</p>
                                    <p>80,000đ</p>
                                    <p>
                                        <strong>220,000đ</strong>
                                    </p>
                                    <p className="status-pay">Đã thanh toán</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default DetailBill;
