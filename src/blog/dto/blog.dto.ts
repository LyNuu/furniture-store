import { IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator";


export class BlogDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsOptional()
    @IsUrl()
    imageUrl: string;
}