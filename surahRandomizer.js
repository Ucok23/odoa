const { data: quran } = require('./data/quran.json');

const [ minSurah, maxSurah ] = [1, 114]
const [ minAyah, maxAyah ] = [ 1, (noOfSurah) => quran[noOfSurah].numberOfVerses ];

const randomSurah = () => {
    return Math.floor(Math.random() * maxSurah) + minSurah;
}

const randomAyah = (noOfSurah) => {
    return Math.floor(Math.random() * maxAyah(noOfSurah)) + minAyah;
}

class SurahRandomizer {
    static getRandomAyahAllSurah(req, res) {
        let noOfSurah = randomSurah() - 1;
        const surah = quran[noOfSurah];
        const noAyah = randomAyah(noOfSurah)
        const data = {
            nameOfSurah: surah.name,
            numberOfSurah: surah.number,
            numberOfAyah: noAyah,
            ayah: surah.verses[noAyah - 1]
        };
        return res.status(200).send({
            code: 200,
            status: 'OK',
            message: 'Success getting random ayah from all surah',
            data
        })
    }
}

module.exports = SurahRandomizer;