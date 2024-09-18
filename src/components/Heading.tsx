import "../styles/Website/Heading.css"
import heading1 from "../assets/image/heading1.png"
import heading2 from "../assets/image/heading2.png"
import heading3 from "../assets/image/heading3.png"
import heading4 from "../assets/image/heading4.png"

const Heading = () => {
  return (
    <div className='heading-container'>
        <h2>Kết nối ngay để nhận những ưu đãi tốt nhất</h2>
        <div className="heading-items">
            <div className="heading-items1">
                <img src={heading1} alt="" />
                <p>Nhiều mã giảm giá, 
                khuyến mại</p>  
            </div>
            <div className="heading-items1">
                <img src={heading2} alt="" />
                <p>Dịch vụ hậu mãi uy tín,
                chuyên nghiệp</p>
            </div>
            <div className="heading-items1">
                <img src={heading3} alt="" />
                <p>Tra cứu tuyến đường dễ 
                dàng, hiệu quả</p>
            </div>
            <div className="heading-items1">
                <img src={heading4} alt="" />
                <p>Tin tức đa dạng, chính
                thống</p>
            </div>
        </div>
    </div>
  )
}

export default Heading