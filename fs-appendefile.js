const fs = require('fs')

// codigo para adicinar uma linha ao arquivo de texto
// sempre primeiro fazendo averificação se ele exite

if (fs.existsSync('text.txt')) {
    fs.appendFile('text.txt','\n nova linha', (err)=>{
        if (err) {
            throw err
        }
    })
}else {
    console.log('Arquivo não exite, precisa criar!')
}