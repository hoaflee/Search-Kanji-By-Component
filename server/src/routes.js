const SearchController = require('./controllers/SearchController')
const ResourceController = require('./controllers/ResourceController')

module.exports = (app) => {
  app.get('/admin/api/search', SearchController.search)
  app.get('/admin/api/components', SearchController.components)
  app.get('/admin/api/comps', ResourceController.components)
  app.get('/admin/api/comps/grid', ResourceController.compsGrid)
  app.get('/admin/api/gaijis', ResourceController.gaijis)
  app.get('/admin/api/gaijis/grid', ResourceController.gaijiGrid)  
  // app.get('/admin/api/gaijis/grid', ResourceController.gaijisGrid)
  // app.get('/all', (req, res) => SearchController.all)
  // app.get('/', SearchController.index)
  // app.get('*', (req, res) => res.redirect('/'))  
}
