var request = require('request')

module.exports = function(req,res){  
  request.post('http://localhost:4000/search').form(req.body).pipe(res)
} 
 
