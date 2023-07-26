import {FastifyInstance} from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform
} from 'fastify-type-provider-zod';
import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';

export default async function (app: FastifyInstance) {
  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  app.register(swagger, {
    openapi: {
      info: {
        title: 'SampleApi',
        description: 'Sample backend service',
        version: '1.0.0',
      }
    },
    transform: jsonSchemaTransform,
  });

  app.register(swaggerUI, {
    routePrefix: '/documentation',
  });
}
