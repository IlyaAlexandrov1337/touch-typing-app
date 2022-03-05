import { StyleSheet } from 'aphrodite';

export const style = (theme: string) => StyleSheet.create({
    Main: {
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'lightgray',
        height: '85px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.2rem calc((100vw - 1000px) / 2)',
        zIndex: 12,
    },

    Logo: {
        cursor: 'pointer',
        marginRight: '24px',
        marginLeft: '24px',
        color: '#fff',
        fontSize: '2rem',
        textDecoration: 'none',
    },

    Link: {
        color: 'black',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        padding: '0 1rem',
        height: '100%',
        cursor: 'pointer',
        '&:hover': {
          color: 'black',
        }
    },

    Bars: {
        display: 'none',
        color: '#fff',
        '@media screen and (max-width: 768px)': {
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 0,
            transform: 'translate(-100%, 75%)',
            fontSize: '1.8rem',
            cursor: 'pointer',
        }
    },

    Menu: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '-24px',
        '@media screen and (max-width: 768px)': {
            display: 'none',
        }
    },

    Button: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '24px',
        '@media screen and (max-width: 768px)': {
        display: 'none',
      }
    },

    ButtonLink: {
        borderRadius: '4px',
        background: 'transparent',
        padding: '10px 22px',
        color: '#fff',
        outline: 'none',
        border: '1px solid #fff',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        textDecoration: 'none',
        marginLeft: '24px',
        '&:hover': {
            transition: 'all 0.2s ease-in-out',
            background: '#fff',
            color: '#808080',
        }
    }
})
