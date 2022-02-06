const Ayah = require('./models/ayah');
const getRandAyah = require('./lib/_ayahUtil')
const juzData = require('./lib/_juzResolver')

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

    static getJuz(req, res) {
        const { juz } = req.params;
        const data = juzData(parseInt(juz));

        if (juz < 1 || juz > 30) {
            return res.status(404).send({
                code: 404,
                status: 'Not Found.',
                message: `Surah "${surah}" is not found.`,
                data: {}
            })
        }

        return res.status(200).send({
            code: 200,
            status: 'OK.',
            message: 'Success fetching juz.',
            data
        })

    }
}

module.exports = SurahRandomizer;