import image1 from "../assets/image/banner_voucher.jfif";
import image2 from "../assets/image/banner_voucher2.jfif";
import image3 from "../assets/image/banner_voucher3.jfif";
import "../styles/Website/mainContent.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const HighlightVoucher = () => {


  const handleClickLinkVoucher = () => {
    window.location.href = '/listvoucher';
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
    <div >
      <h3 className="link-h2" onClick={handleClickLinkVoucher} >Ưu đãi dành cho bạn</h3>
      <div className="mainContent-top-image">
        <Slider {...settings}>

        <div className="magin_outside">
          <div>
            <a className="link_voucher" href="/voucherdetail"><img src={image1} alt="" className="img_voucher" /></a>
          </div>
        </div>

        <div className="magin_outside">
          <div>
            <a className="link_voucher" href="/voucherdetail"><img src={image2} alt="" className="img_voucher" /></a>
          </div>
        </div>

        <div className="magin_outside">
          <div>
            <a className="link_voucher" href="/voucherdetail"><img src={image3} alt="" className="img_voucher" /></a>
          </div>
        </div>

        <div className="magin_outside">
          <div>
            <a className="link_voucher" href="/voucherdetail"><img src={image2} alt="" className="img_voucher" /></a>
          </div>
        </div>
        <div className="magin_outside">
          <div>
            <a className="link_voucher" href="/voucherdetail"><img src={image1} alt="" className="img_voucher" /></a>
          </div>
        </div>
        <div className="magin_outside">
          <div>
            <a className="link_voucher" href="/voucherdetail"><img src={image3} alt="" className="img_voucher" /></a>
          </div>
        </div>
        </Slider>

      </div>

    </div>
  )
}

export default HighlightVoucher;