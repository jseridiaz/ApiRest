const {
  getConcesionarios,
  postConcesionario,
  updateConcesionario,
  deleteConcesionario,
  getConcesionariosByBrand
} = require('../controllers/concesionario')
const concesionarioRoutes = require('express').Router()

concesionarioRoutes.get('/', getConcesionarios)
concesionarioRoutes.get('/:marca', getConcesionariosByBrand)
concesionarioRoutes.post('/', postConcesionario)
concesionarioRoutes.put('/:id', updateConcesionario)
concesionarioRoutes.delete('/:id', deleteConcesionario)

module.exports = concesionarioRoutes
