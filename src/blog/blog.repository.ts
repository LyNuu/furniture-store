import { PrismaService } from "src/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { Blog } from "./blog.model";

@Injectable()
export class BlogRepository {
    constructor(private prisma: PrismaService) { }

    async save(blog: Blog) {
        return await this.prisma.blog.create({
            data: blog
        });
    }
}