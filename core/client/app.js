console.log('app loaded');

var angular = require('angular');
var uiRouter = require('angular-ui-router');

var stylistsController = require('./features/stylists/stylists.controller.es6');

var app = angular.module('app', [uiRouter])
    .controller('stylistsController', stylistsController);


require('./features/home/')(app);
require('./routes')(app);

