const express =require('express')
const app = express()
const port =3000

app.get('/', (req, res)=>{
    res.send('Prueba')
})

app.listen(port,()=>{
    console.log(`prueba app listening on port ${port}`)
})