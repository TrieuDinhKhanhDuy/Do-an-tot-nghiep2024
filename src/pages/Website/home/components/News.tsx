
import "../../../../styles/Website/News.css"
import news1 from "../../../../assets/image/news1.png"
import news2 from "../../../../assets/image/news2.png"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const News = () => {
  return (
    <>
      <div className="news-container">
      <h3 className='news-h3'>Tin Tức</h3>
      <div className="news">
      <div className="news__main">
        <img 
          src={news1}
          alt="Main News" 
          className="news__main-image" 
        />
        <div className="news__main-content">
          <h2 className="news__main-title">ĐỀN HẠ TUYÊN QUANG VÀ NHỮNG CÂU CHUYỆN XUNG QUANH</h2>
          <p className="news__date">Ngày đăng: 20-11-2023</p>
          <p className="news__description">
            Đền Hạ Tuyên Quang là một công trình lâu đời, có kiến trúc đẹp với nghệ thuật chạm khắc gỗ tinh xảo, tọa lạc giữa không gian u tịch, lưng tựa núi, mặt hướng ra dòng sông Lô lịch sử...
          </p>
        </div>
      </div>

      <div className="news__related">
        <div className="news-related-items">
            <img src={news2} alt="" />
            <div className="news-related-items-content">
            <h4>ĐỀN HẠ TUYÊN QUANG VÀ NHỮNG CÂU CHUYỆN XUNG QUANH</h4>
            <p>Ngày đăng: 20-11-2023</p>
            </div>
        </div>
        <div className="news-related-items">
            <img src={news2} alt="" />
            <div className="news-related-items-content">
            <h4>ĐỀN HẠ TUYÊN QUANG VÀ NHỮNG CÂU CHUYỆN XUNG QUANH</h4>
            <p>Ngày đăng: 20-11-2023</p>
            </div>
        </div>
        <div className="news-related-items">
            <img src={news2} alt="" />
            <div className="news-related-items-content">
            <h4>ĐỀN HẠ TUYÊN QUANG VÀ NHỮNG CÂU CHUYỆN XUNG QUANH</h4>
            <p>Ngày đăng: 20-11-2023</p>
            </div>
            
        </div>
      </div>
      </div>
      <div className="news-list">
        <div className="news-list-items">
        <div className="new-list-items-image">
            <img src={news2} alt="" />
            </div>
            <div className="news-list-items-content">
                <h4>SUỐI KHOÁNG MỸ LÂM</h4>
                <p>Nhắc đến Tuyên Quang, ta thường nhớ ngay đến đình Hồng Thái, cây đa Tân Trào, đến lán Nà Lừa… Song không mấy người biết đến suối khoáng Mỹ Lâm, một trong số ít những mỏ nước khoáng tốt nhất miền Bắc, Việt Nam.</p>
                <p>Ngày đăng: 20-11-2023</p>
            </div>
        </div>
        <div className="news-list-items">
        <div className="new-list-items-image">
            <img src={news2} alt="" />
            </div>
            <div className="news-list-items-content">
                <h4>SUỐI KHOÁNG MỸ LÂM</h4>
                <p>Nhắc đến Tuyên Quang, ta thường nhớ ngay đến đình Hồng Thái, cây đa Tân Trào, đến lán Nà Lừa… Song không mấy người biết đến suối khoáng Mỹ Lâm, một trong số ít những mỏ nước khoáng tốt nhất miền Bắc, Việt Nam.</p>
                <p>Ngày đăng: 20-11-2023</p>
            </div>
        </div>
        <div className="news-list-items">
        <div className="new-list-items-image">
            <img src={news2} alt="" />
            </div>
            <div className="news-list-items-content">
                <h4>SUỐI KHOÁNG MỸ LÂM</h4>
                <p>Nhắc đến Tuyên Quang, ta thường nhớ ngay đến đình Hồng Thái, cây đa Tân Trào, đến lán Nà Lừa… Song không mấy người biết đến suối khoáng Mỹ Lâm, một trong số ít những mỏ nước khoáng tốt nhất miền Bắc, Việt Nam.</p>
                <p>Ngày đăng: 20-11-2023</p>
            </div>
        </div>
        <div className="news-list-items">
            <div className="new-list-items-image">
            <img src={news2} alt="" />
            </div>
           
            <div className="news-list-items-content">
                <h4>SUỐI KHOÁNG MỸ LÂM</h4>
                <p>Nhắc đến Tuyên Quang, ta thường nhớ ngay đến đình Hồng Thái, cây đa Tân Trào, đến lán Nà Lừa… Song không mấy người biết đến suối khoáng Mỹ Lâm, một trong số ít những mỏ nước khoáng tốt nhất miền Bắc, Việt Nam.</p>
                <p>Ngày đăng: 20-11-2023</p>
            </div>
        </div>
      </div>
      <div className="news-pagination">
            <a href="#" className="news-pagination-item prev"> <MdKeyboardDoubleArrowLeft /> </a>
            <a href="#" className="news-pagination-item">1</a>
            <a href="#" className="news-pagination-item">2</a>
            <a href="#" className="news-pagination-item">3</a>
            <a href="#" className="news-pagination-item">4</a>
            <a href="#" className="news-pagination-item">5</a>
            <a href="#" className="news-pagination-item next"><MdKeyboardDoubleArrowRight /> </a>
        </div>
    </div>
    
    </>
  )
}

export default News
