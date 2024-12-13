import "../../../styles/Website/qr_code.css";
import qrCode from "../../../assets/image/qrcode.png";
import Breadcrumb from "@/components/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const QRcode = () => {
    const duongDan = [
        { nhan: "Trang Chủ", duongDan: "/" },
        { nhan: "List Vé", duongDan: "list" },
        { nhan: "Thanh Toán", duongDan: "pay" },
    ];

    return (
        <>
            <Breadcrumb items={duongDan} />
            <div className="qrCode-container">
                <div className="schedule-header payseting">
                    <div className="header-item step2">
                        Chọn chỗ và điền thông tin
                    </div>
                    <div className="header-item">
                        Thanh toán hoặc giữ chỗ trước
                    </div>
                    <div className="header-item step2">Hoàn thành</div>
                </div>
                <div className="qrCode-payContainer">
                    <div className="qrCode-paymentSection">
                        <div className="qrCode-headerPayment">
                            <img
                                src="/src/assets/image/logofixpading.png"
                                alt=""
                            />
                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                className="check-icon"
                            />
                        </div>

                        <p className="qrCode-paymentSection-p">
                            Hệ thống đang giữ chỗ , Quý khách vui lòng thực hiện
                            thanh toán để hoàn tất mua vé!
                        </p>
                        <div className="qrCode-infoBox">
                            <h4 className="qrCode-infoBox-h4">Lưu ý:</h4>
                            <p>
                                - Thông tin khách hàng phải chính xác , nếu
                                không sẽ không thực hiện việc hủy/đổi.
                            </p>
                            <p>
                                - Điểm đón/trả khách phải nằm trong quy định về
                                điểm đón/trả của chúng tôi, nếu nằm ngoài quy
                                định về điểm đón/trả , chúng tôi không đáp ứng.
                            </p>
                            <p>
                                - Trước khi giao dịch thanh toán thành công ,
                                chúng tôi sẽ không đón quý khách hàng tại các
                                điểm theo quy định về điểm đón .{" "}
                            </p>
                            <p>- Mọi thắc mắc xin liên hệ qua tổng đài: </p>
                        </div>
                    </div>

                    <div className="qrCode-customerInfo">
                        <div className="qrCode-ticketContainer">
                            <div className="qrCode-ticketContainer-time">
                                <p>
                                    Thời gian giao dịch còn lại :{" "}
                                    <span style={{ color: "red" }}>
                                        0d 0h 14m 31s
                                    </span>
                                </p>
                            </div>
                            <table className="qrCode-ticketTable">
                                <tbody>
                                    <tr>
                                        <td
                                            className="qrCode-sectionTicket"
                                            colSpan={2}
                                        >
                                            <h2>Mã vé:241212-4416282</h2>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            className="qrCode-sectionTitle"
                                            colSpan={2}
                                        >
                                            Thông tin khách hàng
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Họ và tên:</td>
                                        <td>Nguyễn Văn A</td>
                                    </tr>
                                    <tr>
                                        <td>Số điện thoại:</td>
                                        <td>0123456789</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>email@example.com</td>
                                    </tr>
                                    <tr>
                                        <td
                                            className="qrCode-sectionTitle"
                                            colSpan={2}
                                        >
                                            Thông tin chuyến xe
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Tuyến:</td>
                                        <td>Mỹ Đình - Tuyên Quang</td>
                                    </tr>
                                    <tr>
                                        <td>Giờ xuất bến:</td>
                                        <td>08:00</td>
                                    </tr>
                                    <tr>
                                        <td>Điểm đi:</td>
                                        <td>Mỹ Đình</td>
                                    </tr>
                                    <tr>
                                        <td>Điểm đến:</td>
                                        <td>Tuyên Quang</td>
                                    </tr>
                                    <tr>
                                        <td>Vị trí ghế:</td>
                                        <td>A1, A2</td>
                                    </tr>
                                    <tr>
                                        <td>Mã khuyến mãi:</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Ghi chú:</td>
                                        <td>Không có</td>
                                    </tr>
                                    <tr>
                                        <td>Mã thanh toán:</td>
                                        <td>
                                            <img
                                                src={qrCode}
                                                alt=""
                                                style={{ width: "200px" }}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="button-container">
                                <button className="btn-primary">
                                 Gửi ảnh chuyển khoản
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QRcode;
