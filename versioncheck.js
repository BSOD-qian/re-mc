var current = "2.4.1"
var codename = "Dr.Ratio"
document.getElementById('dialog_version').innerHTML = current;
document.getElementById('dialog_codename').innerHTML = codename;
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
                    action: "刷新",
                    onActionClick: () => location.reload()
                });
            };
        }
    }
    xhr.send();
};
window.onload = vercheck();
setInterval("vercheck();", 60000);