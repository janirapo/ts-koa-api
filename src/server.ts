import app from './app/app';
import databaseConnection from './database/database.connection';

// Process.env will always be comprised of strings,
// so we typecast the port to a number.
const PORT: number = Number(process.env.PORT) || 3000;

// first intit db connection and then start server in callback
// databaseConnection.then(() => app.listen(PORT)).catch(console.error);

const startServer = async () => {
  await databaseConnection();
  app.listen(PORT);
};

startServer();
