
import "../../../styles/Website/bill.css"

const DetailBill = () => {
    return (
        <>
            <div className="invoice-container">
                
                <div className="invoice-container-item">
                    {/* Header */}
                    <div className="header">
                        <h2>Hóa đơn điện tử</h2>
                        <p className="ticket-code">Mã vé: 012913914</p>
                    </div>

                    {/* Divider after Header */}
                    <hr className="section-divider" />

                    {/* Table Layout for Information Sections */}
                    <table className="info-table">
                        <tbody>
                            {/* Row 1: Customer Information and Vehicle Information */}
                            <tr>
                                <td className="left-section">
                                    <strong>Thông tin hành khách</strong>
                                    <p>Họ và tên: Phạm Trung Hiếu</p>
                                    <p>Số điện thoại: 0345476764</p>
                                    <p>Email: hieubackkhoa@gmail.com</p>
                                </td>
                                <td className="right-section vehicle-info">
                                    <div className="vehicle-info-content">
                                        <div>
                                            <strong>Thông tin xe</strong>
                                            <p>Tên tài xế: Phạm Trung Hiếu</p>
                                            <p>Số điện thoại: 0345476764</p>
                                            <p>Biển số xe: 98C - 099.00</p>
                                        </div>
                                        {/* Driver's Image Beside the Text */}
                                        <div className="driver-image">
                                            <img src="https://static.vecteezy.com/system/resources/previews/018/865/413/non_2x/car-driver-simple-flat-icon-illustration-free-vector.jpg" alt="Driver" />
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            {/* Divider between sections */}
                            <tr>
                                <td colSpan={2}>
                                    <hr className="section-divider" />
                                </td>
                            </tr>

                            {/* Row 2: Route Information and Additional Information */}
                            <tr>
                                <td className="left-section">
                                    <strong>Thông tin chính</strong>
                                    <p>Tuyến: Mỹ Đình - Tuyên Quang</p>
                                    <p>Giờ xuất bến: 08:10</p>
                                    <p>Điểm đi: Bến xe Mỹ Đình</p>
                                    <p>Điểm đến: Bến xe Tuyên Quang</p>
                                    <p>Vị trí ngồi: A11</p>
                                </td>
                                <td className="right-section">
                                    <strong>Thông tin thêm</strong>
                                    <p>Mã khuyến mãi: LAIXEANTOAN</p>
                                    <p>Ghi chú: Lái xe cẩn thận vào</p>
                                </td>
                            </tr>

                            {/* Divider between sections */}
                            <tr>
                                <td colSpan={2}>
                                    <hr className="section-divider" />
                                </td>
                            </tr>

                            {/* Row 3: Pricing Information */}
                            <tr>
                                <td className="pricing-left">
                                    <p>Giá vé:</p>
                                    <p>Mã giảm giá:</p>
                                    <p><strong>Tổng tiền:</strong></p>
                                    <p>Tình trạng:</p>
                                </td>
                                <td className="pricing-right">
                                    <p>300,000đ</p>
                                    <p>80,000đ</p>
                                    <p><strong>220,000đ</strong></p>
                                    <p className="status-pay ">Đã thanh toán</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>
        </>
    )
}

export default DetailBill