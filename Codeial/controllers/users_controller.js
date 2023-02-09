module.exports.profile = function(req, res){
   return res.render('users',{
    title:"Users",
    hello:"Hello from user controller"
   })
}
