import { selector } from 'recoil';
import { simpleResultState, themeState } from './atoms';

export const themeLabelState = selector({
  key: 'themeLabel',
  get: ({ get }) => {
    const value = get(themeState);
    return value ? 'light' : 'dark';
  },
});

export const simpleResultLabelState = selector({
  key: 'simpleResultLabel',
  get: ({ get }) => get(simpleResultState),
});
