import app from './app.js'
import './database.js'

app.listen(process.env.PORT || 4000);

console.log(`Server Escuchando en el puerto: ${process.env.PORT || 4000} : ${process.env.environment}${process.env.PORT || 4000}`)
