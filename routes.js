require('dotenv').config()

const { Router } = require('express')
const { caching } = require('./cache')
const SurahRandomizer = require('./surahRandomizer')

const router = Router()

// root router
router.get('/', caching, SurahRandomizer.getRandomAyahAllSurah)


// fallback router
router.all('*', (req, res) => res.status(404).send({
    code: 404,
    status: 'Not Found.',
    message: `Resource "${req.url}" is not found.`
}))

module.exports = router