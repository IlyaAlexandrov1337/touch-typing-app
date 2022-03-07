import { StyleSheet } from 'aphrodite';

export const style = (theme: string) => StyleSheet.create({
  Main: {
    '::selection > div': {
      color: theme === 'dark' ? 'black' : 'white',
      background: theme === 'dark' ? '#09d3ac' : '#e6802c',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize: 20,
    backgroundColor: theme === 'dark' ? '#282c34' : '#f0f0f4',
    color: theme === 'dark' ? 'white' : 'black',
    height: '100vh',
    overflow: 'hidden',
  },

  Container: {
    maxWidth: '1000px',
    flexGrow: 1,
    alignItems: 'center',
    paddingLeft: '4vh',
    paddingRight: '4vh',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
});
