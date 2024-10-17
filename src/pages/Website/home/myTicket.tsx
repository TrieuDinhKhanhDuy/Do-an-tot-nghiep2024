import { Link } from "react-router-dom";
import "../../../styles/Website/myTicket.css";
import Breadcrumb from "@/components/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
    faTicket,
    faGift,
    faCog,
    faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
interface BusOption {
    id: number;
    route: string;
    time: string;
    type: string;
    availableSeats: number;
    cancelbtn: string;
    phoneDriver: string;
    paystatus: boolean;
    image: string;
}
const MyTicket = () => {
    const busOptions: BusOption[] = [
        {
            id: 1,
            route: 'Mỹ Đình - Tuyên Quang',
            time: '08:10',
            type: 'Xe giường nằm',
            availableSeats: 28,
            cancelbtn: 'Hủy Vé',
            image: '/src/assets/image/bus_giuongnam.png',
            paystatus: true,
            phoneDriver: '0345677678',
        },

    ];
    const duongDan = [
        { nhan: "Trang Chủ", duongDan: "/" },
        { nhan: "Vé Của Tôi", duongDan: "myticket" },
    ];
    return (
        <>
            <Breadcrumb items={duongDan} />

            <div className="tickets-container">
                <div className="bus-comp-container">
                    <div className="bus-comp-left-sidebar">
                        <div className="bus-comp-sort-options">
                            <div className="menu-options_fix">
                                <div className="user-info_fix menu-item_fix">
                                    <div className="user-avatar_fix  ">
                                        <span role="img" aria-label="avatar">

                                        </span>
                                    </div>
                                    <div className="user-details_fix">
                                        <span className="user-name_fix ">
                                            Admin hieu
                                        </span>
                                        <span className="user-role_fix menu-item_fix">admin</span>
                                    </div>
                                </div>
                                <div className="menu-item_fix insite">
                                    <Link
                                        to={"/myticket"}
                                    >
                                        {" "}
                                        <span role="img" aria-label="ticket">
                                            {" "}
                                            <FontAwesomeIcon icon={faTicket} />
                                        </span>{" "}
                                        Vé của tôi
                                    </Link>
                                </div>
                                <div className="menu-item_fix">
                                    <Link
                                        to={"/listvoucher"}
                                    >
                                        {" "}
                                        <span role="img" aria-label="ticket">
                                            {" "}
                                            <FontAwesomeIcon icon={faGift} />
                                        </span>{" "}
                                        Voucher
                                    </Link>
                                </div>
                                <div className="menu-item_fix">
                                    <span
                                        role="img"
                                        aria-label="settings"
                                    >
                                        {" "}
                                        <FontAwesomeIcon icon={faCog} />
                                    </span>{" "}
                                    Cài đặt
                                </div>
                                <div
                                    className="logout_fix menu-item_fix"
                                    style={{ display: "flex", alignItems: "center" }}
                                >
                                    <span style={{ marginRight: "10px" }}>
                                        <FontAwesomeIcon icon={faSignOutAlt} />
                                    </span>
                                    Đăng xuất
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="bus-comp-list" >
                        <div className="schedule-header">
                            <div className="header-item">Vé Đã Đặt</div>
                            <div className="header-item step2">Vé Hết Hạn</div>
                            <div className="header-item step2">Vé Đã Hủy</div>
                        </div>
                        <Link to={'/billdetail'} >
                            {busOptions.map((option) => (

                                <div key={option.id} className="bus-comp-option"  >
                                    <div className="bus-comp-image-container">
                                        <img src={option.image} alt={option.route} className="bus-comp-image" />
                                    </div>
                                    <div className="bus-comp-info">
                                        <div className="bus-comp-info-header">
                                            <h3>{option.route}</h3>
                                            <p className="bus-comp-cancelBtn">{option.cancelbtn}</p>
                                        </div>
                                        <div className="bus-comp-info-header">
                                            <p>🕒 {option.time} </p>
                                            <h3 >{option.phoneDriver}</h3>
                                        </div>
                                        <div className="bus-comp-info-header">
                                            <p>{option.type}</p>
                                            {option.paystatus && (
                                                <p className="bus-comp-support-online">Đã Thanh Toán</p>
                                            )}                                        </div>


                                        <div className="bus-comp-info-header">
                                            <p>Ghế Số: {option.availableSeats} </p>
                                            <div className="bus-comp-action">
                                                <button>Chi Tiết</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </Link>
                        <div className="pagination">
                            <button className="page-btn">
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <button className="page-number active">1</button>
                            <button className="page-number">2</button>
                            <button className="page-number">3</button>
                            <button className="page-number">4</button>
                            <button className="page-number">5</button>
                            <button className="page-btn">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyTicket;
