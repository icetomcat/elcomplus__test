import 'reflect-metadata'
import dotenv from 'dotenv'
import { createConnection } from 'typeorm'
import { ApolloServer } from 'apollo-server'
import { buildFederatedSchema } from './buildFederatedSchema'
import { Car } from './models/Car'
import { CarResolver } from './resolvers/CarResolver'
import { GasStation } from './models/GasStation'
import { GasStationResolver } from './resolvers/GasStationResolver'
import { Refill } from './models/Refill'
import { RefillResolver } from './resolvers/RefillResolver'

dotenv.config()

async function main () {
  await createConnection()
  const schema = await buildFederatedSchema({
    resolvers: [CarResolver, GasStationResolver, RefillResolver],
    orphanedTypes: [Car, GasStation, Refill]
  })
  const server = new ApolloServer({ schema })
  await server.listen(process.env.PORT ? +process.env.PORT : 4000)
  console.info('Server has started!')
}

main().catch(e => console.error(e))
