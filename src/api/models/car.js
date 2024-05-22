const mongoose = require('mongoose')
const carSchema = new mongoose.Schema(
  {
    marca: { type: String, required: true, trim: true },
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    modelo: {
      type: String,
      trim: true
    },
    cilindrada: {
      type: Number,
      trim: true
    },
    carroceria: {
      type: String,
      enum: ['Sedán', 'Familiar', 'Coupé', 'Deportivo', 'SUV', 'Otro'],
      required: true,
      default: 'Otro'
    },
    km: { type: Number, required: false, trim: true },
    año_Fab: { type: Number, trim: true },
    precio: {
      type: Number,
      required: true
    },
    color: [{ type: String, trim: true, default: 'white' }],
    estado: {
      type: String,
      required: true,
      trim: true,
      enum: ['Nuevo', 'Usado'],
      default: 'Usado'
    },
    imgUrl: [{ type: String, required: false, trim: true }],
    accesorios: [
      {
        type: String,
        default: ['Aire  acondicionado ']
      }
    ],
    combustible: {
      type: String,
      enum: [
        'Diesel',
        'Gasolina',
        'Híbrido',
        'Eléctrico',
        'Etanol',
        'Hidrógeno'
      ]
    },
    cambio: {
      type: String,
      trim: true,
      enum: ['Manual', 'Auto', 'Semi'],
      default: 'Manual'
    }
  },
  { timestamps: true, collection: 'cars', collection: 'cars' }
)

const Car = mongoose.model('cars', carSchema, 'cars')

module.exports = Car
