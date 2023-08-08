const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/yo')
  .then(() => {
    console.log('Connected to MongoDB');

    // Define a schema for your collection
    const userSchema = new mongoose.Schema({
      name: String,
      age: Number,
    });

    // Create a model based on the schema
    const User = mongoose.model('User', userSchema);

    // Create a new collection
    User.createCollection().then(() => {
      console.log('Collection created');
      mongoose.disconnect();
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));
