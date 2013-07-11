function MyController($scope){
    $scope.items = items;

    $scope.whichItem = function(item){
        alert(item.name);
    };

    $scope.addNew = function(){
        $scope.items.push({name:"Added Item",id:101})
    }
}