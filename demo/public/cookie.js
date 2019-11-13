// 功能一：添加cookie 
function addCookie(cookieKey, cookieValue, overSeconds) {
	document.cookie = cookieKey + " = " + cookieValue + ";max-age = " + overSeconds;
}
//功能二：删除cookie
function deteleCookie(cookieKey) {
	document.cookie = cookieKey + " = ; max-age = -1";
	// addCookie(cookieKey,"",-1);第二种删除方式
}
//功能三：获取某个cookie的值，key对应的形式上的value值
function getCookie(cookieKey){
	//获取到所有的cookie，通过split(";")分割，
	var arr = document.cookie.split(";");
	for (var i = 0;i < arr.length;i++) {
		//使用“=”分割
		var arr2 = arr[i].split("=");
		//遍历arr2[0]存储此时的key,arr2【1】存储此时key对应的value值，找到此时的key返回对应的value即可；
		if (cookieKey == arr2[0].trim()) {
			return arr2[1].trim();//返回对应的value值
		}
	}
}
//功能四：判断该cookie的key之前是否存在
function isCookieKey(cookieKey){
	//获取到所有的cookie，通过split(";")分割，
	var arr = document.cookie.split(";");
	for (var i = 0;i < arr.length;i++) {
		//使用“=”分割
		var arr2 = arr[i].split("=");
		//遍历arr2[0]存储此时的key,arr2【1】存储此时key对应的value值，找到此时的key返回对应的value即可；
		if (cookieKey == arr2[0].trim()) {
			return true;//此前存在
		}
	}
	return false;//此前不存在
}









