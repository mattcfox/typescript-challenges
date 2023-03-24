const exampleConfigSettings = [
  'var1',
  'var2',
  { name: 'var3', defaultValue: 'a default value' },
];

type ExampleOutputType = {
  var1: string | undefined;
  var2: string | undefined;
  var3: string;
};

type GetConfigValue = (settingName: string) => string | undefined;

export function getConfigValues(settings, getValue: GetConfigValue) {
  return settings.reduce((acc, setting) => {
    let settingName: string;
    let defaultValue: string | undefined;

    if (typeof setting === 'string') {
      settingName = setting;
    } else {
      settingName = setting.name;
      defaultValue = setting.defaultValue;
    }

    acc[settingName] = getValue(settingName) ?? defaultValue;
    return acc;
  }, {});
}
