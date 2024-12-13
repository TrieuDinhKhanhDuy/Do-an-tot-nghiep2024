import "../../../styles/Website/NewsDetail.css";
import Breadcrumb from "@/components/Breadcrumb";
import image1 from "../../../assets/image/banner_voucher.jfif";
import HighlightVoucher from "@/components/HighlightVoucher";
import "../../../styles/Website/mainContent.css";
import "../../../styles/Website/voucher.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailVoucher = () => {
    const duongDan = [
        { nhan: 'Trang Chủ', duongDan: '/' },
        { nhan: 'Voucher', duongDan: 'listvoucher' },
        { nhan: 'Giảm đến 25% cho...', duongDan: 'voucherdetail' },
    ];
    const voucherCode = "HONGNHUNG_KINHCHAOKHACHHANGMOI";

    const handleCopy = () => {
        navigator.clipboard.writeText(voucherCode)
            .then(() => {
                toast.success("Đã sao chép mã!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                  });
          
            })
            .catch(err => {
                console.error("Không thể sao chép mã: ", err);
            });
    };

    return (
        <>
            <Breadcrumb items={duongDan} />

            <div className="newDetails-container voucherDetail-container">
            <ToastContainer />
                <div className="newDetails-container-title">
                    <h3>Giảm đến 25% cho khách hàng lần đầu tiên đặt dịch vụ tại HONGNHUNG</h3>
                    <a href="">Ngày đăng: 15/08/2023</a>
                </div>

                <div className="newDetails-container-main voucherDetails-container-main">
                    <img src={image1} alt="Di tích Đền Hạ Tuyên Quang" />
                    <h3>Chương trình ưu đãi tháng 10/2024 dành cho khách hàng lần đầu đặt dịch vụ tại HONGNHUNG</h3>
                    <br />
                    <ul>
                        <li>• Đối tượng áp dụng: Áp dụng cho khách hàng lần đầu đặt dịch vụ tại HONGNHUNG qua website HONGNHUNG.</li>
                        <li>• Điều kiện áp dụng: Áp dụng cho một số tuyến đường, nhà xe tham gia chương trình.</li>
                        <li>
                            <div className="voucher-code-section">
                                <span className="voucher-code">{voucherCode}</span>
                                <button className="copy-button" onClick={handleCopy}>Sao chép</button>
                            </div>
                        </li>
                    </ul>
                    <h3>Lưu ý</h3>
                    <ul>
                        <li>• Mỗi mã giảm giá có giá trị giảm 25% hoặc 15% cho một lần đặt dịch vụ xe khách (có giá trị giảm tối đa).</li>
                        <li>• Chỉ áp dụng cho khách hàng lần đầu đặt dịch vụ tại HONGNHUNG (Mỗi booking tối đa 2 vé).</li>
                        <li>• HONGNHUNG có quyền áp dụng chặn sử dụng mã khuyến mại đối với các Khách hàng mà HONGNHUNG phát hiện hoặc đã từng phát hiện có hành vi hoặc dấu hiệu của việc gian lận hoặc trục lợi Chương trình khuyến mại. </li>
                    </ul>
                </div>
                <div className="divider-container">
                    <div className="divider-line"></div>
                    <a href="/listvoucher" className="view-all">Xem tất cả &gt;</a>
                </div>
                <div className="newDetails-container-bottom">
                    <div className="mainContent-container">
                        <div className="mainContent-top">
                            <HighlightVoucher />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailVoucher;
