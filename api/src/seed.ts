import { createConnection, getRepository } from 'typeorm'
import { Car } from './models/Car'
import { GasStation } from './models/GasStation'
import { Refill } from './models/Refill'
import dotenv from 'dotenv'

dotenv.config()

const seedDatabase = async () => {
  const connection = await createConnection()
  const carRepository = getRepository(Car)
  const gasStationRepository = getRepository(GasStation)
  const refillRepository = getRepository(Refill)

  await connection.query(`TRUNCATE "${carRepository.metadata.tableName}", "${gasStationRepository.metadata.tableName}", "${gasStationRepository.metadata.tableName}" CASCADE`)

  let cars = carRepository.create([
    {
      brand: 'Acura',
      number: 'С 065 МК 78'
    },
    {
      brand: 'BMW',
      number: 'С 065 МК 19'
    },
    {
      brand: 'Bugatti',
      number: 'С 065 МК 100'
    },
    {
      brand: 'Buick',
      number: 'С 065 МК 01'
    }
  ])

  cars = await carRepository.save(cars)

  let stations = gasStationRepository.create([
    {
      address: '1149 Reeves Street',
      name: 'Sheboygan'
    },
    {
      address: '2938 Brentwood Drive',
      name: 'MC NAUGHTON'
    },
    {
      address: '1074 Wilmar Farm Road',
      name: 'Washington'
    },
    {
      address: '3958 Buckhannan Avenue',
      name: 'Syracuse'
    },
    {
      address: '4686 Parker Drive',
      name: 'Maple Heights'
    },
    {
      address: '2880 Burke Street',
      name: 'Cambridge'
    }
  ])

  stations = await gasStationRepository.save(stations)

  const refills: Refill[] = []
  let i = 100
  while (i--) {
    refills.push(
      refillRepository.create({
        carId: cars[Math.round(Math.random() * (cars.length - 1))].id,
        stationId: stations[Math.round(Math.random() * (stations.length - 1))].id,
        quantity: Math.round(Math.random() * 99 + 1)
      })
    )
  }
  await refillRepository.save(refills)
}

seedDatabase().catch(e => console.error(e))
