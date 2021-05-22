export interface User {
    user_id: number,
    username: string,
    password: string,
    first_name: string,
    last_name: string,
    email: string,
    user_role: { user_role_id: number, user_role: string }

}

export interface UserDTO {
    username: string,
    password: string,
    first_name: string,
    last_name: string,
    email: string,

}