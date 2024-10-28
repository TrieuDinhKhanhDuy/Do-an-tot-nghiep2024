import '../styles/Website/banner.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useBanner } from '@/hooks/useBanner';
import { useEffect } from 'react';

const Banner = () => {

  const { getAllBanners, banners } = useBanner();
  const url_image_backend = 'http://doantotnghiep_backend.test/storage/';
  const settings = {
    infinite: banners.length > 1,  // Tắt infinite nếu chỉ có 1 banner
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: banners.length > 1,  // Tắt autoplay nếu chỉ có 1 banner
    autoplaySpeed: 3000,
    draggable: banners.length > 1,  // Tắt kéo nếu chỉ có 1 banner
  };

  useEffect(() => {
    getAllBanners();
  }, []);

  return (
    <div className="banner-slider">
      <Slider {...settings}>
        {banners.map((bannerData, index) => (
          <div key={index} className="slider-item">  
            <img
              src={url_image_backend + bannerData.image_url}
              alt={`Banner ${index + 1}`}
              className="img_banner"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
