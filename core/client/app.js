console.log('app loaded');

var angular = require('angular');
var uiRouter = require('angular-ui-router');

var app = angular.module('app', [uiRouter]);

require('./home/home.controller')(app);
require('./services/people.service.js')(app);
require('./routes')(app);

