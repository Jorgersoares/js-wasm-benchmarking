# js-wasm-benchmarking
Benchmarking of CPU bound algorithms comparing Javascript and WebAssembly (AssemblyScript)
## Files structure
- `assembly` folder contains the algorithms file coded in AssemblyScript that will be compiled for WebAssembly
- `javascript` folder contains the algorithms coded in Javascript
- `tests` folder contains the tests comparing the time of execution of algorithms in Javascript and WebAssembly
## How to running the tests?:
- `npm i`
- `npm run asbuild`
- `node tests/<file-name>.js`
