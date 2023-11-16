const EventEmiter = require('events')
const myEmiter = new EventEmiter()

// listener
myEmiter.on('birthday', ()=>{
    console.log('happy birthday to you');
})

myEmiter.on('birthday', (gift)=>{
    console.log(`i will send a ${gift}`);
})

myEmiter.emit('birthday', 'bike')
