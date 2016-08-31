'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('recacoApp.util', [])
  .factory('Util', UtilService)
  .name;
