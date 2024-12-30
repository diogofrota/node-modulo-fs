const fs =  require('fs')


// fazer a mudança de nome da pasta
// Primeiro verifica se existe para depois fazer a mudança

// esse modulo fs.rename serve para arquivos também!

if (fs.existsSync('./pasta-mkdir')) {
    fs.renameSync('./pasta-mkdir','./pasta-rename', function(err){
        if (err) {
            throw err
        }
    })
    console.log('Pasta renomeada!')

} else {
    console.log('Pasta não exite!')
}