const express = require('express');

const server = express();

server.use(express.json());

const carros = ['Audi a3', 'Golf gti', 'Ford Mustang'];

//retorna um carro
server.get('/carros/:index', (req, res) => {
    const { index } = req.params;

    return res.json(carros[index]);
});

// retorna todos os carros
server.get('/carros', (req, res) => {
    return res.json(carros);
});

//criar novo carro
server.post('/carros', (req, res) => {
    const { name } = req.body;
    carros.push(name);

    return res.json(carros);
});

//atualizar carro 
server.put('/carros/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    carros[index] = name;

    return res.json(carros);
});

// excluir carro
server.delete('/carros/:index', (req, res) => {
    const { index } = req.params;

    carros.splice(index, 1);
    return res.json({ message: "O carro foi deletado"});
});


server.listen(3000);