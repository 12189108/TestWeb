
function play_dialog(){
    
    alert("纯属娱乐，二维码已被修改");
}
function clicked(){
    alert("纯属娱乐");
}
function play_audio(){
    var player=document.getElementById("bg");
    player.play();
}
function start(){
    var be=document.getElementById("all");
    var inner=document.getElementById("a");
    be.style.display="none";
    inner.style.display="block";
    play_dialog();
    play_audio();
}

