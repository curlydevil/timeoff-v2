(function () {
    'use strict';
    angular.module('common.services').directive('enterPress', enterPressDirective);

    function enterPressDirective() {
        var ENTER_KEY_CODE = 13;

        return {
            restrict: 'A',
            link: function (scope, elm, attrs) {
                elm.bind('keydown', function (event) {
                    if (event && event.keyCode === ENTER_KEY_CODE) {
                        scope.$apply(attrs.enterPress);
                    }
                });
            }
        };
    }
}());
