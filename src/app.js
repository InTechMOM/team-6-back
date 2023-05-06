import express from 'express';
import { port } from './config/index.js';
import { connectDB } from './config/dbConnection.js';
import router from './router.js';

async function main() {
  const app = express();
  app.use(express.json());
  app.use('/', router);
  app.get('/', (request, response, error) => {
    response.send('status: ok');
  })
  await connectDB();
  app.listen(port, (error) => {
    if(error) {
      console.log('Server error: Failed');
      process.exit(1);
    }
    console.log(`Server listening in port ${port}`)
  })};

main();