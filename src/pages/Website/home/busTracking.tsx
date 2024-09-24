import Breadcrumb from "@/components/Breadcrumb";
import "../../../styles/Website/busTracking.css"

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
                    <table className="ticket-info-table"  >
                        <thead>
                            <tr>
                                <th className="ticket-info-header">Thông tin khách hàng</th>
                                {/* <th></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="ticket-info-label">Họ và tên:</td>
                                <td className="ticket-info-value">Duy</td>
                            </tr>
                            <tr>
                                <td className="ticket-info-label">Số điện thoại:</td>
                                <td className="ticket-info-value">0123456789</td>
                            </tr>
                            <tr>
                                <td className="ticket-info-label">Email:</td>
                                <td className="ticket-info-value">duydtkph3397@fpt.edu.vn</td>
                            </tr>
                            <tr>
                                <th className="ticket-info-header">Thông tin chuyến xe</th>
                                {/* <th></th> */}
                            </tr>
                            <tr>
                                <td className="ticket-info-label">Tuyến:</td>
                                <td className="ticket-info-value">Hà Nội - Hải Phòng</td>
                            </tr>
                            <tr>
                                <td className="ticket-info-label">Giờ xuất bến:</td>
                                <td className="ticket-info-value">09:00</td>
                            </tr>
                            <tr>
                                <td className="ticket-info-label">Điểm đi:</td>
                                <td className="ticket-info-value">Bến xe Mỹ Đình</td>
                            </tr>
                            <tr>
                                <td className="ticket-info-label">Điểm đến:</td>
                                <td className="ticket-info-value">Bến xe Vĩnh Bảo</td>
                            </tr>
                            <tr>
                                <td className="ticket-info-label">Vị trí ghế:</td>
                                <td className="ticket-info-value">A11</td>
                            </tr>
                            <tr>
                                <td className="ticket-info-label">Mã đặt vé:</td>
                                <td className="ticket-info-value">Vé1234567890</td>
                            </tr>
                            <tr>
                                <td className="ticket-info-label">Trạng thái chuyến đi:</td>
                                <td className="ticket-info-value">Chờ khởi hành</td>
                            </tr>
                            <tr>
                                <td className="ticket-info-label">Trạng thái thanh toán:</td>
                                <td className="ticket-info-value">Chưa thanh toán</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default BusTracking