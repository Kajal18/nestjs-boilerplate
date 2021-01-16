import { Module } from "@nestjs/common";
import { UserModel } from "src/model/user.model";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from "src/service/user/user.service";
import { AuthController } from "./auth.controller";
import { JwtStrategy } from "./jwt.strategy";
import { AuthResolver } from "./auth.resolver";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserModel]),
    JwtModule.register({
      secret: "kajaljenn",
      signOptions: { expiresIn: "7d" },
    }),
  ],
  providers: [AuthService, UserService, JwtStrategy, AuthResolver],
  controllers: [AuthController],
  exports: [JwtStrategy],
})
export class AuthModule {}
