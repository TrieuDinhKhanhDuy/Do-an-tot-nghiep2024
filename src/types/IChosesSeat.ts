export interface PaymentMethod {
    id: number;
    name: string;
    created_at: string;
    updated_at: string | null;
}

export interface SeatsStatus {
    [seatName: string]: string;
}

export interface SeatApiResponse {
    methods: PaymentMethod[];
    seatsStatus: SeatsStatus;
    seatCount: number;
}