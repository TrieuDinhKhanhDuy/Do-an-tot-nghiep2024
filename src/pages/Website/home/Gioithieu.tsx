import "../../../styles/Website/Gioithieu.css";
import gioithieu1 from "../../../assets/image/gioithieu1.png";
import Breadcrumb from "@/components/Breadcrumb";

const Gioithieu = () => {
    const duongDan = [
        { nhan: 'Trang Chủ', duongDan: '/' },
        { nhan: 'Giới Thiệu', duongDan: 'about' },
    ];

    return (
        <>
            <Breadcrumb items={duongDan} />

            <div className="gioithieu-container">
                <div className="gioithieu-h2">
                    <h2>HONG NHUNG – “ SỨ MỆNH TIÊN PHONG”</h2>
                </div>
                <div className="gioithieu-content">
                    <p>Công ty CP Thương mại và du lịch HONG NHUNG được thành lập năm 2003. Khởi đầu từ một Công ty quy mô nhỏ với dịch vụ vận tải hành khách công cộng đầu tiên ở Tỉnh Thái Nguyên với 10 chiếc xe được khai trương vào ngày 30/10/2003. Trải qua 20 năm phát triển, lấy tiên phong và sáng tạo để làm đòn bẩy, lấy con người là giá trị cốt lõi, lấy cộng đồng làm giá trị tinh thần và xây dựng.  Hiện nay, HONG NHUNG là đơn vị hàng đầu trong các lĩnh vực vận tải:<br />
                        – Dịch vụ vận tải hành khách công cộng bằng xe buýt (thương hiệu HONG NHUNG bus)<br />
                        – Dịch vụ vận tải hành khách bằng xe hợp đồng (thương hiệu HONG NHUNG limousine)<br />
                        – Dịch vụ vận tải hàng hoá (thương hiệu HONG NHUNG Express)<br />
                        – Dịch vụ kinh doanh xăng dầu<br />
                        – Dịch vụ sửa chữa, đại tu và cung cấp vật tư ô tô (thương hiệu HONG NHUNG Service)<br />
                        – Bến xe Định Hoá<br />
                        – Taxi HONG NHUNG<br /><br />

                        Với gần 700 lao động và gần 300 phương tiện, đồng hành với hơn 10 triệu hành trình mỗi năm, HONG NHUNG đã và đang đổi mới mạnh mẽ hơn nữa để nâng cao hiệu quả, sức cạnh tranh của doanh nghiệp thị trường trong nước và Tỉnh Thái Nguyên.
                        <br /><br />
                        Cùng với việc đầu tư phát triển, mở rộng mạng lưới, tuyến mới, lộ trình mới và đầu tư cơ sở vật chất, những dòng xe chất lượng cao. HONG NHUNG còn tập trung và đẩy mạnh áp dụng công nghệ và chuyển đổi số vào hoạt động sản xuất kinh doanh.
                        <br /><br />
                        Hai năm đồng hành cùng tỉnh nhà và đất nước chống chọi với đại dịch COVID-19, dù gặp nhiều khó khăn do thị trường dịch vụ vận tải sụt giảm nguồn thu, nhưng Công ty đã phối hợp với các công ty công nghệ xây dựng nền tảng chuyển đổi số cho vận tải, coi đó là giải pháp giúp doanh nghiệp trụ vững. Từ đó cho đến nay, HONG NHUNG là doanh nghiệp tiên phong đi đầu trong thực hiện chương trình chuyển đổi số tỉnh Thái Nguyên.
                    </p>
                    <img src={gioithieu1} alt="" />
                    <p>
                        Một trong những ứng dụng của chuyển đổi số đem lại hiệu quả cao trong quản lý hoạt động sản xuất, kinh doanh của đơn vị là hợp đồng điện tử,  lệnh điện tử – vé điện tử xe buýt, thẻ xe buýt tháng điện tử. Điều này giúp Công ty minh bạch về thông tin, nắm bắt được hành trình điểm đi, điểm đến và hiệu quả kinh doanh của mỗi ngày, mỗi hành trình; đồng thời, cung cấp thông tin cho các cơ quan quản lý nhà nước một cách minh bạch.
                        <br /><br />
                        Cùng với đó, dựa trên nền tảng số, Công ty đã thực hiện tái cấu trúc lại doanh nghiệp, xây dựng một văn phòng tổng có nhiều chức năng để kiểm soát các hoạt động từ hành chính, nhân sự, truyền thông đến tài chính, kế toán…
                        <br /><br />
                        Với triết lý kinh doanh: “ SỨ MỆNH TIÊN PHONG”, HONG NHUNG dành tất cả nguồn lực mình đang có để sẵn sàng thực hiện sứ mệnh của một công ty vận tải hàng đầu với 5 tiêu chuẩn số 1, Tiên phong trong hành động và sáng tạo trong suy nghĩ để củng cố và xây dựng một HONG NHUNG vững mạnh.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Gioithieu;
