const {Avi,User} = require("../models");
const  router = require('express').Router();



    
router

.get("/avi/:userId", (req, res)=>{
        Avi.findAll({ 
           
            where : {to : req.params.userId  },
            include:[User]
            // include:[{model: User, as: 'userId'}]

        }).then(avisuser=>{
            res.json(avisuser);
        }).catch(err => {
            res.json(err);
        });
    })

    

.delete("/avi/:id", (req, res)=>{
    Avi.destroy({
        include: [User],
        where : {id : req.params.id  }
       }).then(avi=>{
           res.json(avi);
       }).catch(err => {
           res.json(err);
       })
    })


.post('/avi',async(req,res)=>{

    let body = req.body ;
    console.log(body);    
    const avi = Avi.build(body);
    await avi.save()
    .then((avi)=>{
        console.log('avi et ajouter');
        res.status(200).json(avi);
        return avi ;
    })
    .catch((err)=>{
        if(err)
        res.json(err)
        console.log("avi n'est pas cree\n"+err);
    })
    
})

console.log(" welcome  "),
module.exports = router ;