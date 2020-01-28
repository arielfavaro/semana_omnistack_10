const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// routes.use((req, res, next) => {
//     console.log('Time: %d', Date.now());
//     next();
// });
// routes.use((err, req, res, next) => {
//     res.status(500).send('deu erro');
// });

// routes.get('/', (request, response) => {
//     return response.json("hello");
// });

// routes.delete('/users/:id', (request, response) => {
//     console.log(request.params);
//     return response.json({"deleted": true});
// });

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;