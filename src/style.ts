import { StyleSheet } from 'aphrodite';

export const style = (theme: string) => StyleSheet.create({
    main: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
        fontFamily: 'monospace',
        fontSize: 'large',
        minHeight: "100vh",
        backgroundColor: '#282c34',
        color: 'white'
    }
})
