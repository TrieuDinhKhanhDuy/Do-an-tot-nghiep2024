import Breadcrumb from "@/components/Breadcrumb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faPhone, faEnvelope, faBus, faClock, faChair, faTicketAlt, faClipboardCheck,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import "../../../styles/Website/busTracking.css";

const BusTracking = () => {
    const duongDan = [
        { nhan: 'Trang Chủ', duongDan: '/' },
        { nhan: 'Tra Cứu', duongDan: 'bustracking' },
    ];

    return (
        <>
            <Breadcrumb items={duongDan} />

            <div className="ticket-info-container">
                <div className="ticket-form-section">
                    <h2 className="ticket-form-title">Nhập thông tin vé xe</h2>
                    <form className="ticket-form">
                        <input type="text" className="ticket-input" placeholder="Mã vé" required />
                        <input type="text" className="ticket-input" placeholder="Số điện thoại ( bắt buộc )" />
                        <button type="submit" className="ticket-submit-button">Kiểm tra vé</button>
                    </form>
                    <div className="ticket-notice">
                        <p className="ticket-notice-title">Lưu ý:</p>
                        <span className="ticket-notice-content">
                            Trường hợp bạn không thể thấy vé qua mạng hoặc muốn đổi sang đơn
                            hàng khác vui lòng liên hệ chúng tôi qua số điện thoại 1900 7070
                        </span>
                    </div>
                </div>

                <div className="ticket-info-section">
                    <table className="ticket-info-table">
                        <thead>
                            <tr>
                                <th className="ticket-info-header">Thông tin khách hàng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="ticket-info-label"><FontAwesomeIcon icon={faIdCard} /> Họ và tên:</td>
                                <td className="ticket-info-value">Duy</td>
                            </tr>
                            <tr>
                                <td className="ticket-info-label"><FontAwesomeIcon icon={faPhone} /> Số điện thoại:</td>
                                <td className="ticket-info-value">0123456789</td>
                            </tr>
                            <tr>
                                <td className="ticket-info-label"><FontAwesomeIcon icon={faEnvelope} /> Email:</td>
                                <td className="ticket-info-value">duydtkph3397@fpt.edu.vn</td>
                            </tr>
                            <tr>
                                <th className="ticket-info-header">Thông tin chuyến xe</th>
                            </tr>
                            <tr>
                                <td className="ticket-info-label"><FontAwesomeIcon icon={faBus} /> Tuyến:</td>
                                <td className="ticket-info-value">Hà Nội - Hải Phòng</td>
                            </tr>
                            <tr>
                                <td className="ticket-info-label"><FontAwesomeIcon icon={faClock} /> Giờ xuất bến:</td>
                                <td className="ticket-info-value">09:00</td>
                            </tr>
                            <tr>
                                <td className="ticket-info-label"><FontAwesomeIcon icon={faMapMarkerAlt}  />  Điểm đi:</td>
                                <td className="ticket-info-value">Bến xe Mỹ Đình</td>
                            </tr>
                            <tr>
                                <td className="ticket-info-label"><FontAwesomeIcon icon={faMapMarkerAlt}  />  Điểm đến:</td>
                                <td className="ticket-info-value">Bến xe Vĩnh Bảo</td>
                            </tr>
                            <tr>
                                <td className="ticket-info-label"><FontAwesomeIcon icon={faChair} /> Vị trí ghế:</td>
                                <td className="ticket-info-value">A11</td>
                            </tr>
                            <tr>
                                <td className="ticket-info-label"><FontAwesomeIcon icon={faTicketAlt}  /> Mã đặt vé:</td>
                                <td className="ticket-info-value">Vé1234567890</td>
                            </tr>
                            <tr>
                                <td className="ticket-info-label"><FontAwesomeIcon icon={faClipboardCheck} /> Trạng thái chuyến đi:</td>
                                <td className="ticket-info-value" style={{color:'#405187'}}>Chờ khởi hành</td>
                            </tr>
                            <tr>
                                <td className="ticket-info-label"><FontAwesomeIcon icon={faClipboardCheck} /> Trạng thái thanh toán:</td>
                                <td className="ticket-info-value" style={{color:'red'}}>Chưa thanh toán</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default BusTracking;
