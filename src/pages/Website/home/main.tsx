import image9 from "../../../assets/image/image 9.png";
import image10 from "../../../assets/image/image 10.png";
import "../../../styles/Website/mainContent.css";
import imageitem1 from "../../../assets/image/imageitem1.png";
import imageitem2 from "../../../assets/image/imageitem2.png";
import item3 from "../../../assets/image/item3.png";
import item4 from "../../../assets/image/item4.png";

import PopularRoutes from "@/components/PopularRoutes";
import HighlightVoucher from "@/components/HighlightVoucher";
import HighlightNews from "@/components/HighlightNews";
import { useState } from "react";
import CustomDatePicker from "@/components/AllNewBookingForm";
import dayjs, { Dayjs } from 'dayjs';


const Main = () => {

    const [date, setDate] = useState<Dayjs | null>(null);

    const handleChange = (date: Dayjs | null, dateString: string | string[]) => { // Thay đổi kiểu ở đây
        setDate(date);
        console.log('Selected date:', dateString);
    };

    return (
        <div className="mainContent-container">
            <div className="mainContent-top">

                <HighlightVoucher />

                <h3 className="link-h2" >Đa dạng điểm, tuyến đường</h3>
                <div className="mainContent-top-content">

                    <div className="mainContent-top-left">
                        <div className="mainContent-top-left-content">
                            <h3>Tuyến đường</h3>
                            <p>
                                Danh sách các tuyến đường của nhà xe chúng tôi
                            </p>
                            <button>
                                <a href="/locationtable">Chi tiết</a>
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
                                <a href="/busroutes">Chi tiết</a>
                            </button>
                        </div>
                        <div className="mainContent-top-right-image">
                            <img src={image10} alt="" />
                        </div>
                    </div>
                </div>
                <PopularRoutes />
            </div>
            <div className="mainContent-center">
                <h2 className="link-h2" >Chất lượng hàng đầu, hành trình an toàn</h2>
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


            <HighlightNews />
        </div>
    );
};

export default Main;
