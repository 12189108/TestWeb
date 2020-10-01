browser_check();
function browser_check(){
	var user_Agent=navigator.userAgent;
	if(!(user_Agent.indexOf("Chrome")>-1||user_Agent.indexOf("chrome")>-1)){
		alert("很抱歉，页面暂时只支持Chrome浏览器,请在跳转的网页中下载后访问");
		window.location.href="https://www.google.cn/chrome/";
	}
}
function post(){
	alert("a");
}
