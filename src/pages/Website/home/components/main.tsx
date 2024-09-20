import image1 from "../../../../assets/image/image.png";
import image2 from "../../../../assets/image/image2.png";
import image3 from "../../../../assets/image/image3.png";
import image4 from "../../../../assets/image/image4.png";
import image9 from "../../../../assets/image/image 9.png";
import image10 from "../../../../assets/image/image 10.png";
import "../../../../styles/Website/mainContent.css";
import imageitem1 from "../../../../assets/image/imageitem1.png";
import imageitem2 from "../../../../assets/image/imageitem2.png";
import item3 from "../../../../assets/image/item3.png";
import item4 from "../../../../assets/image/item4.png";
import tintuc1 from "../../../../assets/image/tin tuc 1.png"
import tintuc2 from "../../../../assets/image/tin tuc 2.png"
import tintuc3 from "../../../../assets/image/tin tuc 3.png"
const Main = () => {
    return (
        <div className="mainContent-container">
            <div className="mainContent-top">
                <h3>Ưu đãi dành cho bạn</h3>
                <div className="mainContent-top-image">
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" className="img-hidden" />
                    <img src={image4} alt="" className="img-hidden"/>
                </div>
                <div className="mainContent-top-content">
                    <div className="mainContent-top-left">
                        <div className="mainContent-top-left-content">
                            <h3>Tuyến đường</h3>
                            <p>
                                Danh sách các tuyến đường của nhà xe chúng tôi
                            </p>
                            <button>
                                <a href="">Chi tiết</a>
                            </button>
                        </div>
                        <div className="mainContent-top-left-image">
                            <img src={image9} alt="" />
                        </div>
                    </div>
                    <div className="mainContent-top-right">
                        <div className="mainContent-top-right-content">
                            <h3>Danh sách điểm</h3>
                            <p>
                                Địa chỉ chi tiết các điểm thuộc nhà xe chúng tôi
                            </p>
                            <button>
                                <a href="">Chi tiết</a>
                            </button>
                        </div>
                        <div className="mainContent-top-right-image">
                            <img src={image10} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainContent-center">
                <h2>Chất lượng hàng đầu, hành trình an toàn</h2>
                <div className="mainContent-center-items">
                    <img src={imageitem1} alt="" />
                    <div className="mainContent-center-items-content">
                        <div className="mainContent-center-items-content-h3">
                            <h3>Hơn 20 Triệu </h3>
                            <p>Lượt khách</p>
                        </div>
                        <p>
                            phục vụ hơn 20 triệu lượt khách bình quân 1 năm trên
                            toàn quốc
                        </p>
                    </div>
                </div>
                <div className="mainContent-center-items">
                    <img src={imageitem2} alt="" />
                    <div className="mainContent-center-items-content">
                        <div className="mainContent-center-items-content-h3">
                            <h3>Hơn 350 </h3>
                            <p>Phòng vé - Bưu cục</p>
                        </div>

                        <p>
                            hơn 350 phòng vé, trạm trung chuyển, bến xe,... trên
                            toàn hệ thống
                        </p>
                    </div>
                </div>
                <div className="mainContent-center-items">
                    <img src={item3} alt="" />
                    <div className="mainContent-center-items-content">
                        <div className="mainContent-center-items-content-h3">
                            <h3>Hơn 1,000 </h3>
                            <p>Chuyến xe</p>
                        </div>

                        <p>
                            phục vụ hơn 1,000 chuyến xe đường dài và liên tỉnh
                            mỗi ngày
                        </p>
                    </div>
                </div>
                <div className="mainContent-center-items">
                    <img src={item4} alt="" />
                    <div className="mainContent-center-items-content">
                        <div className="mainContent-center-items-content-h3">
                            <h3>Hơn 20 Triệu </h3>
                            <p>Lượt khách</p>
                        </div>
                        <p>
                            phục vụ hơn 20 triệu lượt khách bình quân 1 năm trên
                            toàn quốc
                        </p>
                    </div>
                </div>
            </div>
    
            <div className="mainContent-bottom">
                <h2>Tin tức mới nhất</h2>
                 <div className="mainContent-bottom-content">
                 <div className="mainContent-bottom-items">
                    <img src={tintuc1} alt="" />
                    <p>Thác Mơ Tuyên Quang - Thiếu nữ duyên dáng giữa núi rừng Na Hang
                    </p>
                    <a href="">18/10/2024</a>
                </div>
                <div className="mainContent-bottom-items">
                    <img src={tintuc2} alt="" />
                    <p>Thác Mơ Tuyên Quang - Thiếu nữ duyên dáng giữa núi rừng Na Hang
                    </p>
                    <a href="">18/10/2024</a>
                </div>
                <div className="mainContent-bottom-items">
                    <img src={tintuc3} alt="" />
                    <p>Thác Mơ Tuyên Quang - Thiếu nữ duyên dáng giữa núi rừng Na Hang
                    </p>
                    <a href="">18/10/2024</a>
                </div>
                 </div>
            </div>
        </div>
    );
};

export default Main;
