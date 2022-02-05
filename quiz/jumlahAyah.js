const { quran, randomSurah} = require('../lib/util');

const jmlAyah = (noOfSurah) => {
    return quran[noOfSurah].numberOfVerses
}

class JumlahAyah {
    static quiz(req, res) {
        return res.status(200).send({
            code: 200
        });
    }
}

module.exports = JumlahAyah