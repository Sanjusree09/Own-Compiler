
const {show, op, storeNumber, storeString} = require('./interpreter');

storeNumber(`a`,10);
storeNumber(`b`,20);


let add = op(`a PLUS b`);
let sub = op(`a MINUS b`);
let mul = op(`a TIMES b`);
let div = op(`a DIVIDE b`);
let mod = op(`a MODULO b`);

show(add);
show(sub);
show(mul);
show(div);
show(mod);






