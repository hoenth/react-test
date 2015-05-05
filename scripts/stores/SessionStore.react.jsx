var SmallAppDispatcher = require('../dispatcher/SmallAppDispatcher.js');
var SmallConstants = require('../constants/SmallConstants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = SmallConstants.ActionTypes;
var CHANGE_EVENT = 'change';

// load an access token from the session storage

var _accessToken = sessionStorage.getItem('accessToken');
var _email = sessionStorage.getItem('email');
var _errors = [];

car SessionStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  }, 

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  isLoggedIn: function() {
    return _accessToken ? true : false;
  },

  createSession: function(accessToken, email) {
    _accessToken = accessToken;
    _email = email;
    SessionStorage.setItem('accessToken', accessToken);
    SessionStorage.setItem('email', email)
  }

  destroySession: function() {
    _accessToken = null;
    _email = null;
    SessionStorage.removeItem('accessToken');
    SessionStorage.removeItem('email')
  }

  getEmail: function() {
    return _email;
  },

  getErrors: function() {
    return _errors;
  }
});

SessionStore.dispatchToken = SmallAppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
    case ActionTypes.LOGIN_RESPONSE:
      if (action.json && action.json.access_token) {
        createSession(action.json.access_token, action.json.email)
      }

      if (action.errors) {
        _errors = action.errors;
      }

      SessionStore.emitChange();
      break;

    case ActionTypes.LOGOUT:
      destroySession();

      SessionStore.emitChange();
      break;

    default:
  }

  return true;
});

module.exports = SessionStore