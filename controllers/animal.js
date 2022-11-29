const express=require('express') // bring this in so we can make our router
const animals=require('../models/animals')

////////
//create router variable to attach routes

const router=express.Router()  // router will have all routes attached to it

router.get('/', (req, res)=>{
    res.render('index.ejs', {animals})
})

router.get('/new', (req, res)=>{
    res.render('new.ejs' )
})

router.post('/animals', (req, res)=>{
    animals.unshift(req.body)
        res.redirect('/animals')
    })

// router.delete('/:id', (req, res)=>{
//     animals.findByIdAndDelete(req.params.id, (err, deletedAnimal)=>{
//         console.log(err, deletedAnimal)
//     })
//     res.redirect('/')
// })


router.get('/:id', (req, res)=>{
    res.render('show.ejs', {animal: animals[req.params.id]})
})





module.exports=router