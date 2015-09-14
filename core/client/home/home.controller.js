module.exports = function (app) {
    app.controller('homeController', function ($scope) {
        $scope.test = "this is a motherfucking of the home view";
    });
};