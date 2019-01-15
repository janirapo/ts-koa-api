import 'reflect-metadata';
import { createConnection, getConnectionOptions } from 'typeorm';

const databaseConnection = async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  return createConnection({ ...connectionOptions, name: 'default' });
};

export default databaseConnection;
