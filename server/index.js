import express from 'express';
import dotenv from 'dotenv';
import Router from './routes/route.js'
import connectDB from './database/db.js';


dotenv.config();

const app = express()

const PORT = 3000;


app.use('/', Router);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

app.get('/', (req, res) => {
  res.send('Hello Worldgd hell s!')
})


connectDB(USERNAME, PASSWORD);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
