const express = require('express')
const app = express()

//Config
app.set('port', 3000)

//middleware


//Routes


app.listen(app.get('port'), () => {
    console.log('Conectado al puerto ', app.get('port'))
})

console.log("Hola")
console.log("Mma mia")

const add = (a, b) => a + b
console.log(add(10, 20))

