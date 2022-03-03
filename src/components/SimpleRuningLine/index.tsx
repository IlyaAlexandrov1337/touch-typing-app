import React, { useState } from 'react';
import { Box } from "@mui/material";
import { useKeyPress} from "../../hooks/useKeyPress";
import { generate } from "../../utils/words";
import { currentTime } from '../../utils/time';
import { style } from "./style"

const initialWords = generate();
const currentStyle = style('black')

export function SimpleRunningLineComponent() {
    const [leftPadding, setLeftPadding] = useState(
        new Array(20).fill(' ').join(''),
    );
    const [outgoingChars, setOutgoingChars] = useState('');
    const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
    const [incomingChars, setIncomingChars] = useState(initialWords.substr(1));

    const [startTime, setStartTime] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [wpm, setWpm] = useState('');

    const [accuracy, setAccuracy] = useState('');
    const [typedChars, setTypedChars] = useState('');

    useKeyPress(key => {
        if (!startTime) {
            setStartTime(currentTime());
        }

        let updatedOutgoingChars = outgoingChars;
        let updatedIncomingChars = incomingChars;
        if (key === currentChar) {
            if (leftPadding.length > 0) {
                setLeftPadding(leftPadding.substring(1));
            }
            updatedOutgoingChars += currentChar;
            setOutgoingChars(updatedOutgoingChars);

            setCurrentChar(incomingChars.charAt(0));

            updatedIncomingChars = incomingChars.substring(1);
            if (updatedIncomingChars.split(' ').length < 10) {
                updatedIncomingChars += ' ' + generate();
            }
            setIncomingChars(updatedIncomingChars);

            if (incomingChars.charAt(0) === ' ') {
                setWordCount(wordCount + 1);
                const durationInMinutes = (currentTime() - startTime) / 60000.0;
                setWpm(((wordCount + 1) / durationInMinutes).toFixed(2));
            }
        }

        const updatedTypedChars = typedChars + key;
        setTypedChars(updatedTypedChars);
        setAccuracy(
            ((updatedOutgoingChars.length * 100) / updatedTypedChars.length).toFixed(
                2,
            ),
        );
    });

    return (
        <Box component="p" sx={currentStyle.Character}>
          <Box component="span" sx={currentStyle.CharacterOut}>
            {(leftPadding + outgoingChars).slice(-20)}
          </Box>
          <Box component="span" sx={currentStyle.CharacterCurrent}>{currentChar}</Box>
          <Box component="span">{incomingChars.substring(0, 20)}</Box>
            <h3>
                WPM: {wpm} | ACC: {accuracy}%
            </h3>
        </Box>
    );
}
