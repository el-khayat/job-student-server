const {Post,User} = require("../models");
const  router = require('express').Router();



    
router

.get("/post", (req, res)=>{
        Post.findAll({ 
           
            include: [User]
        }).then(Postuser=>{

            res.json(Postuser);
        }).catch(err => {
            res.json(err);
        });
    })
.get("/post/:id", (req, res)=>{
        Post.findAll({
            include: [User],
            where : {userId : req.params.id  }
        }).then(Postuser=>{

            res.json(Postuser);
        }).catch(err => {
            res.json(err);
        })
    })

.delete("/Post/:id", (req, res)=>{
    Post.destroy({
        include: [User],
        where : {id : req.params.id  }
       }).then(deletepost=>{
       
           res.json(deletepost);
       }).catch(err => {
           res.json(err);
       })
    })


.put("/Post/:id", (req, res)=>{
    console.log(req.body);
    Post.update(
        { commentaire : req.body.commentaire},
        { where : {id : req.params.id  }    }

    ).then(updatePostProf=>{

        res.json(updatePostProf);
    }).catch(err => {
        res.json(err);
    })
})
.post('/post',async(req,res)=>{

    let body = req.body ;
    console.log(body);    
    const post = Post.build(body);
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