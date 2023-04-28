import express from 'express';
import { port } from './config/index.js';
import { connectDB } from './config/db.js';
import { router } from './api/users.js';

async function main() {
  const app = express();
  app.use(express.json());
  app.use('/api', router);
  app.get('/', (request, response, error) => {
    response.send('status: ok');
  })
  
  app.listen(port, (error) => {
    if(error) {
      console.log('Server error: Failed');
      process.exit(1);
    }
    console.log(`Server listening in port ${port}`)
  })

  await connectDB();
}

main();

//hoisting, closures, scope
//DB_URI=mongodb+srv://devt9:d3v01@intechmom-cluster.xz036yq.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://valentinaboya15:123456vp@team6.hggznhm.mongodb.net/?retryWrites=true&w=majority