require('dotenv').config()
const mongoose = require('mongoose')
const Concesionario = require('../../api/models/concesionario')
const concesionarioSeed = require('../../data/concesionarios')

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const allConcesionarios = await Concesionario.find()
    if (allConcesionarios.length) {
      Concesionario.collection.drop()
    }
    console.log('Successfully by removing all Colection')
  })
  .catch((err) =>
    console.log('Error was happened by removing Collection, Type error:' + err)
  )
  .then(async () => {
    await Concesionario.insertMany(concesionarioSeed)
    console.log(
      'It has been inserted successfully the seed Autoshop Collection '
    )
  })
  .catch((err) =>
    console.log('Error by adding the seed Collection. Type error:' + err)
  )
  .finally(() => {
    mongoose.disconnect()
    console.log('Disconected of BBDD ')
  })
