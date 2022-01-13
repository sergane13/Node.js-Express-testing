const express = require("express")

// create the router
const router = express.Router()


// creating a route for all request types af '/'
router.route('/')
.get((req, res) => 
{
    res.send('Hi dude')
})
.post((req, res) => 
{
    res.send('aur')
})


// /router/new
router.get('/new', (req, res) => 
{
    res.send('Hi new dude')
})

// :id 
router.get("/:id", (req, res) => 
{
    res.send("Hi in paradise " + req.params.id)
})

// export the router
module.exports = router;