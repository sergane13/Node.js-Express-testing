const express = require("express")
const bodyParser = require("body-parser")

const blockchain = require("./js/blockchain.js")

const data =
[ 
    {
        ein : 1,
        zwei : 2,
        drei : 3,
        fir : 4,
        funf : 5,
    },
    {
        ein : 10,
        zwei : 20,
        drei : 30,
        fir : 40,
        funf : 50,
    }
]

// default stuff
const app = express()
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true}))

// static --> load it once to client so it will not change
// __dirname --> global variable that is the path of the current folder
app.use(express.static(__dirname));

// expects json format as specified in header
app.use(express.json())



// #### main page ####

// this is a middleware
// req --> midleware(req,res,next) --> res
function stuffToDo(req, res, next)
{
    console.log(__dirname);
    next()
}

app.use('/', stuffToDo);

// get request
app.get('/', (req, res) => 
{
    // send html file as response with vars
    res.render("index", {value : "pending"})
})

// post request
app.post('/', (req, res) => 
{
    let valueTx = req.body.amount;

    if(valueTx >= 1)
    {   
        res.sendStatus(200)

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

app.get('/yolo/:value', (req, res) => 
{   
    // req.param --> the parameters from :value
    console.log(req.params);
    const returnvalue = data.find((dataSmall) => dataSmall.ein === 10)
    // send json file
    res.json(returnvalue)
})

app.get('/api/v1/query', (req, res) => 
{   
    // object of type
    // { key: value} ?key:value&key:value&key:value ... 
    console.log(req.query);
    res.send("hi");
})

// post 
app.post('/yolo', (req, res) =>
{
    console.log(req.body);
    res.sendStatus(200)
})


// indiferent of request type retrieve this
// '*' is for any wish path
app.all('*', (req, res) => 
{
    res.status(404)
    res.send("NO PAGE FOUND")
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