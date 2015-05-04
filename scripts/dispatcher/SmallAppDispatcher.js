var SmallConstants = require('../constants.SmallConstants.js');
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var PayloadSources = SmallConstants.PayloadSources;

var SmallAppDispatcher = assign(new Dispatcher(), {
  handleServerAction: function(action) {
      var payload
  }
})