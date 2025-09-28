import  { Roots, TravelIntervals, ResIntervals, chordAlias, getRandomInt, getRandomRoot,getRandomInterval, getRandomChord, calculateInterval, wrapOctave, getNextRoot, getChords, getRandomChordType } from "./helper.mjs"

export function createStartChord() {
    let startRoot=getRandomRoot(Roots);
    let startType=getRandomChordType();
    return {root: startRoot, type: startType}
}

export function createChord(subChord,Intervals) {
    let interval=getRandomInterval(Intervals);
    let chordRoot=Roots[getNextRoot(subChord.root, interval.distance)]
    let chordTypeArray = interval.list.chords.find((element) => element.targetChord == chordAlias(subChord.type))
    let chordType=chordTypeArray.tensionChord[getRandomInt(chordTypeArray.tensionChord.length)]
    return {root: chordRoot, type: chordType}
}

export function progressionCreator(progression){
    let chordList = []
    let currentChord = []

    for (let i = 0; i < progression.length; i++) {
        if (progression[i]=='s'){
            let newChord = createStartChord()
            chordList.push(`${newChord.root.note}${newChord.type}`)
            currentChord = newChord
        } else if (progression[i]=="t"){
            let newChord = createChord(currentChord,TravelIntervals)
            chordList.push(`${newChord.root.note}${newChord.type}`)
            currentChord = newChord
        } else if (progression[i]=="r"){
            let newChord = createChord(currentChord, ResIntervals)
            chordList.push(`${newChord.root.note}${newChord.type}`)
            currentChord = newChord
        }
    }

    return chordList

}