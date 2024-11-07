import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Website/listPouptest.css";

const SoDoGhe: React.FC = () => {
    return (
        <>
            <div className="list-poup-popup-content">
                <button className="list-poup-close-btn">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <div className="list-poup-seat-selection">
                    {/* Phần chọn ghế */}
                    <div className="list-poup-seat-layout">
                        <div className="list-poup-left-section-container">
                            <div className="list-poup-left-section">
                                <div className="list-poup-seats-grid">
                                    <h3>Xe Ghế 45 chỗ</h3>
                                    <div
                                        className="list-poup-mg-20"
                                        style={{ margin: "15px" }}
                                    ></div>
                                    <div className="list-poup-seat-row">
                                        <button className="list-poup-seat">
                                            01
                                        </button>
                                        <button className="list-poup-seat">
                                            02
                                        </button>
                                        <button className="list-poup-seat list-poup-seat-hidded"></button>
                                        <button className="list-poup-seat">
                                            03
                                        </button>
                                        <button className="list-poup-seat">
                                            04
                                        </button>
                                    </div>
                                    <div className="list-poup-seat-row">
                                        <button className="list-poup-seat">
                                            05
                                        </button>
                                        <button className="list-poup-seat">
                                            06
                                        </button>
                                        <button className="list-poup-seat list-poup-seat-hidded"></button>
                                        <button className="list-poup-seat">
                                            07
                                        </button>
                                        <button className="list-poup-seat">
                                            08
                                        </button>
                                    </div>
                                    <div className="list-poup-seat-row">
                                        <button className="list-poup-seat">
                                            09
                                        </button>
                                        <button className="list-poup-seat">
                                            10
                                        </button>
                                        <button className="list-poup-seat list-poup-seat-hidded"></button>
                                        <button className="list-poup-seat">
                                            11
                                        </button>
                                        <button className="list-poup-seat">
                                            12
                                        </button>
                                    </div>
                                    <div className="list-poup-seat-row">
                                        <button className="list-poup-seat">
                                            13
                                        </button>
                                        <button className="list-poup-seat">
                                            14
                                        </button>
                                        <button className="list-poup-seat list-poup-seat-hidded"></button>
                                        <button className="list-poup-seat">
                                            15
                                        </button>
                                        <button className="list-poup-seat">
                                            16
                                        </button>
                                    </div>
                                    <div className="list-poup-seat-row">
                                        <button className="list-poup-seat">
                                            17
                                        </button>
                                        <button className="list-poup-seat">
                                            18
                                        </button>
                                        <button className="list-poup-seat list-poup-seat-hidded"></button>
                                        <button className="list-poup-seat">
                                            19
                                        </button>
                                        <button className="list-poup-seat">
                                            20
                                        </button>
                                    </div>
                                    <div className="list-poup-seat-row">
                                        <button className="list-poup-seat">
                                            21
                                        </button>
                                        <button className="list-poup-seat">
                                            22
                                        </button>
                                        <button className="list-poup-seat list-poup-seat-hidded"></button>
                                        <button className="list-poup-seat">
                                            23
                                        </button>
                                        <button className="list-poup-seat">
                                            24
                                        </button>
                                    </div>
                                    <div className="list-poup-seat-row">
                                        <button className="list-poup-seat">
                                            25
                                        </button>
                                        <button className="list-poup-seat">
                                            26
                                        </button>
                                        <button className="list-poup-seat list-poup-seat-hidded"></button>
                                        <button className="list-poup-seat">
                                            27
                                        </button>
                                        <button className="list-poup-seat">
                                            28
                                        </button>
                                    </div>
                                    <div className="list-poup-seat-row">
                                        <button className="list-poup-seat">
                                            29
                                        </button>
                                        <button className="list-poup-seat">
                                            30
                                        </button>
                                        <button className="list-poup-seat list-poup-seat-hidded"></button>
                                        <button className="list-poup-seat">
                                            31
                                        </button>
                                        <button className="list-poup-seat">
                                            32
                                        </button>
                                    </div>
                                    <div className="list-poup-seat-row">
                                        <button className="list-poup-seat">
                                            33
                                        </button>
                                        <button className="list-poup-seat">
                                            34
                                        </button>
                                        <button className="list-poup-seat list-poup-seat-hidded"></button>
                                        <button className="list-poup-seat">
                                            35
                                        </button>
                                        <button className="list-poup-seat">
                                            36
                                        </button>
                                    </div>
                                    <div className="list-poup-seat-row">
                                        <button className="list-poup-seat">
                                            37
                                        </button>
                                        <button className="list-poup-seat">
                                            38
                                        </button>
                                        <button className="list-poup-seat list-poup-seat-hidded"></button>
                                        <button className="list-poup-seat">
                                            39
                                        </button>
                                        <button className="list-poup-seat">
                                            40
                                        </button>
                                    </div>
                                    <div className="list-poup-seat-row">
                                        <button className="list-poup-seat">
                                            41
                                        </button>
                                        <button className="list-poup-seat">
                                            42
                                        </button>
                                        <button className="list-poup-seat">
                                            43
                                        </button>
                                        <button className="list-poup-seat">
                                            44
                                        </button>
                                        <button className="list-poup-seat">
                                            45
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phần form điền thông tin */}
                        <div className="list-poup-right-section">
                            <h3>Thông tin đặt vé</h3>
                            <form>
                                <label>Ghế đã chọn: </label>
                                <input type="text" value="A1" disabled />

                                <label>Giá:</label>
                                <input type="text" value="0đ" disabled />

                                <label>Họ tên:</label>
                                <input type="text" placeholder="Họ tên.." />

                                <label>Số điện thoại:</label>
                                <input
                                    type="text"
                                    placeholder="Số điện thoại.."
                                />

                                <label>Email:</label>
                                <input type="email" placeholder="Email.." />

                                <label>Ghi chú:</label>
                                <textarea
                                    className="list-poup-form-node"
                                    placeholder="Ghi chú.."
                                ></textarea>

                                <label>Điểm đi:</label>
                                <input type="text" disabled />

                                <label>Điểm đến:</label>
                                <input type="text" disabled />

                                <label>Mã khuyến mãi:</label>
                                <input
                                    type="text"
                                    placeholder="Mã khuyến mại.."
                                />

                                <div className="list-poup-btn">
                                    <button
                                        className="list-poup-checkVoucher"
                                        type="button"
                                    >
                                        Kiểm tra mã
                                    </button>
                                    <Link to={"/pay"}>
                                        <button
                                            className="list-poup-submit"
                                            type="submit"
                                        >
                                            Tiếp tục
                                        </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="list-poup-legend">
                        <div className="list-poup-legend-item">
                            <span className="list-poup-empty-seat"></span> 
                            <span style={{color:"12px" , fontWeight:"600"}}> Ghế trống</span>
                        </div>
                        <div className="list-poup-legend-item">
                            <span className="list-poup-booked-seat"></span> <span style={{color:"12px" , fontWeight:"600"}}> Ghế đã đặt</span>
                        </div>
                        <div className="list-poup-legend-item">
                            <span className="list-poup-chosen-seat"></span> <span style={{color:"12px" , fontWeight:"600"}}> Ghế đã bán</span>
                        </div>
                        <div className="list-poup-legend-item">
                            <span className="list-poup-no-seat"></span>  <span style={{color:"12px" , fontWeight:"600"}}> Ghế không bán</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SoDoGhe;
