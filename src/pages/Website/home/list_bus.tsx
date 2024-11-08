import Breadcrumb from "@/components/Breadcrumb";
import {
    faTimes,
    faChevronLeft,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/Website/BokingForm.css";
import "../../../styles/Website/list_busFix.css";
import "../../../styles/Website/list.css";
import DbRecord from "@/types/IBus";
import axios from "axios";
import BookingFormComponent from "@/components/BookingForm";
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import numeral from 'numeral';
import Swal from "sweetalert2";
import { BookingFormData } from "@/types/IBooking";



const List_BusFix = () => {
    const [buses, setBuses] = useState<DbRecord[]>([]);
    const url_image_backend = 'http://doantotnghiep_backend.test/storage/';
    const [searchParams, setSearchParams] = useState<BookingFormData | null>(null);
    const location = useLocation();
    const [selectedBus, setSelectedBus] = useState<DbRecord | null>(null); // Lưu trữ thông tin chuyến xe đã chọn

    const duongDan = [
        { nhan: 'Trang Chủ', duongDan: '/' },
        { nhan: 'List Vé', duongDan: 'list' },
    ];
    const [isPopupBus45Open, setIsPopupBus45Open] = useState(false);
    const handleSeatSelectBus45 = () => {
        setIsPopupBus45Open(true);
    };
    const handleClosePopupBus45 = () => {
        setIsPopupBus45Open(false);
    };

    const [seatPrice, setSeatPrice] = useState(0);
    const fetchFilteredTrips = async () => {
        if (!searchParams) return; // Không gọi API nếu chưa có tham số tìm kiếm

        try {
            const res = await axios.get("http://doantotnghiep_backend.test/api/home/show", {
                params: {
                    start_stop_id: searchParams.startLocation,
                    end_stop_id: searchParams.endLocation,
                    date: searchParams.departureDate,
                },
            });
            setBuses(res.data); // Cập nhật danh sách chuyến đi
            nav(`/list?start=${searchParams.startLocation}&end=${searchParams.endLocation}&date=${searchParams.departureDate}`);
            if (res.data.length > 0) {
                const firstBus = res.data[0];
                setSeatPrice(parseFloat(firstBus.fare)); // Lấy giá từ dữ liệu chuyến
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            Swal.fire({
                title: "Chưa Có Thông Tin Chuyến!",
                text: "Không có chuyến phù hợp cho tìm kiếm của ban!",
                icon: "error",
                showConfirmButton: false,
                allowEscapeKey: true,
            });
        }
    };

    //lấy thông tin trên url thực hiện yc, tương tự hàm fetchFilteredTrips()
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const startLocation = queryParams.get('start');
        const endLocation = queryParams.get('end');
        const departureDate = queryParams.get('date');

        if (startLocation && endLocation && departureDate) {
            setSearchParams({
                startLocation,
                endLocation,
                departureDate,
            });
        }
    }, [location.search]);

    //chạy hàm gọi api theo yêu cầu
    useEffect(() => {
        fetchFilteredTrips();
    }, [searchParams]);


    // Cập nhật tham số tìm kiếm
    const handleSearch = (data: BookingFormData) => {
        setSearchParams(data);
    };
    // Lưu thông tin chuyến xe đã chọn
    const handleSeatSelectTidcet = async (buses: DbRecord) => {
        const queryParams = new URLSearchParams(location.search);
        const startLocation = queryParams.get('start');
        const endLocation = queryParams.get('end');
        setSelectedBus(buses);
        nav(`/choseseat?trip_id=${buses?.trip_id}&bus_id=${buses?.bus_id}&fare=${buses?.fare}&route_id=${buses?.route_id}&time_start=${buses?.time_start}&date=${buses?.date}&id_start_stop=${startLocation}&id_end_stop=${endLocation}`);
    };




    const nav = useNavigate();

    return (
        <>
            <Breadcrumb items={duongDan} />
            <div className="bookingForm-container">
                <BookingFormComponent onSearch={handleSearch} />
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
                            {buses.map((buses) => {
                                const formattedTime = format(new Date(`1970-01-01T${buses.time_start}Z`), 'HH:mm');
                                const formattedFare = numeral(buses.fare).format('0,0');

                                return (
                                    <div key={buses.trip_id} className="bus-comp-option" onClick={() => handleSeatSelectTidcet(buses)}>
                                        {/* Hình ảnh xe */}
                                        <div className="bus-comp-image-container">
                                            <img src={url_image_backend + buses.bus_image} alt={url_image_backend + buses.bus_image} className="bus-comp-image" />
                                        </div>
                                        {/* Thông tin xe */}
                                        <div className="bus-comp-info">
                                            <div className="bus-comp-info-header">
                                                <h3>{buses.route_name}</h3>
                                                <p className="bus-comp-price">{formattedFare}VNĐ</p>
                                            </div>
                                            <div className="bus-comp-info-header">
                                                <p>🕒 {formattedTime} </p>
                                                <p className="bus-comp-old-price">200000đ</p>
                                            </div>
                                            <div className="bus-comp-info-header">
                                                <p>{buses.name_bus}</p>
                                                <p className="bus-comp-support-online">Hỗ trợ thanh toán online</p>
                                            </div>


                                            <div className="bus-comp-info-header">
                                                <p>{buses.total_seats} Chỗ trống</p>
                                                {/* Nút chọn chỗ */}
                                                <div className="bus-comp-action">
                                                    <button>Chọn chỗ</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}
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