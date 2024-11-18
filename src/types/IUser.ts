export type UserType = {
    id?: number;
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
export type LoginResponse = {
    access_token: string;
    token_type: string;
    user: UserType;
    
}
