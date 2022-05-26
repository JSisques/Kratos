const pkgJson = require('../../../package.json')

module.exports = {

    async getAppData(req, res) {
        
        return res.json(pkgJson)

    }
}