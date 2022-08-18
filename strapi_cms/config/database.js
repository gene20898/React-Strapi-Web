module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'db_dev'),
      user: env('DATABASE_USERNAME', 'user_dev'),
      password: env('DATABASE_PASSWORD', 'gene20898'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
