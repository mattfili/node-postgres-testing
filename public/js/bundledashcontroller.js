'use strict';

angular.module('bundle').controller('bundleDash', function (Fire, $scope, $state) {
	var vm = this;

	(function () {
		Fire.bunDash(function (snap) {
			//- Add a title to the bundle dashboard
			vm.bunName = snap.val();
			$scope.$apply();
		});
	})();

	vm.nBun = function () {
		Fire.newBun($scope.bundle.title);
		console.log(Fire.bKey);
		$state.go('/bundle/' + Fire.bKey);
	};

	vm.gotoSec = function () {
		$state.go('/bundle/' + id);
	};

	vm.editBunName = function (id, newName) {
		Fire.updateBunName(id, newName);
		console.log('updated');
	};
});
//- Change the URL path to the new Bundle
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9idW5kbGVkYXNoY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FDTCxNQUFNLENBQUMsUUFBUSxDQUFDLENBRWhCLFVBQVUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtBQUN6RCxLQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7O0FBRWQsRUFBQyxZQUFXO0FBQ1gsTUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBQzs7QUFDNUIsS0FBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDeEIsU0FBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0dBQ2YsQ0FBQyxDQUFBO0VBQ0YsQ0FBQSxFQUFHLENBQUM7O0FBRUwsR0FBRSxDQUFDLElBQUksR0FBRyxZQUFZO0FBQ3JCLE1BQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUNoQyxTQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN0QixRQUFNLENBQUMsRUFBRSxjQUFZLElBQUksQ0FBQyxJQUFJLENBQUcsQ0FBQTtFQUNqQyxDQUFDOztBQUVGLEdBQUUsQ0FBQyxPQUFPLEdBQUcsWUFBWTtBQUN4QixRQUFNLENBQUMsRUFBRSxjQUFZLEVBQUUsQ0FBRyxDQUFBO0VBQzFCLENBQUE7O0FBRUQsR0FBRSxDQUFDLFdBQVcsR0FBRSxVQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUU7QUFDckMsTUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUE7QUFDL0IsU0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtFQUN0QixDQUFBO0NBR0QsQ0FBQyxDQUFDIiwiZmlsZSI6InNyYy9qcy9idW5kbGVkYXNoY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXJcblx0Lm1vZHVsZSgnYnVuZGxlJylcblxuXHQuY29udHJvbGxlcignYnVuZGxlRGFzaCcsIGZ1bmN0aW9uIChGaXJlLCAkc2NvcGUsICRzdGF0ZSkge1xuXHRcdHZhciB2bSA9IHRoaXM7XG5cblx0XHQoZnVuY3Rpb24oKSB7XG5cdFx0XHRGaXJlLmJ1bkRhc2goZnVuY3Rpb24gKHNuYXApeyAvLy0gQWRkIGEgdGl0bGUgdG8gdGhlIGJ1bmRsZSBkYXNoYm9hcmRcblx0XHRcdHZtLmJ1bk5hbWUgPSBzbmFwLnZhbCgpO1xuXHRcdFx0JHNjb3BlLiRhcHBseSgpO1xuXHRcdFx0fSlcblx0XHR9KSgpO1xuXG5cdFx0dm0ubkJ1biA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdEZpcmUubmV3QnVuKCRzY29wZS5idW5kbGUudGl0bGUpXG5cdFx0XHRjb25zb2xlLmxvZyhGaXJlLmJLZXkpXG5cdFx0XHQkc3RhdGUuZ28oYC9idW5kbGUvJHtGaXJlLmJLZXl9YCkgLy8tIENoYW5nZSB0aGUgVVJMIHBhdGggdG8gdGhlIG5ldyBCdW5kbGVcblx0XHR9O1xuXG5cdFx0dm0uZ290b1NlYyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdCRzdGF0ZS5nbyhgL2J1bmRsZS8ke2lkfWApXG5cdFx0fVxuXG5cdFx0dm0uZWRpdEJ1bk5hbWU9IGZ1bmN0aW9uKGlkLCBuZXdOYW1lKSB7XG5cdFx0XHRGaXJlLnVwZGF0ZUJ1bk5hbWUoaWQsIG5ld05hbWUpXG5cdFx0XHRjb25zb2xlLmxvZygndXBkYXRlZCcpXG5cdFx0fVxuXG5cblx0fSk7Il19