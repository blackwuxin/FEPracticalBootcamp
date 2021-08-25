# 安装依赖

`yarn install`

# 启动 mongodb

`docker-compose up`

# 启动 fastify

`node server.js`

## 创建mongo用户集合数据

```
// Connect MongoDB without auth inside container
docker exec -it mongo bash

// Connect MongoDB with defined authentication
mongo -u root -p mongodb --authenticationDatabase admin

// Create user and roles for our MongoDB
use animals
db.createUser({ user:"master",pwd:"master!123",roles:[{ role:"dbOwner",db:"animals"}]});

db.createCollection("animals")
db.animals.insert({  "name": "tiger","chineseName": "老虎","discription": "老虎是一种很凶猛的动物" })

```
