
import { Arg, ID, Mutation, Query, Resolver } from 'type-graphql'
import { CarInput } from '../inputs/CarInput'
import { Car } from '../models/Car'

@Resolver(Car)
export class CarResolver {
  @Query(() => [Car])
  cars (): Promise<Car[]> {
    return Car.find()
  }

  @Query(() => Car)
  car (@Arg('id', () => ID) id: string): Promise<Car> {
    return Car.findOne({ where: { id } })
  }

  @Mutation(() => Car)
  async createCar (@Arg('car') data: CarInput): Promise<Car> {
    return Car.create(data).save()
  }

  @Mutation(() => Car)
  async updateCar (@Arg('id', () => ID) id: string, @Arg('car') data: CarInput): Promise<Car> {
    let car = await Car.findOne({ where: { id } })
    if (!car) {
      car = Car.create(data)
    } else {
      Object.assign(car, data)
    }
    Object.assign(car, data)
    await car.save()
    return car
  }

  @Mutation(() => Car)
  async deleteCar (@Arg('id', () => ID) id: string): Promise<Car> {
    const car = await Car.findOne({ where: { id } })
    if (!car) throw new Error('Car not found!')
    await car.remove()
    return car
  }
}
