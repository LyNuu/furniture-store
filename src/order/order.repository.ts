import { Injectable } from "@nestjs/common";
import { Order } from "./order.model";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class OrderRepository {
    constructor(private prisma: PrismaService) { }

    async save(order: Order) {
        return await this.prisma.order.create({
            data: {
                status: order.status,
                userId: order.userId,
            }
        });
    }
}