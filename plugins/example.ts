/// <reference types="@platformatic/service" />
import { FastifyInstance } from 'fastify'

export default async function (fastify: FastifyInstance) {
  fastify.decorate('example', 'foobar')
}
