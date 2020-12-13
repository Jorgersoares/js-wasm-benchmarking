const myModule = require("..");
const js = require("../javascript/fatorial")

const MSG_TESTE_WASM_FATO = 'Tempo de execução Fatorial utilizando WebAssembly'
const MSG_TESTE_JS_FATO = 'Tempo de execução Fatorial utilizando Javascript'

console.time(MSG_TESTE_WASM_FATO)
console.log('Entrada: '+ 1)
console.log('Resultado: '+ myModule.fatorial(1))
console.timeEnd(MSG_TESTE_WASM_FATO)

console.time(MSG_TESTE_JS_FATO)
console.log('Entrada: '+ 1)
console.log('Resultado: '+ js.fatorial(1))
console.timeEnd(MSG_TESTE_JS_FATO)

console.time(MSG_TESTE_WASM_FATO)
console.log('Entrada: '+ 20)
console.log('Resultado: '+ myModule.fatorial(20))
console.timeEnd(MSG_TESTE_WASM_FATO)

console.time(MSG_TESTE_JS_FATO)
console.log('Entrada: '+ 20)
console.log('Resultado: '+ js.fatorial(20))
console.timeEnd(MSG_TESTE_JS_FATO)

console.time(MSG_TESTE_WASM_FATO)
console.log('Entrada: '+ 30)
console.log('Resultado: '+ myModule.fatorial(30))
console.timeEnd(MSG_TESTE_WASM_FATO)

console.time(MSG_TESTE_JS_FATO)
console.log('Entrada: '+ 30)
console.log('Resultado: '+ js.fatorial(30))
console.timeEnd(MSG_TESTE_JS_FATO)
