const myModule = require("..");
const js = require("../javascript/fib")

const MSG_TESTE_WASM_FIB = 'Tempo de execução Fibonacci utilizando WebAssembly'
const MSG_TESTE_JS_FIB = 'Tempo de execução Fibonacci utilizando Javascript'

console.time(MSG_TESTE_WASM_FIB)
console.log('Entrada: '+ 10)
console.log('Resultado: '+ myModule.fib(10))
console.timeEnd(MSG_TESTE_WASM_FIB)

console.time(MSG_TESTE_JS_FIB)
console.log('Entrada: '+ 10)
console.log('Resultado: '+ js.fib(10))
console.timeEnd(MSG_TESTE_JS_FIB)

console.time(MSG_TESTE_WASM_FIB)
console.log('Entrada: '+ 15)
console.log('Resultado: '+ myModule.fib(15))
console.timeEnd(MSG_TESTE_WASM_FIB)

console.time(MSG_TESTE_JS_FIB)
console.log('Entrada: '+ 10)
console.log('Resultado: '+ js.fib(10))
console.timeEnd(MSG_TESTE_JS_FIB)

console.time(MSG_TESTE_WASM_FIB)
console.log('Entrada: '+ 10)
console.log('Resultado: '+ myModule.fib(10))
console.timeEnd(MSG_TESTE_WASM_FIB)

console.time(MSG_TESTE_JS_FIB)
console.log('Entrada: '+ 46)
console.log('Resultado: '+ js.fib(46))
console.timeEnd(MSG_TESTE_JS_FIB)
