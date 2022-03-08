import { StyleSheet } from 'aphrodite-to-jss';

export const style = (theme: string) => StyleSheet.create({
  Main: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  Row: {
    display: 'flex',
    height: '100%',
    flexDirection: 'row',
    gap: '1.5vw',
    justifyContent: 'center',
    alignItems: 'center',
  },

  Button: {
    backgroundColor: theme === 'dark' ? '#f0f0f4' : '#282c34',
    color: theme === 'dark' ? 'black' : 'white',
    fontSize: '20px',
    padding: '4% 7%',
    borderRadius: '5px',
    margin: '2% 0%',
    cursor: 'pointer',
  },
});
