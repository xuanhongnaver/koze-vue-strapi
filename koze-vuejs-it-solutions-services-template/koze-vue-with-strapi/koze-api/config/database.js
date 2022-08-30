module.exports = ({ env }) => ({
  connection: {
    // Update your postgres credentials here
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "koze-api"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "123456"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
