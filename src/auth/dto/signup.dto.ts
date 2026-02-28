import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class SignUpDto {
    @IsOptional()
    @IsString()
    readonly name: string;

    @IsEmail({}, { message: 'enter correct email' })
    @IsNotEmpty()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(7)
    readonly password: string;
}