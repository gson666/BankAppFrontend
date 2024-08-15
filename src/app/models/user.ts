import { AccountDto } from "./account";

export interface UserDto {
    id: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    isDeleted: boolean;
    userImage?:string;
    acconts:AccountDto[];
  }
  
  export interface UserRegistrationDto {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
  }
  
  export interface UserLoginDto {
    userName: string;
    password: string;
  }
  