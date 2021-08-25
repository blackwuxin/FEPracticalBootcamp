const fastify = require('fastify')({
    logger: true
  })
  
  fastify.register(require('./plugin/mongo'))
  fastify.register(require("./plugin/redis"));
  // fastify.register(require("./plugin/mysql"));
  fastify.register(require("./plugin/leveldb"));
  fastify.register(require("./plugin/elasticsearch"));
  
  fastify.register(require('./router/index'))


  const start = async () => {
    try {
      await fastify.listen(3000)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()