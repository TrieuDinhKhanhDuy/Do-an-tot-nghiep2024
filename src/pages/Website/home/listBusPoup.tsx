import {
    faChevronLeft,
    faChevronRight,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../../../styles/Website/BokingForm.css";
import "../../../styles/Website/list.css";
import "../../../styles/Website/list_busFix.css";

type Props = {};

const listBusPoup = (props: Props) => {
    return (
        <div className="bookingForm-container">
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
                                <input
                                    type="radio"
                                    id="default"
                                    name="sort"
                                    value="default"
                                    defaultChecked
                                />
                                <label htmlFor="default">Mặc định</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="priceAsc"
                                    name="sort"
                                    value="priceAsc"
                                />
                                <label htmlFor="priceAsc">Giá tăng dần</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="priceDesc"
                                    name="sort"
                                    value="priceDesc"
                                />
                                <label htmlFor="priceDesc">Giá giảm dần</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="bedBus"
                                    name="sort"
                                    value="bedBus"
                                />
                                <label htmlFor="bedBus">Xe giường nằm</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="normalBus"
                                    name="sort"
                                    value="normalBus"
                                />
                                <label htmlFor="normalBus">
                                    Xe thường 45 chỗ
                                </label>
                            </div>
                        </div>
                        {/* Banner quảng cáo */}
                        <div className="bus-comp-banner">
                            <img
                                src="/src/assets/image/banner_doc.webp"
                                alt="Quảng cáo xe"
                            />
                        </div>
                    </div>

                    {/* Phần bên phải */}
                    <div className="bus-comp-list">
                        <div className="bus-comp-option">
                            {/* Hình ảnh xe */}
                            <div className="bus-comp-image-container">
                                <img
                                    src="/src/assets/image/bus45cho.jpg"
                                    alt=""
                                    className="bus-comp-image"
                                />
                            </div>
                            {/* Thông tin xe */}
                            <div className="bus-comp-info">
                                <div className="bus-comp-info-header">
                                    <h3>Mỹ Đình - Hà Giang</h3>
                                    <p className="bus-comp-price">99.000đ</p>
                                </div>
                                <div className="bus-comp-info-header">
                                    <p>🕒 12:00 </p>
                                    <p className="bus-comp-old-price">
                                        120.000đ
                                    </p>
                                </div>
                                <div className="bus-comp-info-header">
                                    <p>Xe 45 chỗ</p>
                                    <p className="bus-comp-support-online">
                                        Hỗ trợ thanh toán online
                                    </p>
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
                        <div className="bus-comp-option">
                            {/* Hình ảnh xe */}
                            <div className="bus-comp-image-container">
                                <img
                                    src="path/to/image"
                                    alt="Bus Image"
                                    className="bus-comp-image"
                                />
                            </div>
                            {/* Thông tin xe */}
                            <div className="bus-comp-info">
                                <div className="bus-comp-info-header">
                                    <h3>Tên tuyến đường</h3>
                                    <p className="bus-comp-price">Giá vé VNĐ</p>
                                </div>
                                <div className="bus-comp-info-header">
                                    <p>🕒 Giờ khởi hành</p>
                                    <p className="bus-comp-old-price">
                                        Giá cũ VNĐ
                                    </p>
                                </div>
                                <div className="bus-comp-info-header">
                                    <p>Tên xe</p>
                                    <p className="bus-comp-support-online">
                                        Hỗ trợ thanh toán online
                                    </p>
                                </div>
                                <div className="bus-comp-info-header">
                                    <p>Số chỗ trống Chỗ trống</p>
                                    {/* Nút chọn chỗ */}
                                    <div className="bus-comp-action">
                                        <button>Chọn chỗ</button>
                                    </div>
                                </div>
                            </div>
                        </div>

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
             
            </div>
        </div>
    );
};

export default listBusPoup;
