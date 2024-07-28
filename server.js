const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/gpt', async (req, res) => {
    try {
        const response = await axios.post('https://chatgpt.com/g/g-WmaFAGlG7-john', req.body, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Erro ao obter resposta do GPT');
        }
    } catch (error) {
        console.error('Erro ao fazer a requisição para a URL específica do GPT:', error);
        res.status(500).send('Erro ao fazer a requisição para a URL específica do GPT');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
