(function () {
    'use strict';
    angular.module('timeoff')
        .controller('MyRequestsController', ['$q', '$filter', 'communicationService', 'enumService',
                                                                  MyRequestsController]);

    function MyRequestsController($q, $filter, communicationService, enumService) {
        var DEFAULT_PAGE_SIZE = 10;
        var DEFAULT_ORDER_COLUMN = 'Created';
        var DEFAULT_ORDER_TYPE = 'Desc';

        var vm = this;

        vm.slimView = true;
        vm.getDatesRepresentation = getDatesRepresentation;
        vm.isAllDayRequest = isAllDayRequest;
        vm.loadRequests = loadRequests;
        vm.reSort = reSort;

        vm.requestStages = [];
        vm.requestReasons = [];

        vm.requests = {};
        vm.filter = {
            pageNumber: 1,
            pageSize: DEFAULT_PAGE_SIZE,
            stageId: '',
            fromDate: '',
            toDate: '',
            employeeId: null,
            employeeGroupId: '',
            orderColumn: DEFAULT_ORDER_COLUMN,
            orderType: DEFAULT_ORDER_TYPE
        };

        vm.sorting = enumService.getSortingOptions();

        function getDatesRepresentation(request) {
            var multiDayRequest = (request.period / 8) > 1;
            var dateFilter = $filter('date');
            var str = null;

            if (multiDayRequest) {
                var mixedMonths = new Date(request.startDate).getMonth() !== new Date(request.endDate).getMonth();
                str = dateFilter(request.startDate, mixedMonths ? 'dd MMM' : 'dd');
                str += ' - ' + dateFilter(request.endDate, 'dd MMM');
            } else {
                str = dateFilter(request.startDate, 'dd MMM');
            }

            str += ' ' + dateFilter(request.endDate, 'yyyy');

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

        function reSort(column) {
            if (vm.slimView)

                if (vm.filter.orderColumn === column) {
                    if (vm.filter.orderType === vm.sorting.order.asc) {
                        vm.filter.orderType = vm.sorting.order.desc;
                    } else {
                        vm.filter.orderType = vm.sorting.order.asc;
                    }
                }

            vm.filter.orderColumn = column;
            loadRequests();
        }

        $q.all([loadReasons(), loadStages()]).then(loadRequests);
    }

}());
