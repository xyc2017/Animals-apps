require('dotenv').config() // load env variables
const express=require('express') // bring in expres to make out app
const morgan=require('morgan') // nice logger for our request

// const mongoose=require('mongoose') // gives us that db connection and cool methods for CRUD to the datas
const PORT=process.env.PORT //check env file for anything that has this name
const app=express()
const methodOverride=require('method-override')
const animals=require('./models/animals')
const animalRouter=require('./controllers/animal')
//const mongoose=require('mongoose')

// const DATABASE_URL=process.env.DATABASE_URL
// const CONFIG= {
//     useNewUrlParser: true,
//     useUnifiedTopology:true
// }

// //establish connect
// mongoose.connect(DATABASE_URL, CONFIG)

// //log connections events from mongoose
// mongoose.connection
//     .on('open',()=>console.log('connected'))
//     .on('close',()=>console.log('disconnected'))
//     .on('error',(error)=>console.log('error', error))


app.use(morgan('tiny'))
app.use(express.urlencoded({extended:true}))
app.use(express.static('public')) // static allows us to send files to the front end
app.use('/animals',animalRouter)


app.listen(PORT, ()=>{
    console.log(`listening to ${PORT}`)
})