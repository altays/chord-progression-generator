import process from 'node:process'
import { chromaticProgressionCreator } from './scripts/chromatic-chord.mjs'
import { tonalProgressionCreator, createTonalProgressionCode } from './scripts/tonal-progression.mjs'

// later on
    // add other chord types onto list - sus chords, 6 chords

const progressionType = process.argv[2]
const chordPattern = process.argv[3]
let chordList;

switch (progressionType) {
    case 'chromatic':
        chordList = chromaticProgressionCreator(chordPattern)
        break;
    case 'tonal':
        chordList = tonalProgressionCreator(createTonalProgressionCode(4))
        break;
}

console.log(chordList)
