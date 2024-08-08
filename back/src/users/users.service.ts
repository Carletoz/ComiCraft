import { Injectable, BadRequestException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { Users } from './users.entity';
import { Role } from 'src/enum/role.enum';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  getUsers(page?: number, limit?: number) {
    return this.userRepository.getUsers(page, limit);
  }

  getUserById(id: string) {
    return this.userRepository.getUserById(id);
  }

  getUserByName(name: string) {
    return this.userRepository.getUserByName(name);
  }

  updateUser(id: string, user: Users) {
    return this.userRepository.updateUser(id, user);
  }

  deleteUser(id: string) {
    return this.userRepository.deleteUser(id);
  }

  async updateUserRole(id: string, role: Role[]) {
    return this.userRepository.updateUserRole(id, role);
  }

  async updateProfilePicture(id: string, url: string) {
    return this.userRepository.updateProfilePicture(id, url);
  }
}
