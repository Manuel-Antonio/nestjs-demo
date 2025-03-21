import { Injectable } from '@nestjs/common';
import  {CreateUserDto} from "./dto/create-user.dto";
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {

  constructor(private prisma : PrismaService) {

  }
  getUsers() {
    return this.prisma.user.findMany();
  }

  getUser(): any {
    return {
      id: 4,
      name: 'Carlos Gómez',
      email: 'carlos.gomez@example.com',
      role: 'editor',
    }
  }

  createUser(user : CreateUserDto) {
    return this.prisma.user.create({data: user})
  }
}
