import Breadcrumb from "@/components/Breadcrumb";
import "../../../styles/Website/News.css";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { NewsType } from "@/types/INew";

const News = () => {
    const duongDan = [
        { nhan: "Trang Chủ", duongDan: "/" },
        { nhan: "Tin Tức", duongDan: "news" },
    ];

    const [news, setNews] = useState<NewsType[]>([]);

    useEffect(() => {
        // Fetch all news
        axios
            .get('http://doantotnghiep.test/api/information')
            .then((response) => {
                setNews(response.data.data);
                console.log('jehehe', response.data.data);

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const formatDate = (date: string): string => {
        return moment(date).format("DD/MM/YYYY");
    };
    const url_image_backend = "http://doantotnghiep.test/storage/";

    return (
        <>
            <Breadcrumb items={duongDan} />

            <div className="news-container">
                <h3 className="news-h3">Tin Tức</h3>
                <div className="news">
                    <div className="news__main">
                        <a href="/newsdetail">
                            <img
                                src={'https://baotuyenquang.com.vn/media/images/megastory/img_20210626083553.jpg'}
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
                            <img src={'https://i1-dulich.vnecdn.net/2022/07/03/2-Thanh-Xuong-Giang-1656785461.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=jYgqMdJmZYXHTXVhNqv59A'} alt="" />
                            <div className="news-related-items-content">
                                <h4>
                                    ĐỀN HẠ TUYÊN QUANG VÀ NHỮNG CÂU CHUYỆN XUNG
                                    QUANH
                                </h4>
                                <p>Ngày đăng: 20-11-2023</p>
                            </div>
                        </div>
                        <div className="news-related-items">
                            <img src={'https://dulichviet.com.vn/images/bandidau/check-in-18-dia-diem-du-lich-bac-giang-so-huu-canh-dep-an-tuong-nhat.jpg'} alt="" />
                            <div className="news-related-items-content">
                                <h4>
                                    ĐỀN HẠ TUYÊN QUANG VÀ NHỮNG CÂU CHUYỆN XUNG
                                    QUANH
                                </h4>
                                <p>Ngày đăng: 20-11-2023</p>
                            </div>
                        </div>
                        <div className="news-related-items">
                            <img src={'https://dulichviet.com.vn/images/bandidau/ho-cam-son-bac-giang.jpg'} alt="" />
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
                    {news.map((item) => (
                        <a href={`/newsdetail?id=${item.id}`} key={item.id}>
                            <div className="news-list-items">
                                <div className="new-list-items-image">
                                    <img src={url_image_backend+item.thumbnail_image} alt="" />
                                </div>
                                <div className="news-list-items-content">
                                    <h4>{item.title}</h4>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: item.content,
                                        }}
                                    />
                                    <br />
                                    <p>Ngày đăng: {formatDate(item.created_at)}</p>
                                </div>
                            </div>
                        </a>
                    ))}


                </div>
            </div>
        </>
    );
};

export default News;
