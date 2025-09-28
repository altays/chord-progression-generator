import process from 'node:process'
import { createResChord, createStartChord, createTravelChord, progressionCreator } from './scripts/chord.mjs'

// to dos
    // figure out why undefined values keep popping up on res chords, why travel chord section hangs sometimes
    

// later on
    // add other chord types onto list - sus chords, 6 chords
    // look into why travel chord calculation is hanging

const chordPattern = process.argv[2]

let chordList = progressionCreator(chordPattern)
console.log('chord list')
console.log(chordList)