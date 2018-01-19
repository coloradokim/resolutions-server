module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/re_solutions'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
