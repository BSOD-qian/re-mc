var userinput = 0;//用户输入变量
//url读取与分割
var url = window.location.href;
var canshu = url.split("?");
function read_num_after_load() {
    if (canshu.length == 2) {
        document.getElementById('input').value = canshu[1];
        receive();
    }
};
//旧版core.js兼容
function wuc(){
    receive()
}
//获取车体号后的起始流程
function receive(){
    userinput = document.getElementById('input').value;//为变量赋值
    document.title = userinput + " - Re:地铁计算器（Beta）"//更改网页标题
}