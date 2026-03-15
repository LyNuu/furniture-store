import { Item } from "src/item/item.model";
import { User } from "src/user/user.model";
import { OrderStatus } from "@prisma/client";

export class Order {
    status: OrderStatus;
    userId: number;
    user: User;
    items: OrderItem[]
}

export class OrderItem {
    quantity: number;
    price: number;
    orderId: number;
    order: Order;
    itemId: number;
    item: Item;
}