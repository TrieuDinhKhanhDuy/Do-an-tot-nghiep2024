import '../styles/Website/banner.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useBanner } from '@/hooks/useBanner';
import { useEffect } from 'react';


const Banner = () => {

  const { getAllBanners, banners } = useBanner();
  const url_image_backend = 'http://doantotnghiep.test/storage/';
  const settings = {
    infinite: banners.length > 1,  
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: banners.length > 1, 
    autoplaySpeed: 3000,
    draggable: banners.length > 1,  
  };

  useEffect(() => {
    getAllBanners();
  }, []);

  return (
    <div className="img_banner">
      {/* <Slider {...settings} className='slick-slider' > */}
        {banners.map((bannerData, index) => (
          <div key={index} className="img_banner">  
            <img
              src={url_image_backend + bannerData.image_url}
              alt={`Banner ${index + 1}`}
              className="img_banner"
            />
          </div>
        ))}
      {/* </Slider> */}
    </div>
  );
};

export default Banner;