
import { Arg, ID, Mutation, Query, Resolver } from 'type-graphql'
import { GasStationInput } from '../inputs/GasStationInput'
import { GasStation } from '../models/GasStation'

@Resolver()
export class GasStationResolver {
  @Query(() => [GasStation])
  gasStations (): Promise<GasStation[]> {
    return GasStation.find()
  }

  @Query(() => GasStation)
  gasStation (@Arg('id', () => ID) id: string): Promise<GasStation> {
    return GasStation.findOne({ where: { id } })
  }

  @Mutation(() => GasStation)
  async createGasStation (@Arg('gasStation') data: GasStationInput): Promise<GasStation> {
    return GasStation.create(data).save()
  }

  @Mutation(() => GasStation)
  async updateGasStation (@Arg('id', () => ID) id: string, @Arg('gasStation') data: GasStationInput): Promise<GasStation> {
    let gasStation = await GasStation.findOne({ where: { id } })
    if (!gasStation) {
      gasStation = GasStation.create(data)
    } else {
      Object.assign(gasStation, data)
    }
    await gasStation.save()
    return gasStation
  }

  @Mutation(() => GasStation)
  async deleteGasStation (@Arg('id', () => ID) id: string): Promise<GasStation> {
    const gasStation = await GasStation.findOne({ where: { id } })
    if (!gasStation) throw new Error('GasStation not found!')
    await gasStation.remove()
    return gasStation
  }
}
