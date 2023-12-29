const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres =[
    {
        nome: 'marlene ferreira',
        imagem:' C:\Users\Home\Desktop\meu projeto\imagem',
        minibio: 'estudande de infomática,com foco em back end'
    },
    {
        nome:'Simara Conceição',
        imagem:'imagem/simara.jpeg',
        minibio:'desenvolvedora e instrutora'
    },
    {
        nome:'IANA Chan',
        imagem:'imagem/images.png',
    minibio:'CEO & Founder da PrograMaria',
}
]

function mostraMulheres(request,response) {
response.json(mulheres)
}

function mostraPorta() {
    console.log("servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres',mostraMulheres))
app.listen(porta,mostraPorta)