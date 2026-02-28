import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginDto {
    @IsEmail({}, { message: 'enter correct email' })
    @IsNotEmpty()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(7)
    readonly password: string;
}