const express = require("express")
const mongoose = require("mongoose")
const ShortUrl = require('./models/shortUrl')
const shortUrl = require("./models/shortUrl")
const dotenv = require("dotenv")
const app = express()

const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));
dotenv.config()

const connectDB = async ()=>{
    try{
        mongoose.connect(process.env.MONGO_URI)
        console.log("Conectado com oMongoDB")

    }
    catch(error)
    {
        console.log("Erro na conexão com o MongoDB", error)
    }
}

connectDB();


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))

app.get('/', async(req,res) => {
    try{
        const shortUrls = await ShortUrl.find()
        const showTable = req.query.showTable === 'true'; // Verifica se a tabela deve aparecer
        res.render('index', { shortUrls: shortUrls, showTable: showTable });
    }
    catch{
        console.log("Erro ao acessar o banco de dados")
    }
})

app.post('/shortUrls',async(req,res) => {
    try{
        await ShortUrl.create({full: req.body.fullUrl})
        res.redirect('/?showTable=true');
    }catch(error){
        console.log("Erro no envio ao banco")
    }
})

app.get('/:shortUrl',async(req,res)=>{
   const shortUrl = await ShortUrl.findOne({short:req.params.shortUrl})

   if(shortUrl==null) return res.sendStatus(404)

    shortUrl.clicks++
    await shortUrl.save()

    
    res.redirect(shortUrl.full)
})
app.listen(process.env.Port || 5000);

