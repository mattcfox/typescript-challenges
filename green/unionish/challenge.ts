export interface A {
  alpha: string;
  beta: number;
  gamma: boolean;
  delta: object;
  epsilon: { someProperty: boolean };
  zeta: string;
}

export interface B {
  alpha: 'Luke' | 'I' | 'am' | 'your' | 'father';
  beta?: number;
  gamma: 'true' | 'false';
  delta: { otherProperty: boolean };
  epsilon: object;
  eta: string;
}

export type C<T, U> = {
  [K in keyof T & keyof U]: T[K];
};

export type D<T, U> = {
  [K in keyof T & keyof U]: T[K] | U[K];
};

export type E<T, U> = {
  [K in keyof T & keyof U as T[K] extends U[K] ? K : never]: T[K];
};

export type F<T, U> = {
  [K in keyof T & keyof U as U[K] extends T[K] ? K : never]: U[K];
};

export type G<T, U> = {
  [K in keyof T & keyof U as T[K] extends U[K]
    ? U[K] extends T[K]
      ? K
      : never
    : never]: T[K];
};

// All of the below interfaces should be written to show the output of preceding comment.
// They should also be exported.
// Please do not uncomment the commented portions or use intellisense in the solution-checker.ts file.
// For example, with this prompt
// // type H = { prop1: boolean } & { prop2: boolean }
// You should fill out interface H like so
// export interface H {
//   prop1: boolean,
//   prop2: boolean
// }

// type H = Pick<A, keyof A & keyof B>
export interface H {}

// type I = Pick<B, keyof A & keyof B>
export interface I {}

// type J = Pick<A | B, keyof A & keyof B>
export interface J {}

// type K = C<A, B>
export interface K {}

// type L = D<A, B>
export interface L {}

// type M = E<A, B>
export interface M {}

// type N = F<A, B>
export interface N {}

// type O = G<A, B>
export interface O {}
