const fastifyPlugin = require("fastify-plugin");

async function mysql(fastify, options) {
  fastify.register(require("fastify-mysql"), {
    connectionString: "mysql://dataUser:123qwe@localhost/mysql",
  });
}

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.
module.exports = fastifyPlugin(mysql);
