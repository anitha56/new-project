/**
 * 
 */
app.factory('FriendService',function($http){
	var friendService={}
	friendService.getAllSuggestedUsers=function(){
		return $http.get("http://localhost:8086/ProAngMe/suggestedUsers")
	}
	friendService.addFriend=function(toId){
		return $http.post("http://localhost:8086/ProAngMe/addfriend",toId)
	}
	friendService.getPendingRequests=function(){
		return $http.get("http://localhost:8086/ProAngMe/pendingrequests")
	}
	friendService.acceptRequest=function(request){
		return $http.post("http://localhost:8086/ProAngMe/acceptrequest",request);
	}
	friendService.deleteRequest=function(request){
		return $http.post("http://localhost:8086/ProAngMe/deleterequest",request);
	}
	friendService.getAllFriends=function(){
		return $http.get("http://localhost:8086/ProAngMe/friends");
	}
	return friendService;
})