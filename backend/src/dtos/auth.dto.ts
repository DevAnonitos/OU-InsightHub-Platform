export interface SignUpDTO {
    email: string;
    password: string;
    username?: string;
    roles?: [];
};

export interface SignInDTO {
    email: string;
    password: string;
};