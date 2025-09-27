import process from 'node:process'
import { createResChord, createStartChord, createTravelChord, progressionCreator } from './scripts/chord.mjs'

// create function for chord function order - put on main
    // calls functions in predefined order, prints to console
    // build in params for...
        // pattern of chords
        // number of chords

// to dos
    // configs
        // number of chords
    // chord order
        // currently is Start, Travel, Res by default
        // could make order custom - like inserting a res chord before a travel chord?
    // work out if sh file should be kept?

// later on
    // add other chord types onto list - sus chords, 6 chords
    // work out aug and dim chord motions for res chords
    // look into why travel chord calculation is hanging


const chordPattern = process.argv[2]

// let startChord = createStartChord()
// let resChord=createResChord(startChord)
// let travelChord = createTravelChord(resChord)
// console.log(startChord, resChord, travelChord)

let chordList = progressionCreator(chordPattern)

// console.log(chordList)
