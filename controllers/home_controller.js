module.exports.home = function(req, res){
    console.log(req.cookies);
    // res.end(`<h1> Asgar is making ans express app </h1>`);
    return res.render('home',{
        title: 'My Home'
    });
}