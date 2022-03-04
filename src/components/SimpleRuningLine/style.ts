import { StyleSheet } from 'aphrodite';

export const style = (theme: string) => StyleSheet.create({
    Character: {
        whiteSpace: 'pre',
        color: 'white',
    },

    CharacterCurrent: {
        backgroundColor: theme === 'black' ? '#09d3ac' : 'rgba(0, 0, 0, 0.04)'
    },

    CharacterOut: {
        color: theme === 'black' ? 'lightgray' : 'gray'
    }
})
