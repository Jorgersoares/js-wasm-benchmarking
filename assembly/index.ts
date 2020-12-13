// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function crivo(n: number): number {
  const vetor: bool[] = [];

  for (let i = 0; i <= n; i++) vetor[i] = true;

  vetor[0] = vetor[1] = false;

  let limit = Math.sqrt(n);

  for (var i = 2; i <= limit; i++) {
    if (vetor[i]) {
      for (var j = i * i; j <= n; j += i) vetor[j] = false;
    }
  }
  

  let num: number = 0;

  for (let i = 0; i < vetor.length; i++) {
    if(unchecked(vetor[i])) num++
  }

  return num
}

export function fib(n: i32): i32{
  if (n <= 1) {
    return 0;
  } else if (n == 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

export function fatorial(n: number): number{
  if(n <=1){
    return 1;
  }
  return n * fatorial(n-1);
}
