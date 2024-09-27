import Breadcrumb from "@/components/Breadcrumb";
import {
    faCalendarAlt,
    faMapMarkerAlt,
    faClock,faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import "../../../styles/Website/BokingForm.css";
import "../../../styles/Website/List.css";

const List = () => {
    const scheduleData = Array(10).fill({
        time: '08 : 10',
        route: 'Mỹ Đình - Tuyên Quang',
        seats: '28 Chỗ trống',
        type: 'Xe giường nằm',
        price: '120.000đ'
    });

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleSeatSelect = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const duongDan = [
        { nhan: 'Trang Chủ', duongDan: '/' },
        { nhan: 'List Vé', duongDan: 'list' },
    ];
    return (
        <>
            <Breadcrumb items={duongDan} />
            <div className="bookingForm-container">
                <div className="bookingForm-search">
                    <div className="bookingForm-input">
                        <div className="bookingForm-input-top">
                            <span><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                            <label>Điểm đi</label>
                        </div>
                        <select>
                            <option>Chọn điểm lên</option>
                        </select>
                    </div>
                    <div className="bookingForm-input">
                        <div className="bookingForm-input-top">
                            <span><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                            <label>Điểm đến</label>
                        </div>
                        <select>
                            <option>Chọn điểm đến</option>
                        </select>
                    </div>
                    <div className="bookingForm-input">
                        <div className="bookingForm-input-top">
                            <span><FontAwesomeIcon icon={faCalendarAlt} /></span>
                            <label >Ngày khởi hành</label>
                        </div>
                        <input type="date" defaultValue="2024-08-27" />
                    </div>
                    <div className="bookingForm-button">
                        <CiSearch size={28} /> {/* Thay đổi kích thước icon nếu cần */}
                        <button>Tìm chuyến</button>
                    </div>
                </div>

                <div className="bus-schedule-container">
                    {/* Group 1: Header Group */}
                    <div className="schedule-header">
                        <div className="header-item">Chọn chỗ</div>
                        <div className="header-item step2">Thanh Toán</div>
                        <div className="header-item step2">Hoàn Thành</div>
                    </div>

                    {/* Group 2: Table Group */}
                    <div className="schedule-table-container">
                        <table className="schedule-table">
                            <thead>
                                <tr>
                                    <th>Tuyến Đi</th>
                                    <th>Loại Xe</th>
                                    <th>Giá Vé</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scheduleData.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="schedule-time-route">
                                                <span className="time"><span className="time-icon"><FontAwesomeIcon icon={faClock} /></span>{item.time}</span>
                                                <span className="route">{item.route}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="schedule-details">
                                                <span>{item.seats}</span>
                                                <span>{item.type}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="schedule-price">
                                                <span>{item.price}</span>
                                                <button className="choose-seat-btn" onClick={handleSeatSelect}>Chọn chỗ</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {isPopupOpen && (
                        <div className="popup-overlay">
                            <div className="popup-content">
                                <button className="close-btn" onClick={handleClosePopup}><FontAwesomeIcon icon={faTimes} /></button>
                                <div className="seat-selection">
                                    {/* Phần chọn ghế */}
                                    <div className="seat-layout">

                                        <div className="left-section-container">
                                            <div className="left-section">

                                                <div className="seats-grid">
                                                    <h3>Tầng 1</h3>
                                                    <div className="seat-row">
                                                        <button className="seat">A1</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">A22</button>
                                                    </div>
                                                    <div className="seat-row">
                                                        <button className="seat">A2</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">A14</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">A21</button>
                                                    </div>
                                                    <div className="seat-row">
                                                        <button className="seat">A3</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">A13</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">A</button>
                                                    </div>
                                                    <div className="seat-row">
                                                        <button className="seat">A4</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">A20</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">A</button>
                                                    </div>
                                                    <div className="seat-row">
                                                        <button className="seat">A5</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">A11</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">A18</button>
                                                    </div>
                                                    <div className="seat-row">
                                                        <button className="seat">A6</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">A10</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">A17</button>
                                                    </div>
                                                    <div className="seat-row">
                                                        <button className="seat">A7</button>
                                                        <button className="seat">A8</button>
                                                        <button className="seat">A9</button>
                                                        <button className="seat">A15</button>
                                                        <button className="seat">A16</button>
                                                    </div>
                                                </div>

                                                <div className="mg-20" style={{ margin: "20px" }}></div>
                                                <div className="seats-grid">
                                                    <h3>Tầng 2</h3>
                                                    <div className="seat-row">
                                                        <button className="seat">B1</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">B22</button>
                                                    </div>
                                                    <div className="seat-row">
                                                        <button className="seat">B2</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">B14</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">B21</button>
                                                    </div>
                                                    <div className="seat-row">
                                                        <button className="seat">B3</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">B13</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">B20</button>
                                                    </div>
                                                    <div className="seat-row">
                                                        <button className="seat">B4</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">B12</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">B19</button>
                                                    </div>
                                                    <div className="seat-row">
                                                        <button className="seat">B5</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">B11</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">B18</button>
                                                    </div>
                                                    <div className="seat-row">
                                                        <button className="seat">B6</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">B10</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">B17</button>
                                                    </div>
                                                    <div className="seat-row">
                                                        <button className="seat">B7</button>
                                                        <button className="seat">B8</button>
                                                        <button className="seat">B9</button>
                                                        <button className="seat">B15</button>
                                                        <button className="seat">B16</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        {/* Phần form điền thông tin */}
                                        <div className="right-section">
                                            <h3>Thông tin đặt vé</h3>
                                            <form>
                                                <label>Ghế đã chọn: </label>
                                                <input type="text" value="A1" disabled />
                                                <label>Giá:</label>
                                                <input type="text" value="0d" disabled />
                                                <label>Họ tên:</label>
                                                <input type="text" placeholder="Họ tên.." />
                                                <label>Số điện thoại:</label>
                                                <input type="text" placeholder="Số điện thoại.." />
                                                <label>Email:</label>
                                                <input type="email" placeholder="Email.." />
                                                <label>Ghi chú:</label>
                                                <textarea className="form-node" name="" id="" placeholder="Ghi chú.."></textarea>
                                                <label>Điểm đi:</label>
                                                <input type="text" disabled />
                                                <label>Điểm đến:</label>
                                                <input type="text" disabled />
                                                <label>Mã khuyến mãi:</label>
                                                <input type="text" placeholder="Mã khuyến mại.." />
                                                <div className="legend">
                                                    <div className="legend-item"><span className="empty-seat"></span> Ghế trống</div>
                                                    <div className="legend-item"><span className="booked-seat"></span> Ghế đã đặt</div>
                                                    <div className="legend-item"><span className="chosen-seat"></span> Ghế đã chọn</div>
                                                    <div className="legend-item"><span className="no-seat"></span> Ghế không bán</div>
                                                </div>
                                                <div className="btn">
                                                    <button className="checkVoucher" type="button">Kiểm tra mã</button>
                                                    <Link to={'/pay'}><button className="submit" type="submit">Tiếp tục</button></Link>

                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}

export default List