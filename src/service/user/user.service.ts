import { Injectable } from '@nestjs/common';
import { UserModel } from '../../model/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDTO } from './DTO/user.dto';
import bcrypt from 'bcrypt'
import { Payload } from 'src/service/auth/DTO/payload';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserModel)
        private userRepository: Repository<UserModel>,
      ) {}

      create(details: UserDTO): Promise<UserModel>{
        details.password = bcrypt.hashSync(details.password,10) 
          return this.userRepository.save(details);
      }
    
      findAll(): Promise<UserModel[]> {
        return this.userRepository.find();
      }
    
      findOne(id: number): Promise<UserModel> {
        return this.userRepository.findOne(id);
      }

      findByEmail(email:string):Promise<UserModel>{
        return this.userRepository.createQueryBuilder('customer').where('customer.email = :email',{email}).getOne()
      }

      async findByPayload(payload: Payload) {
        const { userId:id } = payload;
        return await this.userRepository.findOne(id);
      }
    
}
