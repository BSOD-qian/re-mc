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
            if (line_no == "09") {
                line_text = "<span style='color: black; background-color: #87CAED;'>9号线</span>"
                calc_9()
            } else {
                if (line_no == "10") {
                    line_text = "<span style='color: black; background-color: #C6AFD4;'>10号线</span>"
                    calc_10()
                } else {
                    if (line_no == "11") {
                        line_text = "<span style='color: white; background-color: #871C2B;'>11号线</span>"
                        calc_11()
                    } else {
                        if (line_no == "12") {
                            line_text = "<span style='color: white; background-color: #007B61;'>12号线</span>"
                            calc_12()
                        } else {
                            if (line_no == "13") {
                                line_text = "<span style='color: black; background-color: #E999C0;'>13号线</span>"
                                calc_13()
                            } else {
                                if (line_no == "15") {
                                    line_text = "<span style='color: black; background-color: #BCA886;'>15号线</span>"
                                    calc_15()
                                } else {
                                    if (line_no == "17") {
                                        line_text = "<span style='color: white; background-color: #BC796F;'>17号线</span>"
                                        calc_17()
                                    } else {
                                        if (line_no == "18") {
                                            line_text = "<span style='color: black; background-color: #C4984F;'>18号线</span>"
                                            calc_18()
                                        } else {
                                            if (line_no == "21") {
                                                line_text = "<span style='color: black; background-color: #F7AF00;'>21号线（暂未开通）</span>"
                                                calc_21()
                                            } else {
                                                error_check = 1
                                                display()
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
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

function calc_9() {
    train_no = line_no + Math.ceil(cart_no / 6).toString().padStart(3, "0")
    check_9()
}

function calc_10() {
    train_no = line_no + Math.ceil(cart_no / 6).toString().padStart(3, "0")
    check_10()
}

function calc_11() {
    train_no = line_no + Math.ceil(cart_no / 6).toString().padStart(3, "0")
    check_11()
}

function calc_12() {
    train_no = line_no + Math.ceil(cart_no / 6).toString().padStart(3, "0")
    check_12()
}

function calc_13() {
    train_no = line_no + Math.ceil(cart_no / 6).toString().padStart(3, "0")
    check_13()
}

function calc_15() {
    train_no = line_no + Math.ceil(cart_no / 6).toString().padStart(3, "0")
    check_15()
}

function calc_17() {
    train_no = line_no + Math.ceil(cart_no / 6).toString().padStart(3, "0")
    check_17()
}

function calc_18() {
    train_no = line_no + Math.ceil(cart_no / 6).toString().padStart(3, "0")
    check_18()
}

function calc_21() {
    train_no = line_no + Math.ceil(cart_no / 6).toString().padStart(3, "0")
    check_21()
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

function check_9() {
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
    if (train_no >= 9001 && train_no <= 9010) {
        train_type = "09A01"
    } else {
        if (train_no >= 9011 && train_no <= 9051) {
            train_type = "09A02"
        } else {
            if (train_no == 9052) {
                train_type = "09ASY"
            } else {
                if (train_no >= 9053 && train_no <= 9088) {
                    train_type = "09A03"
                } else {
                    if (train_no >= 9089 && train_no <= 9105) {
                        train_type = "09A04"
                    } else {
                        error_check = 1
                    }
                }
            }
        }
    }
    display()
}

function check_10() {
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
    if (train_no >= 10001 && train_no <= 10041) {
        train_type = "10A01"
    } else {
        if (train_no >= 10042 && train_no <= 10067) {
            train_type = "10A02"
        } else {
            error_check = 1
        }
    }
    display();
}

function check_11() {
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
    if (train_no >= 11001 && train_no <= 11066) {
        train_type = "11A01"
    } else {
        if (train_no >= 11067 && train_no <= 11072) {
            train_type = "11A02"
        } else {
            if (train_no >= 11073 && train_no <= 11082) {
                train_type = "11A03"
            } else {
                error_check = 1
            }
        }
    }
    display();
}

function check_12() {
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
    if (train_no >= 12001 && train_no <= 12041) {
        train_type = "12A01"
    } else {
        if (train_no >= 12042 && train_no <= 12056) {
            train_type = "12A02"
        } else {
            if (train_no >= 12057 && train_no <= 12075) {
                train_type = "12A03"
            } else {
                error_check = 1
            }
        }
    }
    display();
}

function check_13() {
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
    if (train_no >= 13001 && train_no <= 13024) {
        train_type = "13A01"
    } else {
        if (train_no >= 13025 && train_no <= 13062) {
            train_type = "13A02"
        } else {
            if (train_no >= 13063 && train_no <= 13092) {
                train_type = "13A03"
            } else {
                error_check = 1
            }
        }
    }
    display();
}

function check_15() {
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
    if (train_no >= 15001 && train_no <= 15054) {
        train_type = "15A01"
    } else {
        error_check = 1
    }
    display();
}

function check_17() {
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
    if (train_no >= 17001 && train_no <= 17028) {
        train_type = "17A01"
    } else {
        if (train_no >= 17029 && train_no <= 17038) {
            train_type = "17A02"
        } else {
            error_check = 1
        }
    }
    display();
}

function check_18() {
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
    if (train_no >= 18001 && train_no <= 18050) {
        train_type = "18A01"
    } else {
        if (train_no >= 17051 && train_no <= 17056) {
            train_type = "18A02"
        } else {
            error_check = 1
        }
    }
    display();
}

function check_21() {
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
    if (train_no >= 21001 && train_no <= 21043) {
        train_type = "21A01"
    } else {
            error_check = 1
    }
    display();
}

//展示主体
function display() {
    if (error_check == 1) {
        output_text = "<span style='color: rgb(var(--mdui-color-error))'>错误：请检查您输入的车体号</span>"
        error_check = 0
    } else {
        output_text = "线路：" + line_text + "<br/>车号：" + train_no + "<br/>车型：" + train_type + "<br/>" + cart_type
    }
    document.getElementById("display_area").innerHTML = "<mdui-card class='output'>" + output_text + "</mdui-card>"
}