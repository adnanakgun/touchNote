app.factory('localStorageService', ['$rootScope', function ($rootScope) {
  'use strict';

    var service = {

        database: [],

        init: function(){
            if (localStorage.getItem('dbStore') === null){
                localStorage.setItem('dbStore', '[]');
                // on request of the agent as he think it needs to look exactly the way it is on the pdf
                service.saveData({'name':'adnan', 'surname':'akgun', 'country':'UK', 'postCode': 'EC2A 4NE', 'address1': 'Netclipper', 'address2': 'Paul Street', 'town': 'London', 'county': ''});
                service.saveData({'name':'Jules', 'surname':'Verne', 'country':'France', 'postCode': 'EC2A 4NE', 'address1': 'Nautilus', 'address2': 'Paul Street', 'town': 'London', 'county': ''});
                service.saveData({'name':'Umberto', 'surname':'Eco', 'country':'Italy', 'postCode': 'SE1 4NE', 'address1': 'Foucalt', 'address2': 'Paul Street', 'town': 'somewhere', 'county': 'Piedmont'});
                service.saveData({'name':'Alfred', 'surname':'Hitchcock', 'country':'USA', 'postCode': '00000', 'address1': 'Elm Stree', 'address2': 'Sunset Boulevard', 'town': 'LA', 'county': ''});
                service.saveData({'name':'Marcus', 'surname':'Freeman', 'country':'UK', 'postCode': 'EC2A 4NE', 'address1': 'Gravitas', 'address2': 'Oxford Street', 'town': 'London', 'county': ''});
            }
        },

        dropDB: function(){
            localStorage.clear();
            service.database = [];
            return service.database;
        },

        getData: function(){
            service.database = angular.fromJson(localStorage.dbStore);
            return service.database;
        },
        
        saveData: function(entry){
            service.database.push(entry);
            localStorage.dbStore = angular.toJson(service.database);
            return service.database;
        },

        deleteData: function(index){
            service.database.splice(index, 1);
            localStorage.dbStore = angular.toJson(service.database);
            return service.database;
        },

        updateData: function(index, row){
            service.database.splice(index, 1, row);
            localStorage.dbStore = angular.toJson(service.database);
            return service.database;
        }
    }

    return service;
}]);