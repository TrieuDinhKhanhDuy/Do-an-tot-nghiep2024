export type UserRegisterType = {
    id: number;
    name_role: string;
    email: string;
    phone: number;
    address: string;
    password: string;
    password_confirmation: string;
};
export type UserLoginType = {
    email: string;
    password: string;
};
export type LoginResponse = {
    access_token: string;
    token_type: string;
}