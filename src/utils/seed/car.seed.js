require('dotenv').config()
const mongoose = require('mongoose')
const Car = require('../../api/models/car')
const carsSeed = require('../../data/cars')

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const allCars = await Car.find()
    if (allCars.length) {
      await Car.collection.drop()
    }
    console.log('All collection was deleted successfully')
  })
  .catch((err) =>
    console.log('Error by removing all cars of BBDD. Typeerror: ' + err)
  )
  .then(async () => await Car.insertMany(carsSeed))
  .catch((err) => console.log('Error by adding the cars of Seeds ' + err))
  .finally(() => {
    mongoose.disconnect()
    console.log('Disconected of BBDD')
  })
