const { data: quran } = require('./data/quran.json');

const [ maxSurah, minSurah ] = [1, 114]
const [ minAyah, maxAyah ] = [ 1, (noOfSurah) => quran[noOfSurah - 1].numberOfVerses ];

class SurahRandomizer {
    randomSurah = () => {
        return Math.floor(Math.random() * maxSurah + 1) + minSurah;
    }

    static getRandomAyahAllSurah(req, res) {
        return quran[randomSurah() - 1];
    }
}