// import events object
const EventEmitter = require('events')

// create a new events object
const customEmitter = new EventEmitter()

// listen for event 'response'
customEmitter.on('response', () =>
{
    console.log('event emitted')
})

// listen for event 'response' and then call the callback function
customEmitter.on('response', (value) =>
{
    console.log('event emitted 1213 ' + value)
})

// emit the event 'response' with parameter
customEmitter.emit('response', 1213132)
