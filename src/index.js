// src/index.js
const { port } = require('./config/appConfig');
const connectDB = require('./frameworksAndDrivers/persistence/connection');
const app       = require('./frameworksAndDrivers/web/server');

async function bootstrap() {
  await connectDB();
  app.listen(port, () => {
    console.log(`🚀 Auth-Service listening on port ${port}`);
  });
}

bootstrap().catch(err => {
  console.error('Failed to start:', err);
  process.exit(1);
});
