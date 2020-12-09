
import { Arg, ID, Mutation, Query, Resolver } from 'type-graphql'
import { RefillInput } from '../inputs/RefillInput'
import { Refill } from '../models/Refill'

@Resolver()
export class RefillResolver {
  @Query(() => [Refill])
  refills (): Promise<Refill[]> {
    return Refill.find()
  }

  @Query(() => Refill)
  refill (@Arg('id', () => ID) id: string): Promise<Refill> {
    return Refill.findOne({ where: { id } })
  }

  @Mutation(() => Refill)
  async createRefill (@Arg('refill') data: RefillInput): Promise<Refill> {
    return Refill.create(data).save()
  }

  @Mutation(() => Refill)
  async updateRefill (@Arg('id', () => ID) id: string, @Arg('refill') data: RefillInput): Promise<Refill> {
    let refill = await Refill.findOne({ where: { id } })
    if (!refill) {
      refill = Refill.create(data)
    } else {
      Object.assign(refill, data)
    }
    await refill.save()
    return refill
  }

  @Mutation(() => Refill)
  async deleteRefill (@Arg('id', () => ID) id: string): Promise<Refill> {
    const refill = await Refill.findOne({ where: { id } })
    if (!refill) throw new Error('Refill not found!')
    await refill.remove()
    return refill
  }
}
