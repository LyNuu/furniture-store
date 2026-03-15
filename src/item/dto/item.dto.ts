import { IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, IsUrl, Min } from "class-validator";

export class ItemDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    price: number;

    @IsNotEmpty()
    @Min(1)
    quantity: number;

    @IsNotEmpty()
    @IsUrl()
    imageUrl: string;
}