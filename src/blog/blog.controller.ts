import { Controller, Post } from "@nestjs/common";
import { BlogService } from "./blog.service";
import { BlogDto } from "./dto/blog.dto";

@Controller('blogs')
export class BlogController {
    constructor(private blogService: BlogService) {}

    @Post()
    async createBlog(blog: BlogDto) {
        return await this.blogService.createBlog(blog);
    }
}