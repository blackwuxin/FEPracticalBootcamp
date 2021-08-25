const fastifyPlugin = require("fastify-plugin");

async function elasticsearch(fastify, options) {
  fastify.register(require("fastify-elasticsearch"), {
    node: "http://127.0.0.1:9200",
  });
}

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.
module.exports = fastifyPlugin(elasticsearch);
