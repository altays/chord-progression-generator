import  { Roots, TravelIntervals, ResIntervals, chordAlias, getRandomInt, getRandomRoot,getRandomInterval, getRandomChord, calculateInterval, wrapOctave, getNextRoot, getChords, getRandomChordType } from "./helper.js"

// starting chord

function createStartChord() {
    let startRoot=getRandomRoot(Roots);
    let startType=getRandomChordType();
    return {root: startRoot, type: startType}
}

let chord1 = createStartChord()

function createResChord(startChord, Roots, Intervals) {
    let resInterval=getRandomInterval(Intervals);
    let resRoot=Roots[getNextRoot(startChord.root, resInterval.distance)]
    let resChordTypesArray=resInterval.list.chords.find((element) => element.targetChord == startChord.type).tensionChord
    let resChordType = resChordTypesArray[getRandomInt(resChordTypesArray.length)]
    return {root: resRoot, type: resChordType}
}

let lastChord = createResChord(chord1, Roots, ResIntervals)

function createTravelChord(subChord, Roots, Intervals) {
    let travelInterval;
    let travelRoot;
    let travelChordTypeArray;
    let travelChordType
    while (travelChordTypeArray == undefined){
        travelInterval=getRandomInterval(Intervals);
        travelRoot=Roots[getNextRoot(subChord.root, travelInterval.distance)]
        travelChordTypeArray=travelInterval.list.chords.find((element) => element.targetChord == chordAlias(subChord.type))
    }
    travelChordType=travelChordTypeArray.tensionChord[getRandomInt(travelChordTypeArray.tensionChord.length)]
    return {root: travelRoot, type: travelChordType}
}

let travelChord = createTravelChord(lastChord, Roots, TravelIntervals)

console.log(chord1, travelChord, lastChord)

// to dos
    // configs
        // number of chords
    // chord order
        // currently is Start, Travel, Res by default
        // could make order custom - like inserting a res chord before a travel chord?

// later on
    // add other chord types onto list - sus chords, 6 chords
    // work out aug and dim chord motions for res chords
    // look into why travel chord calculation is hanging
