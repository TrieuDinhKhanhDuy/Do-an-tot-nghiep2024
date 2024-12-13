import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import "../../../styles/Website/listPouptest.css";
import "../../../styles/Website/BokingForm.css";
import "../../../styles/Website/list_busFix.css";
import "../../../styles/Website/list.css";
import { SeatApiResponse, SeatsStatus } from "@/types/IChosesSeat";
import { DbRecordForm } from "@/types/IBus";
import { Box, LinearProgress, Skeleton } from "@mui/material";
import { toast } from "react-toastify";

const SoDoGhe = () => {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<DbRecordForm>();

    //states //
    const [selectedSeats, setSelectedSeats] = useState(new Set());
    const [seatsStatus, setSeatsStatus] = useState<SeatsStatus>({});
    const [fare, setFare] = useState(0);
    const [seatCount, setSeatCount] = useState(0);
    const [loading, setLoading] = useState(true);

    const MAX_SELECTED_SEATS = 8;

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const tripId = params.get("trip_id");
    const busId = params.get("bus_id");
    const routeId = params.get("route_id");
    const date = params.get("date");
    const timeStart = params.get("time_start");
    const id_start_stop = params.get("id_start_stop");
    const id_end_stop = params.get("id_end_stop");
    const start_stop_name = params.get("start_stop_name");
    const end_stop_name = params.get("end_stop_name");
    const nav = useNavigate();
    const { pathname } = useLocation();

    const [email, setEmail] = useState("");
    const [sendTicketEmail, setSendTicketEmail] = useState(false);
    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };
    const isEmailEntered = email.trim() !== "";
    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        const fetchSeats = async () => {
            window.scrollTo(0, 0);
            if (!tripId || !date) return;
            try {
                const response = await axios.get<SeatApiResponse>(
                    `http://doantotnghiep.test/api/stops?trip_id=${tripId}&date=${date}`
                );
                const { seatsStatus, seatCount } = response.data;

                setSeatsStatus(seatsStatus);
                setFare(parseFloat(params.get("fare") || "0"));
                setSeatCount(seatCount);
                setLoading(true);
            } catch (error: any) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.status === 429) {
                        console.error(
                            "Too Many Requests - Please try again later"
                        );
                    } else {
                        console.error(
                            "Lỗi khi lấy dữ liệu ghế:",
                            error.message
                        );
                    }
                } else {
                    console.error("Unexpected error:", error);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchSeats();
        intervalId = setInterval(fetchSeats, 2000);

        return () => {
            clearInterval(intervalId);
        };
    }, [pathname, tripId, date]);


    const isSeatBooked = (seat: string) => seatsStatus[seat] === "booked";
    const isSeatChosed = (seat: string) => seatsStatus[seat] === "lock";
    const toggleSeat = (seat: string) => {
        if (isSeatBooked(seat)) return;
        if (isSeatChosed(seat)) return;
        const newSelectedSeats = new Set(selectedSeats);
        if (newSelectedSeats.has(seat)) {
            newSelectedSeats.delete(seat);
        } else {
            if (newSelectedSeats.size < MAX_SELECTED_SEATS) {
                newSelectedSeats.add(seat);
            } else {
                Swal.fire({
                    title: `Bạn chỉ được đặt tối đa ${MAX_SELECTED_SEATS} ghế`,
                    icon: "warning",
                    showConfirmButton: false,
                    allowEscapeKey: true,
                });
            }
        }
        setSelectedSeats(newSelectedSeats);
    };

    const isSeatSelected = (seat: string) => selectedSeats.has(seat);
    const totalPrice = selectedSeats.size * fare;

    useEffect(() => {
        setValue("total_price", totalPrice);
    }, [totalPrice, setValue]);

    useEffect(() => {
        setValue("seat", Array.from(selectedSeats).join(", "));
    }, [selectedSeats, setValue]);

    // Render giao diện ghế
    const renderSeatLayout = () => {
        if (seatCount === 45) {
            return (
                <div className="left-section-container">
                    <div className="left-section-container">
                        <div className="left-section">
                            <div className="seats-grid">
                                <h3>Xe ghế 45 chỗ</h3>
                                {[
                                    ["A1", "B1", "", "D1", "E1"],
                                    ["A2", "B2", "", "D2", "E2"],
                                    ["A3", "B3", "", "D3", "E3"],
                                    ["A4", "B4", "", "D4", "E4"],
                                    ["A5", "B5", "", "D5", "E5"],
                                    ["A6", "B6", "", "D6", "E6"],
                                    ["A7", "B7", "", "D7", "E7"],
                                    ["A8", "B8", "", "D8", "E8"],
                                    ["A9", "B9", "", "D9", "E9"],
                                    ["A10", "B10", "", "D10", "E10"],
                                    ["A11", "B11", "C1", "D11", "E11"],
                                ].map((row, rowIndex) => (
                                    <div
                                        className="seat-row"
                                        key={`row-${rowIndex}`}
                                    >
                                        {row.map((seat, index) =>
                                            seat ? (
                                                <button
                                                    key={seat}
                                                    className={`seat ${isSeatBooked(seat)
                                                        ? "booked-seat"
                                                        : isSeatChosed(seat)
                                                            ? "chosen-seat"
                                                            : isSeatSelected(
                                                                seat
                                                            )
                                                                ? "selected"
                                                                : ""
                                                        }`}
                                                    onClick={() =>
                                                        toggleSeat(seat)
                                                    }
                                                    disabled={isSeatBooked(
                                                        seat
                                                    )} // Disable ghế đã đặt
                                                >
                                                    {seat}
                                                </button>
                                            ) : (
                                                <button
                                                    className="seat seat-hidded"
                                                    key={`hidden-${index}`}
                                                />
                                            )
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        if (seatCount === 40) {
            return (
                <div className="left-section-container">
                    {/* Giao diện 40 ghế */}
                    <div className="left-section-container">
                        <div className="left-section">
                            <div className="seats-grid">
                                <h3>Tầng 1</h3>
                                {[
                                    ["A1", "", "A7", "", "A13"],
                                    ["A2", "", "A8", "", "A14"],
                                    ["A3", "", "A9", "", "A15"],
                                    ["A4", "", "A10", "", "A16"],
                                    ["A5", "", "A11", "", "A17"],
                                    ["A6", "A19", "A12", "A20", "A18"],
                                ].map((row, rowIndex) => (
                                    <div
                                        className="seat-row"
                                        key={`row-${rowIndex}`}
                                    >
                                        {row.map((seat, index) =>
                                            seat ? (
                                                <button
                                                    key={seat}
                                                    className={`seat ${isSeatBooked(seat)
                                                        ? "booked-seat"
                                                        : isSeatChosed(seat)
                                                            ? "chosen-seat"
                                                            : isSeatSelected(
                                                                seat
                                                            )
                                                                ? "selected"
                                                                : ""
                                                        }`}
                                                    onClick={() =>
                                                        toggleSeat(seat)
                                                    }
                                                    disabled={isSeatBooked(
                                                        seat
                                                    )} // Disable ghế đã đặt
                                                >
                                                    {seat}
                                                </button>
                                            ) : (
                                                <button
                                                    className="seat seat-hidded"
                                                    key={`hidden-${index}`}
                                                />
                                            )
                                        )}
                                    </div>
                                ))}
                                <h3>Tầng 2</h3>
                                {[
                                    ["B1", "", "B7", "", "B13"],
                                    ["B2", "", "B8", "", "B14"],
                                    ["B3", "", "B9", "", "B15"],
                                    ["B4", "", "B10", "", "B16"],
                                    ["B5", "", "B11", "", "B17"],
                                    ["B6", "B19", "B12", "B20", "B18"],
                                ].map((row, rowIndex) => (
                                    <div
                                        className="seat-row"
                                        key={`row-${rowIndex + 4}`}
                                    >
                                        {row.map((seat, index) =>
                                            seat ? (
                                                <button
                                                    key={seat}
                                                    className={`seat ${isSeatBooked(seat)
                                                        ? "booked-seat"
                                                        : isSeatChosed(seat)
                                                            ? "chosen-seat"
                                                            : isSeatSelected(
                                                                seat
                                                            )
                                                                ? "selected"
                                                                : ""
                                                        }`}
                                                    onClick={() =>
                                                        toggleSeat(seat)
                                                    }
                                                >
                                                    {seat}
                                                </button>
                                            ) : (
                                                <button
                                                    className="seat seat-hidded"
                                                    key={`hidden-${index}`}
                                                />
                                            )
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        if (seatCount === 34) {
            return (
                <div className="left-section-container">
                    <div className="left-section-container">
                        <div className="left-section">
                            <div className="seats-grid">
                                <h3>Tầng 1</h3>
                                {[
                                    ["A1", "", "A7", "", "A12"],
                                    ["A2", "", "A8", "", "A13"],
                                    ["A3", "", "A9", "", "A14"],
                                    ["A4", "", "A10", "", "A15"],
                                    ["A5", "", "A11", "", "A16"],
                                    ["A6", "", "", "", "A17"],
                                ].map((row, rowIndex) => (
                                    <div
                                        className="seat-row"
                                        key={`row-${rowIndex}`}
                                    >
                                        {row.map((seat, index) =>
                                            seat ? (
                                                <button
                                                    key={seat}
                                                    className={`seat ${isSeatBooked(seat)
                                                        ? "booked-seat"
                                                        : isSeatChosed(seat)
                                                            ? "chosen-seat"
                                                            : isSeatSelected(
                                                                seat
                                                            )
                                                                ? "selected"
                                                                : ""
                                                        }`}
                                                    onClick={() =>
                                                        toggleSeat(seat)
                                                    }
                                                    disabled={isSeatBooked(
                                                        seat
                                                    )} // Disable ghế đã đặt
                                                >
                                                    {seat}
                                                </button>
                                            ) : (
                                                <button
                                                    className="seat seat-hidded"
                                                    key={`hidden-${index}`}
                                                />
                                            )
                                        )}
                                    </div>
                                ))}
                                <h3>Tầng 2</h3>
                                {[
                                    ["B1", "", "B7", "", "B12"],
                                    ["B2", "", "B8", "", "B13"],
                                    ["B3", "", "B9", "", "B14"],
                                    ["B4", "", "B10", "", "B15"],
                                    ["B5", "", "B11", "", "B16"],
                                    ["B6", "", "", "", "B17"],
                                ].map((row, rowIndex) => (
                                    <div
                                        className="seat-row"
                                        key={`row-${rowIndex}`}
                                    >
                                        {row.map((seat, index) =>
                                            seat ? (
                                                <button
                                                    key={seat}
                                                    className={`seat ${isSeatBooked(seat)
                                                        ? "booked-seat"
                                                        : isSeatChosed(seat)
                                                            ? "chosen-seat"
                                                            : isSeatSelected(
                                                                seat
                                                            )
                                                                ? "selected"
                                                                : ""
                                                        }`}
                                                    onClick={() =>
                                                        toggleSeat(seat)
                                                    }
                                                    disabled={isSeatBooked(
                                                        seat
                                                    )} // Disable ghế đã đặt
                                                >
                                                    {seat}
                                                </button>
                                            ) : (
                                                <button
                                                    className="seat seat-hidded"
                                                    key={`hidden-${index}`}
                                                />
                                            )
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return null; // Nếu không có seatCount hợp lệ
    };

    useEffect(() => {
        const storedUser = localStorage.getItem("userId");
        if (storedUser) {
            try {
                const userData = JSON.parse(storedUser);

                // Gán dữ liệu từ localStorage vào form
                if (userData.id) setValue("id", userData.id);
                if (userData.name) setValue("name", userData.name);
                if (userData.email) setValue("email", userData.email);
                if (userData.address) setValue("address", userData.address);
                if (userData.phone) setValue("phone", userData.phone);
            } catch (error) {
                console.error("Lỗi khi đọc dữ liệu từ localStorage:", error);
            }
        }
    }, [setValue]);




    //check voucher
    const [result, setResult] = useState<{ code: string; discount: string } | null>(null);
    const [voucherCode, setVoucherCode] = useState<string>("");

    const onSubmitSeatBooking = async (data: DbRecordForm) => {
        setValue("total_price", totalPrice);
        setVoucherCode(data.code_voucher);

        try {
            const response = await axios.get("http://doantotnghiep.test/api/promotions");
            const promotionsList = response.data.data;

            // Flatten mảng promotions từ tất cả các mục
            const allPromotions = promotionsList.flatMap((item: any) => item.promotions);

            // Tìm mã khuyến mại khớp với mã người dùng nhập
            const matchedVoucher = allPromotions.find(
                (promotion: any) => promotion.code === data.code_voucher
            );

            console.log('Tất cả các mã khuyến mại:', allPromotions);

            if (matchedVoucher) {
                const localResult = {
                    code: matchedVoucher.code,
                    discount: matchedVoucher.discount,
                };
                setResult(localResult);

                console.log("Đã tìm được mã:", localResult.code);
                console.log("Giảm giá:", localResult.discount);

                toast.success("Đã xác thực mã!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });

                // Gọi API apply voucher nếu cần
                const storedUser = localStorage.getItem("userId");



                if (storedUser) {
                    const userData = JSON.parse(storedUser);
                    const voucherApply = {
                        code: localResult.code,
                        route_id: routeId,
                        user_id: userData.id
                    };
                    console.log("Voucher apply response:", voucherApply);
                    // Gửi POST nếu cần
                    try {
                        await axios.post('http://doantotnghiep.test/api/voucher/apply', voucherApply);
                        toast.success("Đã áp dụng mã!", {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                        });
                    } catch (error) {
                        toast.error("Mã không được áp dụng!", {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                        });
                    }
                }
                window.location.href = `/pay?userId=${data.id}&trip_id=${tripId}&bus_id=${busId}&fare=${fare}&route_id=${routeId}&time_start=${timeStart}&date=${date}&name_seat=${data?.seat}&location_start=${data?.location_start}&id_start_stop=${id_start_stop}&location_end=${data?.location_end}&id_end_stop=${id_end_stop}&name=${data?.name}&phone=${data?.phone}&email=${data?.email}&total_price=${data?.total_price}&note=${data?.note}&vouchercode=${localResult.code}&discount=${localResult.discount}`;
            } else {
                toast.error("Không tìm thấy mã giảm giá", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                window.location.href = `/pay?userId=${data.id}&trip_id=${tripId}&bus_id=${busId}&fare=${fare}&route_id=${routeId}&time_start=${timeStart}&date=${date}&name_seat=${data?.seat}&location_start=${data?.location_start}&id_start_stop=${id_start_stop}&location_end=${data?.location_end}&id_end_stop=${id_end_stop}&name=${data?.name}&phone=${data?.phone}&email=${data?.email}&total_price=${data?.total_price}&note=${data?.note}&vouchercode=&discount=`;

            }
        } catch (error) {
            console.error("Lỗi khi lấy danh sách khuyến mại:", error);
            Swal.fire({
                title: `Lỗi khi lấy dữ liệu mã giảm giá`,
                icon: "error",
                showConfirmButton: false,
                allowEscapeKey: true,
            });
        }
    };


    return (
        <>
            {loading ? (<> <LinearProgress /></>) : (<></>)}

            <div className="list-poup-popup-content">
                <div className="list-poup-seat-selection">
                    <Link
                        to={`/list?start=${id_start_stop}&end=${id_end_stop}&date=${date}`}
                        className="btn btn-primary"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </Link>
                    <div className="list-poup-seat-layout">
                        <div className="popup-overlay-select-seat">
                            <div className="popup-content-select-seat">
                                <div className="seat-selection">
                                    <div className="seat-layout">
                                        <div className="left-section-container">
                                            <div className="seat_layout">
                                                {loading ? (
                                                    <> Đang Tải Ghế.... </>
                                                ) : (
                                                    <>
                                                        {renderSeatLayout()}
                                                    </>)}
                                            </div>
                                            <div className="legend">
                                                <div className="flex_legend">
                                                    <div className="legend-item">
                                                        <span className="empty-seat"></span>{" "}
                                                        <span className="legend-seat-text">
                                                            Ghế trống
                                                        </span>
                                                    </div>
                                                    <div className="legend-item">
                                                        <span className="booked-seat"></span>{" "}
                                                        <span className="legend-seat-text">
                                                            Ghế đã đặt
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex_legend">
                                                    <div className="legend-item">
                                                        <span className="chosen-seat"></span>{" "}
                                                        <span className="legend-seat-text">
                                                            Ghế đã chọn
                                                        </span>
                                                    </div>
                                                    <div className="legend-item">
                                                        <span className="no-seat"></span>{" "}
                                                        <span className="legend-seat-text">
                                                            Ghế không bán
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="right-section">
                                            <h3>Thông tin đặt vé</h3>
                                            <form onSubmit={handleSubmit(onSubmitSeatBooking)}>
                                                <label>Mã Chuyến: {tripId} - {timeStart}</label>

                                                <label>Ghế đã chọn:</label>
                                                <div className="input-container">
                                                    <input
                                                        type="text"
                                                        value={Array.from(selectedSeats).join(", ")}
                                                        {...register("seat", {
                                                            validate: () => selectedSeats.size > 0 || "Ghế đã chọn không được bỏ trống.",
                                                        })}
                                                        className="input-text"
                                                        disabled
                                                    />
                                                    {errors.seat ? (
                                                        <span className="input-icon" style={{ color: "#dc3545" }}>X</span>
                                                    ) : (
                                                        selectedSeats.size > 0 && <span className="input-icon" style={{ color: "#28a745" }}>✔</span>
                                                    )}
                                                </div>
                                                {errors.seat && <div className="invalid-feedback">{errors.seat.message}</div>}

                                                <label>Giá:</label>
                                                <div className="input-container">
                                                    <input
                                                        type="text"
                                                        value={`${totalPrice.toLocaleString()} VNĐ`}
                                                        {...register("total_price", {
                                                            validate: () => totalPrice > 0 || "Giá phải lớn hơn 0.",
                                                        })}
                                                        className="input-text"
                                                        disabled
                                                    />
                                                    {errors.total_price ? (
                                                        <span className="input-icon" style={{ color: "#dc3545" }}>X</span>
                                                    ) : (
                                                        totalPrice > 0 && <span className="input-icon" style={{ color: "#28a745" }}>✔</span>
                                                    )}
                                                </div>
                                                {errors.total_price && <div className="invalid-feedback">{errors.total_price.message}</div>}

                                                <label>Họ tên:</label>
                                                <div className="input-container">
                                                    <input
                                                        type="text"
                                                        placeholder="Họ tên.."
                                                        {...register("name", { required: "Họ và tên không được để trống." })}
                                                        className="input-text"
                                                    />
                                                    {errors.name ? (
                                                        <span className="input-icon" style={{ color: "#dc3545" }}>X</span>
                                                    ) : (
                                                        <span className="input-icon" style={{ color: "#28a745" }}>✔</span>
                                                    )}
                                                </div>
                                                {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}

                                                <label>Số điện thoại:</label>
                                                <div className="input-container">
                                                    <input
                                                        type="text"
                                                        placeholder="Số điện thoại.."
                                                        {...register("phone", {
                                                            required: "Số điện thoại là bắt buộc.",
                                                            pattern: {
                                                                value: /^\d{10}$/,
                                                                message: "Số điện thoại phải là 10 chữ số.",
                                                            },
                                                        })}
                                                        className="input-text"
                                                    />
                                                    {errors.phone ? (
                                                        <span className="input-icon" style={{ color: "#dc3545" }}>X</span>
                                                    ) : (
                                                        <span className="input-icon" style={{ color: "#28a745" }}>✔</span>
                                                    )}
                                                </div>
                                                {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}

                                                <label>Email:</label>
                                                <div className="input-container">
                                                    <input
                                                        type="email"
                                                        placeholder="Email.."
                                                        {...register("email", {
                                                            required: "Email là bắt buộc.",
                                                            pattern: {
                                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                                message: "Email phải đúng định dạng.",
                                                            },
                                                        })}
                                                        onChange={handleEmailChange}
                                                        className="input-text"
                                                    />
                                                    {errors.email ? (
                                                        <span className="input-icon" style={{ color: "#dc3545" }}>X</span>
                                                    ) : (
                                                        <span className="input-icon" style={{ color: "#28a745" }}>✔</span>
                                                    )}
                                                </div>
                                                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}

                                                {isEmailEntered && (
                                                    <div className="form-check">
                                                        <input
                                                            type="checkbox"
                                                            className=""
                                                            {...register("emailCheck")}
                                                            onChange={() => setSendTicketEmail(true)}
                                                        />
                                                        <label className="form-check-label">Gửi vé về email</label>
                                                    </div>
                                                )}

                                                <label>Ghi chú:</label>
                                                <textarea
                                                    className="form-node"
                                                    placeholder="Ghi chú.."
                                                    {...register("note")}
                                                ></textarea>

                                                <label>Mã khuyến mãi:</label>
                                                <div className="input-container">
                                                    <input
                                                        type="text"
                                                        placeholder="Mã khuyến mại.."
                                                        {...register("code_voucher")}
                                                        className="input-text"
                                                    />
                                                </div>

                                                <label>Điểm đi:</label>
                                                <select {...register('location_start')}>
                                                    <option value="Tại Bến">Tại Bến</option>
                                                    <option value="Dọc Đường">Dọc Đường</option>
                                                </select>
                                                <input type="text" value={`${start_stop_name}`} disabled className="input-text" />
                                                {/* Điểm đi */}
                                                <label>Điểm đến:</label>
                                                <select {...register('location_end')}>
                                                    <option value="Tại Bến">Tại Bến</option>
                                                    <option value="Dọc Đường">Dọc Đường</option>
                                                </select>
                                                <input type="text" value={`${end_stop_name}`} disabled className="input-text" />
                                                {/* Điểm đến */}
                                                <div className="btn">
                                                    <button className="checkVoucher" type="button">
                                                        Kiểm tra mã
                                                    </button>
                                                    <button
                                                        className="checkVoucher"
                                                        type="submit"
                                                        style={{ background: "#405187" }}
                                                    >
                                                        Tiếp tục
                                                    </button>
                                                </div>
                                            </form>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SoDoGhe;
