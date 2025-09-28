// lists

export const Roots = [
    {id:0,note:"C"},{id:1,note:"C#/Db"},{id:2,note:"D"},
    {id:3,note:"D#/Eb"},{id:4,note:"E"},{id:5,note:"F"},
    {id:6,note:"F#/Gb"},{id:7,note:"G"},{id:8,note:"G#/Ab"},
    {id:9,note:"A"},{id:10,note:"A#/Bb"},{id:11,note:"B"},
]

const minorSecondIntervals = {
    id:1,chords:[ 
    {targetChord:"maj",tensionChord:["maj","min","dim","aug","maj7","dom7","min7","maj7+"]},
    {targetChord:"min",tensionChord:["maj","min","aug","maj7","dom7","min7","maj7+"]},
    {targetChord:"aug",tensionChord:["maj","min","dim","aug"]},
    {targetChord:"dim",tensionChord:["maj","min","dim","aug"]}
]}
const majorSecondIntervals = {
    id:2,chords:[
    {targetChord:"maj",tensionChord:["maj","min","dim","aug"]},
    {targetChord:"min",tensionChord:["maj","min","dim","aug"]},
    {targetChord:"aug",tensionChord:["maj","min","dim","aug"]},
    {targetChord:"dim",tensionChord:["maj","min","dim","aug"]}
]}
const perfFourthIntervals = {
    id:5,chords:[
    {targetChord:"maj",tensionChord:["maj","min","dim","aug","maj7","min7","dom7","min7","minmaj7"]},
    {targetChord:"min",tensionChord:["maj","min","dim","aug","maj7","min7","minmaj7"]},
    {targetChord:"aug",tensionChord:["maj","min","dim","aug"]},
    {targetChord:"dim",tensionChord:["maj","min","dim","aug"]}
]}
const tritoneIntervals = {
    id:6,chords:[
    {targetChord:"maj",tensionChord:["maj","min","dim","aug","m7b5","dim7","min7","dimmaj7"]},
    {targetChord:"min",tensionChord:["min","dim","aug","m7b5","min7","dimmaj7","dom7"]},
    {targetChord:"aug",tensionChord:["maj","min","dim","aug"]},
    {targetChord:"dim",tensionChord:["maj","min","dim","aug"]}
]}
const perfFifthIntervals = {
    id:7,chords:[
    {targetChord:"maj",tensionChord:["maj","min","dim","aug","dom7","min7","dim7"]},
    {targetChord:"min",tensionChord:["maj","min","dim","aug","dom7","min7","dim7"]},
    {targetChord:"aug",tensionChord:["maj","min","dim","aug"]},
    {targetChord:"dim",tensionChord:["maj","min","dim","aug"]}
]}
const minorSeventhIntervals = {
    id:10,chords:[
    {targetChord:"maj",tensionChord:["maj","min","dim","aug","dom7","m7b5"]},
    {targetChord:"min",tensionChord:["maj","min","dim","aug","dom7","m7b5","dim7"]},
    {targetChord:"aug",tensionChord:["maj","min","dim","aug"]},
    {targetChord:"dim",tensionChord:["maj","min","dim","aug"]}
]}
const majorSeventhIntervals = {
    id:11,chords:[
    {targetChord:"maj",tensionChord:["dim","dim7","m7b5","min"]},
    {targetChord:"min",tensionChord:["dim","dim7","m7b5","min"]},
    {targetChord:"aug",tensionChord:["maj","min","dim","aug"]},
    {targetChord:"dim",tensionChord:["maj","min","dim","aug"]}
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

export const TravelIntervals = [
    // {distance:0,type:"unison"},
    {distance:1,type:"minor2",list:minorSecondIntervals},
    {distance:2,type:"major2",list:majorSecondIntervals},
    {distance:3,type:"minor3",list:minorThirdIntervals},
    {distance:4,type:"major3",list:majorThirdIntervals},
    {distance:5,type:"perf4",list:perfFourthIntervals},
    {distance:6,type:"tritone",list:tritoneIntervals},
    {distance:7,type:"perf5",list:perfFifthIntervals},
    {distance:8,type:"min6",list:minorSixthIntervals},
    {distance:9,type:"maj6",list:majorSixthIntervals},
    {distance:10,type:"min7",list:minorSeventhIntervals},
    {distance:11,type:"maj7",list:majorSeventhIntervals}
]


export const ResIntervals = [
    // {distance:0,type:"unison"},
    {distance:1,type:"minor2",list:minorSecondIntervals},
    {distance:2,type:"major2",list:majorSecondIntervals},
    {distance:5,type:"perf4",list:perfFourthIntervals},
    {distance:6,type:"tritone",list:tritoneIntervals},
    {distance:7,type:"perf5",list:perfFifthIntervals},
    {distance:10,type:"min7",list:minorSeventhIntervals},
    {distance:11,type:"maj7",list:majorSeventhIntervals}
]

export function chordAlias (chordType) {
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
        return chordType
    }
}

// random nums

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function getRandomRoot(rootList) {
    return rootList[getRandomInt(rootList.length)]
}


export function getRandomInterval(intervalList) {
    return intervalList[getRandomInt(intervalList.length)]
}


export function getRandomChord(chordList) {
    return chordList[getRandomInt(chordList.length)]
}

// calculations - intervals, wrapping to octave, next root based on interval


export function calculateInterval(rootA,rootB) {
    let distance=Math.abs(rootA.id-rootB.id)
    return distance
}

export function wrapOctave(interval){
    return interval%12
}

export function getNextRoot(rootNote, interval){
    return wrapOctave(rootNote.id + interval)
}

export function getChords (intervalType, tarChordType) {
    return intervalType.chords.find((element) => element.targetChord == tarChordType).tensionChord;
}

export function getRandomChordType () {
    let endChordList = ['maj','min','min7','maj7','dom7','dim7','m7b5','dimM7','M7+','min7']
  
    return endChordList[getRandomInt(endChordList.length)]
}