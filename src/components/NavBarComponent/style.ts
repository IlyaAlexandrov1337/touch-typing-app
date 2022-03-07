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
    padding: '0 1rem',
    height: '100%',
    cursor: 'pointer',
  },

  Bars: {
    display: 'none',
    color: 'black',
    '@media screen and (max-width: 768px)': {
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 0,
      transform: 'translate(-100%, 75%)',
      fontSize: '1.8rem',
      cursor: 'pointer',
    },
  },

  Menu: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '-24px',
    '@media screen and (max-width: 768px)': {
      display: 'none',
    },
  },

  Right: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  Button: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '24px',
    '@media screen and (max-width: 768px)': {
      display: 'none',
    },
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
    marginLeft: '12px',
  },
});
