const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const questionRoutes = require('./routes/questionRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/api', questionRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});







































// import express from 'express';
// import mongoose from 'mongoose';

// mongoose.connect(
//     'mongodb+srv://admin:pWQ12mclQ0ELlzVH@cluster0.pl74ljt.mongodb.net/questionpaper?retryWrites=true&w=majority'
//     ).then(()=>app.listen(5000)).then(()=>console.log("Connected to database")).catch((err)=>console.log(err));
// const app=express();

// app.use("/",(req,res,next)=>{
//     res.send("Hello");
// })
// ;
// console.log("Hello world");
//pWQ12mclQ0ELlzVH


