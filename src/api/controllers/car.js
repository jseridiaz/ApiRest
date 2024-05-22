const Car = require('../models/car')

const getCars = async (req, res, next) => {
  try {
    const allCars = await Car.find()
    return res.status(200).json(allCars)
  } catch (error) {
    return res.status(400).json('error by getting res' + error)
  }
}
const getCarsByBrand = async (req, res, next) => {
  try {
    const { marca } = req.params
    const carsByMarca = await Car.find({ marca: marca })
    return res.status(200).json(carsByMarca)
  } catch (error) {
    return res.status(400).json('error by getting res' + error)
  }
}
const getCarsByPrice = async (req, res, next) => {
  try {
    const { precio } = req.params
    const carsByPrecio = await Car.find({ precio: { $lte: precio } })
    return res.status(200).json(carsByPrecio)
  } catch (error) {
    return res.status(400).json('error by getting res' + error)
  }
}
const getCarsByPriceAndBrand = async (req, res, next) => {
  try {
    const { precio } = req.params
    const { marca } = req.params
    let carsByPriceAndBrand = await Car.find({ precio: { $lte: precio } }).find(
      { marca: marca }
    )

    return res.status(200).json(carsByPriceAndBrand)
  } catch (error) {
    return res.status(400).json('error by getting res' + error)
  }
}
const postCar = async (req, res, next) => {
  try {
    const newCar = new Car(req.body)
    const carSaved = await newCar.save()
    return res.status(201).json(carSaved)
  } catch (error) {
    return res.status(400).json('error by getting res' + error)
  }
}
const updateCar = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldCar = await Car.findById(id)
    const newCar = new Car(req.body)

    newCar._id = id
    newCar.color = [...oldCar.color, ...newCar.color]
    newCar.imgUrl = [...oldCar.imgUrl, ...newCar.imgUrl]
    newCar.accesorios = [...oldCar.accesorios, ...newCar.accesorios]

    const carUpdated = await Car.findByIdAndUpdate(id, newCar, { new: true })

    return res.status(200).json(carUpdated)
  } catch (error) {
    return res.status(400).json('error by getting res' + error)
  }
}
const deleteCars = async (req, res, next) => {
  try {
    const { id } = req.params
    const carDeleted = await Car.findByIdAndDelete(id)
    return res.status(200).json(carDeleted)
  } catch (error) {
    return res.status(400).json('error by getting res' + error)
  }
}

module.exports = {
  getCars,
  getCarsByBrand,
  getCarsByPrice,
  getCarsByPriceAndBrand,
  postCar,
  updateCar,
  deleteCars
}
