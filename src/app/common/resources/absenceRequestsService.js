(function () {
    'use strict';
    angular.module('common.services')
        .factory('absenceRequestsService', ['constantsService', '$http', absenceRequestsService]);

    function absenceRequestsService(constantsService, $http) {
        var ownRequestsUrl = constantsService.baseUrl + 'AbsenceRequest/GetEmployeeAbsenceRequests';
        var requestStagesUrl = constantsService.baseUrl + 'AbsenceRequestStage/GetAbsenceRequestStages';
        var requestReaonsUrl = constantsService.baseUrl + 'AbsenceRequestReason/GetAbsenceRequestReasons';

        var absenceRequestsCommunications = {
            getUserRequests: getUserRequests,
            getRequestStages: getRequestStages,
            getRequestReasons: getRequestReasons
        };

        function getUserRequests(filter) {
            return $http.get(ownRequestsUrl, {
                params: {
                    pageNumber: filter.pageNumber,
                    pageSize: filter.pageSize,
                    orderBy: filter.orderColumn + filter.orderType,
                    stageId: filter.stageId,
                    fromDate: filter.fromDate,
                    toDate: filter.toDate,
                    employeeId: filter.EmployeeId,
                    employeeGroupId: filter.EmployeeGroupId
                }
            });
        }

        function getRequestStages() {
            return $http.get(requestStagesUrl, {
                cache: true
            });
        }

        function getRequestReasons() {
            return $http.get(requestReaonsUrl, {
                cache: true
            });
        }

        return absenceRequestsCommunications;
    }

}());
