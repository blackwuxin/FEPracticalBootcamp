async function routes (fastify, options) {
    const collection = fastify.mongo.db.collection('animals')
  
    fastify.get('/', async (request, reply) => {
      return { hello: 'world' }
    })
  
    fastify.get('/animals', async (request, reply) => {
      const result = await collection.find().toArray()
      if (result.length === 0) {
        throw new Error('No documents found')
      }
      return result
    })
  
    fastify.get('/animals/:animal', async (request, reply) => {
      const result = await collection.findOne({ name: request.params.animal })
      if (!result) {
        throw new Error('Invalid value')
      }
      return result
    })

    fastify.get('/animals/add', async (request, reply) => {
      const result = await collection.insertMany([
        {
          name: "cat",
          chineseName: "猫咪",
          discription: "猫是一种傲娇的动物",
        },
        {
          name: "dog",
          chineseName: "狗狗",
          discription: "狗是一种忠诚的动物",
        },
      ]);
      return result
    })

    fastify.get("/redis/set", async (request, reply) => {
      console.log(request.query);
      if (!request.query)
        return { error: "401", errorCode: "param key is required" };
      const { redis } = fastify;
      Object.keys(request.query).forEach((key) => {
        redis.set(key, request.query[key]);
      });
      return { error: "", errorCode: 0, result: request.query };
    });
  
    fastify.get("/redis/get/:key", async (request, reply) => {
      if (!request.params.key)
        return { error: "401", errorCode: "param key is required" };
      const { redis } = fastify;
      let val = await redis.get(request.params.key);
      return { error: "", errorCode: 0, result: val };
    });

    fastify.get("/mysql/insert", async (req, reply) => {
      fastify.mysql.getConnection((err, connection) => {
        if (err)
          return reply
            .code(500)
            .header("Content-Type", "application/json; charset=utf-8")
            .send(err);
        connection.execute(
          "INSERT INTO todos VALUES (0, 'mysql', '2021-08-10 20:20:20', 0)",
          (err, result, fields) => {
            return reply
              .code(200)
              .header("Content-Type", "application/json; charset=utf-8")
              .send({ result });
          }
        );
      });
    });
  
    fastify.get("/mysql/query", async (req, reply) => {
      fastify.mysql.getConnection((err, connection) => {
        if (err)
          return reply
            .code(500)
            .header("Content-Type", "application/json; charset=utf-8")
            .send(err);
        connection.query("SELECT * FROM todos", (err, result, fields) => {
          return reply
            .code(200)
            .header("Content-Type", "application/json; charset=utf-8")
            .send({ result });
        });
      });
    });
    fastify.get("/leveldb/set", async (request, reply) => {
      if (!request.query)
        return { error: "401", errorCode: "param key is required" };
      const level = fastify.level.db;
      Object.keys(request.query).forEach((key) => {
        level.put(key, request.query[key]);
      });
      return { error: "", errorCode: 0, result: request.query };
    });
  
    fastify.get("/leveldb/get/:key", async (request, reply) => {
      if (!request.params.key)
        return { error: "401", errorCode: "param key is required" };
      const level = fastify.level.db;
      let val = await level.get(request.params.key);
      return { error: "", errorCode: 0, result: val };
    });

    fastify.get("/es/add", async (request, reply) => {
      let result = await fastify.elastic.index({
        index: "todos", //相当于database
        body: {
          //文档到内容
          subject: "tiger is a danger animal",
          datetime: Date.now(),
          state: 0,
        },
      });
      return result;
    });
  
    fastify.get("/es/get", async (request, reply) => {
      let result = await fastify.elastic.search({
        index: "todos",
        type: "todos",
        body: {
          query: {
            match: {
              state: 0,
            },
          },
        },
      });
      return result;
    });
  }
  
  module.exports = routes