export interface PaymentMethod {
    id: number;
    name: string;
    created_at: string;
    updated_at: string | null;
}

export interface SeatsStatus {
    [seatName: string]: string;
    user_id_chosen: string;
}
type SeatInfo = {
    status: 'selected' | 'available' | 'booked' | 'chosen';
    userId: string | null; // userId của người đã chọn ghế, có thể là null nếu chưa có người chọn
};

export type SeatsStatusv2 = {
    [seatName: string]: SeatInfo;
};
export interface SeatApiResponse {
    methods: PaymentMethod[];
    seatsStatus: SeatsStatus;
    seatCount: number;
}