const http = require('http');
const fs = require('fs');
const { text } = require('stream/consumers');
const hostname =  '127.0.0.1'
const PORT =  process.env.PORT || 3000

// criei um servidor para usar o modulo fs.readfile para disponibilizar o conteudo do arquivo via servidor


const server =  http.createServer(
    (req,res)=> {
        
        // posso usar o req para fazer uma condição com if de acordo com a url
        console.log(req)

        // preciso colocar a funçào so servidor dentro do fs.readfile

        fs.readFile('text.txt', (err,conteudo)=>{
            if (err) {
                throw err
            }

            // codigos para enviar a resposta do servidor
            res.statusCode = 200
            res.setHeader('content-type', 'text/html; charset-utf-8')
            res.end(conteudo)
        })


    }
)

server.listen(PORT,hostname,()=>{
    console.log(`o servidor é http://${hostname}:${PORT}`)
})