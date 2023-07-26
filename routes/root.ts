/// <reference types="@platformatic/service" />
import { FastifyInstance } from 'fastify'
import {
  ZodTypeProvider
} from 'fastify-type-provider-zod';
import z from 'zod';

declare module 'fastify' {
  interface FastifyInstance {
    example: string
  }
}

export default async function (fastify: FastifyInstance) {
  const app = fastify.withTypeProvider<ZodTypeProvider>()
  app.get('/', {
    schema: {
      response: {
        200: z.object({
          hello: z.string()
        })
      }
    }
  }, async () => {
    return { hello: fastify.example }
  })
}
