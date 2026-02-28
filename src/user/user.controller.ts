import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './shemas/user.shema';
import { UserCreateDto } from './dto/user-create.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post()
    async createUser(@Body()
    user: UserCreateDto
    ): Promise<User> {
        return this.userService.create(user);
    }

    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<User> {
        return this.userService.findById(id);
    }

    @Delete(':id')
    async deleteUserById(@Param('id') id: string): Promise<User> {
        return this.userService.deleteById(id);
    }
}