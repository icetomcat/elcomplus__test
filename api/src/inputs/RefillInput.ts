import { InputType, Field } from 'type-graphql'

@InputType('RefillInput')
export class RefillInput {
  @Field({ nullable: true })
  id?: string;

  @Field()
  quantity: number;

  @Field()
  carId: string;

  @Field()
  stationId: string;
}
