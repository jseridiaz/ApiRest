const Concesionario = require('../models/concesionario')

const getConcesionarios = async (req, res, next) => {
  try {
    const allConcesionarios = await Concesionario.find().populate('vehiculos')
    return res.status(200).json(allConcesionarios)
  } catch (error) {
    return res.status(400).json('error by getting res' + error)
  }
}
const getConcesionariosByBrand = async (req, res, next) => {
  try {
    const { marca } = req.params
    const concesionariosByBrand = await Concesionario.find({
      marcas: marca
    }).populate('vehiculos')
    return res.status(200).json(concesionariosByBrand)
  } catch (error) {
    return res.status(400).json('error by getting res' + error)
  }
}
const postConcesionario = async (req, res, next) => {
  try {
    const newConcesionario = new Concesionario(req.body)
    const concesionarioSaved = await newConcesionario.save()
    return res.status(201).json(concesionarioSaved)
  } catch (error) {
    return res.status(400).json('error by getting res' + error)
  }
}
const updateConcesionario = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldConcesionario = await Concesionario.findById(id)
    let newConcesionario = new Concesionario(req.body)

    newConcesionario._id = id
    newConcesionario = await Concesionario.updateOne(
      { _id: id },
      {
        nombre: newConcesionario.nombre || oldConcesionario.nombre,
        direccion: newConcesionario.direccion || oldConcesionario.direccion,
        telefono: newConcesionario.telefono || oldConcesionario.telefono,
        $addToSet: {
          vehiculos: { $each: newConcesionario.vehiculos },
          marcas: { $each: newConcesionario.marcas }
        }
      }
    )

    const concesionarioUpdate = await Concesionario.findByIdAndUpdate(
      id,
      newConcesionario,
      { new: true }
    )

    return res.status(200).json(concesionarioUpdate)
  } catch (error) {
    return res.status(400).json('error by getting res' + error)
  }
}
const deleteConcesionario = async (req, res, next) => {
  try {
    const { id } = req.params
    const concesionarioDeleted = await Concesionario.findByIdAndDelete(id)
    return res.status(200).json(concesionarioDeleted)
  } catch (error) {
    return res.status(400).json('error by getting res' + error)
  }
}

module.exports = {
  getConcesionarios,
  getConcesionariosByBrand,
  postConcesionario,
  updateConcesionario,
  deleteConcesionario
}
