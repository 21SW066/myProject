const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('cake is bakked', () => {
  console.log('switch off the oven!');
  setTimeout(()=>{
    console.log("switch off the oven! Its a gentle reminder");
  } ,5000);
});

console.log("THe script is running");
myEmitter.emit('cake is bakked');
console.log("THe script is still running")