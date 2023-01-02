// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const path = require('path');
const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

const { DB, DB_HOST, DB_USER, DB_PASS } = process.env

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://postgres:sadattmagara254@localhost:5432/todo',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join( BASE_PATH, 'migrations' )
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: DB,
      user:     DB_USER,
      password: DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: DB,
      user:     DB_USER,
      password: DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(BASE_PATH, 'seeds')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }

};
