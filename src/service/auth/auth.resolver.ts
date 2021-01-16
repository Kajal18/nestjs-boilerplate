import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { JwtService } from "@nestjs/jwt";
import { UserModel } from "src/model/user.model";
import { AuthModule } from "./auth.module";
import { AuthService } from "./auth.service";

@Resolver(of=>UserModel)
export class AuthResolver {
  constructor(
    private authService:AuthService,
    private jwtService:JwtService
  ){}

  // @Mutation()
  // async login(
  //   @Args('email',{nullable:false}) email:string,
  //   @Args('password',{nullable:false}) password:string
  // ):Promise<any>{
  //   return this.authService.validate(email).then((userData)=>{
  //     if(!userData){
  //       return { status: 404 };
  //     }
  //     const accessToken = this.jwtService.sign({email,password});
  //     return {
  //        expires_in: 3600,
  //        access_token: accessToken,
  //        user_id: userData.id,
  //        status: 200
  //     };
  //   });
  // }
}