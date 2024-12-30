const fs =  require('fs')

//  modudo nativo no node fs.open para criar arquivo
//  Melhor usar o read e o writeFile para criar arquivos 

fs.open('text.txt', 'w', (err,arq)=> {
    if (err) {
        console.log(`houve algum erro: ${err}`)
    }
    console.log('arquivo criado!')
}) 
    

