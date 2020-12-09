## Installation and running

```
git clone git@github.com:icetomcat/elcomplus__test.git
cd elcomplus__test
docker-compose up -d
docker-compose exec api sh npm run typeorm migration:run
docker-compose exec api sh npm run seed
```
## Open
https://localhost
http://localhost:4000

