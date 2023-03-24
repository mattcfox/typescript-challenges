import { getConfigValues } from './challenge';

// Here be dragons. Your solution should not include changing this file.

type FixTheGarbage<T> = boolean extends T ? false : true;

type TestA<Actual, Expected> = FixTheGarbage<
  Expected extends Actual ? true : false
>;
type TestB<Actual, Expected> = FixTheGarbage<
  Actual extends Expected ? true : false
>;

type TestIntersection<Actual, Expected> = TestA<Actual, Expected> &
  TestB<Actual, Expected>;

type TypeCheck<Actual, Expected> = TestIntersection<
  Actual,
  Expected
> extends never
  ? false
  : TestIntersection<Actual, Expected>;

type AnyishCheck<Actual> = FixTheGarbage<
  any extends Actual ? true : unknown extends Actual ? true : false
>;

function getConfigValue(settingName: string): string | undefined {
  if (settingName === 'var1' || settingName === 'settingA') {
    return 'actual value';
  }
}

const inputA = [
  'var1',
  'var2',
  { name: 'var3', defaultValue: 'a default value' },
] as const;

const actualResultA = getConfigValues(inputA, getConfigValue);
type ActualResultA = typeof actualResultA;
const aAnyCheck: AnyishCheck<ActualResultA> = false;
const aVar1AnyCheck: AnyishCheck<ActualResultA['var1']> = false;
const aVar1Check: TypeCheck<ActualResultA['var1'], string | undefined> = true;
const aVar2AnyCheck: AnyishCheck<ActualResultA['var2']> = false;
const aVar2Check: TypeCheck<ActualResultA['var2'], string | undefined> = true;
const aVar3AnyCheck: AnyishCheck<ActualResultA['var3']> = false;
const aVar3Check: TypeCheck<ActualResultA['var3'], string> = true;

// @ts-expect-error
actualResultA.var4;
// @ts-expect-error
actualResultA.settingA;

const inputB = [
  'settingA',
  { name: 'settingB', defaultValue: 'another default value' },
  'settingC',
] as const;

const actualResultB = getConfigValues(inputB, getConfigValue);
type ActualResultB = typeof actualResultB;
const bAnyCheck: AnyishCheck<ActualResultB> = false;
const bSettingAAnyCheck: AnyishCheck<ActualResultB['settingA']> = false;
const bSettingACheck: TypeCheck<ActualResultB['settingA'], string | undefined> =
  true;
const bSettingBAnyCheck: AnyishCheck<ActualResultB['settingB']> = false;
const bSettingBCheck: TypeCheck<ActualResultB['settingB'], string> = true;
const bSettingCAnyCheck: AnyishCheck<ActualResultB['settingC']> = false;
const bSettingCCheck: TypeCheck<ActualResultB['settingC'], string | undefined> =
  true;

// @ts-expect-error
actualResultB.var1;
// @ts-expect-error
actualResultB.settingD;
