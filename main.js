import process from 'node:process'
import { progressionCreator } from './scripts/chord.mjs'

// later on
    // add other chord types onto list - sus chords, 6 chords
    // look into why travel chord calculation is hanging
    // have some way to export data into a file

const chordPattern = process.argv[2]

// selector script

// logic to select chromatic progression
let chordList = progressionCreator(chordPattern)
console.log('chord list')
console.log(chordList)

//logic to select chord tropes
    // condition of chord tropes to include

