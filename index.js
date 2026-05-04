const express = require('express');

const app = express();
const PORT = 3000;
const db = require("./src/config/db")

app.use(express.json());
 
const userController = require('./src/controllers/UsuarioController')
app.get("/usuarios", userController.getAll)

db.getConnection().then(conn => {
  console.log("conectado")
  conn.release()
  app.listen(PORT, () =>{
    console.log(`Servidor ativo em http://localhost:${PORT}`)
  })
}).catch(err => {
  console.log("err", err)
})


app.get('/', (req, res) => {
    res.send('Servidor rodando com sucesso!');
});

app.listen(PORT, () => {
    console.log(`Servidor ativo em http://localhost:${PORT}`);
});
