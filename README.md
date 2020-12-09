## Installation and running

```
git clone git@github.com:icetomcat/elcomplus__test.git
cd elcomplus__test
docker-compose build
docker-compose up -d
docker-compose exec api npm run typeorm migration:run
docker-compose exec api npm run seed
```
## Open
https://localhost

http://localhost:4000

