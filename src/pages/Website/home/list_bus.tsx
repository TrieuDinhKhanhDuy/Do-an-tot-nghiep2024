import Breadcrumb from "@/components/Breadcrumb";
import {
    faCalendarAlt,
    faMapMarkerAlt,
    faTimes,
    faChevronLeft,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import "../../../styles/Website/BokingForm.css";
import "../../../styles/Website/list_busFix.css";
import "../../../styles/Website/list.css";

interface BusOption {
    id: number;
    route: string;
    time: string;
    type: string;
    availableSeats: number;
    price: string;
    oldPrice?: string; // Giá cũ (nếu có)
    onlineSupport: boolean;
    image: string;
}

const List_BusFix = () => {
    const busOptions: BusOption[] = [
        {
            id: 1,
            route: 'Mỹ Đình - Tuyên Quang',
            time: '08:10',
            type: 'Xe giường nằm',
            availableSeats: 28,
            price: '120.000đ',
            image: '/src/assets/image/bus_giuongnam.png',
            onlineSupport: true,
            oldPrice: '180.000đ', // Giá cũ gạch ngang
        },
        {
            id: 2,
            route: 'Mỹ Đình - Tuyên Quang',
            time: '08:10',
            type: 'Xe 45 chỗ',
            availableSeats: 28,
            price: '120.000đ',
            image: '/src/assets/image/bus45cho.jpg',
            onlineSupport: true,
            oldPrice: '180.000đ', // Giá cũ gạch ngang
        },
        {
            id: 3,
            route: 'Mỹ Đình - Tuyên Quang',
            time: '08:10',
            type: 'Xe giường nằm',
            availableSeats: 28,
            price: '120.000đ',
            image: '/src/assets/image/bus_giuongnam.png',
            onlineSupport: true,
            oldPrice: '180.000đ', // Giá cũ gạch ngang
        },
        {
            id: 3,
            route: 'Mỹ Đình - Tuyên Quang',
            time: '08:10',
            type: 'Xe giường nằm',
            availableSeats: 28,
            price: '120.000đ',
            image: '/src/assets/image/bus_giuongnam.png',
            onlineSupport: true,
            oldPrice: '180.000đ', // Giá cũ gạch ngang
        },
    ];

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isPopupBus45Open, setIsPopupBus45Open] = useState(false);

    const handleSeatSelectBus45 = () => {
        setIsPopupBus45Open(true);
    };

    const handleClosePopupBus45 = () => {
        setIsPopupBus45Open(false);
    };

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
                    <div className="bus-comp-container">
                        {/* Phần bên trái */}
                        <div className="bus-comp-left-sidebar">
                            <div className="bus-comp-sort-options">
                                <p>Sắp xếp theo:</p>
                                <div>
                                    <input type="radio" id="default" name="sort" value="default" defaultChecked />
                                    <label htmlFor="default">Mặc định</label>
                                </div>
                                <div>
                                    <input type="radio" id="priceAsc" name="sort" value="priceAsc" />
                                    <label htmlFor="priceAsc">Giá tăng dần</label>
                                </div>
                                <div>
                                    <input type="radio" id="priceDesc" name="sort" value="priceDesc" />
                                    <label htmlFor="priceDesc">Giá giảm dần</label>
                                </div>
                                <div>
                                    <input type="radio" id="bedBus" name="sort" value="bedBus" />
                                    <label htmlFor="bedBus">Xe giường nằm</label>
                                </div>
                                <div>
                                    <input type="radio" id="normalBus" name="sort" value="normalBus" />
                                    <label htmlFor="normalBus">Xe thường 45 chỗ</label>
                                </div>
                            </div>
                            {/* Banner quảng cáo */}
                            <div className="bus-comp-banner">
                                <img src="/src/assets/image/banner_doc.webp" alt="Quảng cáo xe" />
                            </div>
                        </div>

                        {/* Phần bên phải */}
                        <div className="bus-comp-list" >
                            <div className="bus-comp-option" onClick={handleSeatSelectBus45}>
                                {/* Hình ảnh xe */}
                                <div className="bus-comp-image-container">
                                    <img src='/src/assets/image/bus45cho.jpg' alt='' className="bus-comp-image" />
                                </div>
                                {/* Thông tin xe */}
                                <div className="bus-comp-info">
                                    <div className="bus-comp-info-header">
                                        <h3>Mỹ Đình - Hà Giang</h3>
                                        <p className="bus-comp-price">99.000đ</p>
                                    </div>
                                    <div className="bus-comp-info-header">
                                        <p>🕒 12:00 </p>
                                        <p className="bus-comp-old-price">120.000đ</p>
                                    </div>
                                    <div className="bus-comp-info-header">
                                        <p>Xe 45 chỗ</p>
                                        <p className="bus-comp-support-online">Hỗ trợ thanh toán online</p>
                                    </div>


                                    <div className="bus-comp-info-header">
                                        <p>30 Chỗ trống</p>
                                        {/* Nút chọn chỗ */}
                                        <div className="bus-comp-action">
                                            <button>Chọn chỗ</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {busOptions.map((option) => (
                                <div key={option.id} className="bus-comp-option" onClick={handleSeatSelect}>
                                    {/* Hình ảnh xe */}
                                    <div className="bus-comp-image-container">
                                        <img src={option.image} alt={option.route} className="bus-comp-image" />
                                    </div>
                                    {/* Thông tin xe */}
                                    <div className="bus-comp-info">
                                        <div className="bus-comp-info-header">
                                            <h3>{option.route}</h3>
                                            <p className="bus-comp-price">{option.price}</p>
                                        </div>
                                        <div className="bus-comp-info-header">
                                            <p>🕒 {option.time} </p>
                                            {option.oldPrice && <p className="bus-comp-old-price">{option.oldPrice}</p>}
                                        </div>
                                        <div className="bus-comp-info-header">
                                            <p>{option.type}</p>
                                            {option.onlineSupport && (
                                                <p className="bus-comp-support-online">Hỗ trợ thanh toán online</p>
                                            )}                                        </div>


                                        <div className="bus-comp-info-header">
                                            <p>{option.availableSeats} Chỗ trống</p>
                                            {/* Nút chọn chỗ */}
                                            <div className="bus-comp-action">
                                                <button>Chọn chỗ</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}
                            <div className="pagination">
                                <button className="page-btn">
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                                <button className="page-number active">1</button>
                                <button className="page-number">2</button>
                                <button className="page-number">3</button>
                                <button className="page-number">4</button>
                                <button className="page-number">5</button>
                                <button className="page-btn">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        </div>
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

                                                <div className="btn">
                                                    <button className="checkVoucher" type="button">Kiểm tra mã</button>
                                                    <Link to={'/pay'}><button className="submit" type="submit">Tiếp tục</button></Link>

                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                    <div className="legend">
                                        <div className="legend-item"><span className="empty-seat"></span> Ghế trống</div>
                                        <div className="legend-item"><span className="booked-seat"></span> Ghế đã đặt</div>
                                        <div className="legend-item"><span className="chosen-seat"></span> Ghế đã chọn</div>
                                        <div className="legend-item"><span className="no-seat"></span> Ghế không bán</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {isPopupBus45Open && (
                        <div className="popup-overlay">
                            <div className="popup-content">
                                <button className="close-btn" onClick={handleClosePopupBus45}><FontAwesomeIcon icon={faTimes} /></button>
                                <div className="seat-selection">
                                    {/* Phần chọn ghế */}
                                    <div className="seat-layout">

                                        <div className="left-section-container">
                                            <div className="left-section">

                                                <div className="seats-grid">
                                                    <h3>Xe Ghế 45 chỗ</h3>
                                                    <div className="mg-20" style={{ margin: "40px" }}></div>
                                                    <div className="seat-row">
                                                        <button className="seat">01</button>
                                                        <button className="seat">02</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">03</button>
                                                        <button className="seat">04</button>
                                                    </div>
                                                    <div className="seat-row">
                                                        <button className="seat">05</button>
                                                        <button className="seat">06</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">07</button>
                                                        <button className="seat">08</button>
                                                    </div>
                                                    <div className="seat-row">
                                                        <button className="seat">09</button>
                                                        <button className="seat">10</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">11</button>
                                                        <button className="seat">12</button>
                                                    </div>
                                                    <div className="seat-row">
                                                        <button className="seat">13</button>
                                                        <button className="seat">14</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">15</button>
                                                        <button className="seat">16</button>
                                                    </div>
                                                    <div className="seat-row">
                                                        <button className="seat">17</button>
                                                        <button className="seat">18</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">19</button>
                                                        <button className="seat">20</button>
                                                    </div>
                                                    <div className="seat-row">
                                                        <button className="seat">21</button>
                                                        <button className="seat">22</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">23</button>
                                                        <button className="seat">24</button>
                                                    </div>
                                                    <div className="seat-row">
                                                        <button className="seat">25</button>
                                                        <button className="seat">26</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">27</button>
                                                        <button className="seat">28</button>
                                                    </div>
                                                    <div className="seat-row">
                                                        <button className="seat">29</button>
                                                        <button className="seat">30</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">31</button>
                                                        <button className="seat">32</button>
                                                    </div>
                                                    <div className="seat-row">
                                                        <button className="seat">33</button>
                                                        <button className="seat">34</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">35</button>
                                                        <button className="seat">36</button>
                                                    </div>
                                                    <div className="seat-row">
                                                        <button className="seat">37</button>
                                                        <button className="seat">38</button>
                                                        <button className="seat seat-hidded"></button>
                                                        <button className="seat">39</button>
                                                        <button className="seat">40</button>
                                                    </div>
                                                    <div className="seat-row">
                                                        <button className="seat">41</button>
                                                        <button className="seat">42</button>
                                                        <button className="seat">43</button>
                                                        <button className="seat">44</button>
                                                        <button className="seat">45</button>
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

                                                <div className="btn">
                                                    <button className="checkVoucher" type="button">Kiểm tra mã</button>
                                                    <Link to={'/pay'}><button className="submit" type="submit">Tiếp tục</button></Link>

                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                    <div className="legend">
                                        <div className="legend-item"><span className="empty-seat"></span> Ghế trống</div>
                                        <div className="legend-item"><span className="booked-seat"></span> Ghế đã đặt</div>
                                        <div className="legend-item"><span className="chosen-seat"></span> Ghế đã chọn</div>
                                        <div className="legend-item"><span className="no-seat"></span> Ghế không bán</div>
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

export default List_BusFix