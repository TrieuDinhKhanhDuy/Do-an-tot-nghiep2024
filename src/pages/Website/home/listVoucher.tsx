import "../../../styles/Website/NewsDetail.css";
import "../../../styles/Website/mainContent.css";
import "../../../styles/Website/voucher.css"

import 'react-toastify/dist/ReactToastify.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from "../../../assets/image/banner_voucher.jfif";
import image2 from "../../../assets/image/banner_voucher2.jfif";
import image3 from "../../../assets/image/banner_voucher3.jfif";
const vouchers = [
    { id: 1, title: "Flash Sale", imageUrl: image2, description: "Thứ 3 hàng tuần - Flash Sale đến 50%" },
    { id: 2, title: "Giảm 25%", imageUrl: image1, description: "Giảm 25% cho khách hàng lần đầu" },
    { id: 3, title: "Giảm 20%", imageUrl: image3, description: "Giảm 20% cho khách hàng mới" },
    { id: 4, title: "Giảm 100K", imageUrl: image2, description: "Giảm 100K khi thanh toán" },
    { id: 5, title: "Giảm 50K", imageUrl: image1, description: "Giảm 50K khi thanh toán" },
];
const ListVoucher = () => {
    const settings = {
        centerMode: true,
        centerPadding: '20px',
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

    const handleClickLinkDetailVoucher = () => {
        window.location.href = '/voucherdetail'; 
    };
    return (
        <>
            <div className="flash-sale-banner">
            </div>

            <div className="voucher-carousel-container">
                <h1 className="voucher-carousel-title">Ưu đãi nổi bật</h1>
                <Slider {...settings}>
                    {vouchers.map(voucher => (
                        <div className="magin_outside">
                            <div key={voucher.id} className="voucher-card" onClick={handleClickLinkDetailVoucher}>
                                <img src={voucher.imageUrl} alt={voucher.title} className="voucher-image" />
                                <h2 className="voucher-title">{voucher.title}</h2>
                                <p className="voucher-description">{voucher.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="voucher-carousel-container">
                <h1 className="voucher-carousel-title">Ưu đãi chớp nhoáng</h1>
                <Slider {...settings}>
                    {vouchers.map(voucher => (
                        <div className="magin_outside">
                            <div key={voucher.id} className="voucher-card">
                                <img src={voucher.imageUrl} alt={voucher.title} className="voucher-image" />
                                <h2 className="voucher-title">{voucher.title}</h2>
                                <p className="voucher-description">{voucher.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="voucher-carousel-container">
                <h1 className="voucher-carousel-title">Ưu đãi đối tác</h1>
                <Slider {...settings}>
                    {vouchers.map(voucher => (
                        <div className="magin_outside">
                            <div key={voucher.id} className="voucher-card">
                                <img src={voucher.imageUrl} alt={voucher.title} className="voucher-image" />
                                <h2 className="voucher-title">{voucher.title}</h2>
                                <p className="voucher-description">{voucher.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default ListVoucher;
