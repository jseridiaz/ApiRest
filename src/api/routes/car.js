const {
  getCars,
  postCar,
  updateCar,
  deleteCars,
  getCarsByBrand,
  getCarsByPrice,
  getCarsByPriceAndBrand
} = require('../controllers/car')

const carRoutes = require('express').Router()

carRoutes.get('/', getCars)
carRoutes.get('/:marca', getCarsByBrand)
carRoutes.get('/price/:precio', getCarsByPrice)
carRoutes.get('/:marca/price/:precio', getCarsByPriceAndBrand)
carRoutes.post('/', postCar)
carRoutes.put('/:id', updateCar)
carRoutes.delete('/:id', deleteCars)

module.exports = carRoutes
