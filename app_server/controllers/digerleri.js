const hakkinda=function(req, res, next) {
  res.render('hakkinda', { title: 'Hakkında', footer:'Nazmi AKSOY' });
}

module.exports={

	hakkinda
}
