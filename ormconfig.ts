//import env from './src/env';

const ORMConfig = {
    type: 'postgres',
    driver: 'postgres',
    host: 'localhost',
    port: 5432,
    username: "postgres",
    password: "Cleloieli@94",
    database: "jac",
    migrationsTableName: "custom_migration_table",

  entities: [
    'src/**/**.entity{.ts,.js}',
  ],
  migrations: [
    'src/migrations/*.ts',
  ],
  cli: {
    "migrationsDir": "migrations"
},
  
  synchronize: false,
};

module.exports = ORMConfig