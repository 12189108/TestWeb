browser_check();
window.onload=function(){
	change();
	progress();
	alert("Tip:press F11 to enter full screen mode quickly!\nPress Enter to close the dialog box.");
}
function browser_check() {
	var user_Agent = navigator.userAgent;
	if (!(user_Agent.indexOf("Chrome") > -1 || user_Agent.indexOf("chrome") > -1)) {
		alert("很抱歉，页面暂时只支持Chrome浏览器,请在跳转的网页中下载后访问");
		window.location.href = "https://www.google.cn/chrome/";
	}
}
function change(){
//屏蔽右键
window.oncontextmenu=function(e){
    if(e.button==2||e.button==1){
		e.preventDefault();
		return false;
    }
}}
function progress(){
	var progress_a=document.getElementById("progress");
	var num=0;
	var stage=0;
	setInterval(() => {
		num++;
		progress_a.innerHTML=num+"%";
		if(num==100){
			if(stage==0){
				stage=1;
				document.getElementById("stage").innerHTML="Installing Updates <br>";
				num=0;
			}
			else num=68;
		}
	}, 15000);

}