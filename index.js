const roundNumber = require('./roundNumber')
const numberArrayToString = require('./numberArrayToString')
const arrayAverage = require('./arrayAverage')

module.exports = (arr) => {
    return Math.min(...arr);
  }