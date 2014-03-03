'use strict';

//Articles service used for articles REST endpoint
angular.module('chatapp.services.users', []).factory('User', ['$resource', function($resource) {
    return $resource('user/:userId', {
        messageId: '@_id'
    }, {
        search: {
            method: 'PUT'
        }
    });
  }]);

