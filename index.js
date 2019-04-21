'use strict';

let asyncOp = require('./lib/lib.js').asyncOp;
let RandStream = require('./lib/lib.js').RandStream;
let events = require('events');

/************************************************
 *   #1: Asynchronous Operations
 ************************************************/

function doAsync(input){
    let first_element = input.shift();
    let first_element_length = first_element.length;
    
    for ( let val of first_element ) {
        asyncOp(val, function() {
            first_element_length -= 1;
            if (input.length === 0) return;
            if (first_element_length === 0) doAsync(input);
        });
    }
}

/************************************************
 *   #2: Streams
 ************************************************/

// NO ANSWER

/************************************************
 *   #3: Resource Pooling
 ************************************************/

// NO ANSWER