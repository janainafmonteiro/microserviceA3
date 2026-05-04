const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

const conectarBanco = async() =>{

}

app.get('/', (req, res) => {
    res.send('Servidor rodando com sucesso!');
});

app.listen(PORT, () => {
    console.log(`Servidor ativo em http://localhost:${PORT}`);
});