import "../../../styles/Website/changeTicket.css";
import { BookingFormData } from '@/types/IBooking';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingFormComponent from '@/components/BookingForm';
import { useEffect, useState } from "react";
import axios from "axios";
import { DbRecord } from "@/types/IBus";
import Breadcrumb from "@/components/Breadcrumb";
import numeral from "numeral";
import moment from "moment";
import { useForm } from "react-hook-form";


const ChangeTicket = () => {
  const [buses, setBuses] = useState<DbRecord[]>([]);

  const nav = useNavigate();

  const location = useLocation();
  const [oldTicketData, setOldTicketData] = useState<any>([]);
  const queryParams = new URLSearchParams(location.search);
  const id_change = queryParams.get("id_change");
  const formattedFare = numeral(oldTicketData?.data?.total_price).format('0,0');
  
  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const response = await axios.get(`http://doantotnghiep.test/api/change/${id_change}`);
        setOldTicketData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTicketData();
  }, [id_change]);

  const handleSearch = async (data: BookingFormData) => {
    try {
      const res = await axios.get(
        "http://doantotnghiep.test/api/home/show",
        {
          params: {
            start_stop_id: data.startLocation,
            end_stop_id: data.endLocation,
            date: data.departureDate,
          },
        },
      );
      nav(`/changeticket?change_id=${oldTicketData?.data?.id}&nextstart=${data.startLocation}&nextend=${data.endLocation}`);
      setBuses(res.data.data);
    } catch (error) {

    }
  };


  const formatTime = (time: string): string => {
    return moment(time, "HH:mm:ss").format("hh:mm A");
  };
  const handleChoseSeat = async (bus: DbRecord) => {
    const queryParams = new URLSearchParams(location.search);
    const startLocation = queryParams.get("nextstart");
    const endLocation = queryParams.get("nextend");
    window.location.href = (`/choseseat?id_change=${oldTicketData?.data?.id}&total_old_price=${oldTicketData?.data?.total_price}&trip_id=${bus?.trip_id}&start_stop_name=${bus.start_stop_name}&end_stop_name=${bus.end_stop_name}&bus_id=${bus?.bus_id}&fare=${bus?.fare}&route_id=${bus?.route_id}&time_start=${bus?.time_start}&date=${bus?.date}&id_start_stop=${startLocation}&id_end_stop=${endLocation}`);
  }
  const duongDan = [
    { nhan: "Trang Chủ", duongDan: "/" },
    { nhan: "Vé của tôi", duongDan: "/myticket" },
    { nhan: "Đổi vé", duongDan: `/changeticket?id_change=${oldTicketData?.data?.id}` },
  ];

  return (
    <>
      <Breadcrumb items={duongDan} />
      <div className="changeTicket_container">
        <BookingFormComponent onSearch={handleSearch} />
        <div className="changeTicket">
          {/* Thông tin chuyến xe */}
          <div className="changeTicket__info">
            <h3 className="changeTicket__info-title">Thông tin chuyến hiện tại</h3>
            <table className="changeTicket__info-table">
              <tbody style={{ borderBottom: "1px dashed grey", marginBottom: '30px' }}>
                <tr>
                  <td className="changeTicket__info-label">Tuyến:</td>
                  <td className="changeTicket__info-value">{oldTicketData?.data?.route?.route_name || ''}</td>
                </tr>
                <tr>
                  <td className="changeTicket__info-label">Ngày:</td>
                  <td className="changeTicket__info-value">{oldTicketData?.data?.date}</td>
                </tr>
                <tr>
                  <td className="changeTicket__info-label">Giờ xuất bến:</td>
                  <td className="changeTicket__info-value">{formatTime(oldTicketData?.data?.trip?.time_start)}</td>
                </tr>
                <tr>
                  <td className="changeTicket__info-label">Điểm đi:</td>
                  <td className="changeTicket__info-value">{oldTicketData?.startStopName || ''}</td>
                </tr>
                <tr>
                  <td className="changeTicket__info-label">Điểm đến:</td>
                  <td className="changeTicket__info-value">{oldTicketData?.endStopName || ''}</td>
                </tr>
                <tr>
                  <td className="changeTicket__info-label">Giá:</td>
                  <td className="changeTicket__info-value">{formattedFare}VNĐ</td>
                </tr>
                <tr>
                  <td className="changeTicket__info-label">Ghi chú:</td>
                  <td className="changeTicket__info-value">{oldTicketData?.data?.note || ''}</td>
                </tr>
              </tbody>
            </table>
            <div className="changeTicket__info-note">
              Khi nhấp vào "Tìm chuyến", bạn đồng ý rằng bạn đã đọc và hiểu{" "}
              <a href="#" className="changeTicket__info-link">Điều khoản sử dụng</a> và{" "}
              <a href="#" className="changeTicket__info-link">Chính sách hoàn hủy</a>.
            </div>
          </div>

          {/* Danh sách chuyến xe */}
          <div className="changeTicket__list">

            {buses.map((item_bus, index) => (
              <div key={index} className="changeTicket__list-item">
                <div className="changeTicket__list-route">
                  {item_bus.route_name}
                  <span className="changeTicket__list-time">🕒{formatTime(item_bus.time_start)}</span>
                </div>
                <div className="changeTicket__list-details">
                  <span className="changeTicket__list-type">{item_bus.name_bus}</span>
                  <span className="changeTicket__list-seats">{item_bus.available_seats}/{item_bus.total_seats} Chỗ trống</span>
                </div>
                <div className="changeTicket__list-price">
                  <span className="changeTicket__list-price-value">{numeral(item_bus.fare).format('0,0')}VND</span>
                  <button className="changeTicket__list-button" onClick={() => handleChoseSeat(item_bus)}>Chọn chỗ</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div></>
  );
};

export default ChangeTicket;
