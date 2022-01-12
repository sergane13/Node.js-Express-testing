const express = require("express")

// create the router
const router = express.Router()


// /router
router.get('/', (req, res) => 
{
    res.send('saf')
})

// /router/new
router.get('/new', (req, res) => 
{
    res.send('saasdf')
})

// create a post request 
router.post('/', (req, res) => 
{
    res.send('aur')
})

// :id 
router.get("/:id", (req, res) => 
{
    res.send(req.params.id)
})


// export the router
module.exports = router;