import "../../../styles/Website/NewsDetail.css";
import Breadcrumb from "@/components/Breadcrumb";
import HighlightVoucher from "@/components/HighlightVoucher";
import "../../../styles/Website/mainContent.css";
import "../../../styles/Website/voucher.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { Promotion } from "@/types/IVoucher";

const DetailVoucher = () => {
    const duongDan = [
        { nhan: 'Trang Chủ', duongDan: '/' },
        { nhan: 'Voucher', duongDan: '/listvoucher' },
        { nhan: 'Giảm đến 25% cho...', duongDan: 'voucherdetail' },
    ];
    const [promotionsDetail, setPromotionsDeatil] = useState<Promotion | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const params = new URLSearchParams(location.search);
    const promotions_id = params.get('id');
    useEffect(() => {

        const fetchPromotions = async () => {
            
            if (!promotions_id) {
                setError('Promotion ID is missing in URL.');
                setLoading(false);
                return;
              }
        
            try {
                const response = await axios.get(`http://doantotnghiep.test/api/promotion-detail/${promotions_id}`);
                setPromotionsDeatil(response.data.data); 
                console.log(promotionsDetail);
                
            } catch (error) {
                setError('Error fetching promotions');
            } finally {
                setLoading(false);
            }
        };


        fetchPromotions()
    }, [promotions_id]);

    const handleCopy = (voucherCode: string) => {
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
                    <h3>{promotionsDetail?.title}</h3>
                    <a href="">Ngày bắt đầu: {promotionsDetail?.start_date} cho đến {promotionsDetail?.end_date}</a>
                </div>

                <div className="newDetails-container-main voucherDetails-container-main">
                    <img src={promotionsDetail?.image} alt="Di tích Đền Hạ Tuyên Quang" />
                    <h3>{promotionsDetail?.description}</h3>
                    <br />
                    <ul>
                        <li>• {promotionsDetail?.content}.</li>
                        <li>• Giảm Tới {promotionsDetail?.discount}%!</li>
                        <li>
                            <div className="voucher-code-section">
                                <span className="voucher-code">{promotionsDetail?.voucher_code}</span>
                                <button className="copy-button" onClick={() => handleCopy(promotionsDetail?.voucher_code || '')}>Sao chép</button>
                            </div>
                        </li>
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
