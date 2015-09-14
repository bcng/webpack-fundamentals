console.log('app loaded');

var angular = require('angular');
var uiRouter = require('angular-ui-router');
var app = angular.module('app', [uiRouter]);


require('./routes')(app);
require('./features/home/')(app);
require('./features/stylists/');