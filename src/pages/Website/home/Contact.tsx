import Breadcrumb from "@/components/Breadcrumb";
import "../../../styles/Website/Contact.css";


const Contact = () => {
    const duongDan = [
        { nhan: 'Trang Chủ', duongDan: '/' },
        { nhan: 'Liên Hệ', duongDan: 'contact' },
    ];
    return (
        <>
            <Breadcrumb items={duongDan} />

            <div className="contactForm-container">
                <h2 className="contactForm-title">LIÊN HỆ</h2>

                <div className="contactForm-content">
                    <div className="contactForm-info">
                        <h3>CÔNG TY CPTM HONG NHUNG</h3>
                        <p>
                            Công ty CP Thương mại và du lịch Hồng Nhung được
                            thành lập ngày 21/02/2004. Với 7 chi nhánh, 24 văn
                            phòng tại 4 tỉnh thành: Hà Nội, Thái Nguyên, Tuyên
                            Quang, Bắc Kạn, gần 700 lao động và gần 400 phương
                            tiện, đồng hành với hơn 10 triệu hành trình mỗi năm,
                            Hà Lan đã và đang đổi mới mạnh mẽ hơn nữa để nâng
                            cao hiệu quả, sức cạnh tranh của doanh nghiệp thị
                            trường Tỉnh Thái Nguyên và trên cả nước. Cùng với
                            việc đầu tư phát triển, mở rộng mạng lưới, tuyến
                            mới, lộ trình mới và đầu tư cơ sở vật chất, những
                            dòng xe chất lượng cao. Hà Lan còn tập trung và đẩy
                            mạnh áp dụng công nghệ và chuyển đổi số vào hoạt
                            động sản xuất kinh doanh. Địa chỉ: 271 – 273 Dương
                            Tự Minh, P.Tân Long, Tp.Thái Nguyên. Xe hợp đồng:
                            0989 759 759. Chuyển phát nhanh: 1900 0092. Tuyển
                            dụng: 0977 306 567. Email:
                            phungthihongnhung21@gmail.com.
                        </p>

                        <form className="contactForm-form">
                            <div className="contactForm-row">
                                <div className="contactForm-group mgleft-5px">
                                    <label>Họ và tên:</label>
                                    <input
                                        type="text"
                                        placeholder="Nhập họ và tên"
                                    />
                                </div>
                                
                                <div className="contactForm-group">
                                    <label>Số điện thoại:</label>
                                    <input
                                        type="text"
                                        placeholder="Nhập số điện thoại"
                                    />
                                </div>
                            </div>

                            <div className="contactForm-group">
                                <label>Email:</label>
                                <input type="email" placeholder="Nhập email" />
                            </div>

                            <div className="contactForm-group">
                                <label>Tiêu đề:</label>
                                <input type="text" placeholder="Nhập tiêu đề" />
                            </div>

                            <div className="contactForm-group">
                                <label>Nội dung liên hệ:</label>
                                <textarea placeholder="Nhập nội dung của bạn"></textarea>
                            </div>

                            <button
                                type="submit"
                                className="contactForm-button"
                            >
                                GỬI THƯ
                            </button>
                        </form>
                    </div>

                    <div className="contactForm-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1063645750455!2d105.77569377572404!3d21.02842968062079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b2f431c099%3A0xe44043bacd461128!2zQuG6v24gWGUgTeG7uSDEkMOsbmg!5e0!3m2!1svi!2s!4v1728287236739!5m2!1svi!2s" 
                        width="100%"
                        height="100%"
                        style={{ border: '0' }}
                        allowFullScreen={true}
                        loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
