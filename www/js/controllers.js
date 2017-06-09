angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Chats) {

    $scope.chats = Chats.all();
    $scope.chat = $scope.chats[0];

    $scope.dataObj = {
      "resourceType": "SepaCreditTransferPaymentInstruction",
      "accountNumberOrderingParty": "NL94ABNA07624865",
      "remittanceInfoType": "UNSTRUCTURED",
      "currency": "EUR"
    };
    $scope.validate = function(data){
      console.info(data);
    }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
