import { IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";
import {UserRole} from "../shemas/user.shema";

export class UserCreateDto {
    @IsOptional()
    @IsString()
    readonly name: string;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsStrongPassword()
    readonly password: string;

    readonly role: UserRole;
}