/*
 * For this challenge, create the generics and types necessary so that the return type of
 * `getConfigValues` is an object with properties for each of the config settings with string
 * values.
 *
 * You do not need to change the implementation of either of these functions.
 */

const configSettings = [
  'var1',
  'var2',
  { name: 'var3', defaultValue: 'a default value' },
];

function getConfigValues(settings) {
  return settings.reduce((acc, setting) => {
    let settingName: string;
    let defaultValue: string | undefined;

    if (typeof setting === 'string') {
      settingName = setting;
    } else {
      settingName = setting.name;
      defaultValue = setting.defaultValue;
    }

    acc[settingName] = getValueFromStore(settingName) ?? defaultValue;
    return acc;
  }, {});
}

function getValueFromStore(settingName: string): string | undefined {
  if (settingName === 'var3') {
    return;
  }
  return 'value';
}

const values = getConfigValues(configSettings);
// Typescript should be aware of all of these properties
console.log(values.var1);
console.log(values.var2);
console.log(values.var3);
// Typescript should be aware that this property doesn't exist.
console.log(values.var4);
