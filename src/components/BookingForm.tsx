import React, { useEffect, useState } from "react";
import {
    faCalendarAlt,
    faMapMarkerAlt,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Select } from "antd";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import "../styles/Website/BokingForm.css"
import { BookingFormData } from "@/types/IBooking";

interface BookingFormProps {
    onSearch: (data: BookingFormData) => void;
}

const BookingFormComponent: React.FC<BookingFormProps> = ({ onSearch }) => {
    const [formData, setFormData] = useState<any[]>([]);
    const [minDate, setMinDate] = useState<string>("");

    const { register, handleSubmit, control, setValue } = useForm<BookingFormData>();

    // Fetch dữ liệu các điểm dừng
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://doantotnghiep.test/api/home");
                setFormData(res.data);
            } catch (error) {
                // Handle error
            }
        };
        fetchData();
    }, []);

    // Cập nhật ngày tối thiểu cho input date
    useEffect(() => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate());
        setMinDate(tomorrow.toISOString().split("T")[0]);
    }, []);

    // Xử lý khi form được submit
    const onSubmit = (data: BookingFormData) => {
        if (data.startLocation === data.endLocation) {
            Swal.fire({
                title: "Lỗi",
                text: "Điểm đi và điểm đến không được trùng nhau!",
                icon: "error",
                confirmButtonText: "OK",
            });
            return;
        }

        const startLocation = formData.find(location => location.id === data.startLocation);
        const endLocation = formData.find(location => location.id === data.endLocation);

        const startName = startLocation ? startLocation.stop_name : "";
        const endName = endLocation ? endLocation.stop_name : "";

        const fullData = {
            ...data,
            startName,
            endName,
        };

        // Lưu vào localStorage
        localStorage.setItem("bookingForm", JSON.stringify(fullData));
        onSearch(fullData);
    };

    useEffect(() => {
        const savedData = localStorage.getItem("bookingForm");
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            const setStart = parsedData.startLocation;
            const setEnd = parsedData.endLocation;
            setValue("startLocation", setStart);
            setValue("endLocation", setEnd);
            setValue("departureDate", parsedData.departureDate);
            console.log('dayla lo co',setStart);
            
        }
    }, []);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const startLocation = queryParams.get("start");
        const endLocation = queryParams.get("end");
        const departureDate = queryParams.get("date");
    
        console.log('day la param', startLocation);
        
        // Set giá trị cho các trường react-hook-form
        // if (departureDate) setValue("departureDate", departureDate);
        // if (startLocation) setValue("startLocation", startLocation); // Lấy giá trị từ startLocation trong URL
        // if (endLocation) setValue("endLocation", endLocation); // Lấy giá trị từ endLocation trong URL
    }, [location.search]);

    return (
        <>
            <form className="bookingForm-search" onSubmit={handleSubmit(onSubmit)}>
                {/* Điểm đi */}
                <div className="bookingForm-input">
                    <div className="bookingForm-input-top">
                        <span>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </span>
                        <label>Điểm đi</label>
                    </div>
                    <Controller
                        name="startLocation"
                        control={control}
                        render={({ field }) => (
                            <Select
                                showSearch
                                className="custom-select"
                                placeholder="Chọn điểm đi"
                                optionFilterProp="label"
                                {...field}
                                options={formData.map((location) => ({
                                    value: location.id,
                                    label: (
                                        <span
                                            style={{
                                                fontWeight: location.parent_id === null ? "bold" : "normal",
                                                fontSize: location.parent_id === null ? "16px" : "14px",
                                                color: "black",
                                            }}
                                        >
                                            {location.stop_name}
                                        </span>
                                    ),
                                    disabled: location.parent_id === null,
                                }))}
                            />
                        )}
                    />
                </div>

                {/* Điểm đến */}
                <div className="bookingForm-input">
                    <div className="bookingForm-input-top">
                        <span>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </span>
                        <label>Điểm đến</label>
                    </div>
                    <Controller
                        name="endLocation"
                        control={control}
                        render={({ field }) => (
                            <Select
                                showSearch
                                className="custom-select"
                                placeholder="Chọn điểm đến"
                                optionFilterProp="label"
                                {...field}
                                options={formData.map((location) => ({
                                    value: location.id,
                                    label: (
                                        <span
                                            style={{
                                                fontWeight: location.parent_id === null ? "bold" : "normal",
                                                fontSize: location.parent_id === null ? "16px" : "14px",
                                                color: "black",
                                            }}
                                        >
                                            {location.stop_name}
                                        </span>
                                    ),
                                    disabled: location.parent_id === null,
                                }))}
                            />
                        )}
                    />
                </div>

                {/* Ngày khởi hành */}
                <div className="bookingForm-input">
                    <div className="bookingForm-input-top">
                        <span>
                            <FontAwesomeIcon icon={faCalendarAlt} />
                        </span>
                        <label>Ngày khởi hành</label>
                    </div>
                    <input
                        type="date"
                        id="date"
                        min={minDate}
                        {...register("departureDate")}
                    />
                </div>

                {/* Nút tìm chuyến */}
                <div className="bookingForm-button">
                    <FontAwesomeIcon icon={faSearch} size="lg" />
                    <button type="submit">Tìm chuyến</button>
                </div>
            </form>
        </>
    );
};

export default BookingFormComponent;


