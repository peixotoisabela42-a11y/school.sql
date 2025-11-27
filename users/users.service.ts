 import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      useremail: 'adminis@escola.com',
      password: '123456',
    }
  ];

  async findOne(useremail: string): Promise<User | undefined> {
    return this.users.find(user => user.useremail === useremail);
  }
}
