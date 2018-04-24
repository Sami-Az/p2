const mongoose = require("mongoose");

const Product= require ("../models/book-model");
const Author = require ("../models/author-model");

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/library-project', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });