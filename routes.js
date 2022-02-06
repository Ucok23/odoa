require('dotenv').config()

const { Router } = require('express')
const { caching } = require('./cache')
const SurahRandomizer = require('./surahRandomizer')
const JumlahAyah = require('./quiz/jumlahAyah');

const router = Router()

// root router: Random ayah from all quran
router.get('/', SurahRandomizer.getRandomAyahAllSurah)

// random ayah with parameter juz
router.get('/juz/:juz', SurahRandomizer.getRandomFromJuz)

// quiz router
router.get('/quiz/jumlah-ayah', JumlahAyah.quiz)

// fallback router
router.all('*', (req, res) => res.status(404).send({
    code: 404,
    status: 'Not Found.',
    message: `Resource "${req.url}" is not found.`
}))

module.exports = router