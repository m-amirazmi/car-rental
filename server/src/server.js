require('dotenv').config();
const express = require('express');
const { connectDB } = require('./utils/db');
const { connection } = require('mongoose');
const app = express();

connectDB();
app.use(express.json());

const userRoutes = require('./routes/users');
const carRoutes = require('./routes/cars');

app.use('/auth', userRoutes);
app.use('/api/cars', carRoutes);

connection.once('open', () => {
	console.log('Connected to MongoDB');
	app.listen(process.env.PORT, () => console.log(`Connected => http://localhost:${process.env.PORT}`));
});