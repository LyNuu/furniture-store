import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserRepository {
    constructor(private prisma: PrismaService) { }

    async save(user: User) {
        return await this.prisma.user.create({ data: user });
    }
}