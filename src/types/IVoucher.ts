// Loại dữ liệu chính của voucher
export type Voucher = {
    id: number;
    title: string;
    image: string;
    code: string;
    discount: string;
    start_date: string; // ISO date string
    end_date: string;   // ISO date string
    description: string;
    content: string;
    count: number;
    status: "pending" | "approved" | "rejected"; // Các trạng thái có thể
    route_id: number | null;
    user_id: number | null;
    promotion_category_id: number;
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
    deleted_at: string | null; // Nullable ISO date string
    users: User[]; // Mảng User liên quan
    routes: Route[]; // Mảng Route liên quan
    promotion_category: PromotionCategory; // Thông tin danh mục khuyến mãi
  };
  
  // Loại dữ liệu của mỗi User liên quan
  export type User = {
    id: number;
    name: string;
    type: "employee" | "admin" | "customer"; // Các loại user
    email: string;
    phone: string;
    address: string;
    email_verified_at: string | null; // Nullable ISO date string
    is_active: boolean;
    deleted_at: string | null; // Nullable ISO date string
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
    otp: string | null; // OTP nếu có
    otp_expires_at: string | null; // OTP expiry nếu có
    pivot: UserPivot; // Liên kết giữa User và Voucher
  };
  
  // Pivot giữa User và Voucher
  export type UserPivot = {
    promotion_id: number;
    user_id: number;
  };
  
  // Loại dữ liệu của mỗi Route liên quan
  export type Route = {
    id: number;
    route_name: string;
    start_route_id: number;
    end_route_id: number;
    cycle: number; // Số phút giữa các chuyến
    route_price: string; // Giá vé
    length: string; // Độ dài tuyến (km)
    is_active: boolean; // Tuyến đang hoạt động
    description: string;
    deleted_at: string | null; // Nullable ISO date string
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
    pivot: RoutePivot; // Liên kết giữa Route và Voucher
  };
  
  // Pivot giữa Route và Voucher
  export type RoutePivot = {
    promotion_id: number;
    route_id: number;
  };
  
  // Loại dữ liệu của danh mục khuyến mãi
  export type PromotionCategory = {
    id: number;
    name: string;
    description: string;
    is_active: boolean;
    deleted_at: string | null; // Nullable ISO date string
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
  };
  