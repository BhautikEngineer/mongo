const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/yo', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define a schema for the user collection
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Create a User model based on the schema
const User = mongoose.model('User', userSchema);

// Find all users in the collection
User.find()
  .then((users) => {
    console.log('All users:', users);
  })
  .catch((error) => {
    console.error('Error fetching users:', error);
  });
