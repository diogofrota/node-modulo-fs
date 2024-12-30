const { error } = require('console')
const fs = require('fs')

// comando para deletar uma pasta
//  antes de delatar ele verifica se existe a pasta

if (fs.existsSync('./pasta-rename')) {
    fs.rmdir('./pasta-rename', (err)=>{
        if (err) {
            throw err
        }
    })
    console.log('Pasta deletada')
} else {
    console.log('Pasta não encontrada!')
}
