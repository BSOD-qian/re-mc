function donate(){
    mdui.dialog({
        title: '发电支持',
        content: '如果你觉得我做的还不错的话，可否考虑给孩子打点钱呢（<br/><img src="./afdian.jpg" style="width: 50%;"/>',
        buttons: [
            {
                text: '取消'
              },
            {
                text: '确认',
                onClick: function(inst){
                  window.location.href = "https://afdian.net/a/BSOD1009";
                }
              }
        ]
      });
};