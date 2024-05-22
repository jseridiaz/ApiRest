const mongoose = require('mongoose')

const concesionarioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    direccion: { type: String, required: true, trim: true },
    telefono: { type: Number, trim: true },
    marcas: [{ type: String, required: true, trim: true }],
    vehiculos: [{ type: mongoose.Types.ObjectId, trim: true, ref: 'cars' }]
  },
  { timestamps: true, collection: 'concesionarios' }
)

const Concesionario = mongoose.model(
  'concesionarios',
  concesionarioSchema,
  'concesionarios'
)
module.exports = Concesionario
