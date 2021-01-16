import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserModel } from 'src/model/user.model';
import { UserService } from 'src/service/user/user.service';
import { Payload } from './DTO/payload';

@Injectable()
export class AuthService {
  constructor(
    private userSerivce:UserService,
    private jwtService :JwtService
    ){
  }
   async validate(email:string): Promise<UserModel> {
    return await this.userSerivce.findByEmail(email);
}
async validateUser(payload: Payload) {
  return await this.userSerivce.findByPayload(payload);
}

 async login(email:string,password:string): Promise< any | { status: number }>{
    return this.validate(email).then((userData)=>{
      if(!userData){
        return { status: 404 };
      }
      const userId= userData.id
      const accessToken = this.jwtService.sign({email,userId});
      return {
         expires_in: 3600,
         access_token: accessToken,
         user_id: userData.id,
         status: 200
      };
    });
}
}
