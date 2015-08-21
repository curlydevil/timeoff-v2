(function () {
    'use strict';
    angular.module('common.services').directive('chosen', enterPressDirective);

    function enterPressDirective() {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs) {
                elm.chosen({
                    allow_single_deselect: true
                });
                scope.$watchCollection(attrs.chosen, function () {
                    elm.trigger('chosen:updated');
                });
            }
        };
    }
}());
