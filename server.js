const express = require("express")
const bodyParser = require("body-parser")

const blockchain = require("./js/blockchain.js")

// default stuff
const app = express()
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static(__dirname));

// get request
app.get('/', (req, res) => 
{
    // send html file as response with vars
    res.render("index", {value : "pending"})
})

app.get('/values', (req, res) => 
{
    res.json({ "value" : "something"})
})

// post request
app.post('/', (req, res) => 
{
    console.log(req);
    console.log(res);
    let valueTx = req.body.amount;

    if(valueTx >= 1)
    {   
        blockchain(valueTx)
        .then(
            (value) => 
            {
                if(value[0])
                {
                    res.render("index", 
                    {
                        value : "success",
                        amount: valueTx,
                        balance1: value[1],
                        balance2: value[2]
                    })
                }   
            }
        )          
    }
    else
    {
        res.render("index", 
        {
            value : "failed",
            amount: 0
        })
    }
 
})



// import routers
const userRouter = require("./routes/users.js")

// use routers
app.use('/users', userRouter)




//listen for incoming requests on port 8080
app.listen(8080, () => 
{
    console.log('listening on port 8080')
})