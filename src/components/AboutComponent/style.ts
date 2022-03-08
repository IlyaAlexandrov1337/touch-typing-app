import { StyleSheet } from 'aphrodite-to-jss';

export const style = (theme: string) => StyleSheet.create({
  Main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    maxWidth: '100%',
  },

  Line: {
    width: '100%',
    color: theme === 'dark' ? 'white' : 'black',
  },

  Row: {
    display: 'flex',
    flexShrink: 1,

    flexBasis: '42vh',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'left',
    fontFamily: 'monospace',
    fontSize: 'large',
    backgroundColor: 'transparent',
    color: theme === 'dark' ? 'white' : 'black',
  },

  Column: {
    flexBasis: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  PictureShort: {
    maxHeight: '250px',
    minWidth: '120px',
    marginLeft: '2%',
    width: '100%',
  },

  PictureLong: {
    maxHeight: '250px',
    maxWidth: '750px',
    width: '100%',
  },
});
