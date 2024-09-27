import '../styles/Website/popularRoutes.css';
import haGiangImg from '../assets/image/routeBannerHagiang.jpg';
import tuyenQuangImg from '../assets/image/routeBanner.jpg';
import laiChauImg from '../assets/image/routeBannerLaichau.jpg';

const PopularRoutes = () => {
    return (
        <div className="popular-routes-container">
            <h2>Các tuyến phổ biến</h2>
            <div className="popular-routes">
                <div className="route-card">
                    <div className="route-image">
                        <img src={tuyenQuangImg} alt="Tuyên quang" />
                    </div>
                    <h4>Hà Nội - Tuyên Quang</h4>
                    <div className="route-list">
                        <div className="route-item">
                            <div className="flex-route-price">
                                <div className="route-destination">Na Hang</div>
                                <div className="route-price">290.000đ</div>
                            </div>
                            <div className="flex-route-price">
                                <div className="route-info">300km - 6 giờ</div>
                                <div className="route-date">01/10/2024</div>
                            </div>

                        </div>
                        <div className="route-item">
                            <div className="flex-route-price">
                                <div className="route-destination">TP Tuyên Quang</div>
                                <div className="route-price">165.000đ</div>
                            </div>
                            <div className="flex-route-price">
                                <div className="route-info">139km - 3 giờ 12 phút</div>
                                <div className="route-date">01/10/2024</div>
                            </div>
                        </div>
                        <div className="route-item">
                            <div className="flex-route-price">
                                <div className="route-destination">Chiêm Hóa</div>
                                <div className="route-price">190.000đ</div>

                            </div>
                            <div className="flex-route-price">
                                <div className="route-info">200km - 4 giờ</div>
                                <div className="route-date">01/10/2024</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="route-card">
                    <div className="route-image">
                        <img src={laiChauImg} alt="lai chau img" />
                    </div>
                    <h4>Lai châu & Hà Giang</h4>
                    <div className="route-list">
                        <div className="route-item">
                            <div className="flex-route-price">

                                <div className="route-destination">TP Lai Châu</div>
                                <div className="route-price">390.000đ</div>

                            </div>
                            <div className="flex-route-price">
                                <div className="route-info">370km - 10 giờ</div>

                                <div className="route-date">01/10/2024</div>
                            </div>
                        </div>
                        <div className="route-item">
                            <div className="flex-route-price">
                                <div className="route-destination">TP Hà Giang</div>
                                <div className="route-price">230.000đ</div>

                            </div>
                            <div className="flex-route-price">
                                <div className="route-info">280km - 4.5 giờ</div>

                                <div className="route-date">01/10/2024</div>
                            </div>
                        </div>
                        <div className="route-item">
                            <div className="flex-route-price">
                                <div className="route-destination">Cột Cờ Lũng Cú - Hà Giang</div>
                                <div className="route-price">435.000đ</div>

                            </div>
                            <div className="flex-route-price">
                                <div className="route-info">457km - 11 giờ</div>

                                <div className="route-date">01/10/2024</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="route-card">
                    <div className="route-image">
                        <img src={haGiangImg} alt="Ha Giang" />
                    </div>
                    <h4>Hà Nội - Các Tỉnh Khác</h4>
                    <div className="route-list">
                        <div className="route-item">
                            <div className="flex-route-price">

                                <div className="route-destination">TP Bắc Giang</div>
                                <div className="route-price">90.000đ</div>

                            </div>
                            <div className="flex-route-price">
                                <div className="route-info">100km - 1 giờ</div>

                                <div className="route-date">01/10/2024</div>
                            </div>
                        </div>
                        <div className="route-item">
                            <div className="flex-route-price">
                                <div className="route-destination">TP Hải Dương</div>
                                <div className="route-price">110.000đ</div>

                            </div>
                            <div className="flex-route-price">
                                <div className="route-info">83km - 1 giờ</div>

                                <div className="route-date">01/10/2024</div>
                            </div>
                        </div>
                        <div className="route-item">
                            <div className="flex-route-price">
                                <div className="route-destination">Vin Ocen Park</div>
                                <div className="route-price">60.000đ</div>

                            </div>
                            <div className="flex-route-price">
                                <div className="route-info">30km - 45 phút </div>

                                <div className="route-date">01/10/2024</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularRoutes;
