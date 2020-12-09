import { InputType, Field } from 'type-graphql'

@InputType()
export class CarInput {
  @Field({ nullable: true })
  id?: string;

  @Field()
  number: string;

  @Field()
  brand: string;
}
