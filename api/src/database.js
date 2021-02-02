import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/pratech-users', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));