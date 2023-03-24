import { A, B, C, D, E, F, G, H, I, J, K, L, M, N, O } from './challenge';

// Your solution should not include changing this file.

type HExpected = Pick<A, keyof A & keyof B>;
const HTest1: H = {} as HExpected;
const HTest2: HExpected = {} as H;

type IExpected = Pick<B, keyof A & keyof B>;
const ITest1: I = {} as IExpected;
const ITest2: IExpected = {} as I;

type JExpected = Pick<A | B, keyof A & keyof B>;
const JTest1: J = {} as JExpected;
const JTest2: JExpected = {} as J;

type KExpected = C<A, B>;
const KTest1: K = {} as KExpected;
const KTest2: KExpected = {} as K;

type LExpected = D<A, B>;
const LTest1: L = {} as LExpected;
const LTest2: LExpected = {} as L;
