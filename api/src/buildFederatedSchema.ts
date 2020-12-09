import { specifiedDirectives, GraphQLSchema } from 'graphql'
import federationDirectives from '@apollo/federation/dist/directives'
import gql from 'graphql-tag'
import {
  printSchema,
  buildFederatedSchema as buildApolloFederationSchema
} from '@apollo/federation'
import { addResolversToSchema, GraphQLResolverMap } from 'apollo-graphql'
import { createResolversMap, BuildSchemaOptions, buildSchema } from 'type-graphql'

export async function buildFederatedSchema (
  options: Omit<BuildSchemaOptions, 'skipCheck'>,
  referenceResolvers?: GraphQLResolverMap<unknown>
): Promise<GraphQLSchema> {
  const schema = await buildSchema({
    ...options,
    directives: [...specifiedDirectives, ...federationDirectives, ...(options.directives || [])],
    skipCheck: true
  })

  const federatedSchema = buildApolloFederationSchema({
    typeDefs: gql(printSchema(schema)),
    resolvers: <never>createResolversMap(schema)
  })

  if (referenceResolvers) {
    addResolversToSchema(federatedSchema, referenceResolvers)
  }
  return federatedSchema
}
