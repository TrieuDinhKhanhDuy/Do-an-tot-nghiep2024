
import "../styles/Website/mainContent.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from "react";
import { PromotionCategory } from "@/types/IVoucher";
import axios from "axios";


const HighlightVoucher = () => {

  const [promotions, setPromotions] = useState<PromotionCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const handleClickLinkVoucher = () => {
    window.location.href = '/listvoucher';
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
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
  useEffect(() => {

    const fetchPromotions = async () => {
      const userRespon = JSON.parse(localStorage.getItem('userId') || '{}');
      const userId = userRespon?.id;

      if (!userId) {
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(`http://doantotnghiep.test/api/promotions?user_id=${userId}`);
        setPromotions(response.data.data);
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false);
      }
    };


    fetchPromotions()
  }, []);
  const url_image_backend = "http://doantotnghiep.test/storage/";
  return (
    <div >
      <div className="mainContent-top-image">
        {promotions.map(promotions_item => (<>
          <h3 className="link-h2" onClick={handleClickLinkVoucher} >{promotions_item.name}</h3>
          <Slider {...settings}>
            {promotions_item.promotions.map(item => (
              <div className="magin_outside">
                <div>
                  <a className="link_voucher" href={`/listvoucher/voucherdetail?id=${item.id}`}><img src={url_image_backend + item.image} alt={item.code} className="img_voucher" /></a>
                </div>
              </div>
            ))}
          </Slider>
        </>))}
      </div>
    </div>
  )
}

export default HighlightVoucher;