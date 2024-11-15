import Breadcrumb from "@/components/Breadcrumb";
import {
    faTimes,
    faChevronLeft,
    faChevronRight
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
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import numeral from 'numeral';
import Swal from "sweetalert2";
import { BookingFormData } from "@/types/IBooking";

const List_BusFix = () => {
    const [buses, setBuses] = useState<DbRecord[]>([]);
    const [sortOrder, setSortOrder] = useState<string>("default");
    const url_image_backend = 'http://doantotnghiep_backend.test/storage/';
    const [searchParams, setSearchParams] = useState<BookingFormData | null>(null);
    const location = useLocation();
    const [selectedBus, setSelectedBus] = useState<DbRecord | null>(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const duongDan = [
        { nhan: 'Trang Chủ', duongDan: '/' },
        { nhan: 'List Vé', duongDan: 'list' },
    ];

    const nav = useNavigate();

    const fetchFilteredTrips = async () => {
        if (!searchParams) return;

        try {
            const res = await axios.get("http://doantotnghiep_backend.test/api/home/show", {
                params: {
                    start_stop_id: searchParams.startLocation,
                    end_stop_id: searchParams.endLocation,
                    date: searchParams.departureDate,
                    page: page,
                },
            });
            let fetchedBuses = res.data.data;
            setTotalPages(res.data.pagination.total_pages);

            
            if (sortOrder === "priceAsc") {
                fetchedBuses = fetchedBuses.sort((a: any, b: any) => a.fare  - b.fare);
            }

            setBuses(fetchedBuses);
        } catch (error) {
            console.error("Error fetching data:", error);
            Swal.fire({
                title: "Chưa Có Thông Tin Chuyến!",
                text: "Không có chuyến phù hợp cho tìm kiếm của bạn!",
                icon: "error",
                showConfirmButton: false,
                allowEscapeKey: true,
            });
        }
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const startLocation = queryParams.get('start');
        const endLocation = queryParams.get('end');
        const departureDate = queryParams.get('date');
        const page_query = queryParams.get('page') || '1';

        if (startLocation && endLocation && departureDate) {
            setSearchParams({
                startLocation,
                endLocation,
                departureDate,
                page_query: page_query,
            });
            setPage(parseInt(page_query));
        }
    }, [location.search]);

    useEffect(() => {
        fetchFilteredTrips();
    }, [searchParams, page, sortOrder]);

    const handleSearch = (data: BookingFormData) => {
        setSearchParams(data);
    };

    const handleSort = (order: string) => {
        setSortOrder(order);
    };

    const handlePageChange = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
        }
    };
console.log("buses" , buses);

    return (
        <>
            <Breadcrumb items={duongDan} />
            <div className="bookingForm-container">
                <BookingFormComponent onSearch={handleSearch} />
                <div className="bus-schedule-container">
                    <div className="schedule-header">
                        <div className="header-item">Chọn chỗ</div>
                        <div className="header-item step2">Thanh Toán</div>
                        <div className="header-item step2">Hoàn Thành</div>
                    </div>

                    <div className="bus-comp-container">
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
                                    <label htmlFor="priceAsc">Giá tăng dần</label>
                                </div>
                                <div>
                                    <input type="radio" id="priceDesc" name="sort" value="priceDesc" />
                                    <label htmlFor="priceDesc">Giá giảm dần</label>
                                </div>
                                <div>
                                    <input type="radio" id="bedBus" name="sort" value="bedBus" />
                                    <label htmlFor="bedBus">Xe giường nằm nằm 40 chỗ</label>
                                </div>
                                <div>
                                    <input type="radio" id="normalBus" name="sort" value="normalBus" />
                                    <label htmlFor="normalBus">Xe thường 45 chỗ</label>
                                </div>
                                <div>
                                    <input type="radio" id="vipbus" name="sort" value="vipbus" />
                                    <label htmlFor="vipbus">Xe Vip 34 chỗ</label>
                                </div>
                            </div>
                            <div className="bus-comp-banner">
                                <img src="/src/assets/image/banner_doc.webp" alt="Quảng cáo xe" />
                            </div>
                        </div>

                        <div className="bus-comp-list">
                            {buses.length > 0 ? (
                                buses.map((bus) => {
                                    const formattedTime = format(new Date(`1970-01-01T${bus.time_start}Z`), 'HH:mm');
                                    const formattedFare = numeral(bus.fare).format('0,0');

                                    return (
                                        <div key={bus.trip_id} className="bus-comp-option">
                                            <div className="bus-comp-image-container">
                                                <img src={url_image_backend + bus.bus_image} alt={bus.name_bus} className="bus-comp-image" />
                                            </div>
                                            <div className="bus-comp-info">
                                                <div className="bus-comp-info-header">
                                                    <h3>{bus.route_name}</h3>
                                                    <p className="bus-comp-price">{formattedFare} VNĐ</p>
                                                </div>
                                                <div className="bus-comp-info-header">
                                                    <p>🕒 {formattedTime}</p>
                                                </div>
                                                <div className="bus-comp-info-header">
                                                    <p>{bus.name_bus}</p>
                                                </div>
                                                <div className="bus-comp-info-header">
                                                    <p>{bus.total_seats} Chỗ trống</p>
                                                    <div className="bus-comp-action">
                                                        <button>Chọn chỗ</button>
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
                                <button className="page-btn" onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                                {[...Array(totalPages)].map((_, index) => (
                                    <button
                                        key={index + 1}
                                        className={`page-number ${page === index + 1 ? 'active' : ''}`}
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                                <button className="page-btn" onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
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
