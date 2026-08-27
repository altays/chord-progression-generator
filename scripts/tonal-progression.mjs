import  { Roots, getRandomInt, getRandomRoot,getRandomInterval, getRandomChord, getNextRoot, getRandomTriad} from "./helper.mjs"

// find start chord
    // random root
    // random type
        // Major route
        // Minor Route


// create random progression route - one layer
    // end on tonic
    // random number of chords - from 2 to 8
    // chord routes
        // 1234567t
        // sub to tonic or dom
        // mediant to tonic or sub
        // dom to tonic or sub
        // tonic to sub or dom

// create random progression route - 2ndary doms
    // end on tonic
    // random number of chords - from 2 to 8
    // chord routes
        // 1234567t
        // sub to tonic or dom OR 2ndary 25 of sub
        // mediant to tonic or sub OR 2ndary 25 of med
        // dom to tonic or sub OR 2ndary 25 of dom
        // tonic to sub or dom



// logic for 2ndary chords
    // chance to add in 2ndary chords
    // if chance is over X, add after current
    // add current chord (not 2ndaries) to current chord list


console.log(createTonalProgression(10))

function createTonalProgression(num) {
    let progressionStr = "t"
    let currentChord = "t"
    let subChance, domChance, medChance, tonicChance, secondaryChance;
    // chord types are t, s, d, m -> primary
        // d -> substitute in dom + dom extensions (tonic over V, Vsus4, etc)
    // secondary chord types
        // x - 2ndary dom - substitutions for major/minor route, tritone subs, dom extensions

    for (let i = 0; i < num; i++){
        subChance = getRandomInt(5)+15;
        domChance = getRandomInt(5)+15;
        medChance = getRandomInt(5)+15;
        secondaryChance = getRandomInt(100)+5
        let generatedChord;
        tonicChance = 100 - subChance - domChance - medChance;
        switch (currentChord) {
            case 't':
                generatedChord = getPrevChordTonic(subChance, domChance, medChance, tonicChance, secondaryChance)
                currentChord = generatedChord.choice
                progressionStr += generatedChord.target
                break;
            case 's':
                generatedChord = getPrevChordSub(domChance, medChance, tonicChance,secondaryChance)
                currentChord = generatedChord.choice
                progressionStr += generatedChord.target
                break;
            case 'd':
                generatedChord = getPrevChordDom(subChance, medChance, tonicChance,secondaryChance)
                currentChord = generatedChord.choice
                progressionStr += generatedChord.target
                break;
            case 'm':
                generatedChord = getPrevChordMed(subChance, domChance, tonicChance,secondaryChance)
                currentChord = generatedChord.choice
                progressionStr += generatedChord.target
                break;
            default:
                console.log('whoops! error occurred')
        }
    }

    let reverseString = '';
    for (let i = progressionStr.length - 1; i >= 0; i--) {
        reverseString += progressionStr[i];
    }

    return progressionStr //process forwards, print backwards
}

function getPrevChordTonic(chanceSub, chanceDom, chanceMed, chanceTonic, chanceSecond){
    let chordObj = {"choice":"","currentChord":""}

    let secondChord = ""
    
    let choices = [
        [chanceSub,"s"],
        [chanceDom,"d"],
        [chanceMed,"m"],
        [chanceTonic,"t"],
    ]

    let selection = pickChoice(choices)

    if (chanceSecond >= 50 && (choices[selection][1] != "t")){
        secondChord = "2"
    }

    chordObj.choice = choices[selection][1]
    chordObj.target = choices[selection][1]+secondChord

    return chordObj

}

function getPrevChordSub(chanceDom, chanceMed, chanceTonic, chanceSecond){
    let chordObj = {"choice":"","currentChord":""}

    let secondChord = ""
    
    let choices = [
        [chanceDom,"d"],
        [chanceMed,"m"],
        [chanceTonic,"t"],
    ]
 
    let selection = pickChoice(choices)
  
    if (chanceSecond >= 50 && (choices[selection][1] != "t")){
        secondChord = "2"
    }
 
    chordObj.choice = choices[selection][1]
    chordObj.target = choices[selection][1]+secondChord

    return chordObj

}

function getPrevChordDom(chanceSub, chanceMed, chanceTonic, chanceSecond){
    let chordObj = {"choice":"","currentChord":""}

    let secondChord = ""
    
    let choices = [
        [chanceSub,"s"],
        [chanceMed,"m"],
        [chanceTonic,"t"],
    ]

    let selection = pickChoice(choices)

 
    if (chanceSecond >= 50 && (choices[selection][1] != "t")){
        secondChord = "2"
    }
 
    chordObj.choice = choices[selection][1]
    chordObj.target = choices[selection][1]+secondChord

    return chordObj

}

function getPrevChordMed(chanceSub, chanceDom, chanceTonic, chanceSecond){
    let chordObj = {"choice":"","currentChord":""}

    let secondChord = ""
    
    let choices = [
        [chanceSub,"s"],
        [chanceDom,"d"],
        [chanceTonic,"t"],
    ]

    let selection = pickChoice(choices)
 
    if (chanceSecond >= 50 && (choices[selection][1] != "t")){
        secondChord = "2"
    }
 
    chordObj.choice = choices[selection][1]
    chordObj.target = choices[selection][1]+secondChord

    return chordObj

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