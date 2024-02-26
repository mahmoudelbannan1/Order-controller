import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
  private users: any[] = [];

  findAllUsers(): any[] {
    return this.users;
  }

  findById(id: string): any {
    return this.users.find((user) => user.id === id);
  }

  createUser(userData: CreateUserDto): any {
    const newUser = { id: uuid(), ...userData };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: string, userData: UpdateUserDto): any {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = { ...this.users[index], ...userData };
    return this.users[index];
  }

  deleteUser(id: string): any {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      const deletedUser = this.users.splice(index, 1)[0];
      return deletedUser;
    } else return 'user not found';
  }

  findByEmail(email: string): any {
    return this.users.find((user) => user.email === email);
  }
}
