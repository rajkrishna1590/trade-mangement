 const EventEmitter = require('events');

 class Emitter extends EventEmitter {
     emit(eventName, data) {
         super.emit(eventName, data);
     }
 }

 module.exports = new Emitter();