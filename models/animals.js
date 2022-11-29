// const mongoose=require('mongoose')

const animals = [
    {species: "Lion", extinct: false, location: "Africa, India", lifeExpectancy: 15},
    {species: "Tiger", extinct: false, location: "Asia", lifeExpectancy: 10},
    {species: "Elephant", extinct: false, location: "Africa, Asia", lifeExpectancy: 70},
    {species: "Dodo", extinct: true, location: "Africa", lifeExpectancy: 30},
    {species: "Mammoth", extinct: true, location: "Northern Eurasia, North America", lifeExpectancy: 60}
]


// const{Schema, model} = mongoose //destructing, grabbing model and Schema off mongoose variable = mongoose.Schema or mongoose.model 

// const animalSchema=new Schema ({
//     species: String,
//     extint: Boolean, 
//     location: String,
//     lifeExpectancy: Number
// })

// const Animal=model('Animal', animalSchema)

module.exports = animals