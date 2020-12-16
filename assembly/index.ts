// The entry file of your WebAssembly module.
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

export function mdc(n1: number, n2: number): number{
  if(n2 == 0){
    return n1
  }
  else{
    return mdc(n2, n1 % n2)
  }
}


