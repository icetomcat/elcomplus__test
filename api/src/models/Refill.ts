import { ID, ObjectType, Field } from 'type-graphql'
import { PrimaryGeneratedColumn, Column, BaseEntity, Entity, JoinColumn, CreateDateColumn, ManyToOne } from 'typeorm'
import { Car } from './Car'
import { GasStation } from './GasStation'

@Entity()
@ObjectType()
export class Refill extends BaseEntity {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
    default: 0,
    transformer: {
      from (value: string) {
        return parseFloat(value)
      },
      to (value: string | number) {
        return value
      }
    }
  })
  quantity: number;

  // @Field(() => Car)
  @ManyToOne(() => Car)
  @JoinColumn({ name: 'carId' })
  car: Car;

  @Field()
  @Column()
  carId: string;

  // @Field(() => GasStation)
  @ManyToOne(() => GasStation)
  @JoinColumn({ name: 'stationId' })
  station: GasStation;

  @Field()
  @Column()
  stationId: string;

  @Field()
  @Column()
  @CreateDateColumn()
  createdAt: Date;
}
