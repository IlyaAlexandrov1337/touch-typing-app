import { StyleSheet } from 'aphrodite';

export const style = (theme: string) => StyleSheet.create({
    Main: {
        display: 'flex',
        height: '100%',
        flexDirection: 'row',
        gap:'1.5vw',
        justifyContent: 'center',
        alignItems: 'center',
    },

    Button: {
        backgroundColor: theme === 'black' ? 'lightgray' : 'gray',
        color: theme === 'black' ? 'black' : 'white',
        fontSize: '20px',
        padding: '10px 60px',
        borderRadius: '5px',
        margin: '10px 0px',
        cursor: 'pointer',
    }
})
