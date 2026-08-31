import  { Roots, getRandomInt, getRandomRoot,getRandomInterval, getRandomChord, getNextRoot, getRandomTriad, selectFlavor, wrapOctave} from "./helper.mjs"

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





function createTonalProgressionCode(num) {
    let progressionStr = "t"
    let currentChord = "t"
    let subChance, domChance, medChance, tonicChance, secondaryChance;
   
    for (let i = 0; i < num; i++){
        subChance = getRandomInt(5)+30;
        domChance = getRandomInt(5)+30;
        medChance = getRandomInt(5)+15;
        secondaryChance = getRandomInt(100)+5
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

console.log(tonalProgressionCreator(createTonalProgressionCode(4)))

function tonicChord(rootChord, lastChord){

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

    // console.log(('new root', wrapOctave(Math.abs(parseInt(rootChord.root.id)+parseInt(newChord.interval)))))
    console.log('new root', newRoot)

    // need to get the note based on the newRoot value -> searching array of roots for object that has that as the ID, then returning the text value

    // return interval, determine root of new chord
    
    return newChord;
}

function subdomChord(rootChord, lastChord){
    let newChord = {
        "root":"",
        "triad":"",
        "route":""
    };
    
    let chordOptions = [
        {"interval":"",
        "triad":"",
        "route":""},
        {"interval":"",
        "triad":"",
        "route":""},
        {"interval":"",
        "triad":"",
        "route":""},
        {"interval":"",
        "triad":"",
        "route":""},
        {"interval":"",
        "triad":"",
        "route":""},
        {"interval":"",
        "triad":"",
        "route":""}
    ]

    // chord dictionary
        // interval from root chord, Tonality, Route
        // Major Route
            // 5, Major
            // 2, Minor
        // Minor Route
            // 5, Minor
            // -4, Major
            // 2, Diminished

    // select chord

    // return interval, determine root of new chord
    
    return newChord;
}

function domChord(rootChord, lastChord){
    let newChord = {
        "root":"",
        "triad":"",
        "route":""
    };


    let chordOptions = [
        {"interval":"",
        "triad":"",
        "route":""},
        {"interval":"",
        "triad":"",
        "route":""},
        {"interval":"",
        "triad":"",
        "route":""},
        {"interval":"",
        "triad":"",
        "route":""},
        {"interval":"",
        "triad":"",
        "route":""},
        {"interval":"",
        "triad":"",
        "route":""}
    ]
    // has option to return extra chord - 1 6/4 chord before V
    
    // chord dictionary
        // interval from root chord, Tonality, Route
        // Major Route
            // 7, Major
            // 1, Major in 2nd inv (optional, before 7 Major)
            // 1, Minor in 2nd inv (optional, before 7 Major)
            // 11, diminished
            // 1, Major
        // Minor Route
            // 7, Major
            // 10, Major
            // 8, Major
            // 11, diminished

    // select chord

    // return interval, determine root of new chord
    
    return newChord;
}

function medChord(rootChord, lastChord){
    let newChord = {
        "root":"",
        "triad":"",
        "route":""
    };

    let chordOptions = [
        {"interval":"",
        "triad":"",
        "route":""},
        {"interval":"",
        "triad":"",
        "route":""},
        {"interval":"",
        "triad":"",
        "route":""},
        {"interval":"",
        "triad":"",
        "route":""},
        {"interval":"",
        "triad":"",
        "route":""},
        {"interval":"",
        "triad":"",
        "route":""}
    ]
    
    // chord dictionary
        // interval from root chord, Tonality, Route
        // 4, minor

    // return interval, determine root of new chord
    
    return newChord;
}

function secondaryChord(rootChord, lastChord){
    let newChord = {
        "root":"",
        "triad":"",
        "route":""
    };

    // base on last root

    let chordOptions = [
        {"interval":"",
        "triad":"",
        "route":""},
        {"interval":"",
        "triad":"",
        "route":""},
        {"interval":"",
        "triad":"",
        "route":""},
        {"interval":"",
        "triad":"",
        "route":""},
        {"interval":"",
        "triad":"",
        "route":""},
        {"interval":"",
        "triad":"",
        "route":""}
    ]

    // chance to just be dominant vs sub and dom
    
    // chord dictionary
        // 2 (optional, precedes 5) 
            // 2, minor
            // 2, diminished
            // b6, major
        // V (req'd)
            // 7, major
            // 11, diminished
            // b2, major
            // optional -> 1 6/4 into V
            // other optional -> N6 (bII in third inv)

    // return interval, determine root of new chord
    
    return newChord;
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

function tonalProgressionCreator(progression){
    let chordList = []
    let currentChord;
    let nextChord;

    let firstChord = {
        "root":getRandomRoot(Roots),
        "triad":getRandomTriad(),
        "route":selectFlavor(),
    };

    firstChord["scaleDegree"] = getScaleDegree(firstChord.root, firstChord.triad, firstChord.route)
    chordList.push(firstChord)
    currentChord=firstChord

    console.log('first chord: ', firstChord)
    // console.log(progression)

    // based on first chord
        // symbol determines direction - m d s 2
        // if symbol is m, d, or s
            // based on route and tonic chord, pick chord from same route (chance to not)
            // if dominant
                // chance to be Neapolitan 6, in which case it goes to V7, to bVI
            // add chord to list, set as current chord
        // if symbol is 2
            // based on route and current Chord
            // 

    for (let i = 0; i < progression.length; i ++){
        switch (progression[i]) {
            case 't':
                console.log('t')
                nextChord = tonicChord(firstChord, currentChord)
                // console.log(nextChord)
                chordList.push(nextChord);
                currentChord=nextChord
                break;
            case 's':
                // console.log('s')
                break;
            case 'd':
                // console.log('d')
                break;
            case 'm':
                // console.log('m')
                break;
            case '2':
                // console.log('2')
                break;
            default:
                console.log('whoops! error occurred')
        }
    }

    return chordList

}