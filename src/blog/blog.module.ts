import { BlogRepository } from "./blog.repository";
import { BlogService } from "./blog.service";
import { BlogController } from "./blog.controller";
import { Module } from "@nestjs/common";


@Module({
    controllers: [BlogController],
    providers: [BlogService, BlogRepository]
})
export class BlogModule{}