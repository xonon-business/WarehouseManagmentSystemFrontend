export interface RegisterForm {
    email: string,
    password: string,
    // profile
    firstName: string,
    lastName: string,
    pfp?: string,
    // banking info
    cardNum?: number,
    expDate?: string,
    address?: string,
    cvv?: string
}

export interface LoginFrom {
    email: string,
    password: string,
}