
import "../styles/Website/mainContent.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import tintuc1 from "../assets/image/tin tuc 1.png";
import tintuc2 from "../assets/image/tin tuc 2.png";
import tintuc3 from "../assets/image/tin tuc 3.png";

const HighlightNews = () => {


    const handleClickLinkDetailNews = () => {
        window.location.href = '/newsdetail';
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
            <div className="mainContent-bottom">
                <a href="/news"><h2 className="link-h2" >Tin tức mới nhất</h2></a>
                <Slider {...settings}>

                    <div className="magin_outside">
                        <div className="mainContent-bottom-content" onClick={handleClickLinkDetailNews}>
                            <div className="mainContent-bottom-items">
                                <img src={tintuc1} alt="" />
                                <p>Thác Mơ Tuyên Quang - Thiếu nữ duyên dáng giữa núi rừng Na Hang
                                </p>
                                <div className="flex-route-price">
                                    <a href="">18/10/2024</a>
                                    <a href=""><span>Chi tiết</span></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="magin_outside">
                        <div className="mainContent-bottom-content" onClick={handleClickLinkDetailNews}>
                            <div className="mainContent-bottom-items">
                                <img src={tintuc2} alt="" />
                                <p>Thác Mơ Tuyên Quang - Thiếu nữ duyên dáng giữa núi rừng Na Hang
                                </p>
                                <div className="flex-route-price">
                                    <a href="">18/10/2024</a>
                                    <a href=""><span>Chi tiết</span></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="magin_outside">
                        <div className="mainContent-bottom-content" onClick={handleClickLinkDetailNews}>
                            <div className="mainContent-bottom-items">
                                <img src={tintuc3} alt="" />
                                <p>Thác Mơ Tuyên Quang - Thiếu nữ duyên dáng giữa núi rừng Na Hang
                                </p>
                                <div className="flex-route-price">
                                    <a href="">18/10/2024</a>
                                    <a href=""><span>Chi tiết</span></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="magin_outside">
                        <div className="mainContent-bottom-content" onClick={handleClickLinkDetailNews}>
                            <div className="mainContent-bottom-items">
                                <img src={tintuc2} alt="" />
                                <p>Thác Mơ Tuyên Quang - Thiếu nữ duyên dáng giữa núi rừng Na Hang
                                </p>
                                <div className="flex-route-price">
                                    <a href="">18/10/2024</a>
                                    <a href=""><span>Chi tiết</span></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="magin_outside">
                        <div className="mainContent-bottom-content" onClick={handleClickLinkDetailNews}>
                            <div className="mainContent-bottom-items">
                                <img src={tintuc3} alt="" />
                                <p>Thác Mơ Tuyên Quang - Thiếu nữ duyên dáng giữa núi rừng Na Hang
                                </p>
                                <div className="flex-route-price">
                                    <a href="">18/10/2024</a>
                                    <a href=""><span>Chi tiết</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>

            </div>
    )
}

export default HighlightNews;