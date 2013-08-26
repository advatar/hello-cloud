
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Hello Cloud', hello: 'Hello from ESP' });
};