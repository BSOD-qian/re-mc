var current = "1.1.3"
document.getElementById('appbar_version').innerHTML = current;
document.getElementById('dialog_version').innerHTML = current;
function vercheck() {
    var url = "./version.json?" + Math.random();
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
                    message: '检测到更新，版本' + version + '，推送于' + date,
                    buttonText: '刷新',
                    onButtonClick: function(){
                      location.reload();
                    }
                  });
            };
        }
    }
    xhr.send();
};
window.onload = vercheck();
setInterval("vercheck();", 60000);