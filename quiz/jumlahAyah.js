const { quran, randomSurah} = require('../lib/util');
 
const jmlAyah = (noOfSurah) => {
    return quran[noOfSurah - 1].numberOfVerses
}

class JumlahAyah {
    static quiz(req, res) {
        let rand = randomSurah();
        
        return res.status(200).send({
            code: jmlAyah(1),
            message: this.foo()
        });
    }
}

module.exports = JumlahAyah