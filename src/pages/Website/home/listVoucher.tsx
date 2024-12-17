import "../../../styles/Website/NewsDetail.css";
import "../../../styles/Website/mainContent.css";
import "../../../styles/Website/voucher.css"
import 'react-toastify/dist/ReactToastify.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Breadcrumb from "@/components/Breadcrumb";
import { useEffect, useState } from "react";
import axios from "axios";
import { PromotionCategory } from "@/types/IVoucher";

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
    const [promotions, setPromotions] = useState<PromotionCategory[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const fetchPromotions = async () => {
            const userRespon = JSON.parse(localStorage.getItem('userId') || '{}');
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
            {promotions.map(promotions_item => (
                <div className="voucher-carousel-container">
                    <h1 className="voucher-carousel-title">{promotions_item.name}</h1>
                    <Slider {...settings}>
                        {promotions_item.promotions.map(item => (
                            <a className="magin_outside" href={`listvoucher/voucherdetail?id=${item.id}`}>
                                <div key={item?.code} className="voucher-card" >
                                    <img src={url_image_backend + item.image} alt={item.title} className="voucher-image" />
                                    <h2 className="voucher-title">{item.title}</h2>
                                    <p className="voucher-description">{item.description}</p>
                                </div>
                            </a>
                        ))}
                    </Slider>
                </div>
            ))}
        </>
    );
};

export default ListVoucher;
