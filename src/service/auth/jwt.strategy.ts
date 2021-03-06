
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService:AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'kajaljenn',
    });
  }

  async validate(payload: any) {
    const user = await this.authService.validateUser(payload)
    if(!user){
      throw new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED)
    }
    return user
  }
}