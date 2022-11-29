require('dotenv').confit()
//const mongoose=require('mongoose')

// mongoose.connection.on('open',()=>{

const animals = [
    {species: "Lion", extinct: false, location: "Africa, India", lifeExpectancy: 15},
    {species: "Tiger", extinct: false, location: "Asia", lifeExpectancy: 10},
    {species: "Elephant", extinct: false, location: "Africa, Asia", lifeExpectancy: 70},
    {species: "Dodo", extinct: true, location: "Africa", lifeExpectancy: 30},
    {species: "Mammoth", extinct: true, location: "Northern Eurasia, North America", lifeExpectancy: 60}
]

// })