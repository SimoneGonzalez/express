var express = require('express');
var router = express.Router();

router.get('/:topping/:qty', function(req, res) {
  var obj = {
    qty: req.query.qty || 1,
    topping: req.query.topping || 'cheese'
  };
  obj.title = 'Pizza Shop';

  res.render('templates/pizza', obj);
});

module.exports = router;