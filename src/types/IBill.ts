export interface BillResponse {
  status: string; // Trạng thái của phản hồi, ví dụ: "success" hoặc "error".
  message: string; // Thông điệp kèm theo, ví dụ: "Dữ liệu đơn hàng đã được tải."
  data: OrderData; // Dữ liệu chi tiết của đơn hàng.
}

export interface OrderData {
  ticket_booking_id: number;
  id: string;
  name: string; // Tên của khách hàng.
  phone: string; // Số điện thoại của khách hàng.
  email: string; // Email của khách hàng.
  driver_name: string; // Tên tài xế.
  driver_phone: string; // Số điện thoại tài xế.
  license_plate: string; // Biển số xe.
  route_name: string; // Tuyến đường.
  date_start: string; // Ngày bắt đầu chuyến đi (YYYY-MM-DD).
  booking_date: string; // Ngày đặt vé (YYYY-MM-DD).
  start_point: string; // Điểm khởi hành.
  end_point: string; // Điểm đến.
  point_up: string; // Điểm khởi hành.
  point_down: string; // Điểm đến.
  name_seat: string[]; // Danh sách tên ghế đã đặt.
  note: string | null; // Ghi chú (có thể null).
  ticket_price: string; // Giá vé (dạng chuỗi để xử lý giá tiền chính xác hơn).
  total_price: string; 
  status: string;
  order_code: string;
  ticket_codes: string[]; 
  ticket_code: string;
  discount: number;
  code_voucher: string;
  time_start: string;

}

interface BillDetail {
  ticket_code: string;
  name_seat: string;
  price: string;
};

export interface OrderDataDetail {
  id: number;
  name: string;
  phone: string;
  email: string;
  driver_name: string;
  driver_phone: string;
  license_plate: string;
  route_name: string;
  start_point: string;
  end_point: string;
  time_start: string;
  date_start: string;
  ticket_details: BillDetail[];
  total_price: string;
  status: "paid" | "unpaid";  // Assuming the status can only be "paid" or "unpaid"
  order_code: string;
  created_at: string;
  location_end: string;
  location_start: string;
  discount: number;
  code_voucher: string;
};

export interface BillDetailResponse {
  status: "success" | "error"; // Based on the example, status could be success or error
  message: string;
  data: OrderDataDetail;
};
