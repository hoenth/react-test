var keyMirror = require('keymirror');

var APIRoot = 'http://localhost:3000';

var APIVersion = "/v1"

module.exports = {
  APIEndpoints: {
    LOGIN:        APIRoot + APIVersion + "/login",
    REGISTRATION: APIRoot + APIVersion + "/users",
    STORIES       APIRoot + APIVersion + "/stories"
  },

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  ActionTypes: keyMirror({
    // Session
    
    LOGIN_REQUEST: null, 
    LOGIN_RESPONSE: null

    // Routes
    REDIRECT: null,

    LOAD_STORIES: null,
    RECEIVE_STORIES: null,
    LOAD_STORY: null,
    RECIEVE_STORY: null,
    CREATE_STORY: null,
    RECEIVE_CREATE_STORY: null
  })

};

