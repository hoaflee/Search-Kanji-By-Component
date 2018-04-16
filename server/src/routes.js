const SearchController = require('./controllers/SearchController')

module.exports = (app) => {
  app.get('/search', SearchController.search)
  // app.get('/all', (req, res) => SearchController.all)
  app.get('/', (req, res) => res.send('Ahihi nani yatterun no!'))
  app.get('*', (req, res) => res.redirect('/'))
}
