import * as dotenv from 'dotenv';
dotenv.config();
export const port = process.env.PORT;
export const DB_URI = process.env.DB_URI;