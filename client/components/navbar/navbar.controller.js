'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Inicio',
    'state': 'main',
    'country': 'Pais',
    'cities': 'Ciudades',
    'departments': 'Departamentos',
    'numDocument': 'Documentos',
    'users':'Crear Usuario',
    'userList':'Usuarios',
    'Login' : 'login'

  }];

  isCollapsed = true;
  //end-non-standard


}

angular.module('startUpApp')
  .controller('NavbarController', NavbarController);
