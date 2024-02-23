import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { connection } from 'mongoose';
import { User, UserSchema } from './schemas/user.schema';

@Injectable()
export class UsersService {
  async create(user: User) {
    try {
      const userModel =
        connection.models.users || connection.model('users', UserSchema);

      const newUser = await userModel.create(user);

      return newUser;
    } catch (err: any) {
      console.log('users.service.ts:createUser', err);

      throw new HttpException(
        'Error creating user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    updateUserDto.firstName = '';
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
