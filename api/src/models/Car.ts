import { ID, ObjectType, Field } from 'type-graphql'
import { PrimaryGeneratedColumn, Column, BaseEntity, Entity } from 'typeorm'

@Entity()
@ObjectType()
export class Car extends BaseEntity {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  brand: string;

  @Field()
  @Column({ unique: true })
  number: string;
}
