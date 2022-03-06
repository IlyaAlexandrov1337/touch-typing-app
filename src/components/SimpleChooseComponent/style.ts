import { StyleSheet } from 'aphrodite';

export const style = (theme: string) => StyleSheet.create({
  Main: {
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
    padding: '10px 60px',
    borderRadius: '5px',
    margin: '10px 0px',
    cursor: 'pointer',
  },
});
