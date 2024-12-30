const fs =  require('fs');

// cria uma pasta 
// caso a pasta já exita ele imprime uma msg no console.log

if (!fs.existsSync('./pasta-mkdir')){
    fs.mkdirSync('./pasta-mkdir', (err)=> {
        if (err) {
            throw err
        }
    })
    console.log('Pasta criada!')
}
else {
    console.log('Pasta já criada!')
}

