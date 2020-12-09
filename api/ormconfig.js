module.exports = {
  type: 'postgres',
    host: process.env.DATABASE_HOST ? process.env.DATABASE_HOST : 'localhost',
    port: process.env.DATABASE_PORT ? process.env.DATABASE_PORT : 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: !process.env.PRODUCTION,
    logging: false,
    entities: [
      'dist/models/**/*.js'
    ],
    migrations: [
      'dist/migrations/**/*.js'
    ],
    subscribers: [
      'dist/subscriber/**/*.js'
    ],
    cli: {
      entitiesDir: "src/models",
      subscribersDir: "src/subscribers",
      migrationsDir: "src/migrations"
    }
}