require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const carRoutes = require('./src/api/routes/car')
const concesionarioRoutes = require('./src/api/routes/concesionario')
const PORT = 3000

const app = express()
app.use(express.json())

connectDB()

app.use('/api/v1/car', carRoutes)
app.use('/api/v1/concesionarios', concesionarioRoutes)
app.use('*', (req, res, next) => {
  try {
    return res.status(200).json('got rigthly the url')
  } catch (error) {
    return res.status(400).json('not connected because of ' + error)
  }
})
app.listen(PORT, () => {
  console.log('Connected on http://localhost:' + PORT)
})
