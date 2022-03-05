import { StyleSheet } from 'aphrodite';

export const style = (theme: string) => StyleSheet.create({
    Main: {
        width:'100%',
        background: 'lightgray',
        flexShrink: 0,
        height: '10vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        fontWeight: 'bold',
        background: 'transparent',
        padding: '10px 22px',
        color: 'black',
        outline: 'none',
        border: '2px solid black',
        cursor: 'pointer',
        textDecoration: 'none',
        marginLeft: '12px',
    },

    Toggle: {
        backgroundColor: 'yellow'
    }
})
