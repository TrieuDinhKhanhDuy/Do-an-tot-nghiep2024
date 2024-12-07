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
import Breadcrumb from "@/components/Breadcrumb";
import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import axios from "axios";
import { Promotion } from "@/types/IVoucher";

const vouchers = [
    { id: 1, title: "Flash Sale", imageUrl: image2, description: "Thứ 3 hàng tuần - Flash Sale đến 50%" },
    { id: 2, title: "Giảm 25%", imageUrl: image1, description: "Giảm 25% cho khách hàng lần đầu" },
    { id: 3, title: "Giảm 20%", imageUrl: image3, description: "Giảm 20% cho khách hàng mới" },
    { id: 4, title: "Giảm 100K", imageUrl: image2, description: "Giảm 100K khi thanh toán" },
    { id: 5, title: "Giảm 50K", imageUrl: image1, description: "Giảm 50K khi thanh toán" },
];
const ListVoucher = () => {
    const url_image_backend = "http://doantotnghiep.test/storage/";
    const settings = {
        centerPadding: '20px',
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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

    const settings2 = {
        centerPadding: '20px',
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
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

    const settings3 = {
        centerPadding: '20px',
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
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
        window.location.href = 'listvoucher/voucherdetail';
    };

    const duongDan = [
        { nhan: "Trang Chủ", duongDan: "/" },
        { nhan: "Voucher", duongDan: "/listvoucher" },
    ];
    const [promotions, setPromotions] = useState<Promotion[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const fetchPromotions = async () => {
            const userRespon = JSON.parse(sessionStorage.getItem('userId') || '{}');
            const userId = userRespon?.id;

            if (!userId) {
                setError('User ID is not available.');
                setLoading(false);
                return;
            }

            try {
                // Gọi API với user_id
                const response = await axios.get(`http://doantotnghiep.test/api/promotions?user_id=${userId}`);
                setPromotions(response.data.data); // Lưu dữ liệu khuyến mãi
            } catch (error) {
                setError('Error fetching promotions');
            } finally {
                setLoading(false); // Đánh dấu kết thúc việc lấy dữ liệu
            }
        };


        fetchPromotions()
    }, []);

    return (
        <>

            <div className="flash-sale-banner">
            </div>
            <Breadcrumb items={duongDan} />

            <div className="voucher-carousel-container">
                {/* <h1 className="voucher-carousel-title">Ưu đãi nổi bật</h1> */}
                <Slider {...settings}>
                    {promotions.map(promotions_item => (
                        <a className="magin_outside" href= {`listvoucher/voucherdetail?id=${promotions_item.id}`}>
                            <div  key={promotions_item?.code} className="voucher-card" >
                                <img src={url_image_backend + promotions_item.image} alt={promotions_item.title} className="voucher-image" />
                                <h2 className="voucher-title">{promotions_item.title}</h2>
                                <p className="voucher-description">{promotions_item.description}</p>
                            </div>
                        </a>
                    ))}
                </Slider>
            </div>

        </>
    );
};

export default ListVoucher;
