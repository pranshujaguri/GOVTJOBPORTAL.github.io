angular.module('myPortalApp')
  .factory('statefactory', function ($http, $q) {
    var obj={
		callserver: function(){
			var defer =$q.defer();
			function success(data)
			{
				defer.resolve(data);
			}
			function error(data)
			{
				defer.reject(data);
			}
			$http.get('server/state.json').then(success, error);
			return defer.promise;
		}
		
	};
	return obj;
  });