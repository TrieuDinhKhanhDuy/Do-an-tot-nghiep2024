import '../styles/Website/Footer.css';
import logo from "../assets/image/logofix.png";
import momoLogo from "../assets/image/momologo.jpg";
import vnpayLogo from "../assets/image/vnpaylogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>Đối tác thanh toán</p>
          <div className="payment-partners">
            <img src={momoLogo} alt="Payment Partner 1" className="payment-icon" />
            <img src={vnpayLogo} alt="Payment Partner 2" className="payment-icon" />
          </div>
        </div>
        <div className="footer-section">
          <h3>Thông tin liên hệ</h3>
          <ul className="footer-list">
            <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Địa Chỉ: <span>Tòa Nhà Sông Dà - 18 Đ. Phạm Hùng, Mỹ Đình, Nam Từ Liêm, Hà Nội</span></li>
            <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Địa Chỉ: <span>Zen Tower - 12 Khuất Duy Tiến, Thanh Xuân Trung, Thanh Xuân, Hà Nội</span></li>
            <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Địa Chỉ: <span>Tầng 3, Toà nhà 101 Láng Hạ, Phường Láng Hạ, Quận Đống Đa, Hà Nội</span></li>
            <li><FontAwesomeIcon icon={faPhone} /> Hotline: <span className='hotline-number' >02345556555</span></li>
            <li><FontAwesomeIcon icon={faEnvelope} /> Email: <span>xekhachhongnhung@gmail.com</span> </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Chính sách dịch vụ</h3>
          <ul className="footer-list">
            <li>Đặt vé online</li>
            <li>Kiểm tra vé</li>
            <li>Kiểm tra đơn hàng</li>
            <li>Chính sách vận chuyển</li>
            <li>Chính sách thanh toán</li>
            <li>Chính sách hủy/đổi trả</li>
            <li>Chính sách bảo vệ thông tin khách hàng</li>
            <li>Chính sách xử lý khiếu nại</li>
            <li>Nghĩa vụ của người bán</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Kết nối với chúng tôi</h3>
          <div className="social-media">
            <div className="facebook-plugin">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=300&height=200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="300"
                height="200"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093705!2d144.95373531531592!3d-37.81627937975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e9fdf4a64dbb!2sFederation+Square!5e0!3m2!1sen!2sau!4v1548059447096"
                width="300"
                height="200"
                style={{ border: '0' }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <small>Copyright © 2024 HONG NHUNG - All Rights Reserved. Powered by HONG NHUNG</small>
      </div>
    </footer>
  );
};

export default Footer;
