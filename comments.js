let dbPath = './data.json'

let fs = require('fs')

exports.find = function(callback){
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
          return callback(err)
        }       
         callback(null,JSON.stringify(JSON.parse(data).pinglun))
      })
}