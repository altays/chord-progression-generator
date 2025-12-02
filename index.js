import process from 'node:process'
import { progressionCreator } from './scripts/chord.mjs'

// later on
    // add other chord types onto list - sus chords, 6 chords
    // create a chord filter - exclude certain types (i.e., aug and dim)

const chordPattern = process.argv[2]

let chordList = progressionCreator(chordPattern)
// console.log('chord list')
console.log(chordList)

// idea - use a shell script to run the chord list multiple times, save to a txt file