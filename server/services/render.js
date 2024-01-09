const axios = require('axios')
const services = require('../services/render')
exports.homeRoutes = (req, res) => {
    // get  the request to api/users
    axios.get('http://localhost:3000/api/studs')
    .then(function(response){

        res.render('index', {studs: response.data})
    })
    .catch(err => {
       res.send(err);
    })
   
}

exports.dashboard = (req, res) => {
    res.render('dashboard');
}

exports.addstud = (req, res) => {
    res.render('addstud');
}
// update
exports.updatestud = (req, res) => {
    axios.get('http://localhost:3000/api/studs', {params : {id: req.query.id}})
    .then(function(studdata){
        res.render("updatestud", {stud: studdata.data})
    })
   .catch(err => {
    res.send(err);
   })
}

