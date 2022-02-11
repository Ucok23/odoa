const Ayah = require('./models/ayah');
const getRandAyah = require('./lib/_ayahUtil')
const getRandJuzData = require('./lib/_juzUtil')

class SurahRandomizer {
    static getRandomAyahAllSurah(req, res) {
        let data = new Ayah(...getRandAyah());
        return res.status(200).send({
            code: 200,
            status: 'OK',
            message: 'Success getting random ayah from all surah',
            resources: data
        })
    }

    static getRandomFromJuz(req, res) {
        const { juz } = req.params;
        const data = new Ayah(...getRandJuzData(parseInt(juz)));

        if (juz < 1 || juz > 30) {
            return res.status(404).send({
                code: 404,
                status: 'Not Found.',
                message: `Juz "${juz}" must between 1 to 30.`,
                resources: {}
            })
        }

        return res.status(200).send({
            code: 200,
            status: 'OK.',
            message: `Success fetching ayah from juz "${juz}".`,
            resources: data
        })

    }
}

module.exports = SurahRandomizer;