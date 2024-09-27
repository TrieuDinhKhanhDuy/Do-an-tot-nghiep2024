import Breadcrumb from "@/components/Breadcrumb";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import news2 from "../../../assets/image/news2.png";
import "../../../styles/Website/News.css";

const News = () => {
    const duongDan = [
        { nhan: "Trang Chủ", duongDan: "/" },
        { nhan: "Tin Tức", duongDan: "news" },
    ];
    return (
        <>
            <Breadcrumb items={duongDan} />

            <div className="news-container">
                <h3 className="news-h3">Tin Tức</h3>
                <div className="news">
                    <div className="news__main">
                        <a href="/newsdetail">
                            <img
                                src={news2}
                                alt="Main News"
                                className="news__main-image"
                            />
                            <div className="news__main-content">
                                <h2 className="news__main-title">
                                    ĐỀN HẠ TUYÊN QUANG VÀ NHỮNG CÂU CHUYỆN XUNG
                                    QUANH
                                </h2>
                                <p className="news__date">
                                    Ngày đăng: 20-11-2023
                                </p>
                                <p className="news__description">
                                    Đền Hạ Tuyên Quang là một công trình lâu
                                    đời, có kiến trúc đẹp với nghệ thuật chạm
                                    khắc gỗ tinh xảo, tọa lạc giữa không gian u
                                    tịch, lưng tựa núi, mặt hướng ra dòng sông
                                    Lô lịch sử...
                                </p>
                            </div>
                        </a>
                    </div>

                    <div className="news__related">
                        <div className="news-related-items">
                            <img src={news2} alt="" />
                            <div className="news-related-items-content">
                                <h4>
                                    ĐỀN HẠ TUYÊN QUANG VÀ NHỮNG CÂU CHUYỆN XUNG
                                    QUANH
                                </h4>
                                <p>Ngày đăng: 20-11-2023</p>
                            </div>
                        </div>
                        <div className="news-related-items">
                            <img src={news2} alt="" />
                            <div className="news-related-items-content">
                                <h4>
                                    ĐỀN HẠ TUYÊN QUANG VÀ NHỮNG CÂU CHUYỆN XUNG
                                    QUANH
                                </h4>
                                <p>Ngày đăng: 20-11-2023</p>
                            </div>
                        </div>
                        <div className="news-related-items">
                            <img src={news2} alt="" />
                            <div className="news-related-items-content">
                                <h4>
                                    ĐỀN HẠ TUYÊN QUANG VÀ NHỮNG CÂU CHUYỆN XUNG
                                    QUANH
                                </h4>
                                <p>Ngày đăng: 20-11-2023</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="news-list">
                    <a href="/newsdetail">
                        <div className="news-list-items">
                            <div className="new-list-items-image">
                                <img src={news2} alt="" />
                            </div>
                            <div className="news-list-items-content">
                                <h4>SUỐI KHOÁNG MỸ LÂM</h4>
                                <p>
                                    Nhắc đến Tuyên Quang, ta thường nhớ ngay đến
                                    đình Hồng Thái, cây đa Tân Trào, đến lán Nà
                                    Lừa… Song không mấy người biết đến suối
                                    khoáng Mỹ Lâm, một trong số ít những mỏ nước
                                    khoáng tốt nhất miền Bắc, Việt Nam.
                                </p>
                                <p>Ngày đăng: 20-11-2023</p>
                            </div>
                        </div>
                    </a>
                    <a href="/newsdetail">
                        <div className="news-list-items">
                            <div className="new-list-items-image">
                                <img src={news2} alt="" />
                            </div>
                            <div className="news-list-items-content">
                                <h4>SUỐI KHOÁNG MỸ LÂM</h4>
                                <p>
                                    Nhắc đến Tuyên Quang, ta thường nhớ ngay đến
                                    đình Hồng Thái, cây đa Tân Trào, đến lán Nà
                                    Lừa… Song không mấy người biết đến suối
                                    khoáng Mỹ Lâm, một trong số ít những mỏ nước
                                    khoáng tốt nhất miền Bắc, Việt Nam.
                                </p>
                                <p>Ngày đăng: 20-11-2023</p>
                            </div>
                        </div>
                    </a>
                    <a href="/newsdetail">
                        <div className="news-list-items">
                            <div className="new-list-items-image">
                                <img src={news2} alt="" />
                            </div>
                            <div className="news-list-items-content">
                                <h4>SUỐI KHOÁNG MỸ LÂM</h4>
                                <p>
                                    Nhắc đến Tuyên Quang, ta thường nhớ ngay đến
                                    đình Hồng Thái, cây đa Tân Trào, đến lán Nà
                                    Lừa… Song không mấy người biết đến suối
                                    khoáng Mỹ Lâm, một trong số ít những mỏ nước
                                    khoáng tốt nhất miền Bắc, Việt Nam.
                                </p>
                                <p>Ngày đăng: 20-11-2023</p>
                            </div>
                        </div>
                    </a>
                    <a href="/newsdetail">
                        <div className="news-list-items">
                            <div className="new-list-items-image">
                                <img src={news2} alt="" />
                            </div>
                            <div className="news-list-items-content">
                                <h4>SUỐI KHOÁNG MỸ LÂM</h4>
                                <p>
                                    Nhắc đến Tuyên Quang, ta thường nhớ ngay đến
                                    đình Hồng Thái, cây đa Tân Trào, đến lán Nà
                                    Lừa… Song không mấy người biết đến suối
                                    khoáng Mỹ Lâm, một trong số ít những mỏ nước
                                    khoáng tốt nhất miền Bắc, Việt Nam.
                                </p>
                                <p>Ngày đăng: 20-11-2023</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="news-pagination">
                    <a href="#" className="news-pagination-item prev">
                        <FontAwesomeIcon icon={faChevronLeft} style={{fontSize:'13px', padding:'6px 2px'}}/>
                    </a>
                    <a href="#" className="news-pagination-item">
                        1
                    </a>
                    <a href="#" className="news-pagination-item">
                        2
                    </a>
                    <a href="#" className="news-pagination-item">
                        3
                    </a>
                    <a href="#" className="news-pagination-item">
                        4
                    </a>
                    <a href="#" className="news-pagination-item">
                        5
                    </a>
                    <a href="#" className="news-pagination-item next">
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:'13px', padding:'6px 2px'}}/>
                    </a>
                </div>
            </div>
        </>
    );
};

export default News;
