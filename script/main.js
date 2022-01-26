// 使用色定義
var colors = ["#ff7f7f","#ff7fbf","#ff7fff","#bf7fff","#7f7fff","#7fbfff","#7fffff","#7fffbf","#7fff7f","#bfff7f","#ffff7f","#ffbf7f","#ff8484","#ff84c1","#ff84ff","#c184ff","#8484ff","#84c1ff","#84ffff","#84ffc1","#84ff84","#c1ff84","#ffff84","#ffc184","#ff8989","#ff89c4","#ff89ff","#c489ff","#8989ff","#89c4ff","#89ffff","#89ffc4","#89ff89","#c4ff89","#ffff89","#ffc489"];
// 配置
window.onload = function () {
    var useColor = colors[Math.floor(Math.random() * colors.length)];
    var p_html = document.getElementById('result');
    for (var i = 1; i <= 15; i++) {
        eval("whitch" + i + "=" + Math.floor(Math.random() * 2));
        if (i <= 5) {
            var afterNum = i + 20;
            eval("whitch" + afterNum + "=" + "whitch" + i);
        } else if (i <= 10) {
            var afterNum = i + 10;
            eval("whitch" + afterNum + "=" + "whitch" + i);
        }
    }
    for(var i = 1; i <= 25; i++){
        if(eval("whitch" + i) == 1){
            var item = '<div style="background-color:'+ useColor +';width:84px;height:84px;"></div>';
            p_html.insertAdjacentHTML('beforeend', item);
        }else{
            var item = '<div style="background-color:'+ useColor +'00;width:84px;height:84px;"></div>';
            p_html.insertAdjacentHTML('beforeend', item);
        }
    }
}
// ダウンロード
var btn = document.getElementById("download-btn");
btn.addEventListener("click",() => {
  html2canvas(document.querySelector("#result")).then(canvas => { 
      let downloadEle = document.createElement("a");
      downloadEle.href = canvas.toDataURL("image/png");
      downloadEle.download = "IdenticonLike.png";
      downloadEle.click();
  });
})
// レスポンシブ
var windowWidth = window.innerWidth;
if(windowWidth <= 550){
    var zoomSize = windowWidth / 530;
    document.getElementById("result").style.zoom = zoomSize;
}
