import React from 'react';
import "../../../styles/Website/changeTicket.css";

type Props = {};

const ChangeTicket = (props: Props) => {
  return (
    <div className="changeTicket">
      {/* Thông tin chuyến xe */}
      <div className="changeTicket__info">
  <h3 className="changeTicket__info-title">Thông tin chuyến xe</h3>
  <table className="changeTicket__info-table">
    <tbody style={{borderBottom:"1px dashed grey" , marginBottom:'30px'}}>
      <tr>
        <td className="changeTicket__info-label">Tuyến:</td>
        <td className="changeTicket__info-value">Mỹ Đình - Tuyên Quang</td>
      </tr>
      <tr>
        <td className="changeTicket__info-label">Giờ xuất bến:</td>
        <td className="changeTicket__info-value">08 : 10</td>
      </tr>
      <tr>
        <td className="changeTicket__info-label">Điểm đi:</td>
        <td className="changeTicket__info-value">Bến xe Mỹ Đình</td>
      </tr>
      <tr>
        <td className="changeTicket__info-label">Điểm đến:</td>
        <td className="changeTicket__info-value">Bến xe Tuyên Quang</td>
      </tr>
      <tr>
        <td className="changeTicket__info-label">Vị trí ghế:</td>
        <td className="changeTicket__info-value">A11</td>
      </tr>
      <tr>
        <td className="changeTicket__info-label">Mã khuyến mãi:</td>
        <td className="changeTicket__info-value">hpt</td>
      </tr>
      <tr>
        <td className="changeTicket__info-label">Ghi chú:</td>
        <td className="changeTicket__info-value"></td>
      </tr>
    </tbody>
  </table>
  <div className="changeTicket__info-note">
    Khi nhấp vào "Tìm chuyến", bạn đồng ý rằng bạn đã đọc và hiểu{" "}
    <a href="#" className="changeTicket__info-link">Điều khoản sử dụng</a> và{" "}
    <a href="#" className="changeTicket__info-link">Chính sách hoàn hủy</a>.
  </div>
  <div className="changeTicket__info-footer">
    <input
      type="checkbox"
      id="confirm-checkbox"
      className="changeTicket__info-checkbox"
    />
    <label htmlFor="confirm-checkbox">
      Đồng ý và xác nhận đổi chuyến
    </label>
  </div>
  <button className="changeTicket__info-button">Tìm chuyến phù hợp</button>
</div>


      {/* Danh sách chuyến xe */}
      <div className="changeTicket__list">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
          <div key={index} className="changeTicket__list-item">
            <div className="changeTicket__list-route">
                Mỹ Đình - Tuyên Quang
                <span className="changeTicket__list-time">🕒08 : 10</span>
                </div>
            <div className="changeTicket__list-details">
              <span className="changeTicket__list-type">Xe giường nằm</span>
              <span className="changeTicket__list-seats">28 Chỗ trống</span>
            </div>
            <div className="changeTicket__list-price">
              <span className="changeTicket__list-price-value">120.000đ</span>
              <button className="changeTicket__list-button">Chọn chỗ</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChangeTicket;
