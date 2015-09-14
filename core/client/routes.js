module.exports = function (app) {
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    main: {
                        template: require('./home/home.template.html'),
                        controller: 'homeController'
                    },
                }
            });
    });
};