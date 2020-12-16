# js-wasm-benchmarking
Testes de comparativo de tempo de execução de algoritmos CPU Bound utilizando Javascript e WebAssembly (AssemblyScript)
## Estrutura
- A pasta `assembly` contém o arquivo index.ts que é onde reside os algoritmos escritos em AssemblyScript que irão ser compilados para WebAssembly
- A pasta `javascript` contém os algoritmos escritos em Javascript
- A pasta `tests` contém os testes comparando o tempo de execução dos algoritmos utilizando Javascript e WebAssembly
## Preparo do ambiente para executar os testes, execute os seguintes passos:
- `npm i`
- `npm run asbuild` para compilar do AssemblyScript para WebAssembly. Obs: Ao adicionar códigos ou altera os códigos existentes na pasta assembly deve-se rodar esse comando
- `node tests/<nome_teste>.js` para executar os testes
