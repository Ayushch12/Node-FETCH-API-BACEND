const { error } = require('console')
const express = require ('express')
const { default: mongoose } = require('mongoose')
const mangoose = require('mongoose')
const app = express()


//routes

app.get('/', (req, res)=>{
    res.send('Hello NODE API')
})

app.get('/blog', (req, res)=>{
    res.send('Hello Blog My name is Devtamin')
})



mongoose.connect
('mongodb+srv://ayushchalise93:Ayush321XXEEt@nodeapi.fp0d1ag.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{
    app.listen(3000, () =>{
        console.log(`Node Api is running on port 3000`)
    })

    console.log('connected to MongoDB')
}).catch((error) =>{
    console.log(error)
})
