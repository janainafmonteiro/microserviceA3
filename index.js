const express = require('express')

const app = express()
const PORT = 3000
const db = require("./src/config/db")
const routes = require("./src/routes/Routes")

app.use(express.json());
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
