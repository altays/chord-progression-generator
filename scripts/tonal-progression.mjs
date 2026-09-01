import  { Roots, getRandomInt, getRandomRoot,getRandomInterval, getRandomChord, getNextRoot, getRandomTriad, selectFlavor, wrapOctave} from "./helper.mjs"

export function createTonalProgressionCode(num) {
    let progressionStr = "t"
    let currentChord = "t"
    let subChance, domChance, medChance, tonicChance, secondaryChance;
   
    for (let i = 0; i < num-1; i++){
        subChance = getRandomInt(5)+20;
        domChance = getRandomInt(5)+20;
        medChance = getRandomInt(5)+20;
        secondaryChance = getRandomInt(100)+10
        let generatedChord;
        tonicChance = Math.abs(100 - subChance - domChance - medChance);
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

function tonicChord(rootChord, lastChord, flavor){

    let chordOptions = [
        {"interval":"0",
        "triad":"maj",
        "route":"major",
        "scaleDegree": 1},
        {"interval":"-3",
        "triad":"min",
        "route":"major",
        "scaleDegree": 6},
        {"interval":"0",
        "triad":"dim",
        "route":"major",
        "scaleDegree": 1},
        {"interval":"0",
        "triad":"minor",
        "route":"minor",
        "scaleDegree": 1},
        {"interval":"3",
        "triad":"major",
        "route":"minor",
        "scaleDegree": 3},
        {"interval":"-3",
        "triad":"dim",
        "route":"minor",
        "scaleDegree": 6}
    ]

    let newChord = chordOptions[getRandomInt(chordOptions.length)]
    let newRoot = Math.abs(wrapOctave(parseInt(rootChord.root.id)+parseInt(newChord.interval)))

    let newRootNote = Roots.find((element) => element.id == newRoot).note

    newChord["root"] = {"id":newRoot, "note":newRootNote}
    newChord["printChord"] = `${newChord.root.note} ${newChord.triad}`
    
    return newChord;
}

// update - copy from tonic, update Chord Options
function subdomChord(rootChord, lastChord, flavor){
    let chordOptions = [
        {"interval":"5",
        "triad":"major",
        "route":"major",
        "scaleDegree": 4},
        {"interval":"2",
        "triad":"min",
        "route":"major",
        "scaleDegree": 2},
        {"interval":"5",
        "triad":"min",
        "route":"minor",
        "scaleDegree": 4},
        {"interval":"-4",
        "triad":"major",
        "route":"minor",
        "scaleDegree": 6},
        {"interval":"2",
        "triad":"dim",
        "route":"minor",
        "scaleDegree": 2}
    ]

    let newChord = chordOptions[getRandomInt(chordOptions.length)]
    let newRoot = Math.abs(wrapOctave(parseInt(rootChord.root.id)+parseInt(newChord.interval)))

    let newRootNote = Roots.find((element) => element.id == newRoot).note

    newChord["root"] = {"id":newRoot, "note":newRootNote}
    newChord["printChord"] = `${newChord.root.note} ${newChord.triad}`
    
    return newChord;
}

// copy from tonic, update chord options
function domChord(rootChord, lastChord, flavor){
    let chordOptions = [
        {"interval":"7",
        "triad":"maj",
        "route":"major",
        "scaleDegree": 5},
        {"interval":"11",
        "triad":"dim",
        "route":"major",
        "scaleDegree": 7},
        {"interval":"7",
        "triad":"maj",
        "route":"minor",
        "scaleDegree": 1}
    ]

    // update options, figure out logic
    let cadentialOptions = [
        {"interval":"5",
        "triad":"maj",
        "route":"major",
        "scaleDegree": 5},
        {"interval":"0",
        "triad":"sus4",
        "route":"major",
        "scaleDegree": 7},
        {"interval":"5",
        "triad":"minor",
        "route":"minor",
        "scaleDegree": 5}
    ]
    let chordArr=[];
    let cadentialChance = 50
    let cadChord

    // console.log('chord arr', chordArr)

    let newChord = chordOptions[getRandomInt(chordOptions.length)]
    let newRoot = Math.abs(wrapOctave(parseInt(rootChord.root.id)+parseInt(newChord.interval)))

    let newRootNote = Roots.find((element) => element.id == newRoot).note

    newChord["root"] = {"id":newRoot, "note":newRootNote}
    newChord["printChord"] = `${newChord.root.note} ${newChord.triad}`
    chordArr.push(newChord)

    // console.log('chord arr again', chordArr)
    
    if (cadentialChance > 50) {
        cadChord = cadentialOptions[getRandomInt(chordOptions.length)]
        let cadRoot = Math.abs(wrapOctave(parseInt(newChord.root.id)+parseInt(cadChord.interval)))

        let cadRootNote = Roots.find((element) => element.id == cadRoot).note

        cadChord["root"] = {"id":cadRoot, "note":cadRootNote}
        cadChord["printChord"] = `${cadChord.root.note} ${cadChord.triad}`
        chordArr.push(cadChord)
    }

    // console.log('chord arr after cadence', chordArr)

    return chordArr;
}

// copy from tonic, update chord options
function medChord(rootChord, lastChord, flavor){
     let chordOptions = [
        {"interval":"3",
        "triad":"minor",
        "route":"major",
        "scaleDegree": 1}
    ]

    let newChord = chordOptions[getRandomInt(chordOptions.length)]
    let newRoot = Math.abs(wrapOctave(parseInt(rootChord.root.id)+parseInt(newChord.interval)))

    let newRootNote = Roots.find((element) => element.id == newRoot).note

    newChord["root"] = {"id":newRoot, "note":newRootNote}
    newChord["printChord"] = `${newChord.root.note} ${newChord.triad}`
    
    return newChord;
}

function lastChordFormatting(chord){
    if (chord.root == undefined){
        return chord[0]
    } else {
        return chord
    }
}

// fix this
function secondaryChord(rootChord, lastChord, flavor){
     let chordOptionsDom = [
        {"interval":"7",
        "triad":"maj",
        "route":"major",
        "scaleDegree": 5},
        {"interval":"7",
        "triad":"maj",
        "route":"minor",
        "scaleDegree": 5},
    ]

    let chordOptionsSub = [
        {"interval":"2",
        "triad":"min",
        "route":"major",
        "scaleDegree": 2},
        {"interval":"2",
        "triad":"dim",
        "route":"minor",
        "scaleDegree": 2},
        {"interval":"5",
        "triad":"major",
        "route":"major",
        "scaleDegree": 4},
        {"interval":"5",
        "triad":"minor",
        "route":"minor",
        "scaleDegree": 4}
    ]

    let newChordDom = chordOptionsDom[getRandomInt(chordOptionsDom.length)]
    
    let newRootDom = Math.abs(wrapOctave(lastChordFormatting(lastChord).root.id+parseInt(newChordDom.interval)))
    let newRootNoteDom = Roots.find((element) => element.id == newRootDom).note

    newChordDom["root"] = {"id":newRootDom, "note":newRootNoteDom}
    newChordDom["printChord"] = `${newChordDom.root.note} ${newChordDom.triad}`

    let newChordSub = chordOptionsSub[getRandomInt(chordOptionsSub.length)]
    let newRootSub = Math.abs(wrapOctave(lastChordFormatting(lastChord).root.id+parseInt(newChordSub.interval)))
    let newRootNoteSub = Roots.find((element) => element.id == newRootSub).note

    newChordSub["root"] = {"id":newRootSub, "note":newRootNoteSub}
    newChordSub["printChord"] = `${newChordSub.root.note} ${newChordSub.triad}`
    
    return [newChordDom, newChordSub];
}

function getScaleDegree(root, triad, route){
    if (route == 'major'){
        switch(triad) {
            case 'maj':
                return 1
            case 'min':
                return 6
            case 'dim':
                return 1
            default:
                return "something  fucked up!"
            }
    } else {
        switch(triad) {
            case 'min':
                return 1
            case 'maj':
                return 3
            case 'dim':
                return 6
            default:
                return "something  fucked up!"
            }
    }
}

export function tonalProgressionCreator(progression, flavor){
    let chordList = []
    let currentChord;
    let nextChord;

    let firstChord = {
        "root":getRandomRoot(Roots),
        "triad":getRandomTriad(),
        "route":selectFlavor(),
    };

    firstChord["scaleDegree"] = getScaleDegree(firstChord.root, firstChord.triad, firstChord.route)
    firstChord["printChord"] = `${firstChord.root.note} ${firstChord.triad}`
    chordList.push(firstChord.printChord)
    currentChord=firstChord

    let flavorRoute = ""

    for (let i = 0; i < progression.length; i ++){
        switch (progression[i]) {
            case 't':
                nextChord = tonicChord(firstChord, currentChord, flavorRoute)
                chordList.push(nextChord.printChord);
                currentChord=nextChord
                break;
            case 's':
                nextChord = subdomChord(firstChord, currentChord, flavorRoute)
                chordList.push(nextChord.printChord);
                currentChord=nextChord
                break;
            case 'd':
                nextChord = domChord(firstChord, currentChord, flavorRoute)
                for (let i = 0; i < nextChord.length; i++) {
                    chordList.push(nextChord[i].printChord);
                }
                currentChord=nextChord[0]
                break;
            case 'm':
                nextChord = medChord(firstChord, currentChord, flavorRoute)
                chordList.push(nextChord.printChord);
                currentChord=nextChord
                break;
            case '2':
                let lastChord = nextChord
                nextChord = secondaryChord(firstChord, lastChord, flavorRoute)
                for (let i = 0; i < nextChord.length; i++) {
                    chordList.push(nextChord[i].printChord);
                }
                currentChord=nextChord[0]
                break;
            default:
                console.log('whoops! error occurred')
        }
    }

    return chordList.reverse()

}