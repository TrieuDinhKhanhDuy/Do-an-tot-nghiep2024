import "../../../styles/Website/pay.css"
import vnpayLogo from "../../../assets/image/vnpaylogo.png"
import momoLogo from "../../../assets/image/momologo.jpg"
const Pay = () => {
    return (
        <>

            <div className="container">
                <div className="schedule-header payseting">
                    <div className="header-item step2">Chọn chỗ</div>
                    <div className="header-item ">Thanh Toán</div>
                    <div className="header-item step2">Hoàn Thành</div>
                </div>
                <div className="pay-container">
                    {/* Payment Section */}
                    <div className="payment-section">
                        <div className="header-payment">
                            <h2>Xác nhận để thanh toán</h2>
                            <p style={{ fontSize: "12px", }} >Xin hãy thanh toán trong vòng <span style={{ color: "red", fontWeight: "bold" }} >01 : 20 : 30</span></p>
                        </div>
                        <div className="info-box">
                            <p style={{ fontSize: '15px', textAlign: "center" }} >Tất cả thông tin của card sẽ được mã hoá, bảo mật và bảo vệ</p>
                        </div>
                        <div className="payment-options">
                            <div className="option-item">

                                <div className="option">
                                    <input type="radio" id="momo" name="payment" />
                                    <label htmlFor="momo">MoMo E-Wallet</label>

                                </div>
                                <div className="logo-pay-img">
                                    <img src={momoLogo} alt="" style={{ width: "60px", boxShadow: "1px 1px 1px 1px  rgba(110, 110, 110, 0.515)", borderRadius: "5px" }} />
                                </div>

                            </div>

                            <div className="option-item">
                                <div className="option">
                                    <input type="radio" id="vnpay" name="payment" />
                                    <label htmlFor="vnpay">VNPay</label>

                                </div>
                                <div className="logo-pay-img">
                                    <img src={vnpayLogo} alt="" style={{ width: "60px", boxShadow: "1px 1px 1px 1px  rgba(110, 110, 110, 0.515)", borderRadius: "5px" }} />
                                </div>
                            </div>
                        </div>

                        <div className="price-summary">
                            <p>Giá vé: <span>300.000đ</span></p>
                            <p>Mã giảm giá: <span>-20.000đ</span></p>
                            <hr />
                            <p className="total">Tổng tiền: <span>290.000đ</span></p>
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
                                        <td>Phạm Trung Hiếu</td>
                                    </tr>
                                    <tr>
                                        <td>Số điện thoại:</td>
                                        <td>0345477674</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>hieubackkhoa@gmail.com</td>
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
                                        <td>08:10</td>
                                    </tr>
                                    <tr>
                                        <td>Điểm đi:</td>
                                        <td>Bến xe Mỹ Đình</td>
                                    </tr>
                                    <tr>
                                        <td>Điểm đến:</td>
                                        <td>Bến xe Tuyên Quang</td>
                                    </tr>
                                    <tr>
                                        <td>Vị trí ghế:</td>
                                        <td>A11</td>
                                    </tr>
                                    <tr>
                                        <td>Mã khuyến mãi:</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>Ghi chú:</td>
                                        <td>-</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="button-container">
                                <button className="btn-primary">Thanh toán</button>
                                <button className="btn-secondary" >Hủy thanh toán</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pay