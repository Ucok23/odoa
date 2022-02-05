const Ayah = require('./models/ayah');
const getRandAyah = require('./lib/_ayahUtil')

class SurahRandomizer {
    static getRandomAyahAllSurah(req, res) {
        let data = new Ayah(...getRandAyah());
        return res.status(200).send({
            code: 200,
            status: 'OK',
            message: 'Success getting random ayah from all surah',
            data: data
        })
    }
}

module.exports = SurahRandomizer;