(function () {
    'use strict';
    angular.module('common.services').directive('chosen', enterPressDirective);

    function enterPressDirective() {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs) {
                scope.$watch(attrs.ngModel, function () {
                    elm.trigger('chosen:updated');
                });
                scope.$watchCollection(attrs.chosen, function () {
                    elm.trigger('chosen:updated');
                });

                elm.chosen({
                    allow_single_deselect: true
                });
            }
        };
    }
}());
