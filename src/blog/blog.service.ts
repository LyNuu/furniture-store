import { Injectable } from "@nestjs/common";
import { BlogRepository } from "./blog.repository";
import { Blog } from "./blog.model";
import { BlogDto } from "./dto/blog.dto";

@Injectable()
export class BlogService {
    constructor(private blogRepository: BlogRepository) {}

    async createBlog(blog: BlogDto) {
        const modelBlog = new Blog();
        modelBlog.title = blog.title;
        modelBlog.description = blog.description;
        modelBlog.imageUrl = blog.imageUrl;
        return await this.blogRepository.save(modelBlog);
    }
}