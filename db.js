import mongoose from 'mongoose';

//const password = 'd3v01';
//const dbname = 'IntechMom';
//const DB_URI = `mongodb+srv://devt9:${password}@intechmom-cluster.xz036yq.mongodb.net/${dbname}?retryWrites=true&w=majority`;
const password = '123456vp';
const dbname = 'IntechMom';
const DB_URI = `mongodb+srv://valentinaboya15:${password}@team6.hggznhm.mongodb.net/${dbname}?retryWrites=true&w=majority`;

export const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB: Connection successful!');
  } catch (error) {
    console.error('DB: Connection failed!', error);
  }
};