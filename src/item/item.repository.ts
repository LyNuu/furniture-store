    import { Injectable } from '@nestjs/common';
    import { Item } from './item.model';
    import { PrismaService } from '../prisma/prisma.service';

    @Injectable()
    export class ItemRepository {
        constructor(private prisma : PrismaService){}

        async save(item: Item) {
            return await this.prisma.item.create({ data: item });
        }

        async findAll() {
            return await this.prisma.item.findMany();
        }
    }