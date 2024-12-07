const express = require('express');
const path = require('path');

const app = express();

// Rota raiz que serve o arquivo HTML diretamente
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Porta padrão ou especificada
const PORT = process.env.PORT || 3000;

// Mensagem ao iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando ${PORT}`);
    console.log(`Acesse em http://localhost:${PORT}`);
});
