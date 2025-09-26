const process = require('process');
const utility = require('./scripts/helper')
const specific = require('./scripts/specific')

const processRoute = process.argv[2]
const inputName = process.argv[3]

if (processRoute=="a"){
    console.log('route a...')

} else if (processRoute=="b") {
    console.log('route b...')
} else {
    console.log('please indicate a route')
}
