browser_check();
function browser_check(){
	var user_Agent=navigator.userAgent;
	if(!(user_Agent.indexOf("Chrome")>-1||user_Agent.indexOf("chrome")>-1)){
		alert("很抱歉，页面暂时只支持Chrome浏览器,请在跳转的网页中下载后访问");
		window.location.href="https://www.google.cn/chrome/";
	}
}
function post(){
	var username=document.getElementById("user");
	var pwd=document.getElementById("pwd");
	if(username.value.length==0||pwd.value.length==0){
		alert("用户名和密码不能为空！");
	}
	else{
		if(username.value=="user"&&pwd.value=="pwd"){
			alert("登陆成功");
		}
		else{
			alert("密码或用户名错误，请重新登录！");
			username.value=null;
			pwd.value=null;
		}
	}
}
