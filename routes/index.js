
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Hello Cloud', msg: 'This is a message from the clouds' });
};