import { User } from "./user.model";
import { UserDto } from "./dto/user.dto";
import { ConflictException, Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
    constructor(private userRepository : UserRepository) { }

    async createUser(createUserDto: UserDto) {
        const user = new User();
        user.email = createUserDto.email;
        user.firstName = createUserDto.firstName;
        user.password = createUserDto.password; 
        try {
            return await this.userRepository.save(user)
        } catch (error) {
            console.error('Error saving user:', error);
            throw new ConflictException('user with this email already exists');
        }
    }
}