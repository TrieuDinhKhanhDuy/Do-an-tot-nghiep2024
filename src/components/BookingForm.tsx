
import {
    faCalendarAlt,
    faMapMarkerAlt,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Website/BokingForm.css";
import { useEffect, useState } from "react";
import { Select } from "antd";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import React from 'react';
import { BookingFormData } from "@/types/IBooking";




interface BookingFormProps {
    onSearch: (data: BookingFormData) => void;
}
const BookingFormComponent: React.FC<BookingFormProps> = ({ onSearch }) => {
    const [formData, setFormData] = useState<any[]>([]);
    const [minDate, setMinDate] = useState<string>("");
    const { register, handleSubmit, control } = useForm<BookingFormData>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://doantotnghiep_backend.test/api/stops");
                setFormData(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    const onSubmit = (data: BookingFormData) => {
        onSearch(data); // Gọi callback với dữ liệu tìm kiếm
    };

    useEffect(() => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate());
        setMinDate(tomorrow.toISOString().split("T")[0]);
    }, []);



    return (
        <form className="bookingForm-search" onSubmit={handleSubmit(onSubmit)}>
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
                            {...field} // Gán các thuộc tính của field
                            options={formData.map((location) => ({
                                value: location.id,
                                label: (
                                    <span
                                        style={{
                                            fontWeight: location.parent_id === null ? "bold" : "normal",
                                            fontSize: location.parent_id === null ? "16px" : "14px"
                                        }}
                                    >
                                        {location.stop_name}
                                    </span>
                                ),
                            }))}
                        />
                    )}
                />
            </div>

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
                            {...field} // Gán các thuộc tính của field
                            options={formData.map((location) => ({
                                value: location.id,
                                label: (
                                    <span
                                        style={{
                                            fontWeight: location.parent_id === null ? "bold" : "normal",
                                            fontSize: location.parent_id === null ? "16px" : "14px"
                                        }}
                                    >
                                        {location.stop_name}
                                    </span>
                                ),
                            }))}
                        />
                    )}
                />
            </div>

            <div className="bookingForm-input">
                <div className="bookingForm-input-top">
                    <span>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </span>
                    <label>Ngày khởi hành</label>
                </div>
                <input type="date" id="date" min={minDate}   {...register("departureDate")} />
            </div>

            <div className="bookingForm-button">
                <FontAwesomeIcon icon={faSearch} size="lg" />
                <button type="submit">Tìm chuyến</button>
            </div>
        </form>
    );
};

export default BookingFormComponent;
