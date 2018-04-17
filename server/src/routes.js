const SearchController = require('./controllers/SearchController')

module.exports = (app) => {
  app.get('/search', SearchController.search)
  // app.get('/all', (req, res) => SearchController.all)
  app.get('/', SearchController.index)
  app.get('*', (req, res) => res.redirect('/'))
}
