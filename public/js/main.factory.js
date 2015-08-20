'use strict';

angular.module('capstone').factory('Authorize', function ($http, $location, $rootScope, $cookieStore) {
	$rootScope.currentUser = $cookieStore.get('user');
	$cookieStore.remove('user');
	return {

		login: function login(user) {
			return $http.post('/api/login', user).success(function (data) {
				$rootScope.currentUser = data;
				console.log('logged in');
				console.log(data);
			}).error(function () {
				console.log('no dice on the login');
			});
		},

		signup: function signup(user) {
			return $http.post('/api/signup', user).success(function (data) {
				$rootScope.currentUser = data;
				$location.path('/login');

				console.log('you made a new account');
			}).error(function (res) {
				console.log('something went wrong');
			});
		},

		logout: function logout() {
			return $http.post('/api/logout').success(function () {
				$rootScope.currentUser = null;
				$cookieStore.remove('user');
				console.log('logged out');
			});
		}
	};
}).factory('Add', function ($http, $location, $rootScope) {
	return {

		addBundle: function addBundle(data) {
			console.log(data);
			return $http.post('/api/bundle', data).success(function (data) {
				$rootScope.bundle = data; // CREATE A SERVICE TO SEND THIS TO
				console.log('scraped');
				console.log(data);
			}).error(function () {
				console.log('no dice on the scrape');
			});
		}
	};
}).factory('Bundles', function ($http, $location, $resource) {
	return $resource('/api/bundles/:_id');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tYWluLmZhY3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUV6QixPQUFPLENBQUMsV0FBVyxFQUFFLFVBQVMsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFO0FBQzFFLFdBQVUsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUNqRCxhQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQzNCLFFBQU87O0FBRU4sT0FBSyxFQUFFLGVBQVMsSUFBSSxFQUFFO0FBQ3JCLFVBQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQ25DLE9BQU8sQ0FBQyxVQUFTLElBQUksRUFBRTtBQUN2QixjQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztBQUM5QixXQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQ3hCLFdBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDakIsQ0FBQyxDQUNELEtBQUssQ0FBQyxZQUFXO0FBQ2pCLFdBQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtJQUNuQyxDQUFDLENBQUM7R0FDSjs7QUFFRCxRQUFNLEVBQUUsZ0JBQVMsSUFBSSxFQUFFO0FBQ3RCLFVBQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQ3BDLE9BQU8sQ0FBQyxVQUFTLElBQUksRUFBRTtBQUN2QixjQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztBQUM5QixhQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUV6QixXQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7SUFDckMsQ0FBQyxDQUNELEtBQUssQ0FBQyxVQUFTLEdBQUcsRUFBRTtBQUNwQixXQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUE7SUFDbkMsQ0FBQyxDQUFDO0dBQ0o7O0FBRUQsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLFVBQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FDOUIsT0FBTyxDQUFDLFlBQVc7QUFDbkIsY0FBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7QUFDN0IsZ0JBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUIsV0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUN6QixDQUFDLENBQUM7R0FDSjtFQUNELENBQUE7Q0FDRCxDQUFDLENBRUQsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFTLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFO0FBQ3RELFFBQU87O0FBRU4sV0FBUyxFQUFFLG1CQUFTLElBQUksRUFBRTtBQUN6QixVQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ2pCLFVBQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQ3BDLE9BQU8sQ0FBQyxVQUFTLElBQUksRUFBRTtBQUN2QixjQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUN6QixXQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQ3RCLFdBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDakIsQ0FBQyxDQUNELEtBQUssQ0FBQyxZQUFXO0FBQ2pCLFdBQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtJQUNwQyxDQUFDLENBQUM7R0FDSjtFQUNELENBQUE7Q0FDRCxDQUFDLENBRUQsT0FBTyxDQUFDLFNBQVMsRUFBRSxVQUFTLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFO0FBQ3pELFFBQU8sU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUE7Q0FFckMsQ0FBQyxDQUFBIiwiZmlsZSI6InNyYy9qcy9tYWluLmZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnY2Fwc3RvbmUnKVxuXG4uZmFjdG9yeSgnQXV0aG9yaXplJywgZnVuY3Rpb24oJGh0dHAsICRsb2NhdGlvbiwgJHJvb3RTY29wZSwgJGNvb2tpZVN0b3JlKSB7XG5cdCRyb290U2NvcGUuY3VycmVudFVzZXIgPSAkY29va2llU3RvcmUuZ2V0KCd1c2VyJylcblx0JGNvb2tpZVN0b3JlLnJlbW92ZSgndXNlcicpXG5cdHJldHVybiB7XG5cblx0XHRsb2dpbjogZnVuY3Rpb24odXNlcikgeyBcblx0XHRcdHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2xvZ2luJywgdXNlcilcblx0XHRcdFx0LnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0XHRcdCRyb290U2NvcGUuY3VycmVudFVzZXIgPSBkYXRhO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdsb2dnZWQgaW4nKVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5lcnJvcihmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnbm8gZGljZSBvbiB0aGUgbG9naW4nKVxuXHRcdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0c2lnbnVwOiBmdW5jdGlvbih1c2VyKSB7XG5cdFx0XHRyZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9zaWdudXAnLCB1c2VyKVxuXHRcdFx0XHQuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdFx0JHJvb3RTY29wZS5jdXJyZW50VXNlciA9IGRhdGE7XG5cdFx0XHRcdFx0JGxvY2F0aW9uLnBhdGgoJy9sb2dpbicpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCd5b3UgbWFkZSBhIG5ldyBhY2NvdW50Jylcblx0XHRcdFx0fSlcblx0XHRcdFx0LmVycm9yKGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdzb21ldGhpbmcgd2VudCB3cm9uZycpXG5cdFx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRsb2dvdXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuICRodHRwLnBvc3QoJy9hcGkvbG9nb3V0Jylcblx0XHRcdFx0LnN1Y2Nlc3MoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JHJvb3RTY29wZS5jdXJyZW50VXNlciA9IG51bGxcblx0XHRcdFx0XHQkY29va2llU3RvcmUucmVtb3ZlKCd1c2VyJyk7XHRcdFxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdsb2dnZWQgb3V0Jylcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59KVxuXG4uZmFjdG9yeSgnQWRkJywgZnVuY3Rpb24oJGh0dHAsICRsb2NhdGlvbiwgJHJvb3RTY29wZSkge1xuXHRyZXR1cm4ge1xuXG5cdFx0YWRkQnVuZGxlOiBmdW5jdGlvbihkYXRhKSB7IFxuXHRcdFx0Y29uc29sZS5sb2coZGF0YSlcblx0XHRcdHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2J1bmRsZScsIGRhdGEpXG5cdFx0XHRcdC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0XHQkcm9vdFNjb3BlLmJ1bmRsZSA9IGRhdGE7IC8vIENSRUFURSBBIFNFUlZJQ0UgVE8gU0VORCBUSElTIFRPXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ3NjcmFwZWQnKVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5lcnJvcihmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnbm8gZGljZSBvbiB0aGUgc2NyYXBlJylcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59KVxuXG4uZmFjdG9yeSgnQnVuZGxlcycsIGZ1bmN0aW9uKCRodHRwLCAkbG9jYXRpb24sICRyZXNvdXJjZSkge1xuXHRyZXR1cm4gJHJlc291cmNlKCcvYXBpL2J1bmRsZXMvOl9pZCcpXG5cbn0pIl19