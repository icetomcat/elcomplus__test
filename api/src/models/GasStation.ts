import { ID, ObjectType, Field } from 'type-graphql'
import { PrimaryGeneratedColumn, Column, BaseEntity, Entity } from 'typeorm'

@Entity()
@ObjectType()
export class GasStation extends BaseEntity {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({ unique: true })
  address: string;
}
