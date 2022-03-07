import { StyleSheet } from 'aphrodite-to-jss';

export const style = (theme: string) => StyleSheet.create({
  Text: {
    whiteSpace: 'pre',
    color: theme === 'dark' ? 'white' : 'black',
  },

  CharacterCurrent: {
    backgroundColor: theme === 'dark' ? '#09d3ac' : '#e6802c',
  },

  CharacterOut: {
    color: theme === 'dark' ? 'lightgray' : 'gray',
  },
});
