const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Connected to BBDD MongoDB')
  } catch (error) {
    console.log('Not connected to BBDD Mongo DB')
  }
}

module.exports = { connectDB }
