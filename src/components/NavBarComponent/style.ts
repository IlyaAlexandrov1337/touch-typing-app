import { StyleSheet } from 'aphrodite-to-jss';

export const style = (theme: string) => StyleSheet.create({
  Main: {
    width: '100%',
    background: theme === 'dark' ? '#f0f0f4' : '#282c34',
    flexShrink: 0,
    maxHeight: '100px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 12,
  },

  Logo: {
    cursor: 'pointer',
    marginRight: '24px',
    marginLeft: '24px',
    color: theme === 'dark' ? 'black' : 'white',
    fontSize: '2rem',
    textDecoration: 'none',
    mozUserSelect: 'none',
    khtmlUserSelect: 'none',
    webkitUserSelect: 'none',
    userSelect: 'none',
  },

  Link: {
    color: theme === 'dark' ? 'black' : 'white',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '0 0.8rem',
    height: '100%',
    cursor: 'pointer',
  },

  Menu: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '-24px',
  },

  Right: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '24px',
  },

  ButtonLink: {
    borderRadius: '4px',
    fontWeight: 'bold',
    background: 'transparent',
    padding: '10px 22px',
    color: theme === 'dark' ? 'black' : 'white',
    outline: 'none',
    border: theme === 'dark' ? '2px solid black' : '2px solid white',
    cursor: 'pointer',
    textDecoration: 'none',
    margin: '0px 4px',
  },
});
