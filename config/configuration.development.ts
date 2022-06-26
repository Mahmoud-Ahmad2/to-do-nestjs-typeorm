// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export default () => ({
  database: {
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'todo',
    synchronize: true,
    useNewUrlParser: true,
    entities: ['dist/**/*.entity{ .ts,.js}'],
  },
});
