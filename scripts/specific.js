import  { Roots, TravelIntervals, ResIntervals, chordAlias, getRandomInt, getRandomRoot,getRandomInterval, getRandomChord, calculateInterval, wrapOctave, getNextRoot, getChords, getRandomChordType } from "./helper.js"

// testing

let startRoot=getRandomRoot(Roots);
let startType=getRandomChordType();
let startChord=`${startRoot.note}${startType}`

// resolving chord (built off of chord before)
// random interval, random type based on type of target chord

let resInterval=getRandomInterval(ResIntervals);
let resRoot=Roots[getNextRoot(startRoot, resInterval.distance)]
let resChordTypesArray=resInterval.list.chords.find((element) => element.targetChord == startType).tensionChord
let resChordType = resChordTypesArray[getRandomInt(resChordTypesArray.length)]
let resChord=`${resRoot.note}${resChordType}`

// travel chord into resolving chord (if more than 2 chords)

let travelInterval;
let travelRoot;
let travelChordTypeArray;
let travelChordType
while (travelChordTypeArray == undefined){
    travelInterval=getRandomInterval(TravelIntervals);
    travelRoot=Roots[getNextRoot(resRoot, travelInterval.distance)].note
    travelChordTypeArray=travelInterval.list.chords.find((element) => element.targetChord == chordAlias(resChordType))
}
travelChordType=travelChordTypeArray.tensionChord[getRandomInt(travelChordTypeArray.tensionChord.length)]

let travelChord = `${travelRoot}${travelChordType}`
console.log( startChord, travelChord, resChord)

// to dos
    // make chord calculation modular
        // start chord is whatever
        // res chord is fine
        // travel chord -> could be modular
    // configs
        // number of chords
    // chord order
        // currently is Start, Travel, Res by default
        // could make order custom - like multiple resolution chords?

// later on
// add other chord types onto list - sus chords, 6 chords

// testing

// const array = [{id:5,thing:"banana"}, {id:12, thing:"strawberry"}, {id:8}, {id:130}, {id:44}];

// const found = array.find((element) => element.id > 10);

// console.log(found.thing);
// Expected output: 12
