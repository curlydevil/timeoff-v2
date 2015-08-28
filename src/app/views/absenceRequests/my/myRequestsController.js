(function () {
    'use strict';
    angular.module('timeoff')
        .controller('MyRequestsController', ['$q', '$filter', 'communicationService',
                                                                  MyRequestsController]);

    function MyRequestsController($q, $filter, communicationService) {
        var DEFAULT_PAGE_SIZE = 10;
        var DEFAULT_ORDER_BY = 'CreatedDesc';
        var vm = this;

        vm.isAllDayRequest = isAllDayRequest;
        vm.requests = {};
        vm.filter = {
            pageNumber: 1,
            pageSize: DEFAULT_PAGE_SIZE,
            orderBy: DEFAULT_ORDER_BY,
            stageId: '',
            fromDate: '',
            toDate: '',
            employeeId: null,
            employeeGroupId: ''
        };
        vm.requestStages = [];
        vm.requestReasons = [];
        vm.loadRequests = loadRequests;
        vm.getDatesRepresentation = getDatesRepresentation;

        function getDatesRepresentation(request) {
            var multiDayRequest = request.Period / 8 > 1;
            var dateFilter = $filter('date');
            var str = null;

            if (multiDayRequest) {
                var mixedMonths = new Date(request.StartDate).getMonth() !== new Date(request.EndDate).getMonth();
                str = dateFilter(request.StartDate, mixedMonths ? 'dd MMM' : 'dd');
                str += ' - ' + dateFilter(request.EndDate, 'dd MMM');
            } else {
                str = dateFilter(request.StartDate, 'dd MMM');
            }

            str += ' ' + dateFilter(request.EndDate, 'yyyy');

            return str;
        }

        function loadStages() {
            return communicationService.absenceRequests
                .getRequestStages()
                .then(function (data) {
                    vm.requestStages = data.data;
                });
        }

        function loadReasons() {
            return communicationService.absenceRequests
                .getRequestReasons()
                .then(function (data) {
                    vm.requestReasons = data.data;
                });
        }

        function loadRequests() {
            return communicationService
                .absenceRequests
                .getUserRequests(vm.filter)
                .then(function requestsLoaded(data) {
                    vm.requests = data.data;
                }, function requestsNotLoaded(data) {
                    humane.log('Error loading requests');
                    console.log(data);
                });
        }

        function isAllDayRequest(period) {
            return period > 0 && period % 8 === 0;
        }

        $q.all([loadReasons(), loadStages()]).then(loadRequests);
    }

}());
