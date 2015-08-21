(function () {
    'use strict';
    module.exports = function () {
        var root = './';
        var build = './build/';
        var tmp = './tmp/';
        var clientApp = root + 'src/';
        var index = root + 'index.html';

        var config = {
            alljs: [
                clientApp + '**/*.js',
                clientApp + '*.js'
            ],
            build: build,
            clientApp: clientApp,
            index: index,
            root: root,
            tmp: tmp,
        };

        return config;
    };
}());
