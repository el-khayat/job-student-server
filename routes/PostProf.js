const {PostProf,User} = require("../models");
const  router = require('express').Router();



    
router

.get("/postProf", (req, res)=>{
        PostProf.findAll({ 
           
            include: [User]
        }).then(Postuser=>{

            res.json(Postuser);
        }).catch(err => {
            res.json(err);
        });
    })
.get("/PostProf/:id", (req, res)=>{
    PostProf.findAll({
            include: [User],
         where : {userId : req.params.id  }
        }).then(Postuser=>{

            res.json(Postuser);
        }).catch(err => {
            res.json(err);
        })
    })

.delete("/PostProf/:id", (req, res)=>{
    PostProf.destroy({
        include: [User],
        where : {id : req.params.id  }
       }).then(deletepost=>{
       
           res.json(deletepost);
       }).catch(err => {
           res.json(err);
       })
    })


.put("/PostProf/:id", (req, res)=>{
    console.log(req.body);
    PostProf.update(
        { commentaire : req.body.commentaire},
        { where : {id : req.params.id  }    }

    ).then(updatePostProf=>{

        res.json(updatePostProf);
    }).catch(err => {
        res.json(err);
    })
})
.post('/PostProf',async(req,res)=>{

    let body = req.body ;
    console.log(body);    
    const post = PostProf.build(body);
    await post.save()
    .then((post)=>{
        console.log('post et cree');
        res.status(200).json(post);
        return post ;
    })
    .catch((err)=>{
        if(err)
        res.json(err)
        console.log("post n'est pas cree\n"+err);
    })
    
})
console.log(" welcome  "),
module.exports = router ;