(function () {
    'use strict';
    angular.module('common.services')
        .factory('absenceRequestsService', ['constantsService', '$http', absenceRequestsService]);

    function absenceRequestsService(constantsService, $http) {
        var ownRequestsUrl = constantsService.baseUrl + 'AbsenceRequest/GetEmployeeAbsenceRequests';

        var absenceRequestsCommunications = {
            getUserRequests: getUserRequests
        };

        function getUserRequests(filter) {
            return $http.get(ownRequestsUrl, {
                params: {
                    pageNumber: filter.pageNumber,
                    pageSize: filter.pageSize,
                    orderBy: filter.orderBy,
                    stageId: filter.stageId,
                    fromDate: filter.fromDate,
                    toDate: filter.toDate,
                    employeeId: filter.EmployeeId,
                    employeeGroupId: filter.EmployeeGroupId
                }
            });
        }

        return absenceRequestsCommunications;
    }

}());
