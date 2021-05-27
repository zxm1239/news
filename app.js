
let express = require ('express')

let router = require('./router')

let bodyParser = require('body-parser')

let app = express()

app.use('/node_modules',express.static('./node_modules/'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// 把路由容器挂载到 app 服务中
app.use(router)

app.listen(4000,function(){
   console.log('服务开启');
})

module.exports = app