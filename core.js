//按钮颜色变换
document.getElementById("cart_no_input").addEventListener("input", function () {
    if (document.getElementById("cart_no_input").value != "") {
        document.getElementById("cart_no_input_enter").variant = "filled";
    } else {
        document.getElementById("cart_no_input_enter").variant = "tonal";
    }
})

//计算主体
var error_check, cart_no, cart_type, train_no, train_type, line_no, line_text, tail_no_template, tail_no, output_text
function calc_init() {
    line_no = document.getElementById("cart_no_input").value.substr(0, 2)
    cart_no = document.getElementById("cart_no_input").value.substr(2, 3)
    if (line_no == "04") {
        line_text = "<span style='color: white; background-color: #461D84;'>4号线</span>"
        calc_4()
    } else {
        if (line_no == "07") {
            line_text = "<span style='color: black; background-color: #ED6F00;'>7号线</span>"
            calc_7()
        } else {
            error_check = 1
            display()
        }
    }
}

function calc_4() {
    train_no = line_no + Math.ceil(cart_no / 6).toString().padStart(3, "0")
    check_4()
}

function calc_7() {
    train_no = line_no + Math.ceil(cart_no / 6).toString().padStart(3, "0")
    check_7()
}

//检测主体
function check_4() {
    tail_no_template = [1, 1, 2, 3, 3, 2]
    tail_no = document.getElementById("cart_no_input").value.substr(5, 1)
    if (tail_no != tail_no_template[cart_no % 6]) {
        error_check = 1
    } else {
        if (tail_no == 1) {
            cart_type = "Tc车"
        } else {
            if (tail_no == 2) {
                cart_type = "Mp车"
            } else {
                if (tail_no == 3 || tail_no == 4) {
                    cart_type = "M车"
                }
            }
        }
    }
    if (train_no >= 4001 && train_no <= 4028) {
        train_type = "04A01"
    } else {
        if (train_no >= 4029 && train_no <= 4030 || train_no == 4032 || train_no == 4036 || train_no == 4051 || train_no == 4054) {
            train_type = "04A02"
        } else {
            error_check = 1
        }
    }
    display()
}

function check_7() {
    tail_no_template = [1, 1, 2, 3, 3, 2]
    tail_no = document.getElementById("cart_no_input").value.substr(5, 1)
    if (tail_no != tail_no_template[cart_no % 6]) {
        error_check = 1
    } else {
        if (tail_no == 1) {
            cart_type = "Tc车"
        } else {
            if (tail_no == 2) {
                cart_type = "Mp车"
            } else {
                if (tail_no == 3 || tail_no == 4) {
                    cart_type = "M车"
                }
            }
        }
    }
    if (train_no >= 7001 && train_no <= 7042) {
        train_type = "07A01"
    } else {
        if (train_no >= 7043 && train_no <= 7072) {
            train_type = "07A02"
        } else {
            if (train_no >= 7073 && train_no <= 7079) {
                train_type = "07A03"
            } else {
                error_check = 1
            }
        }
    }
    display()
}

//展示主体
function display() {
    if (error_check == 1) {
        output_text = "error"
        error_check = 0
    } else {
        output_text = "线路：" + line_text + "<br/>车号：" + train_no + "<br/>车型：" + train_type + "<br/>" + cart_type
    }
    document.getElementById("display_area").innerHTML = "<mdui-card class='output'>" + output_text + "</mdui-card>"
}