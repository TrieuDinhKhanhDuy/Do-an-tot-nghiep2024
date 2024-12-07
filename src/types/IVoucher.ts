export type Promotion = {
  id: number;
  title: string;
  image: string | undefined; // Nếu có thể là null hoặc string
  code: string;
  discount: string;
  start_date: string;
  end_date: string;
  description: string;
  content: string;
  count: number;
  status: string; // Chỉ định giá trị có thể của status
  route_id: number | null; // Nếu có thể là null hoặc number
  user_id: number | null; // Nếu có thể là null hoặc number
  promotion_category_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null; // Có thể là null hoặc string
}
