import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, DeleteDateColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class UserModel {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 500, nullable: false })
  name: string;

  @Field()
  @Column('text', { nullable: false })
  email: string;

  @Field()
  @Column('text')
  password:string
  
  @Field()
  @Column('varchar', { length: 15 })
  phone: string;

  @Field()
  @Column('text')
  address: string;

  @Field()
  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updated_at: Date;

  @Field()
  @Column()
  @DeleteDateColumn()
  deleted_at:Date
}