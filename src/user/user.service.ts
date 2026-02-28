import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './shemas/user.shema';
import mongoose from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name)
    private userModel: mongoose.Model<User>
    ) { }

    async create(user: User): Promise<User> {
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findById(id: string): Promise<User> {
        const user = await this.userModel.findById(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }

    async deleteById(id: string): Promise<User> {
        const user = await this.userModel.findByIdAndDelete(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }
}
