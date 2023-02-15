var expire_date = new Date();
expire_date.setFullYear(2023,2,13)
var today = new Date();
var current = "1.0 RC 2"
document.getElementById('appbar_version').innerHTML = current;
document.getElementById('dialog_version').innerHTML = current;
function vercheck() {
  var url = "https://remc.rth1.one/versiondev.json?" + Math.random();
  var xhr, data, version, date;
  xhr = new XMLHttpRequest();
  xhr.open("get", url);
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
          data = JSON.parse(xhr.responseText);
          version = data.version;
          date = data.date;
          if (version !== current) {
              mdui.snackbar({
                  message: '检测到更新，版本' + version + '，更新于' + date,
                  buttonText: '获取新版',
                  onButtonClick: function(){
                    window.location.href="https://kook.top/GL1gkO";
                  }
                });
          };
      }
  }
  xhr.send();
};
function vercheck_pre() {
    var url = "https://remc.rth1.one/versiondev.json?" + Math.random();
    var xhr, data, version, date;
    xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            data = JSON.parse(xhr.responseText);
            version = data.version;
            date = data.date;
            if (version !== current) {
                mdui.dialog({
                    title: '已有更新的预览版可用',
                    content: '坚持使用较旧的预览版可能会导致无法收到最新改进<br/>当前版本' + current + '<br/>最新版本' + version + '，发布于' + date,
                    buttons: [
                      {
                        text: '不是现在'
                      },
                      {
                        text: '立刻下载' + version,
                        bold: true,
                        onClick: function(inst){
                            window.location.href="https://kook.top/GL1gkO";
                        }
                      }
                    ]
                  });
            };
        }
    }
    xhr.send();
};
function timebomb(){
    document.getElementById('expire').innerHTML = '<br/>评估副本，作废日期' + expire_date;
    if (expire_date < today){
      bomb();
      setInterval("bomb();", 1000);
    }
};
function bomb(){
  mdui.dialog({
    title: '你使用的预览版已过期',
    content: '本预览版在' + expire_date + '已过期，现在是' + today,
    buttons: [
      {
        text: '立刻下载新版',
        bold: true,
        onClick: function(inst){
            window.location.href="https://kook.top/GL1gkO";
        }
      }
    ]
  });
};
window.onload = timebomb();
window.onload = vercheck_pre();
setInterval("vercheck();", 60000);