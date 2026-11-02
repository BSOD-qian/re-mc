//按钮颜色变换
document.getElementById("cart_no_input").addEventListener("input", function(){
    if(document.getElementById("cart_no_input").value != ""){
        document.getElementById("cart_no_input_enter").variant = "filled";
    }else{
        document.getElementById("cart_no_input_enter").variant = "tonal";
    }
})

//计算主体
var error_check, cart_no, train_no, line_no, tail_no_template, tail_no
function calc(){
    line_no = document.getElementById("cart_no_input").value.substr(0, 2)
    cart_no = document.getElementById("cart_no_input").value.substr(2, 3)
    train_no = line_no + Math.ceil(cart_no / 6).toString().padStart(3, "0")
    check()
}

//检测主体
function check(){
    tail_no_template = [1, 1, 2, 3, 3, 2]
    tail_no = document.getElementById("cart_no_input").value.substr(5, 1)
    if (tail_no != tail_no_template[cart_no % 6]){
        error_check = 1
    }
    display()
}

//展示主体
function display(){
    document.getElementById("display_area").innerHTML = line_no + ":" + train_no
}