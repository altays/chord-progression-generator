import  { Roots, TravelIntervals, ResIntervals, chordAlias, getRandomInt, getRandomRoot,getRandomInterval, getRandomChord, calculateInterval, wrapOctave, getNextRoot, getChords, getRandomChordType } from "./helper.mjs"

export function createStartChord() {
    let startRoot=getRandomRoot(Roots);
    let startType=getRandomChordType();
    return {root: startRoot, type: startType}
}



export function createResChord(startChord) {
    let resInterval=getRandomInterval(ResIntervals);
    let resRoot=Roots[getNextRoot(startChord.root, resInterval.distance)]
    let resChordTypesArray=resInterval.list.chords.find((element) => element.targetChord == startChord.type).tensionChord
    let resChordType = resChordTypesArray[getRandomInt(resChordTypesArray.length)]
    return {root: resRoot, type: resChordType}
}


export function createTravelChord(subChord) {
    let travelInterval;
    let travelRoot;
    let travelChordTypeArray;
    let travelChordType
    // this is hanging somewhere - maybe due to lack of aug chords?
    while (travelChordTypeArray == undefined){
        travelInterval=getRandomInterval(TravelIntervals);
        travelRoot=Roots[getNextRoot(subChord.root, travelInterval.distance)]
        travelChordTypeArray=travelInterval.list.chords.find((element) => element.targetChord == chordAlias(subChord.type))
    }
    travelChordType=travelChordTypeArray.tensionChord[getRandomInt(travelChordTypeArray.tensionChord.length)]
    return {root: travelRoot, type: travelChordType}
}