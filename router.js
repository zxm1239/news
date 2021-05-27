let express = require ('express')
let News = require('./news')
let Lunbotu = require('./lunbotu')
let Comments = require('./comments')
let Category = require('./category')
let Image = require('./image')
let ImageInfo =require('./imageInfo')
let Thumimage =require('./thumimage')
let Desc =require('./desc')
let GoodsInfo = require('./goodsInfo')
let Shopcarlist = require('./shopcarlist')
let router = express.Router()
    router.get('/home/news',function(req,res){
        res.setHeader("Access-Control-Allow-Origin","*")
        res.setHeader("Access-Control-Allow-Headers","*")
        News.find(function(err,students){
            if (err){
                return res.status(500).send('server-error')
            }
            res.end(students)
        })
    })



    router.get('/getLunbo',function(req,res){
        res.setHeader("Access-Control-Allow-Origin","*")
        res.setHeader("Access-Control-Allow-Headers","*")
        Lunbotu.find(function(err,lunbotu){
            if (err){
                return res.status(500).send('server-error')
            }
            res.end(lunbotu)
        })
    })
    router.get('/comments',function(req,res){
        res.setHeader("Access-Control-Allow-Origin","*")
        res.setHeader("Access-Control-Allow-Headers","*")
        Comments.find(function(err,comments){
            if (err){
                return res.status(500).send('server-error')
            }
            res.end(comments)
        })
    })
    router.get('/getimgcategory',function(req,res){
        res.setHeader("Access-Control-Allow-Origin","*")
        res.setHeader("Access-Control-Allow-Headers","*")
        Category.find(function(err,imgcategory){
            if (err){
                return res.status(500).send('server-error')
            }
            res.end(imgcategory)
        })
    })
    router.get('/getimages',function(req,res){
        res.setHeader("Access-Control-Allow-Origin","*")
        res.setHeader("Access-Control-Allow-Headers","*")
        Image.find(function(err,images){
            if (err){
                return res.status(500).send('server-error')
            }
            res.end(images)
        })
    })
    router.get('/getimageInfo',function(req,res){
        res.setHeader("Access-Control-Allow-Origin","*")
        res.setHeader("Access-Control-Allow-Headers","*")
        ImageInfo.find(function(err,imageInfo){
            if (err){
                return res.status(500).send('server-error')
            }
            res.end(imageInfo)
        })
    })
    router.get('/getthumimage',function(req,res){
        res.setHeader("Access-Control-Allow-Origin","*")
        res.setHeader("Access-Control-Allow-Headers","*")
        Thumimage.find(req.query.id,function(err,imageInfo){
            if (err){
                return res.status(500).send('server-error')
            }
            res.end(imageInfo)
        })
    })
    router.get('/getdesc',function(req,res){
        res.setHeader("Access-Control-Allow-Origin","*")
        res.setHeader("Access-Control-Allow-Headers","*")
        Desc.find(function(err,desc){
            if (err){
                return res.status(500).send('server-error')
            }
            res.end(desc)
        })
    })
    router.get('/getthumimages',function(req,res){
        res.setHeader("Access-Control-Allow-Origin","*")
        res.setHeader("Access-Control-Allow-Headers","*")
        Thumimage.find(req.query.id,function(err,imageInfo){
            if (err){
                return res.status(500).send('server-error')
            }
            res.end(imageInfo)
        })
    })
    router.get('/goods/getinfo',function(req,res){
        res.setHeader("Access-Control-Allow-Origin","*")
        res.setHeader("Access-Control-Allow-Headers","*")
        GoodsInfo.find(req.query.id,function(err,imageInfo){
            if (err){
                return res.status(500).send('server-error')
            }
            res.end(imageInfo)
        })
    })
    router.get('/goods/getshopcarlist',function(req,res){
        res.setHeader("Access-Control-Allow-Origin","*")
        res.setHeader("Access-Control-Allow-Headers","*")
        Shopcarlist.find(req.query.id,function(err,shopcarlist){
            if (err){
                return res.status(500).send('server-error')
            }
            res.end(shopcarlist)
        })
    })
module.exports= router