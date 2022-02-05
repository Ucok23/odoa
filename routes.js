require('dotenv').config()

const { Router } = require('express')
const { caching } = require('./cache')
const SurahRandomizer = require('./surahRandomizer')
const JumlahAyah = require('./quiz/jumlahAyah');

const router = Router()

// root router
router.get('/', SurahRandomizer.getRandomAyahAllSurah)
router.get('/jumlah-ayah', JumlahAyah.quiz)



// fallback router
router.all('*', (req, res) => res.status(404).send({
    code: 404,
    status: 'Not Found.',
    message: `Resource "${req.url}" is not found.`
}))

module.exports = router