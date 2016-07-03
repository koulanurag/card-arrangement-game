//handling routes
//var config  = require('./config');

module.exports = {

  index: function(req, res) {
      
        res.sendFile(__dirname + '/game.html');
  }

}