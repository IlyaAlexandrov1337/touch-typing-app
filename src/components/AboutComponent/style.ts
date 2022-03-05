import { StyleSheet } from 'aphrodite';

export const style = (theme: string) => StyleSheet.create({
    Main: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'flex-end',
        alignItems: "center",
    },

    Line: {
      width: '100%',
      color: 'white',
     },

    Row: {
        display: "flex",
        flexBasis: '42vh',
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: 'left',
        fontFamily: 'monospace',
        fontSize: 'large',
        backgroundColor: '#282c34',
        color: 'white'
    },

    Column: {
        flexBasis: '100%',
        display: "flex",
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: "center",
    },

    Picture: {
        maxHeight:'250px',
        maxWidth:'750px',
    }
})
