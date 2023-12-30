import mongoose from 'mongoose';

const Connection = async (USERNAME, PASSWORD) => {

    const URL = 'mongodb+srv://${username}:${password}@blog.qxk6iq6.mongodb.net/?retryWrites=true&w=majority';
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database Connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error);
    }
};

export default Connection;
