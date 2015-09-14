module.exports = function (app) {
    app.controller('homeController', function ($scope, peopleService) {
        $scope.test = "this is a motherfucking of the home view";
        $scope.people = peopleService.people;
    });
};