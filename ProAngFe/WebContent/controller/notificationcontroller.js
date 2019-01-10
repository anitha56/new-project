/**
 * 
 */

app.controller(
				'notificationCtrl',
				function($scope, $location, $rootScope, $routeParams,
						NotificationService) {
					var id = $routeParams.id;
					function getNotificationsNotViewed() {
						console.log("id in notification ctrler is " + id);
						NotificationService
								.getNotificationsNotViewed()
								.then(
										function(response) {
											$rootScope.notifications = response.data;
											$rootScope.notificationCount = $rootScope.notifications.length;
										}, function(response) {
											$rootScope.error = response.data
											if (response.status == 401)
												$location.path('/login')
										})
					}

					if (id != undefined) {
						console.log("id in notification ctrler is " + id);
						$scope.hello="hi";
						console.log($scope.hello);
						NotificationService.getNotifications(id).then(
								function(response) {
									console.log("id in notification ctrler is " + id);
									$scope.notification = response.data;
									console.log("notification" + JSON.stringify($scope.notification));
									$scope.hello="hi";
								}, function(response) {
									$rootScope.error = response.data
									if (reponse.status == 401)
										$location.path('/login')
								})
						NotificationService.updateNotification(id).then(
								
								function(response) {
									console.log("In updatenotification");
									getNotificationsNotViewed()
								}, function(response) {
									$rootScope.error = response.data
									if (response.status == 401)
										$location.path('/login')
								})
					}
					getNotificationsNotViewed()

				})