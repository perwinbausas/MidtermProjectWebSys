var app = angular.module("My_Module", [])
		.controller("MainController", function($scope){
		$scope.carts=[];
		$scope.products = [
			{p_id: "1", p_name: "IDER AIR PURIFIER WITH UV LIGHT", p_image: "images/1.png", p_price: 2499},
			{p_id: "2", p_name: "AWEI A780BL BT 5.0 HEADPHONE", p_image: "images/2.png", p_price: 999},
			{p_id: "3", p_name: "MAGSAFE CHARGER", p_image: "images/3.png", p_price: 2490},
			{p_id: "4", p_name: "IPHONE 13 128GB", p_image: "images/4.png", p_price: 44990},
			{p_id: "5", p_name: "HUAWEI WATCH KIDS 4 PRO", p_image: "images/5.png", p_price: 7799},
			{p_id: "6", p_name: "XIAOMI REDMI NOTE 10 PRO 128GB", p_image: "images/6.png", p_price: 12590}
		];
		
		$scope.add_cart = function(product){
			if(product){
				$scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price});
			}	
		}
				
			
		$scope.total = 0;
		
		$scope.setTotals = function(cart){
			if(cart){
				$scope.total += cart.p_price;
			}
		}
		
		$scope.remove_cart = function(cart){
			if(cart){
				$scope.carts.splice($scope.carts.indexOf(cart), 1);
				$scope.total -= cart.p_price;
			}
		}
});