var Stud = require('../models/model');

// create new student
exports.create = (req, res) => {
    // validate request
    if(!req.body){
      res.status(400).alte({ message : "Content can not be emtpy!"});
       return;
    }
   

    // new student
    const student = new Stud({
        name: req.body.name,
        age: req.body.age,
        grade: req.body.grade,
        gender: req.body.gender,
        status: req.body.status
    })

    // save student in the mangodb database
    student
       .save(student)
        .then(data => {
            //res.send(data)
            res.redirect('/addstud');
        })
        .catch(err => {
            res.status(400).send({
                message : err.message || "Some error occurred"
            });
        });

}

//find  by id
exports.find = (req, res)=>{
    if(req.query.id){
const id = req.query.id; 

Stud.findById(id)
.then(data => {
    if(!data){
        res.status(302).send({message: "not found student with id" + id})
    }else{
        res.send(data)
    }
})
.catch(err => {
    res.status(400).send({message: "error retrieving student with id " + id})
})
    }else{
        Stud.find()
        .then(student => {
            res.send(student)
        })
        .catch(err => {
            res.status(400).send({message: err.message || "error have  user info"})
        })
    
    }
  
}
// Update student by student id
exports.update = (req, res)=>{
    if(!req.body){
        return res
        .status(300)
        .send({message: "can not be empty"})
    }
    const id = req.params.id;
    Stud.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(302).send({message: `not update student the ${id}.not found student`})

        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(400).send({message: " info error"})
    }) 
}

// Delete student
exports.delete = (req, res)=>{
    const id = req.params.id;
    Stud.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(302).send({message: `can not delete the ${id}.wrong id`})

        }else{
            res.send({
           message: "student was deleted successfully"
            })
        }
    })
    .catch(err=>{
        res.status(400).send({
            message: "can not delete student with id=" + id
        })
    }) 
}




