import express from 'express'
import todos from './routes/todos'
import bodyParser from 'body-parser'
const app=express()
app.use(bodyParser.json())
app.use(todos)
app.listen(3000)