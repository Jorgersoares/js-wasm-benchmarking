const myModule = require("..");
const js = require("../javascript/mdc")

const MSG_TESTE_WASM_EUClI = 'Tempo de execução Euclides utilizando WebAssembly'
const MSG_TESTE_JS_EUCLI = 'Tempo de execução Euclides utilizando Javascript'

console.time(MSG_TESTE_WASM_EUClI)
console.log('Entrada: '+ 8 + ' e ' + 12)
console.log('Resultado: '+ myModule.mdc(8,12))
console.timeEnd(MSG_TESTE_WASM_EUClI)

console.time(MSG_TESTE_JS_EUCLI)
console.log('Entrada: '+ 8 + ' e ' + 12)
console.log('Resultado: '+ js.mdc(8,12))
console.timeEnd(MSG_TESTE_JS_EUCLI)

console.time(MSG_TESTE_WASM_EUClI)
console.log('Entrada: '+ 259 + ' e ' + 27)
console.log('Resultado: '+ myModule.mdc(259,27))
console.timeEnd(MSG_TESTE_WASM_EUClI)

console.time(MSG_TESTE_JS_EUCLI)
console.log('Entrada: '+ 259 + ' e ' + 27)
console.log('Resultado: '+ js.mdc(259,27))
console.timeEnd(MSG_TESTE_JS_EUCLI)

console.time(MSG_TESTE_WASM_EUClI)
console.log('Entrada: '+ 317811 + ' e ' + 514229)
console.log('Resultado: '+ myModule.mdc(317811,514229))
console.timeEnd(MSG_TESTE_WASM_EUClI)

console.time(MSG_TESTE_JS_EUCLI)
console.log('Entrada: '+ 317811 + ' e ' + 514229)
console.log('Resultado: '+ js.mdc(317811,514229))
console.timeEnd(MSG_TESTE_JS_EUCLI)
