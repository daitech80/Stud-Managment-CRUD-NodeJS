const express = require('express');
const conntroller = require('../controller/conntroller')
const route = express.Router()
const services = require('../services/render')


route.get('/', services.homeRoutes);
route.get('/addstud', services.addstud);
route.get('/updatestud', services.updatestud);

// API
route.post('/api/studs', conntroller.create);
route.get('/api/studs', conntroller.find);
route.put('/api/studs/:id', conntroller.update);
route.delete('/api/studs/:id', conntroller.delete);


module.exports=route