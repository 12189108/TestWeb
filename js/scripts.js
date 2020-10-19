browser_check();
var mode=0;
//setBodyWidth();
function browser_check() {
	var user_Agent = navigator.userAgent;
	if (!(user_Agent.indexOf("Chrome") > -1 || user_Agent.indexOf("chrome") > -1)) {
		alert("很抱歉，页面暂时只支持Chrome浏览器,请在跳转的网页中下载后访问");
		window.location.href = "https://www.google.cn/chrome/";
	}
}
function register(){
	var button=document.getElementById("button");
	var title=document.getElementById("center");
	var login=document.getElementById("register");
	if(mode==0){
		mode=1;
		button.innerText="注册";
		title.innerText="注册";
		login.innerText="已有账号？马上登陆！";
	}
	else{
		mode=0;
		button.innerText="登陆";
		title.innerText="登陆";
		login.innerText="没有账号？前往注册！";
	}
}
function find_password(){
	alert("网页有待完善，请多包涵。");
}
function post() {
	var username = document.getElementById("user");
	var pwd = document.getElementById("pwd");
	if(mode==0){
	if (username.value.length == 0 || pwd.value.length == 0) {
		alert("用户名和密码均不能为空!");
	}
	else {
		if (username.value == "user" && pwd.value == "pwd") {
			var box = document.getElementById("login-box");
			//window.location.href="welcome.html";
			out(document.getElementById("inner"), 50);
			setTimeout(function () { username.value = null; pwd.value = null; changePage(); setTimeout(function(){
				window.location.href="toolbox.html";
			},1701);}, 501);
			//setTimeout(function(){});
		}
		else {
			alert("密码或用户名错误，请重新登录！");
			username.value = null;
			pwd.value = null;
		}
		/*
		post(username.value,pwd.value);
		本来应该这样的
		*/
	}
	}else{

		if (username.value.length == 0 || pwd.value.length == 0) {
			alert("注册失败！用户名和密码均不能为空！");
		}
		else{
			alert("注册通道暂未开启！");
			//本来应该这样：post(username.value,pwd.value);
		}
	}
	}
	/*
	function post(Usernames, password) {
		var vform = document.createElement("form");
		if(mode==0)vform.action = "../数据处理.php";
		else vform.action="../数据处理2.php";
		vform.method = "POST";
		vform.style.display = "none";
		var temp = document.createElement("textarer");
		temp.name = "user";
		temp.value = Usernames;
		var temp2 = document.createElement("textarer");
		temp2.name = "pwd";
		temp2.value = password;
		vform.addChild(temp);
		vform.addChild(temp2);
		vform.submit();
	}*/
function out(element, speed) {
	if (element != null || speed != null) {
		var num = 10;
		//重复
		var anim = setInterval(function () {
			num--;
			//不透明度0.0~1.0
			element.style.opacity = num / 10;
			if (num <= 0) clearInterval(anim);
		}, speed);
	}
	else console.log("error:element or speed not exist!")
}
function narrow(element, speed, percent) {
	var beggin = window.getComputedStyle(element).height;
	var be = beggin.replace("px", "");
	var per=100;
	var end=be*percent;
	//alert(beggin+"\n"+be+"\n"+end);
	var anim = setInterval(function () {
		per--;
		element.style.height =( be*per/100)+"px";
		if (element.style.height.replace("px","")<=end) {clearInterval(anim);}
	}, speed);
}
function showin(element, speed) {
	if (element != null || speed != null) {
		element.opacity = 0;
		var num = 0;
		setInterval(() => {
			num++;
			element.opacity = num / 10;
		}, speed);
	}
	else console.log("error:element or speed not exist!");
}
function changePage() {
	var box = document.getElementById("login-box");
	var init = window.getComputedStyle(box).height;
	box.innerHTML = "<p id='text'>愿我们所想，终将实现</p>";
	//box.style.textAlign=center;
	box.style.height = init;
	showin(box, 100);
	narrow(box, 15, 0.2);
	var text=document.getElementById("text");
}
/*
错误的，不可用的方法
function setBodyWidth(){
	var body=document.getElementById("login-box");
	body.style.width=document.body.clientWidth;
	alert(document.body.clientWidth);
}*/
//学习是一个不断抄袭和重复的过程。