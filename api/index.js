import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const secret = process.env.SECRET;
app.get('/', (req, res) => res.send(`Secret is ${secret}`));
app.listen(3000, () => console.log('Server ready on port 3000.'));
