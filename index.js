import express from 'express'
import "dotenv/config"
import db from './src/config/db.js'

import routes from './src/routes/Routes.js'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(routes)

db.getConnection().then(conn => {
  console.log("conectado")
  conn.release()
  app.listen(PORT, () =>{
    console.log(`Servidor ativo em http://localhost:${PORT}`)
  })
}).catch(err => {
  console.log("err", err)
})
