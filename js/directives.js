angular.module('mccApp')

.directive('navbar', function () {
	return {
		restrict: 'E',
		templateUrl: 'navbar.html'
	}
})

.directive('hover', function () {
	return {
		restrict: 'A',
		scope: {
			addClass: '@',
			removeClass: '@'
		},
		link: function (scope, elem, attrs) {
			elem.on('mouseover', function () {
				elem.addClass(scope.addClass)
			})
			elem.on('mouseout', function () {
				elem.removeClass(scope.addClass)
			})
		}
	}
})

.directive('footerbar', function () {
	return {
		restrict: 'E',
		templateUrl: 'footer.html'
	}
})

.directive('hover', function () {
	return {
		restrict: 'A',
		scope: {
			addClass: '@',
			removeClass: '@'
		},
		link: function (scope, elem, attrs) {
			elem.on('mouseover', function () {
				elem.addClass(scope.addClass)
			})
			elem.on('mouseout', function () {
				elem.removeClass(scope.addClass)
			})
		}
	}
})