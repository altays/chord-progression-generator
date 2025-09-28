import  { Roots, TravelIntervals, ResIntervals, chordAlias, getRandomInt, getRandomRoot,getRandomInterval, getRandomChord, calculateInterval, wrapOctave, getNextRoot, getChords, getRandomChordType } from "./helper.mjs"

export function createStartChord() {
    let startRoot=getRandomRoot(Roots);
    let startType=getRandomChordType();
    return {root: startRoot, type: startType}
}


// convert res and travel chord calc into one function
// export function createResChord(startChord) {
//     let resInterval=getRandomInterval(ResIntervals);
//     let resRoot=Roots[getNextRoot(startChord.root, resInterval.distance)]
//     // console.log('root ', resRoot)
//     console.log(resInterval.distance)
//     let resChordTypeArray = resInterval.list.chords.find((element) => element.targetChord == chordAlias(startChord.type))
//     console.log('resinterval', resChordTypeArray)
//     let resChordType=resChordTypeArray.tensionChord[getRandomInt(resChordTypeArray.tensionChord.length)]
//     return {root: resRoot, type: resChordType}
// }

// export function createTravelChord(subChord) {
//     let travelInterval;
//     let travelRoot;
//     let travelChordTypeArray;
//     let travelChordType
//     travelInterval=getRandomInterval(TravelIntervals);
//     travelRoot=Roots[getNextRoot(subChord.root, travelInterval.distance)]
//     travelChordTypeArray=travelInterval.list.chords.find((element) => element.targetChord == chordAlias(subChord.type))
//     travelChordType=travelChordTypeArray.tensionChord[getRandomInt(travelChordTypeArray.tensionChord.length)]
//     return {root: travelRoot, type: travelChordType}
// }

export function createChord(subChord,Intervals) {
    let interval=getRandomInterval(Intervals);
    let chordRoot=Roots[getNextRoot(subChord.root, interval.distance)]
    // console.log('root ', resRoot)
    console.log(interval.distance)
    let chordTypeArray = interval.list.chords.find((element) => element.targetChord == chordAlias(subChord.type))
    // console.log('interval', chordTypeArray)
    let chordType=chordTypeArray.tensionChord[getRandomInt(chordTypeArray.tensionChord.length)]
    return {root: chordRoot, type: chordType}
}

export function progressionCreator(progression){
    let chordList = []
    let currentChord = []

    for (let i = 0; i < progression.length; i++) {
        if (progression[i]=='s'){
            // console.log('s')
            let newChord = createStartChord()
            chordList.push(`${newChord.root.note}${newChord.type}`)
            console.log('current chord is ', newChord)
            currentChord = newChord
        } else if (progression[i]=="t"){
            // console.log('t')
            // let newChord = createTravelChord(currentChord)
            let newChord = createChord(currentChord,TravelIntervals)
            chordList.push(`${newChord.root.note}${newChord.type}`)
            console.log('current chord is ', newChord)
            currentChord = newChord
        } else if (progression[i]=="r"){
            // console.log('r')
            // let newChord = createResChord(currentChord)
            let newChord = createChord(currentChord, ResIntervals)
            chordList.push(`${newChord.root.note}${newChord.type}`)
            console.log('current chord is ', newChord)
            currentChord = newChord
        }
    }

 
    return chordList

}