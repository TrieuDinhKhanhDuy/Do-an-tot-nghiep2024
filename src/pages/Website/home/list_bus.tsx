import Breadcrumb from "@/components/Breadcrumb";
import {
    faTimes,
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/Website/BokingForm.css";
import "../../../styles/Website/list_busFix.css";
import "../../../styles/Website/list.css";
import DbRecord from "@/types/IBus";
import axios from "axios";
import BookingFormComponent from "@/components/BookingForm";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import numeral from "numeral";
import Swal from "sweetalert2";
import { BookingFormData } from "@/types/IBooking";

const List_BusFix = () => {
    const [buses, setBuses] = useState<DbRecord[]>([]);
    const url_image_backend = "http://doantotnghiep_backend.test/storage/";
    const [searchParams, setSearchParams] = useState<BookingFormData | null>(
        null,
    );
    const location = useLocation();
    const [selectedBus, setSelectedBus] = useState<DbRecord | null>(null); // Lưu trữ thông tin chuyến xe đã chọn
    const [page, setPage] = useState(1); // Trạng thái cho số trang
    const [totalPages, setTotalPages] = useState(1); // Tổng số trang
    const [sortOrder, setSortOrder] = useState<string>("default"); // State lưu trữ lựa chọn sắp xếp

    const duongDan = [
        { nhan: "Trang Chủ", duongDan: "/" },
        { nhan: "List Vé", duongDan: "list" },
    ];

    const [isPopupBus45Open, setIsPopupBus45Open] = useState(false);
    const handleSeatSelectBus45 = () => {
        setIsPopupBus45Open(true);
    };
    const handleClosePopupBus45 = () => {
        setIsPopupBus45Open(false);
    };

    const [seatPrice, setSeatPrice] = useState(0);

    const fetchFilteredTrips = async () => {
        if (!searchParams) return; // Không gọi API nếu chưa có tham số tìm kiếm

        try {
            const res = await axios.get(
                "http://doantotnghiep_backend.test/api/home/show",
                {
                    params: {
                        start_stop_id: searchParams.startLocation,
                        end_stop_id: searchParams.endLocation,
                        date: searchParams.departureDate,
                        page: page, // Thêm tham số trang
                        sort: sortOrder, // Thêm tham số sắp xếp
                    },
                },
            );

            let fetchedBuses = res.data.data;

            // Kiểm tra loại sắp xếp và lọc theo số chỗ
            if (sortOrder === "bedBus40") {
                // Lọc chỉ giữ các xe giường nằm 40 chỗ
                fetchedBuses = fetchedBuses.filter(
                    (bus: any) => bus.total_seats === 40,
                );
            } else if (sortOrder === "priceAsc") {
                // Sắp xếp giá tăng dần
                fetchedBuses = fetchedBuses.sort(
                    (a: any, b: any) => a.fare - b.fare,
                );
            } else if (sortOrder === "priceDesc") {
                // Sắp xếp giá giảm dần
                fetchedBuses = fetchedBuses.sort(
                    (a: any, b: any) => b.fare - a.fare,
                );
            } else if (sortOrder === "bedBus45") {
                // Sắp xếp giá giảm dần
                fetchedBuses = fetchedBuses.filter(
                    (bus: any) => bus.total_seats === 45,
                );
            } else if (sortOrder === "bedBus34") {
                // Sắp xếp giá giảm dần
                fetchedBuses = fetchedBuses.filter(
                    (bus: any) => bus.total_seats === 34,
                );
            }

            // Cập nhật danh sách chuyến đi
            setBuses(fetchedBuses);
            setTotalPages(res.data.pagination.total_pages); // Cập nhật tổng số trang
            nav(
                `/list?start=${searchParams.startLocation}&end=${searchParams.endLocation}&date=${searchParams.departureDate}&page=${page}&sort=${sortOrder}`,
            );

            if (fetchedBuses.length > 0) {
                const firstBus = fetchedBuses[0];
                setSeatPrice(parseFloat(firstBus.fare)); // Lấy giá từ dữ liệu chuyến
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            Swal.fire({
                title: "Chưa Có Thông Tin Chuyến!",
                text: "Không có chuyến phù hợp cho tìm kiếm của ban!",
                icon: "error",
                showConfirmButton: false,
                allowEscapeKey: true,
            });
        }
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const startLocation = queryParams.get("start");
        const endLocation = queryParams.get("end");
        const departureDate = queryParams.get("date");
        const page_query = queryParams.get("page") || "1"; // Lấy giá trị của `page` từ URL hoặc mặc định là 1
        const sort_query = queryParams.get("sort") || "default"; // Lấy giá trị của `sort` từ URL hoặc mặc định là 'default'
        if (startLocation && endLocation && departureDate) {
            setSearchParams({
                startLocation,
                endLocation,
                departureDate,
                page_query: page_query,
            });
            setPage(parseInt(page_query)); // Cập nhật lại state page
            setSortOrder(sort_query); // Cập nhật lại state sortOrder
        }
    }, [location.search]);

    useEffect(() => {
        fetchFilteredTrips();
    }, [searchParams, page, sortOrder]); // Fetch lại khi có sự thay đổi về params, page, hoặc sort

    const handleSearch = (data: BookingFormData) => {
        setSearchParams(data);
    };
    const handleSort = (order: string) => {
        setSortOrder(order);
    };

    const handleSeatSelectTidcet = async (bus: DbRecord) => {
        const queryParams = new URLSearchParams(location.search);
        const startLocation = queryParams.get("start");
        const endLocation = queryParams.get("end");
        setSelectedBus(bus);

        const storedToken = localStorage.getItem("access_token");
        if(storedToken){
            nav(
                `/choseseat?trip_id=${bus?.trip_id}&start_stop_name=${bus.start_stop_name}&end_stop_name=${bus.end_stop_name}&bus_id=${bus?.bus_id}&fare=${bus?.fare}&route_id=${bus?.route_id}&time_start=${bus?.time_start}&date=${bus?.date}&id_start_stop=${startLocation}&id_end_stop=${endLocation}`,
            );
        }else{
            alert("chưa đăng nhập")
        }
        
    };
    const handlePageChange = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
        }
    };
    console.log("buses", buses);

    const nav = useNavigate();

    return (
        <>
            <Breadcrumb items={duongDan} />
            <div className="bookingForm-container">
                <BookingFormComponent onSearch={handleSearch} />
                <div className="bus-schedule-container">
                    {/* Group 1: Header Group */}
                    <div className="schedule-header">
                        <div className="header-item">Chọn chỗ</div>
                        <div className="header-item step2">Thanh Toán</div>
                        <div className="header-item step2">Hoàn Thành</div>
                    </div>

                    {/* Group 2: Table Group */}
                    <div className="bus-comp-container">
                        {/* Phần bên trái */}
                        <div className="bus-comp-left-sidebar">
                            <div className="bus-comp-sort-options">
                                <p>Sắp xếp theo:</p>
                                <div>
                                    <input
                                        type="radio"
                                        id="default"
                                        name="sort"
                                        value="default"
                                        checked={sortOrder === "default"}
                                        onChange={() => handleSort("default")}
                                    />
                                    <label htmlFor="default">Mặc định</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="priceAsc"
                                        name="sort"
                                        value="priceAsc"
                                        checked={sortOrder === "priceAsc"}
                                        onChange={() => handleSort("priceAsc")}
                                    />
                                    <label htmlFor="priceAsc">
                                        Giá tăng dần
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="priceDesc"
                                        name="sort"
                                        value="priceDesc"
                                        checked={sortOrder === "priceDesc"}
                                        onChange={() => handleSort("priceDesc")}
                                    />
                                    <label htmlFor="priceDesc">
                                        Giá giảm dần
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="bedBus40"
                                        name="sort"
                                        value="bedBus40"
                                        onChange={() => handleSort("bedBus40")}
                                    />
                                    <label htmlFor="bedBus40">
                                        Xe giường nằm 40 chỗ
                                    </label>
                                </div>

                                <div>
                                    <input
                                        type="radio"
                                        id="bedBus45"
                                        name="sort"
                                        value="bedBus45"
                                        onChange={() => handleSort("bedBus45")}
                                    />
                                    <label htmlFor="bedBus45">
                                        Xe thường 45 chỗ
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="bedBus34"
                                        name="sort"
                                        value="bedBus34"
                                        onChange={() => handleSort("bedBus34")}
                                    />
                                    <label htmlFor="bedBus34">
                                        Xe Vip 34 chỗ
                                    </label>
                                </div>
                            </div>
                            {/* Banner quảng cáo */}
                            <div className="bus-comp-banner">
                                <img
                                    src="/src/assets/image/banner_doc.webp"
                                    alt="Quảng cáo xe"
                                />
                            </div>
                        </div>

                        {/* Phần bên phải */}
                        <div className="bus-comp-list">
                            {buses.length > 0 ? (
                                buses.map((bus) => {
                                    const formattedTime = bus.time_start.slice(
                                        0,
                                        5,
                                    );
                                    const formattedFare = numeral(
                                        bus.fare,
                                    ).format("0,0");

                                    console.log(
                                        "Thời gian từ API:",
                                        bus.time_start,
                                    );
                                    console.log(
                                        "Thời gian đã định dạng:",
                                        formattedTime,
                                    );

                                    return (
                                        <div
                                            key={bus.trip_id}
                                            className="bus-comp-option"
                                            onClick={() =>
                                                handleSeatSelectTidcet(bus)
                                            }
                                        >
                                            <div className="bus-comp-image-container">
                                                <img
                                                    src={
                                                        url_image_backend +
                                                        bus.image
                                                    }
                                                    alt={bus.name_bus}
                                                    className="bus-comp-image"
                                                />
                                            </div>
                                            <div className="bus-comp-info">
                                                <div className="bus-comp-info-header">
                                                    <h3>{bus.route_name}</h3>
                                                    <p className="bus-comp-price">
                                                        {formattedFare} VNĐ
                                                    </p>
                                                </div>
                                                <div className="bus-comp-info-header">
                                                    <p>🕒 {formattedTime}</p>
                                                </div>
                                                <div className="bus-comp-info-header">
                                                    <p>{bus.name_bus}</p>
                                                </div>
                                                <div className="bus-comp-info-header">
                                                    <p>
                                                        {bus.total_seats} Chỗ
                                                        trống
                                                    </p>
                                                    <div className="bus-comp-action">
                                                        <button>
                                                            Chọn chỗ
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <p>Không có chuyến xe nào được tìm thấy.</p>
                            )}

                            <div className="pagination">
                                <button
                                    className="page-btn"
                                    onClick={() => handlePageChange(page - 1)}
                                    disabled={page === 1}
                                >
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                                {[...Array(totalPages)].map((_, index) => (
                                    <button
                                        key={index + 1}
                                        className={`page-number ${page === index + 1 ? "active" : ""}`}
                                        onClick={() =>
                                            handlePageChange(index + 1)
                                        }
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                                <button
                                    className="page-btn"
                                    onClick={() => handlePageChange(page + 1)}
                                    disabled={page === totalPages}
                                >
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default List_BusFix;
