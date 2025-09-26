const fs = require('node:fs/promises');

async function readwrite (filePath, outputFileName) {
 
    try {
        const data = await fs.readFile(filePath, { encoding: 'utf8' });
        await fs.writeFile(outputFileName,data);
    } 
    catch (error){
        console.error(error)
    }
}

// starting chord
    // variables
        // root
        // quality - aug, minor, dim, aug

// travel chord
    // variables
        // root
        // quality
        // motion
    // logic
        // 

// resolving chord
    // variables
        // root
        // quality
        // motion
    // logic

// lists

const Roots = [
    {id:0,note:"C"},{id:1,note:"C#/Db"},{id:2,note:"D"},
    {id:3,note:"D#/Eb"},{id:4,note:"E"},{id:5,note:"F"},
    {id:6,note:"F#/Gb"},{id:7,note:"G"},{id:8,note:"G#/Ab"},
    {id:9,note:"A"},{id:10,note:"A#/Bb"},{id:11,note:"B"},
]

const Intervals = [
    {distance:0,type:"unison"},
    {distance:1,type:"minor2"},
    {distance:2,type:"major2"},
    {distance:3,type:"minor3"},
    {distance:4,type:"major3"},
    {distance:5,type:"perf4"},
    {distance:6,type:"tritone"},
    {distance:7,type:"perf5"},
    {distance:8,type:"min6"},
    {distance:9,type:"maj6"},
    {distance:10,type:"min7"},
    {distance:11,type:"maj7"}
]

const minorSecondIntervals = {
    id:1,chords:[ 
    {targetChord:"maj",tensionChord:["maj","min","dim","aug","maj7","dom7","min7","maj7+"]},
    {targetChord:"min",tensionChord:["maj","min","aug","maj7","dom7","min7","maj7+"]}
]}
const majorSecondIntervals = {
    id:2,chords:[
    {targetChord:"maj",tensionChord:["maj","min","dim","aug"]},
    {targetChord:"min",tensionChord:["maj","min","dim","aug"]}
]}
const perfFourthIntervals = {
    id:5,chords:[
    {targetChord:"maj",tensionChord:["maj","min","dim","aug","maj7","min7","dom7","min7","minmaj7"]},
    {targetChord:"min",tensionChord:["maj","min","dim","aug","maj7","min7","minmaj7"]}
]}
const tritoneIntervals = {
    id:6,chords:[
    {targetChord:"maj",tensionChord:["maj","min","dim","aug","m7b5","dim7","min7","dimmaj7"]},
    {targetChord:"min",tensionChord:["min","dim","aug","m7b5","min7","dimmaj7","dom7"]}
]}
const perfFifthIntervals = {
    id:7,chords:[
    {targetChord:"maj",tensionChord:["maj","min","dim","aug","dom7","min7","dim7"]},
    {targetChord:"min",tensionChord:["maj","min","dim","aug","dom7","min7","dim7"]}
]}
const minorSeventhIntervals = {
    id:10,chords:[
    {targetChord:"maj",tensionChord:["maj","min","dim","aug","dom7","m7b5"]},
    {targetChord:"min",tensionChord:["maj","min","dim","aug","dom7","m7b5","dim7"]}
]}
const majorSeventhIntervals = {
    id:11,chords:[
    {targetChord:"maj",tensionChord:["dim","dim7","m7b5","min"]},
    {targetChord:"min",tensionChord:["dim","dim7","m7b5","min"]}
]}

const minorThirdIntervals = {id:3,chords:[
    {targetChord:"maj",tensionChord:["maj","min","dim","maj7","dom7","min7","minmaj7","dim7"]},
    {targetChord:"dim",tensionChord:["maj","min","dim","maj7","dom7","min7","minmaj7","dim7"]},
    {targetChord:"min",tensionChord:["maj","min","dim","maj7","dom7","min7","minmaj7","dim7"]},
    {targetChord:"aug",tensionChord:["maj","min","dim","maj7","dom7","min7","minmaj7","dim7"]}
]}
const majorThirdIntervals = {id:4,chords:[
    {targetChord:"maj",tensionChord:["maj","min","dim","maj7","dom7","min7","dim7","m7b5"]},
    {targetChord:"min",tensionChord:["maj","min","dim","maj7","dom7","min7","dim7","m7b5"]},
    {targetChord:"dim",tensionChord:["maj","min","dim","maj7","dom7","min7","dim7","m7b5"]},
    {targetChord:"aug",tensionChord:["maj","min","dim","maj7","dom7","min7","dim7","m7b5"]}
]}
const minorSixthIntervals = {id:8,chords:[
    {targetChord:"maj",tensionChord:["min","dim","min7","dim7","m7b5"]},
    {targetChord:"min",tensionChord:["min","dim","min7","dim7","m7b5"]},
    {targetChord:"dim",tensionChord:["min","dim","min7","dim7","m7b5"]},
    {targetChord:"aug",tensionChord:["min","dim","min7","dim7","m7b5"]}
]}
const majorSixthIntervals = {id:9,chords:[
    {targetChord:"maj",tensionChord:["maj","maj7","dom7","dim","m7b5","dim7"]},
    {targetChord:"min",tensionChord:["maj","maj7","dom7","dim","m7b5","dim7"]},
    {targetChord:"dim",tensionChord:["maj","maj7","dom7","dim","m7b5","dim7"]},
    {targetChord:"aug",tensionChord:["maj","maj7","dom7","dim","m7b5","dim7"]}
]}

const travelIntervals = [perfFifthIntervals,tritoneIntervals,perfFourthIntervals,majorSecondIntervals,minorSecondIntervals,majorThirdIntervals,minorThirdIntervals,majorSeventhIntervals,minorSeventhIntervals,minorSixthIntervals,majorSixthIntervals];

const resolvingIntervals = [perfFifthIntervals,tritoneIntervals,perfFourthIntervals,majorSecondIntervals,minorSecondIntervals,majorSeventhIntervals,minorSeventhIntervals];


// chord aliases 
function chordAlias (chordType) {
    switch (chordType) {
    case "maj7":
        return "maj"
        break;
    case "dom7":
        return "maj"
        break;
    case "dim7":
        return "dim"
        break;
    case "m7b5":
        return "dim"
        break;
    case "dimM7":
        return "dim"
        break;
    case "M7+":
        return "aug"
        break;
    case "min7":
        return "min"
        break;
    // ... more cases
    default:
        // Code to execute if no case matches the expression
    }
}

// random nums

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomRoot(rootList) {
    return rootList[getRandomInt(rootList.length)]
}

function getRandomInterval(intervalList) {
    return intervalList[getRandomInt(intervalList.length)]
}

// calculations - intervals, wrapping to octave, next root based on interval

function calculateInterval(rootA,rootB) {
    let distance=Math.abs(rootA.id-rootB.id)
    return distance
}

function wrapOctave(interval){
    return interval%12
}

function getNextChord(rootNote, interval){
    return wrapOctave(rootNote.id + interval)
}

function getChords (intervalType, tarChordType) {
    return intervalType.chords.find((element) => element.targetChord == tarChordType).tensionChord;
}

// testing

//// variables

let root1=getRandomRoot(Roots)
let root2=getRandomRoot(Roots)
let newRoot;

let interval=getRandomInterval(Intervals).distance

newRoot = interval + root2.id
let newRoot2 = getNextChord(root2,interval)


// finding new root based on random interval above root 2

console.log("root2: ", root2)
console.log("root2 id: ", root2.id)
console.log("random interval distance: ", interval)
console.log("root + interval: ",newRoot2)


// process
    // determine start chord
        // treat as travel chord to determine next chord
    // determine next chord - if travel, do travel; if res, do res
    // save chord prgression to txt file, save txt file

module.exports = { readwrite }
