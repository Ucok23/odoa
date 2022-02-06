const { data: juz } = require('../data/juz.json')
const { quran, randomSurah, randomAyah } = require('./util');

const getRandJuzData = (_inputJuz) => {
    const inputJuz = juz[_inputJuz - 1];
    const startSurah = inputJuz.start.index - 1
    const startAyah = inputJuz.start.verse - 1
    const endSurah = inputJuz.end.index - 1
    const endAyah = inputJuz.end.verse - 1

    const noOfSurah = randomSurah(max = endSurah, min = startSurah)
    const surah = quran[noOfSurah];
    
    let noAyah;
    if (noOfSurah === startSurah) {
        noAyah = randomAyah(noOfSurah, max=null, min=startAyah);
    }
    else if (noOfSurah === endSurah) {
        noAyah = randomAyah(noOfSurah, max=endAyah, min=null);
    }
    else {
        noAyah = randomAyah(noOfSurah);
    }

    return [
        surah.name,
        surah.number,
        surah.numberOfVerses,
        noAyah,
        surah.verses[noAyah - 1]
    ];
}

module.exports = getRandJuzData