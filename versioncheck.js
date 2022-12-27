function vercheck(){
    var url = "./version.json?" + Math.random();
    var xhr, data, version, date;
    xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
            data = JSON.parse(xhr.responseText);
            version = data.version;
            date = data.date;
            if (version !== "0.17"){
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