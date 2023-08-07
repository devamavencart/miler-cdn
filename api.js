// Import the framework and instantiate it
const Fastify = require('fastify');
const fastify = Fastify({
  logger: true
})


fastify.register(require('fastify-cors'), {
  // Specify the CORS options here
  origin: '*',
});

// Declare a route
fastify.post('/miler_cdn/event', async function handler (request, reply) {
    console.log("====================", request.body);
    reply.status(200).send({
        message: "fetched successfully"
    });
})

// Run the server!
const app = async () => {
try {
  return await fastify.listen({ port: 3032 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
}

app();