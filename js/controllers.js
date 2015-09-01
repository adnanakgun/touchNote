app.controller('addressBookController', ['$scope', 'localStorageService', function($scope, localStorageService) {
  'use strict';

  localStorageService.init();

  $scope.addresses = localStorageService.getData();

  $scope.addAction = true;
  $scope.ALL = [];
  $scope.A2E = ['a','b','c','d','e'];
  $scope.F2K = ['f','g','h','i','j', 'k'];
  $scope.L2P = ['l','m','n','o','p'];
  $scope.Q2V = ['q','r','s','t','u','v'];
  $scope.W2Z = ['w','x','y','z'];
  $scope.alphabet = [
    {'label': 'ALL', 'list': $scope.ALL},
    {'label': 'A - E', 'list': $scope.A2E},
    {'label': 'F - K', 'list': $scope.F2K},
    {'label': 'L - P', 'list': $scope.L2P},
    {'label': 'Q - V', 'list': $scope.Q2V},
    {'label': 'W - Z', 'list': $scope.W2Z}
  ];
  $scope.selectedLetter = 0;
  $scope.modalOpen=false;


  for(var i = 0; i < $scope.addresses.length; i++){
    $scope.addresses[i].dbIndex = i;
  }

  $scope.dropDB = function(){
    $scope.addresses = localStorageService.dropDB();
  } 

  $scope.addRow = function(row){
    row.dbIndex = $scope.addresses.length;
    $scope.addresses = localStorageService.saveData(row);
    $scope.tempRow = {};
  } 

  $scope.deleteRow = function(row){    
    $scope.addresses = localStorageService.deleteData(row.dbIndex);
  }   

  $scope.updateRow = function(row){
    $scope.addresses = localStorageService.updateData(row.dbIndex, row);    
    $scope.tempRow = {};
  }

  $scope.editRow = function(row){
    $scope.addAction = false;
    $scope.tempRow = row;
    $scope.modalOpen =true;
  }

  $scope.addNewRow = function(){
    $scope.addAction = true;
    $scope.tempRow = {};
    $scope.modalOpen = true;
  }  

  $scope.setLetters = function(arr){
    $scope.letters = arr;
  }

  $scope.setLetters($scope.ALL);

  $scope.changeLetterGroup = function(index){
    $scope.selectedLetter = index;
  }

  $scope.openModalBox = function(){
    $scope.addAction=true;
    $scope.modalOpen=true;
  }

}]);