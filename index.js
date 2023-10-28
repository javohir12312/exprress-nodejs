import express from "express";
import { engine } from "express-handlebars";

const app = express()

app.engine('handlebars', engine())
app.set('view engine', "handlebars")
app.set('views', "./views")

app.get('/about', (req,res) => {
    res.render('index')
})

app.get('/', (req,res) => {
    res.render('about')
})

const Port = process.env.Port || 4100

app.listen(Port, () => {
    console.log('salom');
})