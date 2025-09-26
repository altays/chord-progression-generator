const fs = require('node:fs/promises');

async function readwrite (filePath, outputFileName) {
 
    try {
        const data = await fs.readFile(filePath, { encoding: 'utf8' });
        await fs.writeFile(outputFileName,data);
    } 
    catch (error){
        console.error(error)
    }
}

// starting chord
    // variables
        // root
        // quality - aug, minor, dim, aug

// travel chord
    // variables
        // root
        // quality
        // motion
    // logic
        // 

// resolving chord
    // variables
        // root
        // quality
        // motion
    // logic

// root note
    // 0 is C, 11 is B
    // use modulo to keep number between 0 and 11


// process
    // determine start chord
        // treat as travel chord to determine next chord
    // determine next chord - if travel, do travel; if res, do res
    // save chord prgression to txt file, save txt file

module.exports = { readwrite }
