// const chalk = require('chalk')
const mongoose = require('mongoose')

const mongooseConnection = (URI) => {
    mongoose.Promise = global.Promise;
    mongoose.set('debug', true);
    mongoose.set('useCreateIndex', true);

    mongoose.connection.openUri(URI, { useNewUrlParser: true })
        .then(() => {
            console.log(`Connected to db: ${URI} successfully via MONGOOSE`)
        })
        .catch(err => {
            console.log(err.message)
            console.log(`MongoDB connection error. Please make sure MongoDB is running`)
            process.exit(1)
        })
}

module.exports = mongooseConnection
