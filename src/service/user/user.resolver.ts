import { UserService } from './user.service';
import { UserModel } from '../../model/user.model';
import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import bcrypt from 'bcryptjs'
import { AuthGuard } from '@nestjs/passport';
import { GqlAuthGuard } from 'src/utility/gaurd/gqlAuth.gaurd';
import { ctxUser } from 'src/utility/decorator/ctxUser.decorator';

@Resolver(of => UserModel)
export class UserResolver {
  constructor(
    @Inject(UserService) private UserService: UserService,
  ) { }

  @Query(returns => UserModel)
  @UseGuards(GqlAuthGuard)
  async me(@ctxUser() user:UserModel): Promise<UserModel> {
    return await this.UserService.findOne(user.id);
  }

  @Query(returns => UserModel)
  @UseGuards(GqlAuthGuard)
  async user(@ctxUser() user:UserModel,@Args('id') id: number): Promise<UserModel> {
    return await this.UserService.findOne(id);
  }

  @Query(returns => [UserModel])
  async users(): Promise<UserModel[]> {
    return await this.UserService.findAll();
  }

  @Mutation(returns => UserModel)
  async createUser(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('phone', { nullable: true }) phone: string,
    @Args('address', { nullable: true }) address: string,
    @Args('password',{nullable:false}) password:string
  ): Promise<UserModel> {
    password   = bcrypt.hashSync(password,10)
    return await this.UserService.create({ name, email, phone, address,password })
  }
}