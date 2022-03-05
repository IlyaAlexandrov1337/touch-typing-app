import { StyleSheet } from 'aphrodite';

export const style = (theme: string) => StyleSheet.create({
    Main: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        textAlign: 'center',
        fontFamily: 'monospace',
        fontSize: 'large',
        backgroundColor: '#282c34',
        color: 'white',
        height: '100vh',
        overflow: 'hidden',
    },

    Container: {
        maxWidth: '1000px',
        flexGrow: 1,
        alignItems: "center",
        paddingLeft: '4vh',
        paddingRight: '4vh',
        overflowY: 'auto',
        overflowX: 'hidden',
    },
})
