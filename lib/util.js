const { data: quran } = require('../data/quran.json');

const [ minSurah, maxSurah ] = [1, 114]
const [ minAyah, maxAyah ] = [ 1, (noOfSurah) => quran[noOfSurah].numberOfVerses ];

const randomSurah = () => {
    return Math.floor(Math.random() * maxSurah) + minSurah;
}

const randomAyah = (noOfSurah) => {
    return Math.floor(Math.random() * maxAyah(noOfSurah)) + minAyah;
}

module.exports = {quran, randomSurah, randomAyah};