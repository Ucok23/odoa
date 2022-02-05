const { quran, randomSurah, randomAyah } = require('./lib/util');

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