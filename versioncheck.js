function vercheck(){
    var xhr, data, version;
    xhr = new XMLHttpRequest();
    xhr.open("get", "./version.json");
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
            data = JSON.parse(xhr.responseText);
            version = data.version;
            if (version !== "0.16.3"){
                mdui.snackbar({
                    message: '检测到更新，版本' + data.version,
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