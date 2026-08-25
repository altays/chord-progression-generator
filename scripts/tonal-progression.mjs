import  { Roots, getRandomInt, getRandomRoot,getRandomInterval, getRandomChord, getNextRoot, getRandomTriad} from "./helper.mjs"

// find start chord
    // random root
    // random type
        // Major route
        // Minor Route


// create random progression route
    // end on tonic
    // random number of chords - from 2 to 8
    // chord routes
        // 1234567t
        // sub to tonic or dom
        // mediant to tonic or sub
        // dom to tonic or sub
        // tonic to sub or dom

console.log(createTonalProgression(2))

function createTonalProgression(num) {
    let progressionStr = "t"
    let currentChord = "t"
    let subChance, domChance, medChance, tonicChance;
    // chord types are t, s, d, m

    for (let i = 0; i < num; i++){
        subChance = getRandomInt(25)+25;
        domChance = getRandomInt(25)+25;
        medChance = getRandomInt(10)+10;
        tonicChance = 100 - subChance - domChance - medChance;
        // console.log(subChance, domChance, medChance, tonicChance)
        switch (currentChord) {
            case 't':
                currentChord = getPrevChordTonic(subChance, domChance, medChance, tonicChance)
                // set current chord to new chord
                // console.log('current chord ', currentChord)
                progressionStr += currentChord
                // console.log("=========")
                break;
            case 's':
                currentChord = getPrevChordSub(domChance, medChance, tonicChance)
                // // set current chord to new chord
                // console.log('current chord ', currentChord)
                // console.log('subdominant')
                progressionStr += currentChord
                // console.log("=========")
                break;
            case 'd':
                currentChord = getPrevChordDom(subChance, medChance, tonicChance)
                // // set current chord to new chord
                // console.log('current chord ', currentChord)
                // console.log('dominant')
                progressionStr += currentChord
                // console.log("=========")
                break;
            case 'm':
                currentChord = getPrevChordMed(subChance, domChance, tonicChance)
                // console.log('mediant')
                progressionStr += currentChord
                // console.log("=========")
                break;
            default:
                console.log('whoops! error occurred')
        }
    }

    // let name = "GeeksforGeeks";
    let reverseString = '';
    for (let i = progressionStr.length - 1; i >= 0; i--) {
        reverseString += progressionStr[i];
    }

    return reverseString
}

function getPrevChordTonic(chanceSub, chanceDom, chanceMed, chanceTonic){
    let choices = [
        [chanceSub,"s"],
        [chanceDom,"d"],
        [chanceMed,"m"],
        [chanceTonic,"t"],
    ]

    // console.log('choices', choices)

    let selection = pickChoice(choices)
    // console.log('selection', selection)

    let newChord = choices[selection][1]

    return newChord

}

function getPrevChordSub(chanceDom, chanceMed, chanceTonic){
    let choices = [
        [chanceDom,"d"],
        [chanceMed,"m"],
        [chanceTonic,"t"],
    ]

    // console.log('choices', choices)

    let selection = pickChoice(choices)
    // console.log('selection', selection)

    let newChord = choices[selection][1]

    return newChord

}

function getPrevChordDom(chanceSub, chanceMed, chanceTonic){
    let choices = [
        [chanceSub,"s"],
        [chanceMed,"m"],
        [chanceTonic,"t"],
    ]

    // console.log('choices', choices)

    let selection = pickChoice(choices)
    // console.log('selection', selection)

    let newChord = choices[selection][1]

    return newChord

}

function getPrevChordMed(chanceSub, chanceDom, chanceTonic){
    let choices = [
        [chanceSub,"s"],
        [chanceDom,"d"],
        [chanceTonic,"t"],
    ]

    // console.log('choices', choices)

    let selection = pickChoice(choices)
    // console.log('selection', selection)

    let newChord = choices[selection][1]

    return newChord

}

function pickChoice(choiceArr) {

    let rand, min, max, i, i2, choice;

    rand = Math.floor(Math.random() * 100);
    choice = -1;
    
    for (i = 0; i < choiceArr.length; i++) {

        // set up min
        if (i === 0) {
        min = 0;
        } else {
        min = 0;
        // add up all the values so far
        for (i2 = 0; i2 < i; i2++) {
            min += choiceArr[i2][0];
        }
        // one higher
        min++;
        }

        // set up max
        if (i === 0) {
        max = choiceArr[i][0];
        } else {
        max = 0;
        // add up all the values so far
        for (i2 = 0; i2 < i + 1; i2++) {
            max += choiceArr[i2][0];
        }
        }

        if (rand >= min && rand <= max) {
        choice = i;
        break;
        }

    }

    if (choice == -1 ){
        choice = getRandomInt(choiceArr.length)
    }

    return choice
  
};

export function createStartChord() {
    let startRoot=getRandomRoot(Roots);
    let startType=getRandomChordType();
    return {root: startRoot, type: startType}
}

export function createChord(subChord,Intervals) {
    // let interval=getRandomInterval(Intervals);
    // let chordRoot=Roots[getNextRoot(subChord.root, interval.distance)]
    // let chordTypeArray = getChords(interval,subChord.type)
    // let chordType=chordTypeArray.tensionChord[getRandomInt(chordTypeArray.tensionChord.length)]
    return {root: chordRoot, type: chordType}
}

export function tonalProgressionCreator(progression){
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