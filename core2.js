var userinput = 0;//用户输入变量
var length = 0;//车体号长度
var lineno = 0;//车体号线路号
var carnoerror = 0;//车体号报错变量
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
    length = userinput.length;//获取车体号长度
    lineno = userinput.substr(0, 2);
    if (length != 0){
        if (length == 5){
            myear();//年份车体号
        }else{
            if (length == 6){
                //线路号车体号
            }else{
                if (length == 7){
                    pjl_or_sr();
                }else{
                    carnoerror = 1;//错误状态设为1
                }
            }
        }
    }else{
        carnoerror = 1;//错误状态设为1
    }
}