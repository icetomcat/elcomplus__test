import { InputType, Field } from 'type-graphql'

@InputType()
export class GasStationInput {
  @Field({ nullable: true })
  id?: string;

  @Field()
  name: string;

  @Field()
  address: string;
}
