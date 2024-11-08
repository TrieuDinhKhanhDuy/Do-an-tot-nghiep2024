import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import "../../../styles/Website/listPouptest.css";
import "../../../styles/Website/BokingForm.css";
import "../../../styles/Website/list_busFix.css";
import "../../../styles/Website/list.css";

interface PaymentMethod {
    id: number;
    name: string;
    created_at: string;
    updated_at: string | null;
}

interface SeatsStatus {
    [seatName: string]: string;
}

interface ApiResponse {
    methods: PaymentMethod[];
    seatsStatus: SeatsStatus;
    seatCount: number;
}

const SoDoGhe: React.FC = () => {
    const { register, handleSubmit, reset, setValue } = useForm();
    const [selectedSeats, setSelectedSeats] = useState(new Set());
    const [seatsStatus, setSeatsStatus] = useState<SeatsStatus>({});
    const [fare, setFare] = useState(0);
    const [seatCount, setSeatCount] = useState(0); // Thêm state để lưu seatCount

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const tripId = params.get('trip_id');
    const busId = params.get('bus_id');
    const routeId = params.get('route_id');
    const date = params.get('date');
    const timeStart = params.get('time_start');
    const id_start_stop = params.get('id_start_stop');
    const id_end_stop = params.get('id_end_stop');
    const nav = useNavigate();

    const [email, setEmail] = useState('');
    const [sendTicketEmail, setSendTicketEmail] = useState(false);
    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };
    const isEmailEntered = email.trim() !== '';

    useEffect(() => {
        axios.get<ApiResponse>(`http://doantotnghiep_backend.test/api/stops?trip_id=${tripId}&date=${date}`)
            .then(response => {
                const { seatsStatus, seatCount } = response.data;
                setSeatsStatus(seatsStatus);
                setFare(parseFloat(params.get('fare') || '0'));
                setSeatCount(seatCount); // Lưu seatCount từ API
            })
            .catch(error => {
                console.error("Lỗi khi lấy dữ liệu ghế:", error);
            });
    }, [tripId, date, params]);

    const isSeatBooked = (seat: string) => seatsStatus[seat] === 'booked';

    const MAX_SELECTED_SEATS = 8;

    const toggleSeat = (seat: any) => {
        if (isSeatBooked(seat)) return;
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

    const isSeatSelected = (seat: any) => selectedSeats.has(seat);
    const totalPrice = selectedSeats.size * fare;

    useEffect(() => {
        setValue('total_price', totalPrice);
    }, [totalPrice, setValue]);

    useEffect(() => {
        setValue('seat', Array.from(selectedSeats).join(', '));
    }, [selectedSeats, setValue]);

    const onSubmitSeatBooking = (data: any) => {
        setValue('total_price', totalPrice);
        reset();

        nav(`/pay?trip_id=${tripId}&bus_id=${busId}&fare=${fare}&route_id=${routeId}&time_start=${timeStart}&date=${date}&name_seat=${data?.seat}&location_start=${data?.location_start}&id_start_stop=${id_start_stop}&location_end=${data?.location_end}&id_end_stop=${id_end_stop}&name=${data?.name}&phone=${data?.phone}&email=${data?.email}&total_price=${data?.total_price}&note=${data?.note}`);
    };

    // Render giao diện ghế tùy thuộc vào seatCount
    const renderSeatLayout = () => {
        if (seatCount === 45) {
            return (
                <div className="left-section-container">
                    <div className="left-section-container">
                        <div className="left-section">

                            <div className="seats-grid">
                                <h3>Xe ghế 45 chỗ</h3>
                                {[
                                    ['A1', 'B1', '', 'D1', 'E1'],
                                    ['A2', 'B2', '', 'D2', 'E2'],
                                    ['A3', 'B3', '', 'D3', 'E3'],
                                    ['A4', 'B4', '', 'D4', 'E4'],
                                    ['A5', 'B5', '', 'D5', 'E5'],
                                    ['A6', 'B6', '', 'D6', 'E6'],
                                    ['A7', 'B7', '', 'D7', 'E7'],
                                    ['A8', 'B8', '', 'D8', 'E8'],
                                    ['A9', 'B9', '', 'D9', 'E9'],
                                    ['A10', 'B10', '', 'D10', 'E10'],
                                    ['A11', 'B11', 'C1', 'D11', 'E11'],

                                ].map((row, rowIndex) => (
                                    <div className="seat-row" key={`row-${rowIndex}`}>
                                        {row.map((seat, index) =>
                                            seat ? (
                                                <button
                                                    key={seat}
                                                    className={`seat ${isSeatBooked(seat) ? 'booked-seat' : isSeatSelected(seat) ? 'selected' : ''}`}
                                                    onClick={() => toggleSeat(seat)}
                                                    disabled={isSeatBooked(seat)} // Disable ghế đã đặt
                                                >
                                                    {seat}
                                                </button>
                                            ) : (
                                                <button className="seat seat-hidded" key={`hidden-${index}`} />
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
                                    ['A1', '', 'A7', '', 'A13'],
                                    ['A2', '', 'A8', '', 'A14'],
                                    ['A3', '', 'A9', '', 'A15'],
                                    ['A4', '', 'A10', '', 'A16'],
                                    ['A5', '', 'A11', '', 'A17'],
                                    ['A6', 'A19', 'A12', 'A20', 'A18'],
                                ].map((row, rowIndex) => (
                                    <div className="seat-row" key={`row-${rowIndex}`}>
                                        {row.map((seat, index) =>
                                            seat ? (
                                                <button
                                                    key={seat}
                                                    className={`seat ${isSeatBooked(seat) ? 'booked-seat' : isSeatSelected(seat) ? 'selected' : ''}`}
                                                    onClick={() => toggleSeat(seat)}
                                                    disabled={isSeatBooked(seat)} // Disable ghế đã đặt
                                                >
                                                    {seat}
                                                </button>
                                            ) : (
                                                <button className="seat seat-hidded" key={`hidden-${index}`} />
                                            )
                                        )}
                                    </div>
                                ))}
                                <h3>Tầng 2</h3>
                                {[
                                    ['B1', '', 'B7', '', 'B13'],
                                    ['B2', '', 'B8', '', 'B14'],
                                    ['B3', '', 'B9', '', 'B15'],
                                    ['B4', '', 'B10', '', 'B16'],
                                    ['B5', '', 'B11', '', 'B17'],
                                    ['B6', 'B19', 'B12', 'B20', 'B18'],
                                ].map((row, rowIndex) => (
                                    <div className="seat-row" key={`row-${rowIndex + 4}`}>
                                        {row.map((seat, index) =>
                                            seat ? (
                                                <button
                                                    key={seat}
                                                    className={`seat ${isSeatSelected(seat) ? 'selected' : ''}`}
                                                    onClick={() => toggleSeat(seat)}
                                                >
                                                    {seat}
                                                </button>
                                            ) : (
                                                <button className="seat seat-hidded" key={`hidden-${index}`} />
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
                                    ['A1', '', 'A7', '', 'A12'],
                                    ['A2', '', 'A8', '', 'A13'],
                                    ['A3', '', 'A9', '', 'A14'],
                                    ['A4', '', 'A10', '', 'A15'],
                                    ['A5', '', 'A11', '', 'A16'],
                                    ['A6', '', '', '', 'A17'],

                                ].map((row, rowIndex) => (
                                    <div className="seat-row" key={`row-${rowIndex}`}>
                                        {row.map((seat, index) =>
                                            seat ? (
                                                <button
                                                    key={seat}
                                                    className={`seat ${isSeatBooked(seat) ? 'booked-seat' : isSeatSelected(seat) ? 'selected' : ''}`}
                                                    onClick={() => toggleSeat(seat)}
                                                    disabled={isSeatBooked(seat)} // Disable ghế đã đặt
                                                >
                                                    {seat}
                                                </button>
                                            ) : (
                                                <button className="seat seat-hidded" key={`hidden-${index}`} />
                                            )
                                        )}
                                    </div>
                                ))}
                                <h3>Tầng 2</h3>
                                {[
                                    ['B1', '', 'B7', '', 'B12'],
                                    ['B2', '', 'B8', '', 'B13'],
                                    ['B3', '', 'B9', '', 'B14'],
                                    ['B4', '', 'B10', '', 'B15'],
                                    ['B5', '', 'B11', '', 'B16'],
                                    ['B6', '', '', '', 'B17'],

                                ].map((row, rowIndex) => (
                                    <div className="seat-row" key={`row-${rowIndex}`}>
                                        {row.map((seat, index) =>
                                            seat ? (
                                                <button
                                                    key={seat}
                                                    className={`seat ${isSeatBooked(seat) ? 'booked-seat' : isSeatSelected(seat) ? 'selected' : ''}`}
                                                    onClick={() => toggleSeat(seat)}
                                                    disabled={isSeatBooked(seat)} // Disable ghế đã đặt
                                                >
                                                    {seat}
                                                </button>
                                            ) : (
                                                <button className="seat seat-hidded" key={`hidden-${index}`} />
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

    return (
        <>
            <div className="list-poup-popup-content">
                <div className="list-poup-seat-selection">
                    <div className="list-poup-seat-layout">
                        <Link to={`/list?start=${id_start_stop}&end=${id_end_stop}&date=${date}`} className="btn btn-primary">
                            <FontAwesomeIcon icon={faTimes} />
                        </Link>
                        <div className="popup-overlay-select-seat">
                            <div className="popup-content-select-seat">
                                <div className="seat-selection">
                                    <div className="seat-layout">
                                        {/* đây là giao diện 40 chỗ */}
                                        {/* <div className="left-section-container">
                                            <div className="left-section">
                                                <div className="seats-grid">
                                                    <h3>Tầng 1</h3>
                                                    {[
                                                        ['A1', '', 'A7', '', 'A13'],
                                                        ['A2', '', 'A8', '', 'A14'],
                                                        ['A3', '', 'A9', '', 'A15'],
                                                        ['A4', '', 'A10', '', 'A16'],
                                                        ['A5', '', 'A11', '', 'A17'],
                                                        ['A6', 'A19', 'A12', 'A20', 'A18'],
                                                    ].map((row, rowIndex) => (
                                                        <div className="seat-row" key={`row-${rowIndex}`}>
                                                            {row.map((seat, index) =>
                                                                seat ? (
                                                                    <button
                                                                        key={seat}
                                                                        className={`seat ${isSeatBooked(seat) ? 'booked-seat' : isSeatSelected(seat) ? 'selected' : ''}`}
                                                                        onClick={() => toggleSeat(seat)}
                                                                        disabled={isSeatBooked(seat)} // Disable ghế đã đặt
                                                                    >
                                                                        {seat}
                                                                    </button>
                                                                ) : (
                                                                    <button className="seat seat-hidded" key={`hidden-${index}`} />
                                                                )
                                                            )}
                                                        </div>
                                                    ))}
                                                    <h3>Tầng 2</h3>
                                                    {[
                                                        ['B1', '', 'B7', '', 'B13'],
                                                        ['B2', '', 'B8', '', 'B14'],
                                                        ['B3', '', 'B9', '', 'B15'],
                                                        ['B4', '', 'B10', '', 'B16'],
                                                        ['B5', '', 'B11', '', 'B17'],
                                                        ['B6', 'B19', 'B12', 'B20', 'B18'],
                                                    ].map((row, rowIndex) => (
                                                        <div className="seat-row" key={`row-${rowIndex + 4}`}>
                                                            {row.map((seat, index) =>
                                                                seat ? (
                                                                    <button
                                                                        key={seat}
                                                                        className={`seat ${isSeatSelected(seat) ? 'selected' : ''}`}
                                                                        onClick={() => toggleSeat(seat)}
                                                                    >
                                                                        {seat}
                                                                    </button>
                                                                ) : (
                                                                    <button className="seat seat-hidded" key={`hidden-${index}`} />
                                                                )
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div> */}
                                        {renderSeatLayout()}
                                        {/* đây là giao diện 45 chỗ */}
                                        {/* <div className="left-section-container">
                                            <div className="left-section">

                                                <div className="seats-grid">
                                                <h3>Xe ghế 45 chỗ</h3>
                                                    {[
                                                        ['A1', 'B1', '', 'D1', 'E1'],
                                                        ['A2', 'B2', '', 'D2', 'E2'],
                                                        ['A3', 'B3', '', 'D3', 'E3'],
                                                        ['A4', 'B4', '', 'D4', 'E4'],
                                                        ['A5', 'B5', '', 'D5', 'E5'],
                                                        ['A6', 'B6', '', 'D6', 'E6'],
                                                        ['A7', 'B7', '', 'D7', 'E7'],
                                                        ['A8', 'B8', '', 'D8', 'E8'],
                                                        ['A9', 'B9', '', 'D9', 'E9'],
                                                        ['A10', 'B10', '', 'D10', 'E10'],
                                                        ['A11', 'B11', 'C1', 'D11', 'E11'],

                                                    ].map((row, rowIndex) => (
                                                        <div className="seat-row" key={`row-${rowIndex}`}>
                                                            {row.map((seat, index) =>
                                                                seat ? (
                                                                    <button
                                                                        key={seat}
                                                                        className={`seat ${isSeatBooked(seat) ? 'booked-seat' : isSeatSelected(seat) ? 'selected' : ''}`}
                                                                        onClick={() => toggleSeat(seat)}
                                                                        disabled={isSeatBooked(seat)} // Disable ghế đã đặt
                                                                    >
                                                                        {seat}
                                                                    </button>
                                                                ) : (
                                                                    <button className="seat seat-hidded" key={`hidden-${index}`} />
                                                                )
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div> */}


                                        {/* đây là giao diện 34 chỗ */}
                                        {/* <div className="left-section-container">
                                            <div className="left-section">
                                                <div className="seats-grid">
                                                <h3>Tầng 1</h3>
                                                    {[
                                                        ['A1', '', 'A7', '', 'A12'],
                                                        ['A2', '', 'A8', '', 'A13'],
                                                        ['A3', '', 'A9', '', 'A14'],
                                                        ['A4', '', 'A10', '', 'A15'],
                                                        ['A5', '', 'A11', '', 'A16'],
                                                        ['A6', '', '', '', 'A17'],
                                                        
                                                    ].map((row, rowIndex) => (
                                                        <div className="seat-row" key={`row-${rowIndex}`}>
                                                            {row.map((seat, index) =>
                                                                seat ? (
                                                                    <button
                                                                        key={seat}
                                                                        className={`seat ${isSeatBooked(seat) ? 'booked-seat' : isSeatSelected(seat) ? 'selected' : ''}`}
                                                                        onClick={() => toggleSeat(seat)}
                                                                        disabled={isSeatBooked(seat)} // Disable ghế đã đặt
                                                                    >
                                                                        {seat}
                                                                    </button>
                                                                ) : (
                                                                    <button className="seat seat-hidded" key={`hidden-${index}`} />
                                                                )
                                                            )}
                                                        </div>
                                                    ))}
                                                        <h3>Tầng 2</h3>
                                                    {[
                                                        ['B1', '', 'B7', '', 'B12'],
                                                        ['B2', '', 'B8', '', 'B13'],
                                                        ['B3', '', 'B9', '', 'B14'],
                                                        ['B4', '', 'B10', '', 'B15'],
                                                        ['B5', '', 'B11', '', 'B16'],
                                                        ['B6', '', '', '', 'B17'],
                                                        
                                                    ].map((row, rowIndex) => (
                                                        <div className="seat-row" key={`row-${rowIndex}`}>
                                                            {row.map((seat, index) =>
                                                                seat ? (
                                                                    <button
                                                                        key={seat}
                                                                        className={`seat ${isSeatBooked(seat) ? 'booked-seat' : isSeatSelected(seat) ? 'selected' : ''}`}
                                                                        onClick={() => toggleSeat(seat)}
                                                                        disabled={isSeatBooked(seat)} // Disable ghế đã đặt
                                                                    >
                                                                        {seat}
                                                                    </button>
                                                                ) : (
                                                                    <button className="seat seat-hidded" key={`hidden-${index}`} />
                                                                )
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div> */}

                                        {/* Phần form điền thông tin */}
                                        <div className="right-section">
                                            <h3>Thông tin đặt vé</h3>
                                            <form onSubmit={handleSubmit(onSubmitSeatBooking)}>
                                                <label>Mã Chuyến: {tripId} - {timeStart}</label>
                                                <label>Ghế đã chọn: </label>
                                                <input type="text" value={Array.from(selectedSeats).join(', ')}  {...register('seat')} disabled />
                                                <input type="hidden" />
                                                <label>Giá:</label>
                                                <input type="text" value={`${totalPrice.toLocaleString()} VNĐ`} {...register('total_price')} disabled />
                                                <input type="hidden" />
                                                <label>Họ tên:</label>
                                                <input type="text" placeholder="Họ tên.." {...register('name', { required: true })} />
                                                <label>Số điện thoại:</label>
                                                <input type="text" placeholder="Số điện thoại.." {...register('phone', { required: true })} />
                                                <label>Email:</label>
                                                <input
                                                    type="email"
                                                    placeholder="Email.."
                                                    {...register('email')}
                                                    onChange={handleEmailChange}
                                                />
                                                {isEmailEntered && (
                                                    <div className="send-ticket-radio">
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                {...register('emailCheck')}
                                                                onChange={() => setSendTicketEmail(true)}
                                                            />
                                                            Gửi vé về email
                                                        </label>
                                                    </div>
                                                )}
                                                <label>Ghi chú:</label>
                                                <textarea className="form-node" placeholder="Ghi chú.." {...register('note')}></textarea>
                                                <label>Điểm đi:</label>
                                                <select {...register('location_start')}>
                                                    <option value="Tại Bến">Tại Bến</option>
                                                    <option value="Dọc Đường">Dọc Đường</option>
                                                </select>
                                                <input type="text" value={`${id_start_stop}`} disabled />
                                                {/* Điểm đi */}
                                                <label>Điểm đến:</label>
                                                <select {...register('location_end')}>
                                                    <option value="Tại Bến">Tại Bến</option>
                                                    <option value="Dọc Đường">Dọc Đường</option>
                                                </select>
                                                <input type="text" value={`${id_end_stop}`} disabled />
                                                {/* Điểm đến */}
                                                <label>Mã khuyến mãi:</label>
                                                <input type="text" placeholder="Mã khuyến mại.." {...register('promoCode')} />
                                                <div className="btn">
                                                    <button className="checkVoucher" type="button">
                                                        Kiểm tra mã
                                                    </button>
                                                    <button className="submit" type="submit">
                                                        Tiếp tục
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="legend">
                                    <div className="legend-item">
                                        <span className="empty-seat"></span> Ghế trống
                                    </div>
                                    <div className="legend-item">
                                        <span className="booked-seat"></span> Ghế đã đặt
                                    </div>
                                    <div className="legend-item">
                                        <span className="chosen-seat"></span> Ghế đã chọn
                                    </div>
                                    <div className="legend-item">
                                        <span className="no-seat"></span> Ghế không bán
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
