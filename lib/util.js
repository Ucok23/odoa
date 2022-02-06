const { data: quran } = require('../data/quran.json');

const [ minSurah, maxSurah ] = [1, 114]
const [ minAyah, maxAyah ] = [ 1, (noOfSurah) => quran[noOfSurah].numberOfVerses ];

const randomSurah = (max = maxSurah, min = minSurah) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomAyah = (_noOfSurah, max = null, min = null) => {
    const _max = max ? max : maxAyah(_noOfSurah)
    const _min = min ? min : minAyah
    return Math.floor(Math.random() * (_max - _min + 1)) + _min;
}

module.exports = {quran, randomSurah, randomAyah};