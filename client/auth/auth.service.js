'use strict';

function authService($auth, $state){

var auth = {//Objeto JSON para crera las variables login entre otras
	login: login
};

  function login(user){
  	$auth.login(user)
  		.then(response => {
  			console.log('Logeado...', response);
  			$state.go('usuarios-list');
  		})
  		.catch(err => {
  			console.log(err,'Error al logearse');
  			this.$state.go('login');
  		});
  }
	function logout(){

	}
  return auth;
}

authService.$inject = ['$auth','$state'];
angular.module('startUpApp')
.factory('authService', authService);
