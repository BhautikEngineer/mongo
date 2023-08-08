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

// Create a new user
const newUser = new User({
  name: 'John Doe',
  age: 30
});

// Save the user to the database
newUser.save()
  .then((user) => {
    console.log('User saved:', user);
    
    // Find a user by name
    return User.findOne({ name: 'John Doe' });
  })
  .then((user) => {
    console.log('Found user:', user);

    // Update the user's age
    user.age = 31;
    return user.save();
  })
  .then((updatedUser) => {
    console.log('Updated user:', updatedUser);

    // Delete the user
    return User.deleteOne({ name: 'John Doe' });
  })
  .then(() => {
    console.log('User deleted');
  })
  .catch((error) => {
    console.error('Error:', error);
  });
