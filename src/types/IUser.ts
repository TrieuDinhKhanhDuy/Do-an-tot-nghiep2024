export type UserType = {
    id?: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    password: string;
    password_confirmation: string;
};
export type UserLoginType = {
    email: string;
    password: string;
};
export type OrdersType = {
    driver_phone: number,
    route_name: string,
    image: string,
    time_start: string,
    date_start: string,
    total_price: number,
    status: string,
    order_code: number
}
export type LoginResponse = {
    access_token: string;
    token_type: string;
    user: UserType;
    orders: OrdersType;
}
export type ChangePasswordType = {
    password: string;
    password_confirmation: string;
    otp: string;
    email: string;
}
export type OtpReponse = {
    email: string;
}
export type cancelTicketType = {
    ticket_booking_id: string;
    name: string;
    phone: string;
    email: string;
    order_code: string;
    account_number: string;
    bank: string;
    reason: string;
};