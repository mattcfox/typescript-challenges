interface A {
  alpha: string,
  beta: number,
  gamma: boolean,
  delta: object,
  epsilon: { someProperty: boolean },
  zeta: string
}

interface B {
  alpha: 'Luke' | 'I' | 'am' | 'your' | 'father',
  beta?: number,
  gamma: 'true' | 'false',
  delta: { otherProperty: boolean },
  epsilon: object,
  eta: string
}

type C<T, U> = {
  [K in keyof T & keyof U]: T[K]
}

type D<T, U> = {
  [K in keyof T & keyof U]: T[K] | U[K]
}

type E<T, U> = {
  [K in keyof T & keyof U as T[K] extends U[K] ? K : never]: T[K]
}

type F<T, U> = {
  [K in keyof T & keyof U as U[K] extends T[K] ? K : never]: U[K]
}

type G<T, U> = {
  [K in keyof T & keyof U as T[K] extends U[K] ? U[K] extends T[K] ? K : never : never]: T[K]
}

// All of the below interfaces should be written to show the output of preceding comment.
// Please do not use intellisense on the commented portions.
// for example with this prompt
// // type H = { prop1: boolean } & { prop2: boolean }
// You should fill out interface H like so
// interface H2 {
//   prop1: boolean,
//   prop2: boolean
// }

// type H = Pick<A, keyof A & keyof B>
interface H {}

// type I = Pick<B, keyof A & keyof B>
interface I {}

// type J = Pick<A | B, keyof A & keyof B>
interface J {}

// type K = C<A, B>
interface K {}

// type L = D<A, B>
interface L {}

// type M = E<A, B>
interface M {}

// type N = F<A, B>
interface N {}

// type O = G<A, B>
interface O {}
