import express from "express";
import { engine } from "express-handlebars";
import { create } from "express-handlebars";

const app = express()

const hbs = create({defaultLayout:'main',extname:'hbs'})

app.engine('hbs', hbs.engine)
app.set('view engine', "hbs")
app.set('views', "./views")

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/about', (req,res) => {
    res.render('about')
})

const Port = process.env.Port || 4100

app.listen(Port, () => {
    console.log('salom');
})