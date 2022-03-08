import { StyleSheet } from 'aphrodite-to-jss';

export const style = (theme: string) => StyleSheet.create({
  Main: {
    display: 'flex',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  Table: {
    border: theme === 'dark' ? '2px solid white' : '2px solid black',

    '& th': {
      padding: '1% 2%',
      borderBottom: theme === 'dark' ? '1px solid white' : '1px solid black',
    },
    '& td': {
      padding: '1% 2%',
      textAlign: 'center',
    },
  },
});
