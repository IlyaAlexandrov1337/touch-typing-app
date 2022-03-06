import { atom } from 'recoil';

export const themeState = atom({
  key: 'theme',
  default: false,
});

export const simpleResultState = atom({
  key: 'simpleResult',
  default: {
    2: {
      WPM: NaN,
      ACC: NaN,
    },
    10: {
      WPM: NaN,
      ACC: NaN,
    },
    30: {
      WPM: NaN,
      ACC: NaN,
    },
    50: {
      WPM: NaN,
      ACC: NaN,
    },
    100: {
      WPM: NaN,
      ACC: NaN,
    },
  },
});
