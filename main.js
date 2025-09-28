import process from 'node:process'
import { progressionCreator } from './scripts/chord.mjs'

// later on
    // add other chord types onto list - sus chords, 6 chords
    // look into why travel chord calculation is hanging

const chordPattern = process.argv[2]

let chordList = progressionCreator(chordPattern)
console.log('chord list')
console.log(chordList)