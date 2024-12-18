
import "../styles/Website/mainContent.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from "react";
import { NewsType } from "@/types/INew";
import axios from "axios";
import moment from "moment";

const HighlightNews = () => {
    const settings = {
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
    const [news, setNews] = useState<NewsType[]>([]);

    useEffect(() => {
        // Fetch all news
        axios
            .get('http://doantotnghiep.test/api/information')
            .then((response) => {
                setNews(response.data.data); // Assuming the response data is an array of news
            })
            .catch((err) => {
                console.error(err)
            });
    }, []);
    const formatDate = (date: string): string => {
        return moment(date).format("DD/MM/YYYY");
    };
    return (
        <div className="mainContent-bottom">
            <a href="/news"><h2 className="link-h2" >Tin tức mới nhất</h2></a>
            <Slider {...settings}>
                {news.map((item) => (

                    <div className="magin_outside" key={item.id}>
                        <a className="mainContent-bottom-content" href={`/newsdetail?id=${item.id}`}  >
                            <div className="mainContent-bottom-items">
                                <img src={item.thumbnail_image} alt="" />
                                <p>{item.title}
                                </p>
                                <div className="flex-route-price">
                                    <a href="">{formatDate(item.created_at)}</a>
                                    <a href=""><span>Chi tiết</span></a>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </Slider>


        </div>
    )
}

export default HighlightNews;