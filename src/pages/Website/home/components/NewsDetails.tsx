import "../../../../styles/Website/NewsDetail.css";
import newDetail1 from "../../../../assets/image/newDetail1.png";

const NewsDetails = () => {
    return (
        <>

            <div className="newDetails-container">
                <div className="newDetails-container-title">
                    <h2>Đề hạ Tuyên Quang và những câu chuyện xung quanh</h2>
                </div>
                <div className="newDetails-container-main">
                    <p>
                        Đền Hạ Tuyên Quang là một công trình lâu đời, có kiến trúc đẹp với nghệ thuật chạm khắc gỗ tinh xảo, tọa lạc giữa không gian u tịch, lưng tựa núi, mặt hướng ra dòng sông Lô lịch sử. Đền là nơi thờ Mẫu Thượng ngàn, là nàng Phương Dung công chúa, con gái của vua Hùng.
                    </p>
                    <img src={newDetail1} alt="Di tích Đền Hạ Tuyên Quang" />
                    <h3>Di tích Đền Hạ Tuyên Quang</h3>
                    <br />
                    <p>
                        Tên gọi của Đền Hạ Tuyên Quang: Trải qua các thời kỳ lịch sử, Đền có các tên gọi khác nhau như: vào đời Lý gọi là đền Tam Kỳ, đời Trần có tên là đền Hiệp Thuận. Các thời này, Đền thuộc thôn Hiệp Thuận, xã Ỷ La. Đến thời hậu Lê mới có tên là Đền Hạ như ngày nay, và giữ tên chữ là “Hiệp Thuận linh từ”.
                    </p>
                    <br />
                    <p>
                        Truyền thuyết Đền Hạ Tuyên Quang: Tương truyền, hai công chúa được nhà vua cử đi thị sát phong tục tập quán ở địa phương, đến bến Tam Cờ thì dừng chân, đêm xuống gặp một cơn giông tố, hai công chúa đã bay về trời. Mỗi khi có mưa to gió lớn, dân làng đến cầu nguyện và thấy linh nghiệm, từ đó lập nên đền thờ này.
                    </p>
                    <br />
                    <p>
                        Các mốc lịch sử Đền Hạ Tuyên Quang: Đền được xây dựng năm 1738. Đền trải qua đợt trùng tu lớn vào năm 1878. Đến năm 1991, đền được công nhận là di tích lịch sử văn hóa cấp quốc gia. Và năm 1994, Đền Hạ tiếp tục được xếp hạng là di tích kiến trúc nghệ thuật cổ.
                    </p>
                    <br /><br />
                    <h3>Kiến trúc Đền Hạ Tuyên Quang</h3>
                    <br />
                    <p>
                        Đền Hạ có kiến trúc theo lối nội công ngoại quốc, hướng chính Đông nhìn thẳng ra sông Lô. Trước sân chầu là hệ thống cổng phụ gồm bốn trụ, trên mỗi đỉnh trụ là một con phượng đắp nổi. Cạnh sân chầu là hai miếu còn gọi là Lầu Cô. Tiếp đến là Lầu Tế, thờ Đệ nhị Thượng ngàn, sau là Tam phủ thờ Đệ nhất Thượng ngàn, gian chính bố trí hình chữ tam gồm ba cung. Trong cung, trên bệ thờ đặt một bộ đỉnh, cạnh bệ thờ treo chuông, khánh...
                    </p>
                    <br />
                    <p>
                        Nghệ thuật kiến trúc cổ nổi bật của đền là chạm khắc gỗ công phu. Các cột, kèo, thượng lương, cửa võng, cửa xiếp đều được chạm trổ tinh xảo, với đề tài là tứ linh và tứ quý. Trên thân cột chạm hình Long Giáng thuỷ cung. Đặc biệt những hình cây, hoa trên cửa võng mềm mại như tranh vẽ.
                    </p>
                    <br />
                    <p>
                        Giá trị nghệ thuật của các tượng thờ trong Đền Hạ Tuyên Quang cũng rất đáng chú ý. Nét mặt các pho tượng toát lên vẻ thanh tao mà uy nghiêm. Các tư thế của tay, các nếp khăn áo, các hình trang trí trên đồ thờ đều được bàn tay khéo léo của người thợ thể hiện rất sinh động. Trong Đền Hạ Tuyên Quang còn giữ được nhiều bảo vật lâu đời có giá trị nghệ thuật cao, nổi bật là quả chuông đồng, khánh cỡ lớn được đúc vào thời Lê, 3 pho tượng cổ cùng 20 đạo sắc phong của các triều Lê, Nguyễn. Nội dung các sắc phong vừa mang dấu ấn lịch sử vừa mang tính chất văn chương, ca ngợi phẩm chất cao quý và sự linh thiêng của các nương thần, phù trợ cho dân cho nước.
                    </p>
                    <br />
                </div>
                <div className="newDetails-container-bottom">
                    <h3>Các tin tức khác</h3>
                    <p>Khám phá thác bản ba</p>
                    <p>Chính sách bảo mật</p>
                    <p>Suối khoáng Mỹ Lâmt</p>
                    <p>Cam sành Hàm Yên</p>
                    <p>Khu du lịch sinh thái Thác Lăn</p>
                </div>
            </div>
        </>
    );
};

export default NewsDetails
