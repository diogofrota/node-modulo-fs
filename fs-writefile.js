const fs =  require('fs')

if (!fs.existsSync('text.txt')) {
    fs.writeFile('text.txt', 'teste escrita', (err)=>{
        if (err) {
            throw err
        }
    })
    console.log('Arquivo criado!')


} else {
    console.log('Arquivo já exite!')
}