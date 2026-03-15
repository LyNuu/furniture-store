import { Item } from "src/item/item.model";
import { User } from "src/user/user.model";

export class OrderDto {
    userId: number;
    user: User;
    items: OrderItemDto[]
}

export class OrderItemDto {
    quantity: number;
    price: number;
    orderId: number;
    order: OrderDto;
    itemId: number;
    item: Item;
}