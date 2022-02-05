const { quran, randomSurah, randomAyah } = require('./util');

const getRandAyah = () => {
    let noOfSurah = randomSurah() - 1;
    const surah = quran[noOfSurah];
    const noAyah = randomAyah(noOfSurah);
    return [
        surah.name,
        surah.number,
        surah.numberOfVerses,
        noAyah,
        surah.verses[noAyah - 1]
    ];
}

module.exports = getRandAyah