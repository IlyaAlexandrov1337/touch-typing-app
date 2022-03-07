import { selector } from 'recoil';
import { themeState } from './atoms';

export const themeLabelState = selector({
  key: 'themeLabel',
  get: ({ get }) => {
    const value = get(themeState);
    return value ? 'light' : 'dark';
  },
});
