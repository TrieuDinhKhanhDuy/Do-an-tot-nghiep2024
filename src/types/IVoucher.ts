export type Promotion = {
  id: number;
  title: string;
  image: string ;
  code: string;
  discount: string;
  start_date: string;
  end_date: string;
  description: string;
  content: string;
  count: number;
  status: string;
  voucher_code: string;
}
export type PromotionCategory  = {
  id: number;
  name: string;
  description: string;
  is_active: number;
  created_at: string;
  updated_at: string;
  promotions: Promotion[];
}
