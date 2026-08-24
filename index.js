import process from 'node:process'
import { progressionCreator } from './scripts/chromatic-chord.mjs'

// later on
    // add other chord types onto list - sus chords, 6 chords
    // look into why travel chord calculation is hanging
    // have some way to export data into a file

const progressionType = process.argv[2]
const chordPattern = process.argv[3]
let chordList;
// console.log(process.argv)

switch (progressionType) {
    case 'chromatic':
        chordList = progressionCreator(chordPattern)
        break;
    case 'tonal':
        chordList = [ 'F', 'G', 'C', 'C7sus' ]
        break;
}

// console.log('chord list')
console.log(chordList)
