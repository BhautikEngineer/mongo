const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/yo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
    console.log('Connected to MongoDB');

    // Defining a Mongoose Model
    const userSchema = new mongoose.Schema({
        name: String,
        age: Number
    });

    const User = mongoose.model('User', userSchema);

    // Adding a user to the collection
    const newUser = new User({ name: 'Bob', age: 30 });

    try {
        const savedUser = await newUser.save();
        console.log('Saved user:', savedUser);
    } catch (error) {
        console.error('Error saving user:', error);
    }
});
