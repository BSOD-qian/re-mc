var userinput = 0;
var userinputn = 0;
var lineno = 0;
var year = 0
var carno = 0;
var year = 0;
var trainno = 0;
var trainno5 = 0;
var trainnoyear = 0;
var trainnosp = 0;
var final = 0;
var length = 0;
var type = 0;
var sp = 0;
var finalnum = 0;
var carnoerror = 0;
var url = window.location.href;
var canshu = url.split("?");
function read_num_after_load() {
    if (canshu.length == 2) {
        document.getElementById('input').value = canshu[1];
        document.title = canshu[1] + " - Re:地铁计算器"
        wuc();
    }
}
function wuc() {
    if (document.getElementById('05C01').checked == true) {
        m5();
    } else {
        receive();
    };
}
function receive() {
    userinput = document.getElementById('input').value;
    document.title = userinput + " - Re:地铁计算器"
    length = userinput.length;
    //lineno = Math.trunc(userinput / 100000 % 10) * 10 + Math.trunc(userinput / 10000 % 10);
    lineno = userinput.substr(0, 2);
    if (length != 0) {
        if (length == 5) {
            year = userinput.substr(0, 2);
            if (year == 02 || year == 03 || year == 04) {
                calc3();
            } else {
                myear();
            }
        } else {
            if (length != 6) {
                if (length != 7) {
                    document.getElementById('output').innerHTML = "车体号有误"
                } else {
                    pjos();
                }
            } else {
                if (lineno != 1) {
                    if (lineno != 2) {
                        if (lineno != 5) {
                            if (lineno != 6) {
                                if (lineno != 8) {
                                    if (lineno != 14) {
                                        if (lineno != 16) {
                                            calccommon();
                                        } else {
                                            calc16();
                                        }
                                    } else {
                                        calc14();
                                    }
                                } else {
                                    calc8();
                                }
                            } else {
                                calc6();
                            }
                        } else {
                            calc5();
                        }
                    } else {
                        calc2();
                    }
                } else {
                    carno = userinput.substr(2, 3);
                    if (carno <= 464 && carno >= 363) {
                        msp();
                    } else {
                        if (carno <= 234 && carno >= 175) {
                            msp();
                        } else {
                            calc1();
                        }
                    }
                }
            };
        }
    } else {
        document.getElementById('output').innerHTML = "未输入车体号"
        document.title = "Re:地铁计算器"
    }
}
function calccommon() {
    //carno = Math.trunc(userinput / 1000 % 10) * 100 + Math.trunc(userinput / 100 % 10) * 10 + Math.trunc(userinput / 10 % 10);
    carno = userinput.substr(2, 3)
    trainno = Math.ceil(carno / 6);
    final = lineno * 1000 + trainno
    if (final <= 4049 && final >= 4037) {
        final = final - 1000;
        lineno = lineno - 1;
        output();
    } else {
        output();
    }
}
function calc14() {
    //carno = Math.trunc(userinput / 1000 % 10) * 100 + Math.trunc(userinput / 100 % 10) * 10 + Math.trunc(userinput / 10 % 10);
    carno = userinput.substr(2, 3)
    trainno = Math.ceil(carno / 8);
    final = lineno * 1000 + trainno;
    output();
}
function calc5() {
    //carno = Math.trunc(userinput / 1000 % 10) * 100 + Math.trunc(userinput / 100 % 10) * 10 + Math.trunc(userinput / 10 % 10);
    carno = userinput.substr(2, 3)
    if (carno <= 52 && carno >= 1){
        trainno = Math.ceil(carno / 4);
    }else{
        if (carno <= 68 && carno >= 53){
            trainno = Math.ceil(carno / 4 + 1);
        }else{
            if (carno <= 266 && carno >= 69){
                trainno = Math.ceil((carno - 68) / 6 + 18);
            }else{
                
            }
        }
    }
    final = lineno * 1000 + trainno;
    output();
}
function calc6() {
    //carno = Math.trunc(userinput / 1000 % 10) * 100 + Math.trunc(userinput / 100 % 10) * 10 + Math.trunc(userinput / 10 % 10);
    carno = userinput.substr(2, 3)
    if (carno <= 12 && carno >= 1) {
        trainno = Math.ceil(carno / 4);
    } else {
        if (carno <= 48 && carno >= 13) {
            trainno = Math.ceil(carno / 4 + 1);
        } else {
            if (carno <= 84 && carno >= 49) {
                trainno = Math.ceil(carno / 4 + 2);
            } else {
                if (carno <= 120 && carno >= 85) {
                    trainno = Math.ceil(carno / 4 + 3);
                } else {
                    if (carno <= 156 && carno >= 121) {
                        trainno = Math.ceil(carno / 4 + 4);
                    } else {
                        if (carno <= 192 && carno >= 157) {
                            trainno = Math.ceil(carno / 4 + 5);
                        } else {
                            if (carno <= 304 && carno >= 193) {
                                trainno = Math.ceil(carno / 4 + 6);
                            } else {

                            }
                        }
                    }
                }
            }
        }
    }
    final = lineno * 1000 + trainno;
    output();
}
function calc8() {
    //carno = Math.trunc(userinput / 1000 % 10) * 100 + Math.trunc(userinput / 100 % 10) * 10 + Math.trunc(userinput / 10 % 10);
    carno = userinput.substr(2, 3)
    if (carno <= 168 && carno >= 1) {
        trainno = Math.ceil(carno / 6);
    } else {
        if (carno <= 602 && carno >= 169) {
            trainno = Math.ceil(carno / 7 + 4);
        } else {

        }
    }
    final = lineno * 1000 + trainno;
    output();
}
function calc16() {
    //carno = Math.trunc(userinput / 1000 % 10) * 100 + Math.trunc(userinput / 100 % 10) * 10 + Math.trunc(userinput / 10 % 10);
    carno = userinput.substr(2, 3);
    if (carno <= 138 && carno >= 1) {
        trainno = Math.ceil(carno / 3);
    } else {
        if (carno <= 228 && carno >= 139) {
            trainno = Math.ceil(carno / 6 + 23);
        } else {

        }
    }
    final = lineno * 1000 + trainno;
    output();
}
function pjos() {
    lineno = userinput.substr(0, 3);
    if (lineno == "T01") {
        calct01();
    } else {
        sjudge();
    }
}
function calct01() {
    lineno = userinput.substr(0, 3);
    carno = userinput.substr(3, 3);
    trainno = Math.ceil(carno / 4);
    final = lineno + trainno.toString().padStart(2, "0");
    output_t01();
}
function sjudge() {
    lineno = userinput.substr(0, 2);
    if (lineno == "JC") {
        calcjc();
    } else {
        document.getElementById('output').innerHTML = "车体号有误";
    }
}
function calcjc() {
    lineno = userinput.substr(0, 2);
    carno = userinput.substr(2, 4);
    trainno = carno
    final = lineno + trainno.toString().padStart(3, "0");
    output_jc();
}

function m5() {
    userinput = document.getElementById('input').value;
    document.title = userinput + " - Re:地铁计算器"
    userinputn = Number(userinput);
    trainno5 = new Array();
    trainno5[2011] = "线路：5号线<br/>车号：05001<br/>车型：05C01 番茄炒蛋<br/>特殊性：阿尔斯通进口列车<br/>Tc车"
    trainno5[2022] = "线路：5号线<br/>车号：05001<br/>车型：05C01 番茄炒蛋<br/>特殊性：阿尔斯通进口列车<br/>Mp车"
    trainno5[2032] = "线路：5号线<br/>车号：05001<br/>车型：05C01 番茄炒蛋<br/>特殊性：阿尔斯通进口列车<br/>Mp车"
    trainno5[2041] = "线路：5号线<br/>车号：05001<br/>车型：05C01 番茄炒蛋<br/>特殊性：阿尔斯通进口列车<br/>Tc车"
    trainno5[3011] = "线路：5号线<br/>车号：05002<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[3022] = "线路：5号线<br/>车号：05002<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[3032] = "线路：5号线<br/>车号：05002<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[3041] = "线路：5号线<br/>车号：05002<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[3051] = "线路：5号线<br/>车号：05003<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[3062] = "线路：5号线<br/>车号：05003<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[3072] = "线路：5号线<br/>车号：05003<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[3081] = "线路：5号线<br/>车号：05003<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[3091] = "线路：5号线<br/>车号：05004<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[3102] = "线路：5号线<br/>车号：05004<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[3112] = "线路：5号线<br/>车号：05004<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[3121] = "线路：5号线<br/>车号：05004<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[3131] = "线路：5号线<br/>车号：05005<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[3142] = "线路：5号线<br/>车号：05005<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[3152] = "线路：5号线<br/>车号：05005<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[3161] = "线路：5号线<br/>车号：05005<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[3171] = "线路：5号线<br/>车号：05006<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[3182] = "线路：5号线<br/>车号：05006<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[3192] = "线路：5号线<br/>车号：05006<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[3201] = "线路：5号线<br/>车号：05006<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[3211] = "线路：5号线<br/>车号：05007<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[3222] = "线路：5号线<br/>车号：05007<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[3232] = "线路：5号线<br/>车号：05007<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[3241] = "线路：5号线<br/>车号：05007<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[3251] = "线路：5号线<br/>车号：05008<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[3262] = "线路：5号线<br/>车号：05008<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[3272] = "线路：5号线<br/>车号：05008<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[3281] = "线路：5号线<br/>车号：05008<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[3291] = "线路：5号线<br/>车号：05009<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[3302] = "线路：5号线<br/>车号：05009<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[3312] = "线路：5号线<br/>车号：05009<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[3321] = "线路：5号线<br/>车号：05009<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[3331] = "线路：5号线<br/>车号：05010<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[3342] = "线路：5号线<br/>车号：05010<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[3352] = "线路：5号线<br/>车号：05010<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[3361] = "线路：5号线<br/>车号：05010<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[3371] = "线路：5号线<br/>车号：05011<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[3382] = "线路：5号线<br/>车号：05011<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[3392] = "线路：5号线<br/>车号：05011<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[3401] = "线路：5号线<br/>车号：05011<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[4011] = "线路：5号线<br/>车号：05012<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[4022] = "线路：5号线<br/>车号：05012<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[4032] = "线路：5号线<br/>车号：05012<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[4041] = "线路：5号线<br/>车号：05012<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[4051] = "线路：5号线<br/>车号：05013<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[4062] = "线路：5号线<br/>车号：05013<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[4072] = "线路：5号线<br/>车号：05013<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[4081] = "线路：5号线<br/>车号：05013<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[4091] = "线路：5号线<br/>车号：05018<br/>车型：05C01 番茄炒蛋<br/>特殊性：推算编号应为05014<br/>Tc车"
    trainno5[4102] = "线路：5号线<br/>车号：05018<br/>车型：05C01 番茄炒蛋<br/>特殊性：推算编号应为05014<br/>Mp车"
    trainno5[4112] = "线路：5号线<br/>车号：05018<br/>车型：05C01 番茄炒蛋<br/>特殊性：推算编号应为05014<br/>Mp车"
    trainno5[4121] = "线路：5号线<br/>车号：05018<br/>车型：05C01 番茄炒蛋<br/>特殊性：推算编号应为05014<br/>Tc车"
    trainno5[4131] = "线路：5号线<br/>车号：05015<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[4142] = "线路：5号线<br/>车号：05015<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[4152] = "线路：5号线<br/>车号：05015<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[4161] = "线路：5号线<br/>车号：05015<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[4171] = "线路：5号线<br/>车号：05016<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[4182] = "线路：5号线<br/>车号：05016<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[4192] = "线路：5号线<br/>车号：05016<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[4201] = "线路：5号线<br/>车号：05016<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[4211] = "线路：5号线<br/>车号：05017<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[4222] = "线路：5号线<br/>车号：05017<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[4232] = "线路：5号线<br/>车号：05017<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[4241] = "线路：5号线<br/>车号：05017<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[52011] = "线路：5号线<br/>车号：05001<br/>车型：05C01 番茄炒蛋<br/>特殊性：阿尔斯通进口列车<br/>Tc车"
    trainno5[52022] = "线路：5号线<br/>车号：05001<br/>车型：05C01 番茄炒蛋<br/>特殊性：阿尔斯通进口列车<br/>Mp车"
    trainno5[52032] = "线路：5号线<br/>车号：05001<br/>车型：05C01 番茄炒蛋<br/>特殊性：阿尔斯通进口列车<br/>Mp车"
    trainno5[52041] = "线路：5号线<br/>车号：05001<br/>车型：05C01 番茄炒蛋<br/>特殊性：阿尔斯通进口列车<br/>Tc车"
    trainno5[53011] = "线路：5号线<br/>车号：05002<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[53022] = "线路：5号线<br/>车号：05002<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[53032] = "线路：5号线<br/>车号：05002<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[53041] = "线路：5号线<br/>车号：05002<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[53051] = "线路：5号线<br/>车号：05003<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[53062] = "线路：5号线<br/>车号：05003<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[53072] = "线路：5号线<br/>车号：05003<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[53081] = "线路：5号线<br/>车号：05003<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[53091] = "线路：5号线<br/>车号：05004<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[53102] = "线路：5号线<br/>车号：05004<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[53112] = "线路：5号线<br/>车号：05004<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[53121] = "线路：5号线<br/>车号：05004<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[53131] = "线路：5号线<br/>车号：05005<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[53142] = "线路：5号线<br/>车号：05005<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[53152] = "线路：5号线<br/>车号：05005<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[53161] = "线路：5号线<br/>车号：05005<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[53171] = "线路：5号线<br/>车号：05006<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[53182] = "线路：5号线<br/>车号：05006<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[53192] = "线路：5号线<br/>车号：05006<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[53201] = "线路：5号线<br/>车号：05006<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[53211] = "线路：5号线<br/>车号：05007<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[53222] = "线路：5号线<br/>车号：05007<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[53232] = "线路：5号线<br/>车号：05007<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[53241] = "线路：5号线<br/>车号：05007<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[53251] = "线路：5号线<br/>车号：05008<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[53262] = "线路：5号线<br/>车号：05008<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[53272] = "线路：5号线<br/>车号：05008<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[53281] = "线路：5号线<br/>车号：05008<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[53291] = "线路：5号线<br/>车号：05009<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[53302] = "线路：5号线<br/>车号：05009<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[53312] = "线路：5号线<br/>车号：05009<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[53321] = "线路：5号线<br/>车号：05009<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[53331] = "线路：5号线<br/>车号：05010<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[53342] = "线路：5号线<br/>车号：05010<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[53352] = "线路：5号线<br/>车号：05010<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[53361] = "线路：5号线<br/>车号：05010<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[53371] = "线路：5号线<br/>车号：05011<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[53382] = "线路：5号线<br/>车号：05011<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[53392] = "线路：5号线<br/>车号：05011<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[53401] = "线路：5号线<br/>车号：05011<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[54011] = "线路：5号线<br/>车号：05012<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[54022] = "线路：5号线<br/>车号：05012<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[54032] = "线路：5号线<br/>车号：05012<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[54041] = "线路：5号线<br/>车号：05012<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[54051] = "线路：5号线<br/>车号：05013<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[54062] = "线路：5号线<br/>车号：05013<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[54072] = "线路：5号线<br/>车号：05013<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[54081] = "线路：5号线<br/>车号：05013<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[54091] = "线路：5号线<br/>车号：05018<br/>车型：05C01 番茄炒蛋<br/>特殊性：推算编号应为05014<br/>Tc车"
    trainno5[54102] = "线路：5号线<br/>车号：05018<br/>车型：05C01 番茄炒蛋<br/>特殊性：推算编号应为05014<br/>Mp车"
    trainno5[54112] = "线路：5号线<br/>车号：05018<br/>车型：05C01 番茄炒蛋<br/>特殊性：推算编号应为05014<br/>Mp车"
    trainno5[54121] = "线路：5号线<br/>车号：05018<br/>车型：05C01 番茄炒蛋<br/>特殊性：推算编号应为05014<br/>Tc车"
    trainno5[54131] = "线路：5号线<br/>车号：05015<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[54142] = "线路：5号线<br/>车号：05015<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[54152] = "线路：5号线<br/>车号：05015<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[54161] = "线路：5号线<br/>车号：05015<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[54171] = "线路：5号线<br/>车号：05016<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[54182] = "线路：5号线<br/>车号：05016<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[54192] = "线路：5号线<br/>车号：05016<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[54201] = "线路：5号线<br/>车号：05016<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[54211] = "线路：5号线<br/>车号：05017<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    trainno5[54222] = "线路：5号线<br/>车号：05017<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[54232] = "线路：5号线<br/>车号：05017<br/>车型：05C01 番茄炒蛋<br/>Mp车"
    trainno5[54241] = "线路：5号线<br/>车号：05017<br/>车型：05C01 番茄炒蛋<br/>Tc车"
    if (trainno5[userinputn] == undefined) {
        document.getElementById('output').innerHTML = '车体号有误';
    } else {
        document.getElementById('output').innerHTML = trainno5[userinputn];
    }
}

function calc3() {
    carno = userinput.substr(2, 2);
    if (carno == 0) {
        carnoerror == 1;
        output_3();
    } else {
        if (year == 02) {
            trainno = Math.ceil(carno / 6)
            final = trainno + 3000
            output_3();
        } else {
            if (year == 03) {
                trainno = Math.ceil(carno / 6 + 5)
                final = trainno + 3000
                output_3();
            } else {
                if (year == 04) {
                    trainno = Math.ceil(carno / 6 + 21)
                    final = trainno + 3000
                    output_3();
                }
            }
        }
    }
};

function calc2() {
    carno = userinput.substr(2, 3);
    if (carno <= 424 && carno >= 129 || carno <= 800 && carno >= 553) {
        trainno = Math.ceil(carno / 8 + 16);
        final = lineno * 1000 + trainno;
        output();
    } else {
        if (carno <= 488 && carno >= 425) {
            trainno = Math.ceil(carno / 4 - 37);
            final = lineno * 1000 + trainno;
            output();
        } else {
            if (carno <= 552 && carno >= 489) {
                trainno = Math.ceil(carno / 4 - 53);
                final = lineno * 1000 + trainno;
                output();
            } else {
                document.getElementById('output').innerHTML = '车体号有误';
            }
        }
    }
}

function calc1() {
    carno = userinput.substr(2, 3);
    if (carno <= 362 && carno >= 235) {
        trainno = Math.ceil((carno - 234) / 8 + 39);
        final = lineno * 1000 + trainno;
        output();
    } else {
        if (carno <= 715 && carno >= 468) {
            trainno = Math.ceil((carno - 467) / 8 + 55);
            final = lineno * 1000 + trainno;
            output();
        } else {
            document.getElementById('output').innerHTML = '车体号有误';
        }
    }
}

function myear() {
    userinput = document.getElementById('input').value;
    userinputn = Number(userinput);
    trainnoyear = new Array();
    //01A01
    trainnoyear[92011] = "线路：1号线<br/>车号：01001<br/>车型：01A01 老老八<br/>特殊性：张江实训专用车<br/>Tc车"
    trainnoyear[92022] = "线路：1号线<br/>车号：01001<br/>车型：01A01 老老八<br/>特殊性：张江实训专用车<br/>Mp车"
    trainnoyear[92033] = "线路：1号线<br/>车号：01001<br/>车型：01A01 老老八<br/>特殊性：张江实训专用车<br/>M车"
    trainnoyear[93442] = "线路：1号线<br/>车号：01001<br/>车型：01A01 老老八<br/>特殊性：张江实训专用车<br/>Mp车"
    trainnoyear[93453] = "线路：1号线<br/>车号：01001<br/>车型：01A01 老老八<br/>特殊性：张江实训专用车<br/>M车"
    trainnoyear[94102] = "线路：1号线<br/>车号：01001<br/>车型：01A01 老老八<br/>特殊性：张江实训专用车<br/>Mp车"
    trainnoyear[94113] = "线路：1号线<br/>车号：01001<br/>车型：01A01 老老八<br/>特殊性：张江实训专用车<br/>M车"
    trainnoyear[94121] = "线路：1号线<br/>车号：01001<br/>车型：01A01 老老八<br/>特殊性：张江实训专用车<br/>Tc车"
    trainnoyear[93121] = "线路：1号线<br/>车号：01002<br/>车型：01A01 老老八<br/>特殊性：含特殊扩编车厢、曾为备件车，最后一列扩编<br/>Tc车"
    trainnoyear[93262] = "线路：1号线<br/>车号：01002<br/>车型：01A01 老老八<br/>特殊性：含特殊扩编车厢、曾为备件车，最后一列扩编<br/>Mp车"
    trainnoyear[93273] = "线路：1号线<br/>车号：01002<br/>车型：01A01 老老八<br/>特殊性：含特殊扩编车厢、曾为备件车，最后一列扩编<br/>M车"
    trainnoyear[14652] = "线路：1号线<br/>车号：01002<br/>车型：01A01 老老八<br/>特殊性：含特殊扩编车厢、曾为备件车，最后一列扩编<br/>Mp车"
    trainnoyear[14663] = "线路：1号线<br/>车号：01002<br/>车型：01A01 老老八<br/>特殊性：含特殊扩编车厢、曾为备件车，最后一列扩编<br/>M车"
    trainnoyear[92102] = "线路：1号线<br/>车号：01002<br/>车型：01A01 老老八<br/>特殊性：含特殊扩编车厢、曾为备件车，最后一列扩编<br/>Mp车"
    trainnoyear[93233] = "线路：1号线<br/>车号：01002<br/>车型：01A01 老老八<br/>特殊性：含特殊扩编车厢、曾为备件车，最后一列扩编<br/>M车"
    trainnoyear[93311] = "线路：1号线<br/>车号：01002<br/>车型：01A01 老老八<br/>特殊性：含特殊扩编车厢、曾为备件车，最后一列扩编<br/>Tc车"
    trainnoyear[92131] = "线路：1号线<br/>车号：01003<br/>车型：01A01 老老八<br/>Tc车"
    trainnoyear[92142] = "线路：1号线<br/>车号：01003<br/>车型：01A01 老老八<br/>Mp车"
    trainnoyear[92153] = "线路：1号线<br/>车号：01003<br/>车型：01A01 老老八<br/>M车"
    trainnoyear[94022] = "线路：1号线<br/>车号：01003<br/>车型：01A01 老老八<br/>Mp车"
    trainnoyear[94033] = "线路：1号线<br/>车号：01003<br/>车型：01A01 老老八<br/>M车"
    trainnoyear[92162] = "线路：1号线<br/>车号：01003<br/>车型：01A01 老老八<br/>Mp车"
    trainnoyear[92173] = "线路：1号线<br/>车号：01003<br/>车型：01A01 老老八<br/>M车"
    trainnoyear[92181] = "线路：1号线<br/>车号：01003<br/>车型：01A01 老老八<br/>Tc车"
    trainnoyear[92191] = "线路：1号线<br/>车号：01004<br/>车型：01A01 老老八<br/>Tc车"
    trainnoyear[92202] = "线路：1号线<br/>车号：01004<br/>车型：01A01 老老八<br/>Mp车"
    trainnoyear[92213] = "线路：1号线<br/>车号：01004<br/>车型：01A01 老老八<br/>M车"
    trainnoyear[94202] = "线路：1号线<br/>车号：01004<br/>车型：01A01 老老八<br/>Mp车"
    trainnoyear[94213] = "线路：1号线<br/>车号：01004<br/>车型：01A01 老老八<br/>M车"
    trainnoyear[92222] = "线路：1号线<br/>车号：01004<br/>车型：01A01 老老八<br/>Mp车"
    trainnoyear[92233] = "线路：1号线<br/>车号：01004<br/>车型：01A01 老老八<br/>M车"
    trainnoyear[92241] = "线路：1号线<br/>车号：01004<br/>车型：01A01 老老八<br/>Tc车"
    trainnoyear[93011] = "线路：1号线<br/>车号：01005<br/>车型：01A01 老老八<br/>Tc车"
    trainnoyear[93022] = "线路：1号线<br/>车号：01005<br/>车型：01A01 老老八<br/>Mp车"
    trainnoyear[93033] = "线路：1号线<br/>车号：01005<br/>车型：01A01 老老八<br/>M车"
    trainnoyear[94162] = "线路：1号线<br/>车号：01005<br/>车型：01A01 老老八<br/>Mp车"
    trainnoyear[94173] = "线路：1号线<br/>车号：01005<br/>车型：01A01 老老八<br/>M车"
    trainnoyear[93042] = "线路：1号线<br/>车号：01005<br/>车型：01A01 老老八<br/>Mp车"
    trainnoyear[93053] = "线路：1号线<br/>车号：01005<br/>车型：01A01 老老八<br/>M车"
    trainnoyear[93061] = "线路：1号线<br/>车号：01005<br/>车型：01A01 老老八<br/>Tc车"
    trainnoyear[92061] = "线路：1号线<br/>车号：01006<br/>车型：01A01 老老八<br/>Tc车"
    trainnoyear[92053] = "线路：1号线<br/>车号：01006<br/>车型：01A01 老老八<br/>M车"
    trainnoyear[92042] = "线路：1号线<br/>车号：01006<br/>车型：01A01 老老八<br/>Mp车"
    trainnoyear[94053] = "线路：1号线<br/>车号：01006<br/>车型：01A01 老老八<br/>M车"
    trainnoyear[94042] = "线路：1号线<br/>车号：01006<br/>车型：01A01 老老八<br/>Mp车"
    trainnoyear[94093] = "线路：1号线<br/>车号：01006<br/>车型：01A01 老老八<br/>M车"
    trainnoyear[94082] = "线路：1号线<br/>车号：01006<br/>车型：01A01 老老八<br/>Mp车"
    trainnoyear[94071] = "线路：1号线<br/>车号：01006<br/>车型：01A01 老老八<br/>Tc车"
    trainnoyear[93251] = "线路：1号线<br/>车号：01007<br/>车型：01A01 老老八<br/>Tc车"
    trainnoyear[93142] = "线路：1号线<br/>车号：01007<br/>车型：01A01 老老八<br/>Mp车"
    trainnoyear[93153] = "线路：1号线<br/>车号：01007<br/>车型：01A01 老老八<br/>M车"
    trainnoyear[93462] = "线路：1号线<br/>车号：01007<br/>车型：01A01 老老八<br/>Mp车"
    trainnoyear[93473] = "线路：1号线<br/>车号：01007<br/>车型：01A01 老老八<br/>M车"
    trainnoyear[93282] = "线路：1号线<br/>车号：01007<br/>车型：01A01 老老八<br/>Mp车"
    trainnoyear[93173] = "线路：1号线<br/>车号：01007<br/>车型：01A01 老老八<br/>M车"
    trainnoyear[92121] = "线路：1号线<br/>车号：01007<br/>车型：01A01 老老八<br/>Tc车"
    trainnoyear[93191] = "线路：1号线<br/>车号：01008<br/>车型：01A01 老老八<br/>特殊性：含国产首节A型车暨特殊修复车厢,最后一列扩编的DC01B型<br/>Tc车"
    trainnoyear[93202] = "线路：1号线<br/>车号：01008<br/>车型：01A01 老老八<br/>特殊性：含国产首节A型车暨特殊修复车厢,最后一列扩编的DC01B型<br/>Mp车"
    trainnoyear[93213] = "线路：1号线<br/>车号：01008<br/>车型：01A01 老老八<br/>特殊性：含国产首节A型车暨特殊修复车厢,最后一列扩编的DC01B型<br/>M车"
    trainnoyear[94142] = "线路：1号线<br/>车号：01008<br/>车型：01A01 老老八<br/>特殊性：含国产首节A型车暨特殊修复车厢,最后一列扩编的DC01B型<br/>Mp车"
    trainnoyear[94153] = "线路：1号线<br/>车号：01008<br/>车型：01A01 老老八<br/>特殊性：含国产首节A型车暨特殊修复车厢,最后一列扩编的DC01B型<br/>M车"
    trainnoyear[93222] = "线路：1号线<br/>车号：01008<br/>车型：01A01 老老八<br/>特殊性：含国产首节A型车暨特殊修复车厢,最后一列扩编的DC01B型<br/>Mp车"
    trainnoyear[92113] = "线路：1号线<br/>车号：01008<br/>车型：01A01 老老八<br/>特殊性：含国产首节A型车暨特殊修复车厢,最后一列扩编的DC01B型<br/>M车"
    trainnoyear[93361] = "线路：1号线<br/>车号：01008<br/>车型：01A01 老老八<br/>特殊性：含国产首节A型车暨特殊修复车厢,最后一列扩编的DC01B型<br/>Tc车"
    trainnoyear[93131] = "线路：1号线<br/>车号：01009<br/>车型：01A01 老老八<br/>特殊性：现作备件车<br/>Tc车"
    trainnoyear[93322] = "线路：1号线<br/>车号：01009<br/>车型：01A01 老老八<br/>特殊性：现作备件车<br/>Mp车"
    trainnoyear[93333] = "线路：1号线<br/>车号：01009<br/>车型：01A01 老老八<br/>特殊性：现作备件车<br/>M车"
    trainnoyear[93402] = "线路：1号线<br/>车号：01009<br/>车型：01A01 老老八<br/>特殊性：现作备件车<br/>Mp车"
    trainnoyear[93413] = "线路：1号线<br/>车号：01009<br/>车型：01A01 老老八<br/>特殊性：现作备件车<br/>M车"
    trainnoyear[93162] = "线路：1号线<br/>车号：01009<br/>车型：01A01 老老八<br/>特殊性：现作备件车<br/>Mp车"
    trainnoyear[93293] = "线路：1号线<br/>车号：01009<br/>车型：01A01 老老八<br/>特殊性：现作备件车<br/>M车"
    trainnoyear[93301] = "线路：1号线<br/>车号：01009<br/>车型：01A01 老老八<br/>特殊性：现作备件车<br/>Tc车"
    trainnoyear[93181] = "线路：1号线<br/>车号：01010<br/>车型：01A01 老老八<br/>Tc车"
    trainnoyear[93353] = "线路：1号线<br/>车号：01010<br/>车型：01A01 老老八<br/>M车"
    trainnoyear[93342] = "线路：1号线<br/>车号：01010<br/>车型：01A01 老老八<br/>Mp车"
    trainnoyear[94233] = "线路：1号线<br/>车号：01010<br/>车型：01A01 老老八<br/>M车"
    trainnoyear[94222] = "线路：1号线<br/>车号：01010<br/>车型：01A01 老老八<br/>Mp车"
    trainnoyear[92093] = "线路：1号线<br/>车号：01010<br/>车型：01A01 老老八<br/>M车"
    trainnoyear[92082] = "线路：1号线<br/>车号：01010<br/>车型：01A01 老老八<br/>Mp车"
    trainnoyear[92071] = "线路：1号线<br/>车号：01010<br/>车型：01A01 老老八<br/>Tc车"
    trainnoyear[93071] = "线路：1号线<br/>车号：01014<br/>车型：01A01 老老八<br/>特殊性：首列直改交且扩编同时进行，首列上线<br/>Tc车"
    trainnoyear[93082] = "线路：1号线<br/>车号：01014<br/>车型：01A01 老老八<br/>特殊性：首列直改交且扩编同时进行，首列上线<br/>Mp车"
    trainnoyear[93093] = "线路：1号线<br/>车号：01014<br/>车型：01A01 老老八<br/>特殊性：首列直改交且扩编同时进行，首列上线<br/>M车"
    trainnoyear[93382] = "线路：1号线<br/>车号：01014<br/>车型：01A01 老老八<br/>特殊性：首列直改交且扩编同时进行，首列上线<br/>Mp车"
    trainnoyear[93393] = "线路：1号线<br/>车号：01014<br/>车型：01A01 老老八<br/>特殊性：首列直改交且扩编同时进行，首列上线<br/>M车"
    trainnoyear[93102] = "线路：1号线<br/>车号：01014<br/>车型：01A01 老老八<br/>特殊性：首列直改交且扩编同时进行，首列上线<br/>Mp车"
    trainnoyear[93113] = "线路：1号线<br/>车号：01014<br/>车型：01A01 老老八<br/>特殊性：首列直改交且扩编同时进行，首列上线<br/>M车"
    trainnoyear[93241] = "线路：1号线<br/>车号：01014<br/>车型：01A01 老老八<br/>特殊性：首列直改交且扩编同时进行，首列上线<br/>Tc车"
    //01A02
    trainnoyear[93371] = "线路：1号线<br/>车号：01011<br/>车型：01A02 伪八二世<br/>Tc车"
    trainnoyear[93421] = "线路：1号线<br/>车号：01011<br/>车型：01A02 伪八二世<br/>Tc车"
    trainnoyear[93431] = "线路：1号线<br/>车号：01012<br/>车型：01A02 伪八二世<br/>Tc车"
    trainnoyear[93481] = "线路：1号线<br/>车号：01012<br/>车型：01A02 伪八二世<br/>Tc车"
    trainnoyear[94011] = "线路：1号线<br/>车号：01013<br/>车型：01A02 伪八二世<br/>特殊性：首列上线<br/>Tc车"
    trainnoyear[94061] = "线路：1号线<br/>车号：01013<br/>车型：01A02 伪八二世<br/>特殊性：首列上线<br/>Tc车"
    trainnoyear[94131] = "线路：1号线<br/>车号：01015<br/>车型：01A02 伪八二世<br/>Tc车"
    trainnoyear[94181] = "线路：1号线<br/>车号：01015<br/>车型：01A02 伪八二世<br/>Tc车"
    trainnoyear[94191] = "线路：1号线<br/>车号：01016<br/>车型：01A02 伪八二世<br/>特殊性：最后一列上线<br/>Tc车"
    trainnoyear[94241] = "线路：1号线<br/>车号：01016<br/>车型：01A02 伪八二世<br/>特殊性：最后一列上线<br/>Tc车"
    //01A03
    trainnoyear[98011] = "线路：1号线<br/>车号：01017<br/>车型：01A03 老八<br/>特殊性：含特殊扩编车厢及修复车厢，最后一列扩编<br/>Tc车"
    trainnoyear[98022] = "线路：1号线<br/>车号：01017<br/>车型：01A03 老八<br/>特殊性：含特殊扩编车厢及修复车厢，最后一列扩编<br/>Mp车"
    trainnoyear[98033] = "线路：1号线<br/>车号：01017<br/>车型：01A03 老八<br/>特殊性：含特殊扩编车厢及修复车厢，最后一列扩编<br/>M车"
    trainnoyear[14672] = "线路：1号线<br/>车号：01017<br/>车型：01A03 老八<br/>特殊性：含特殊扩编车厢及修复车厢，最后一列扩编<br/>Mp车"
    trainnoyear[14683] = "线路：1号线<br/>车号：01017<br/>车型：01A03 老八<br/>特殊性：含特殊扩编车厢及修复车厢，最后一列扩编<br/>M车"
    trainnoyear[98042] = "线路：1号线<br/>车号：01017<br/>车型：01A03 老八<br/>特殊性：含特殊扩编车厢及修复车厢，最后一列扩编<br/>Mp车"
    trainnoyear[98053] = "线路：1号线<br/>车号：01017<br/>车型：01A03 老八<br/>特殊性：含特殊扩编车厢及修复车厢，最后一列扩编<br/>M车"
    trainnoyear[98061] = "线路：1号线<br/>车号：01017<br/>车型：01A03 老八<br/>特殊性：含特殊扩编车厢及修复车厢，最后一列扩编<br/>Tc车"
    trainnoyear[99011] = "线路：1号线<br/>车号：01018<br/>车型：01A03 老八<br/>特殊性：首列上线<br/>Tc车"
    trainnoyear[99022] = "线路：1号线<br/>车号：01018<br/>车型：01A03 老八<br/>特殊性：首列上线<br/>Mp车"
    trainnoyear[99033] = "线路：1号线<br/>车号：01018<br/>车型：01A03 老八<br/>特殊性：首列上线<br/>M车"
    trainnoyear[1802] = "线路：1号线<br/>车号：01018<br/>车型：01A03 老八<br/>特殊性：首列上线<br/>Mp车"
    trainnoyear[1813] = "线路：1号线<br/>车号：01018<br/>车型：01A03 老八<br/>特殊性：首列上线<br/>M车"
    trainnoyear[99042] = "线路：1号线<br/>车号：01018<br/>车型：01A03 老八<br/>特殊性：首列上线<br/>Mp车"
    trainnoyear[99053] = "线路：1号线<br/>车号：01018<br/>车型：01A03 老八<br/>特殊性：首列上线<br/>M车"
    trainnoyear[99061] = "线路：1号线<br/>车号：01018<br/>车型：01A03 老八<br/>特殊性：首列上线<br/>Tc车"
    trainnoyear[99071] = "线路：1号线<br/>车号：01019<br/>车型：01A03 老八<br/>Tc车"
    trainnoyear[99082] = "线路：1号线<br/>车号：01019<br/>车型：01A03 老八<br/>Mp车"
    trainnoyear[99093] = "线路：1号线<br/>车号：01019<br/>车型：01A03 老八<br/>M车"
    trainnoyear[1822] = "线路：1号线<br/>车号：01019<br/>车型：01A03 老八<br/>Mp车"
    trainnoyear[1833] = "线路：1号线<br/>车号：01019<br/>车型：01A03 老八<br/>M车"
    trainnoyear[99102] = "线路：1号线<br/>车号：01019<br/>车型：01A03 老八<br/>Mp车"
    trainnoyear[99113] = "线路：1号线<br/>车号：01019<br/>车型：01A03 老八<br/>M车"
    trainnoyear[99121] = "线路：1号线<br/>车号：01019<br/>车型：01A03 老八<br/>Tc车"
    trainnoyear[99131] = "线路：1号线<br/>车号：01020<br/>车型：01A03 老八<br/>Tc车"
    trainnoyear[99142] = "线路：1号线<br/>车号：01020<br/>车型：01A03 老八<br/>Mp车"
    trainnoyear[99153] = "线路：1号线<br/>车号：01020<br/>车型：01A03 老八<br/>M车"
    trainnoyear[99502] = "线路：1号线<br/>车号：01020<br/>车型：01A03 老八<br/>Mp车"
    trainnoyear[99513] = "线路：1号线<br/>车号：01020<br/>车型：01A03 老八<br/>M车"
    trainnoyear[99162] = "线路：1号线<br/>车号：01020<br/>车型：01A03 老八<br/>Mp车"
    trainnoyear[99173] = "线路：1号线<br/>车号：01020<br/>车型：01A03 老八<br/>M车"
    trainnoyear[99181] = "线路：1号线<br/>车号：01020<br/>车型：01A03 老八<br/>Tc车"
    trainnoyear[99191] = "线路：1号线<br/>车号：01021<br/>车型：01A03 老八<br/>特殊性：最后一列扩编的AC01B型<br/>Tc车"
    trainnoyear[99202] = "线路：1号线<br/>车号：01021<br/>车型：01A03 老八<br/>特殊性：最后一列扩编的AC01B型<br/>Mp车"
    trainnoyear[99213] = "线路：1号线<br/>车号：01021<br/>车型：01A03 老八<br/>特殊性：最后一列扩编的AC01B型<br/>M车"
    trainnoyear[99522] = "线路：1号线<br/>车号：01021<br/>车型：01A03 老八<br/>特殊性：最后一列扩编的AC01B型<br/>Mp车"
    trainnoyear[99533] = "线路：1号线<br/>车号：01021<br/>车型：01A03 老八<br/>特殊性：最后一列扩编的AC01B型<br/>M车"
    trainnoyear[99222] = "线路：1号线<br/>车号：01021<br/>车型：01A03 老八<br/>特殊性：最后一列扩编的AC01B型<br/>Mp车"
    trainnoyear[99233] = "线路：1号线<br/>车号：01021<br/>车型：01A03 老八<br/>特殊性：最后一列扩编的AC01B型<br/>M车"
    trainnoyear[99241] = "线路：1号线<br/>车号：01021<br/>车型：01A03 老八<br/>特殊性：最后一列扩编的AC01B型<br/>Tc车"
    trainnoyear[99251] = "线路：1号线<br/>车号：01022<br/>车型：01A03 老八<br/>Tc车"
    trainnoyear[99262] = "线路：1号线<br/>车号：01022<br/>车型：01A03 老八<br/>Mp车"
    trainnoyear[99273] = "线路：1号线<br/>车号：01022<br/>车型：01A03 老八<br/>M车"
    trainnoyear[22] = "线路：1号线<br/>车号：01022<br/>车型：01A03 老八<br/>Mp车"
    trainnoyear[33] = "线路：1号线<br/>车号：01022<br/>车型：01A03 老八<br/>M车"
    trainnoyear[99282] = "线路：1号线<br/>车号：01022<br/>车型：01A03 老八<br/>Mp车"
    trainnoyear[99293] = "线路：1号线<br/>车号：01022<br/>车型：01A03 老八<br/>M车"
    trainnoyear[99301] = "线路：1号线<br/>车号：01022<br/>车型：01A03 老八<br/>Tc车"
    trainnoyear[99311] = "线路：1号线<br/>车号：01023<br/>车型：01A03 老八<br/>Tc车"
    trainnoyear[99322] = "线路：1号线<br/>车号：01023<br/>车型：01A03 老八<br/>Mp车"
    trainnoyear[99333] = "线路：1号线<br/>车号：01023<br/>车型：01A03 老八<br/>M车"
    trainnoyear[42] = "线路：1号线<br/>车号：01023<br/>车型：01A03 老八<br/>Mp车"
    trainnoyear[53] = "线路：1号线<br/>车号：01023<br/>车型：01A03 老八<br/>M车"
    trainnoyear[99342] = "线路：1号线<br/>车号：01023<br/>车型：01A03 老八<br/>Mp车"
    trainnoyear[99353] = "线路：1号线<br/>车号：01023<br/>车型：01A03 老八<br/>M车"
    trainnoyear[99361] = "线路：1号线<br/>车号：01023<br/>车型：01A03 老八<br/>Tc车"
    trainnoyear[99371] = "线路：1号线<br/>车号：01024<br/>车型：01A03 老八<br/>Tc车"
    trainnoyear[99382] = "线路：1号线<br/>车号：01024<br/>车型：01A03 老八<br/>Mp车"
    trainnoyear[99393] = "线路：1号线<br/>车号：01024<br/>车型：01A03 老八<br/>M车"
    trainnoyear[1742] = "线路：1号线<br/>车号：01024<br/>车型：01A03 老八<br/>Mp车"
    trainnoyear[1753] = "线路：1号线<br/>车号：01024<br/>车型：01A03 老八<br/>M车"
    trainnoyear[99402] = "线路：1号线<br/>车号：01024<br/>车型：01A03 老八<br/>特殊性：大修后更换为电动门<br/>Mp车"
    trainnoyear[99413] = "线路：1号线<br/>车号：01024<br/>车型：01A03 老八<br/>M车"
    trainnoyear[99421] = "线路：1号线<br/>车号：01024<br/>车型：01A03 老八<br/>Tc车"
    trainnoyear[99431] = "线路：1号线<br/>车号：01025<br/>车型：01A03 老八<br/>Tc车"
    trainnoyear[99442] = "线路：1号线<br/>车号：01025<br/>车型：01A03 老八<br/>Mp车"
    trainnoyear[99453] = "线路：1号线<br/>车号：01025<br/>车型：01A03 老八<br/>M车"
    trainnoyear[1762] = "线路：1号线<br/>车号：01025<br/>车型：01A03 老八<br/>Mp车"
    trainnoyear[1773] = "线路：1号线<br/>车号：01025<br/>车型：01A03 老八<br/>M车"
    trainnoyear[99462] = "线路：1号线<br/>车号：01025<br/>车型：01A03 老八<br/>Mp车"
    trainnoyear[99473] = "线路：1号线<br/>车号：01025<br/>车型：01A03 老八<br/>M车"
    trainnoyear[99481] = "线路：1号线<br/>车号：01025<br/>车型：01A03 老八<br/>Tc车"
    //01A04
    trainnoyear[99541] = "线路：1号线<br/>车号：01026<br/>车型：01A04 伪八<br/>特殊性：首列上线<br/>Tc车"
    trainnoyear[99491] = "线路：1号线<br/>车号：01026<br/>车型：01A04 伪八<br/>特殊性：首列上线<br/>Tc车"
    trainnoyear[61] = "线路：1号线<br/>车号：01027<br/>车型：01A04 伪八<br/>Tc车"
    trainnoyear[11] = "线路：1号线<br/>车号：01027<br/>车型：01A04 伪八<br/>Tc车"
    trainnoyear[1781] = "线路：1号线<br/>车号：01028<br/>车型：01A04 伪八<br/>Tc车"
    trainnoyear[1731] = "线路：1号线<br/>车号：01028<br/>车型：01A04 伪八<br/>Tc车"
    trainnoyear[1841] = "线路：1号线<br/>车号：01029<br/>车型：01A04 伪八<br/>特殊性：此车在株机扩编<br/>Tc车"
    trainnoyear[1791] = "线路：1号线<br/>车号：01029<br/>车型：01A04 伪八<br/>特殊性：此车在株机扩编<br/>Tc车"
    trainnoyear[1251] = "线路：1号线<br/>车号：01030<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02017<br/>Tc车"
    trainnoyear[1301] = "线路：1号线<br/>车号：01030<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02017<br/>Tc车"
    trainnoyear[1311] = "线路：1号线<br/>车号：01031<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02018<br/>Tc车"
    trainnoyear[1361] = "线路：1号线<br/>车号：01031<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02018<br/>Tc车"
    trainnoyear[1371] = "线路：1号线<br/>车号：01032<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02019<br/>Tc车"
    trainnoyear[1421] = "线路：1号线<br/>车号：01032<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02019<br/>Tc车"
    trainnoyear[1431] = "线路：1号线<br/>车号：01033<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02020，首列扩编且上线<br/>Tc车"
    trainnoyear[1481] = "线路：1号线<br/>车号：01033<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02020，首列扩编且上线<br/>Tc车"
    trainnoyear[1491] = "线路：1号线<br/>车号：01034<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02021<br/>Tc车"
    trainnoyear[1541] = "线路：1号线<br/>车号：01034<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02021<br/>Tc车"
    trainnoyear[1551] = "线路：1号线<br/>车号：01035<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02022<br/>Tc车"
    trainnoyear[1601] = "线路：1号线<br/>车号：01035<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02022<br/>Tc车"
    trainnoyear[1611] = "线路：1号线<br/>车号：01036<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02023<br/>Tc车"
    trainnoyear[1661] = "线路：1号线<br/>车号：01036<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02023<br/>Tc车"
    trainnoyear[1671] = "线路：1号线<br/>车号：01037<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02024<br/>Tc车"
    trainnoyear[1721] = "线路：1号线<br/>车号：01037<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02024<br/>Tc车"
    //02A01
    trainnoyear[71] = "线路：2号线<br/>车号：02001<br/>车型：02A01 西瓜<br/>特殊性：首列安装CBTC信号<br/>Tc车"
    trainnoyear[82] = "线路：2号线<br/>车号：02001<br/>车型：02A01 西瓜<br/>特殊性：首列安装CBTC信号<br/>Mp车"
    trainnoyear[93] = "线路：2号线<br/>车号：02001<br/>车型：02A01 西瓜<br/>特殊性：首列安装CBTC信号<br/>M车"
    trainnoyear[1262] = "线路：2号线<br/>车号：02001<br/>车型：02A01 西瓜<br/>特殊性：首列安装CBTC信号<br/>Mp车"
    trainnoyear[1273] = "线路：2号线<br/>车号：02001<br/>车型：02A01 西瓜<br/>特殊性：首列安装CBTC信号<br/>M车"
    trainnoyear[102] = "线路：2号线<br/>车号：02001<br/>车型：02A01 西瓜<br/>特殊性：首列安装CBTC信号<br/>Mp车"
    trainnoyear[113] = "线路：2号线<br/>车号：02001<br/>车型：02A01 西瓜<br/>特殊性：首列安装CBTC信号<br/>M车"
    trainnoyear[121] = "线路：2号线<br/>车号：02001<br/>车型：02A01 西瓜<br/>特殊性：首列安装CBTC信号<br/>Tc车"
    trainnoyear[131] = "线路：2号线<br/>车号：02002<br/>车型：02A01 西瓜<br/>Tc车"
    trainnoyear[142] = "线路：2号线<br/>车号：02002<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[153] = "线路：2号线<br/>车号：02002<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[1282] = "线路：2号线<br/>车号：02002<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[1293] = "线路：2号线<br/>车号：02002<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[162] = "线路：2号线<br/>车号：02002<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[173] = "线路：2号线<br/>车号：02002<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[181] = "线路：2号线<br/>车号：02002<br/>车型：02A01 西瓜<br/>Tc车"
    trainnoyear[191] = "线路：2号线<br/>车号：02003<br/>车型：02A01 西瓜<br/>Tc车"
    trainnoyear[202] = "线路：2号线<br/>车号：02003<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[213] = "线路：2号线<br/>车号：02003<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[1322] = "线路：2号线<br/>车号：02003<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[1333] = "线路：2号线<br/>车号：02003<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[222] = "线路：2号线<br/>车号：02003<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[233] = "线路：2号线<br/>车号：02003<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[241] = "线路：2号线<br/>车号：02003<br/>车型：02A01 西瓜<br/>Tc车"
    trainnoyear[251] = "线路：2号线<br/>车号：02004<br/>车型：02A01 西瓜<br/>Tc车"
    trainnoyear[262] = "线路：2号线<br/>车号：02004<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[273] = "线路：2号线<br/>车号：02004<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[1342] = "线路：2号线<br/>车号：02004<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[1353] = "线路：2号线<br/>车号：02004<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[282] = "线路：2号线<br/>车号：02004<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[293] = "线路：2号线<br/>车号：02004<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[301] = "线路：2号线<br/>车号：02004<br/>车型：02A01 西瓜<br/>Tc车"
    trainnoyear[311] = "线路：2号线<br/>车号：02005<br/>车型：02A01 西瓜<br/>特殊性：大修后全部更换为电动门，目前因大修需要，02005临时与02007调换车厢<br/>Tc车"
    trainnoyear[322] = "线路：2号线<br/>车号：02005<br/>车型：02A01 西瓜<br/>特殊性：大修后全部更换为电动门，目前因大修需要，02005临时与02007调换车厢<br/>Mp车"
    trainnoyear[333] = "线路：2号线<br/>车号：02005<br/>车型：02A01 西瓜<br/>特殊性：大修后全部更换为电动门，目前因大修需要，02005临时与02007调换车厢<br/>M车"
    trainnoyear[1442] = "线路：2号线<br/>车号：02005<br/>车型：02A01 西瓜<br/>特殊性：大修后全部更换为电动门，目前因大修需要，02005临时与02007调换车厢<br/>Mp车"
    trainnoyear[1453] = "线路：2号线<br/>车号：02005<br/>车型：02A01 西瓜<br/>特殊性：大修后全部更换为电动门，目前因大修需要，02005临时与02007调换车厢<br/>M车"
    trainnoyear[342] = "线路：2号线<br/>车号：02005<br/>车型：02A01 西瓜<br/>特殊性：大修后全部更换为电动门，目前因大修需要，02005临时与02007调换车厢<br/>Mp车"
    trainnoyear[353] = "线路：2号线<br/>车号：02005<br/>车型：02A01 西瓜<br/>特殊性：大修后全部更换为电动门，目前因大修需要，02005临时与02007调换车厢<br/>M车"
    trainnoyear[361] = "线路：2号线<br/>车号：02005<br/>车型：02A01 西瓜<br/>特殊性：大修后全部更换为电动门，目前因大修需要，02005临时与02007调换车厢<br/>Tc车"
    trainnoyear[371] = "线路：2号线<br/>车号：02006<br/>车型：02A01 西瓜<br/>Tc车"
    trainnoyear[382] = "线路：2号线<br/>车号：02006<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[393] = "线路：2号线<br/>车号：02006<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[1402] = "线路：2号线<br/>车号：02006<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[1413] = "线路：2号线<br/>车号：02006<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[402] = "线路：2号线<br/>车号：02006<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[413] = "线路：2号线<br/>车号：02006<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[421] = "线路：2号线<br/>车号：02006<br/>车型：02A01 西瓜<br/>Tc车"
    trainnoyear[431] = "线路：2号线<br/>车号：02007<br/>车型：02A01 西瓜<br/>特殊性：目前因大修需要，02005临时与02007调换车厢<br/>Tc车"
    trainnoyear[442] = "线路：2号线<br/>车号：02007<br/>车型：02A01 西瓜<br/>特殊性：目前因大修需要，02005临时与02007调换车厢<br/>Mp车"
    trainnoyear[453] = "线路：2号线<br/>车号：02007<br/>车型：02A01 西瓜<br/>特殊性：目前因大修需要，02005临时与02007调换车厢<br/>M车"
    trainnoyear[1382] = "线路：2号线<br/>车号：02007<br/>车型：02A01 西瓜<br/>特殊性：目前因大修需要，02005临时与02007调换车厢<br/>Mp车"
    trainnoyear[1393] = "线路：2号线<br/>车号：02007<br/>车型：02A01 西瓜<br/>特殊性：目前因大修需要，02005临时与02007调换车厢<br/>M车"
    trainnoyear[462] = "线路：2号线<br/>车号：02007<br/>车型：02A01 西瓜<br/>特殊性：目前因大修需要，02005临时与02007调换车厢<br/>Mp车"
    trainnoyear[473] = "线路：2号线<br/>车号：02007<br/>车型：02A01 西瓜<br/>特殊性：目前因大修需要，02005临时与02007调换车厢<br/>M车"
    trainnoyear[481] = "线路：2号线<br/>车号：02007<br/>车型：02A01 西瓜<br/>特殊性：目前因大修需要，02005临时与02007调换车厢<br/>Tc车"
    trainnoyear[491] = "线路：2号线<br/>车号：02008<br/>车型：02A01 西瓜<br/>Tc车"
    trainnoyear[502] = "线路：2号线<br/>车号：02008<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[513] = "线路：2号线<br/>车号：02008<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[1462] = "线路：2号线<br/>车号：02008<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[1473] = "线路：2号线<br/>车号：02008<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[522] = "线路：2号线<br/>车号：02008<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[533] = "线路：2号线<br/>车号：02008<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[541] = "线路：2号线<br/>车号：02008<br/>车型：02A01 西瓜<br/>Tc车"
    trainnoyear[551] = "线路：2号线<br/>车号：02009<br/>车型：02A01 西瓜<br/>Tc车"
    trainnoyear[562] = "线路：2号线<br/>车号：02009<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[573] = "线路：2号线<br/>车号：02009<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[1502] = "线路：2号线<br/>车号：02009<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[1513] = "线路：2号线<br/>车号：02009<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[582] = "线路：2号线<br/>车号：02009<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[593] = "线路：2号线<br/>车号：02009<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[601] = "线路：2号线<br/>车号：02009<br/>车型：02A01 西瓜<br/>Tc车"
    trainnoyear[611] = "线路：2号线<br/>车号：02010<br/>车型：02A01 西瓜<br/>特殊性：首列扩编后上线<br/>Tc车"
    trainnoyear[622] = "线路：2号线<br/>车号：02010<br/>车型：02A01 西瓜<br/>特殊性：首列扩编后上线<br/>Mp车"
    trainnoyear[633] = "线路：2号线<br/>车号：02010<br/>车型：02A01 西瓜<br/>特殊性：首列扩编后上线<br/>M车"
    trainnoyear[1522] = "线路：2号线<br/>车号：02010<br/>车型：02A01 西瓜<br/>特殊性：首列扩编后上线<br/>Mp车"
    trainnoyear[1533] = "线路：2号线<br/>车号：02010<br/>车型：02A01 西瓜<br/>特殊性：首列扩编后上线<br/>M车"
    trainnoyear[642] = "线路：2号线<br/>车号：02010<br/>车型：02A01 西瓜<br/>特殊性：首列扩编后上线<br/>Mp车"
    trainnoyear[653] = "线路：2号线<br/>车号：02010<br/>车型：02A01 西瓜<br/>特殊性：首列扩编后上线<br/>M车"
    trainnoyear[661] = "线路：2号线<br/>车号：02010<br/>车型：02A01 西瓜<br/>特殊性：首列扩编后上线<br/>Tc车"
    trainnoyear[671] = "线路：2号线<br/>车号：02011<br/>车型：02A01 西瓜<br/>Tc车"
    trainnoyear[682] = "线路：2号线<br/>车号：02011<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[693] = "线路：2号线<br/>车号：02011<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[1562] = "线路：2号线<br/>车号：02011<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[1573] = "线路：2号线<br/>车号：02011<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[702] = "线路：2号线<br/>车号：02011<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[713] = "线路：2号线<br/>车号：02011<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[721] = "线路：2号线<br/>车号：02011<br/>车型：02A01 西瓜<br/>Tc车"
    trainnoyear[731] = "线路：2号线<br/>车号：02012<br/>车型：02A01 西瓜<br/>Tc车"
    trainnoyear[742] = "线路：2号线<br/>车号：02012<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[753] = "线路：2号线<br/>车号：02012<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[1582] = "线路：2号线<br/>车号：02012<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[1593] = "线路：2号线<br/>车号：02012<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[762] = "线路：2号线<br/>车号：02012<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[773] = "线路：2号线<br/>车号：02012<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[781] = "线路：2号线<br/>车号：02012<br/>车型：02A01 西瓜<br/>Tc车"
    trainnoyear[1011] = "线路：2号线<br/>车号：02013<br/>车型：02A01 西瓜<br/>Tc车"
    trainnoyear[1022] = "线路：2号线<br/>车号：02013<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[1033] = "线路：2号线<br/>车号：02013<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[1622] = "线路：2号线<br/>车号：02013<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[1633] = "线路：2号线<br/>车号：02013<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[1042] = "线路：2号线<br/>车号：02013<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[1053] = "线路：2号线<br/>车号：02013<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[1061] = "线路：2号线<br/>车号：02013<br/>车型：02A01 西瓜<br/>Tc车"
    trainnoyear[1071] = "线路：2号线<br/>车号：02014<br/>车型：02A01 西瓜<br/>Tc车"
    trainnoyear[1082] = "线路：2号线<br/>车号：02014<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[1093] = "线路：2号线<br/>车号：02014<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[1642] = "线路：2号线<br/>车号：02014<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[1653] = "线路：2号线<br/>车号：02014<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[1102] = "线路：2号线<br/>车号：02014<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[1113] = "线路：2号线<br/>车号：02014<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[1121] = "线路：2号线<br/>车号：02014<br/>车型：02A01 西瓜<br/>Tc车"
    trainnoyear[1131] = "线路：2号线<br/>车号：02015<br/>车型：02A01 西瓜<br/>Tc车"
    trainnoyear[1142] = "线路：2号线<br/>车号：02015<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[1153] = "线路：2号线<br/>车号：02015<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[1682] = "线路：2号线<br/>车号：02015<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[1693] = "线路：2号线<br/>车号：02015<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[1162] = "线路：2号线<br/>车号：02015<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[1173] = "线路：2号线<br/>车号：02015<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[1181] = "线路：2号线<br/>车号：02015<br/>车型：02A01 西瓜<br/>Tc车"
    trainnoyear[1191] = "线路：2号线<br/>车号：02016<br/>车型：02A01 西瓜<br/>Tc车"
    trainnoyear[1202] = "线路：2号线<br/>车号：02016<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[1213] = "线路：2号线<br/>车号：02016<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[1702] = "线路：2号线<br/>车号：02016<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[1713] = "线路：2号线<br/>车号：02016<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[1222] = "线路：2号线<br/>车号：02016<br/>车型：02A01 西瓜<br/>Mp车"
    trainnoyear[1233] = "线路：2号线<br/>车号：02016<br/>车型：02A01 西瓜<br/>M车"
    trainnoyear[1241] = "线路：2号线<br/>车号：02016<br/>车型：02A01 西瓜<br/>Tc车"
    if (trainnoyear[userinputn] == undefined) {
        document.getElementById('output').innerHTML = '车体号有误';
    } else {
        document.getElementById('output').innerHTML = trainnoyear[userinputn];
    }
};

function msp() {
    userinput = document.getElementById('input').value;
    userinputn = Number(userinput);
    trainnoyear = new Array();
    //01A02
    trainnoyear[14352] = "线路：1号线<br/>车号：01011<br/>车型：01A02 伪八二世<br/>Mp车"
    trainnoyear[14363] = "线路：1号线<br/>车号：01011<br/>车型：01A02 伪八二世<br/>M车"
    trainnoyear[14372] = "线路：1号线<br/>车号：01011<br/>车型：01A02 伪八二世<br/>Mp车"
    trainnoyear[14383] = "线路：1号线<br/>车号：01011<br/>车型：01A02 伪八二世<br/>M车"
    trainnoyear[14392] = "线路：1号线<br/>车号：01011<br/>车型：01A02 伪八二世<br/>Mp车"
    trainnoyear[14403] = "线路：1号线<br/>车号：01011<br/>车型：01A02 伪八二世<br/>M车"
    trainnoyear[14412] = "线路：1号线<br/>车号：01012<br/>车型：01A02 伪八二世<br/>Mp车"
    trainnoyear[14423] = "线路：1号线<br/>车号：01012<br/>车型：01A02 伪八二世<br/>M车"
    trainnoyear[14432] = "线路：1号线<br/>车号：01012<br/>车型：01A02 伪八二世<br/>Mp车"
    trainnoyear[14443] = "线路：1号线<br/>车号：01012<br/>车型：01A02 伪八二世<br/>M车"
    trainnoyear[14452] = "线路：1号线<br/>车号：01012<br/>车型：01A02 伪八二世<br/>Mp车"
    trainnoyear[14463] = "线路：1号线<br/>车号：01012<br/>车型：01A02 伪八二世<br/>M车"
    trainnoyear[14472] = "线路：1号线<br/>车号：01013<br/>车型：01A02 伪八二世<br/>特殊性：首列上线<br/>Mp车"
    trainnoyear[14483] = "线路：1号线<br/>车号：01013<br/>车型：01A02 伪八二世<br/>特殊性：首列上线<br/>M车"
    trainnoyear[14492] = "线路：1号线<br/>车号：01013<br/>车型：01A02 伪八二世<br/>特殊性：首列上线<br/>Mp车"
    trainnoyear[14503] = "线路：1号线<br/>车号：01013<br/>车型：01A02 伪八二世<br/>特殊性：首列上线<br/>M车"
    trainnoyear[14512] = "线路：1号线<br/>车号：01013<br/>车型：01A02 伪八二世<br/>特殊性：首列上线<br/>Mp车"
    trainnoyear[14523] = "线路：1号线<br/>车号：01013<br/>车型：01A02 伪八二世<br/>特殊性：首列上线<br/>M车"
    trainnoyear[14532] = "线路：1号线<br/>车号：01015<br/>车型：01A02 伪八二世<br/>Mp车"
    trainnoyear[14543] = "线路：1号线<br/>车号：01015<br/>车型：01A02 伪八二世<br/>M车"
    trainnoyear[14552] = "线路：1号线<br/>车号：01015<br/>车型：01A02 伪八二世<br/>Mp车"
    trainnoyear[14563] = "线路：1号线<br/>车号：01015<br/>车型：01A02 伪八二世<br/>M车"
    trainnoyear[14572] = "线路：1号线<br/>车号：01015<br/>车型：01A02 伪八二世<br/>Mp车"
    trainnoyear[14583] = "线路：1号线<br/>车号：01015<br/>车型：01A02 伪八二世<br/>M车"
    trainnoyear[14592] = "线路：1号线<br/>车号：01016<br/>车型：01A02 伪八二世<br/>特殊性：最后一列上线<br/>Mp车"
    trainnoyear[14603] = "线路：1号线<br/>车号：01016<br/>车型：01A02 伪八二世<br/>特殊性：最后一列上线<br/>M车"
    trainnoyear[14612] = "线路：1号线<br/>车号：01016<br/>车型：01A02 伪八二世<br/>特殊性：最后一列上线<br/>Mp车"
    trainnoyear[14623] = "线路：1号线<br/>车号：01016<br/>车型：01A02 伪八二世<br/>特殊性：最后一列上线<br/>M车"
    trainnoyear[14632] = "线路：1号线<br/>车号：01016<br/>车型：01A02 伪八二世<br/>特殊性：最后一列上线<br/>Mp车"
    trainnoyear[14643] = "线路：1号线<br/>车号：01016<br/>车型：01A02 伪八二世<br/>特殊性：最后一列上线<br/>M车"
    //01A04
    trainnoyear[13632] = "线路：1号线<br/>车号：01026<br/>车型：01A04 伪八<br/>Mp车"
    trainnoyear[13643] = "线路：1号线<br/>车号：01026<br/>车型：01A04 伪八<br/>M车"
    trainnoyear[13652] = "线路：1号线<br/>车号：01026<br/>车型：01A04 伪八<br/>Mp车"
    trainnoyear[13663] = "线路：1号线<br/>车号：01026<br/>车型：01A04 伪八<br/>M车"
    trainnoyear[13673] = "线路：1号线<br/>车号：01026<br/>车型：01A04 伪八<br/>M车"
    trainnoyear[13682] = "线路：1号线<br/>车号：01026<br/>车型：01A04 伪八<br/>Mp车"
    trainnoyear[13752] = "线路：1号线<br/>车号：01027<br/>车型：01A04 伪八<br/>Mp车"
    trainnoyear[13763] = "线路：1号线<br/>车号：01027<br/>车型：01A04 伪八<br/>M车"
    trainnoyear[13772] = "线路：1号线<br/>车号：01027<br/>车型：01A04 伪八<br/>Mp车"
    trainnoyear[13783] = "线路：1号线<br/>车号：01027<br/>车型：01A04 伪八<br/>M车"
    trainnoyear[13793] = "线路：1号线<br/>车号：01027<br/>车型：01A04 伪八<br/>M车"
    trainnoyear[13802] = "线路：1号线<br/>车号：01027<br/>车型：01A04 伪八<br/>Mp车"
    trainnoyear[13812] = "线路：1号线<br/>车号：01028<br/>车型：01A04 伪八<br/>Mp车"
    trainnoyear[13823] = "线路：1号线<br/>车号：01028<br/>车型：01A04 伪八<br/>M车"
    trainnoyear[13832] = "线路：1号线<br/>车号：01028<br/>车型：01A04 伪八<br/>Mp车"
    trainnoyear[13843] = "线路：1号线<br/>车号：01028<br/>车型：01A04 伪八<br/>M车"
    trainnoyear[13853] = "线路：1号线<br/>车号：01028<br/>车型：01A04 伪八<br/>M车"
    trainnoyear[13862] = "线路：1号线<br/>车号：01028<br/>车型：01A04 伪八<br/>Mp车"
    trainnoyear[13692] = "线路：1号线<br/>车号：01029<br/>车型：01A04 伪八<br/>Mp车"
    trainnoyear[13703] = "线路：1号线<br/>车号：01029<br/>车型：01A04 伪八<br/>M车"
    trainnoyear[13712] = "线路：1号线<br/>车号：01029<br/>车型：01A04 伪八<br/>Mp车"
    trainnoyear[13723] = "线路：1号线<br/>车号：01029<br/>车型：01A04 伪八<br/>M车"
    trainnoyear[13733] = "线路：1号线<br/>车号：01029<br/>车型：01A04 伪八<br/>M车"
    trainnoyear[13742] = "线路：1号线<br/>车号：01029<br/>车型：01A04 伪八<br/>Mp车"
    trainnoyear[13992] = "线路：1号线<br/>车号：01030<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02017<br/>Mp车"
    trainnoyear[14003] = "线路：1号线<br/>车号：01030<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02017<br/>M车"
    trainnoyear[14012] = "线路：1号线<br/>车号：01030<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02017<br/>Mp车"
    trainnoyear[14023] = "线路：1号线<br/>车号：01030<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02017<br/>M车"
    trainnoyear[14033] = "线路：1号线<br/>车号：01030<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02017<br/>M车"
    trainnoyear[14042] = "线路：1号线<br/>车号：01030<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02017<br/>Mp车"
    trainnoyear[14172] = "线路：1号线<br/>车号：01031<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02018<br/>Mp车"
    trainnoyear[14183] = "线路：1号线<br/>车号：01031<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02018<br/>M车"
    trainnoyear[14192] = "线路：1号线<br/>车号：01031<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02018<br/>Mp车"
    trainnoyear[14203] = "线路：1号线<br/>车号：01031<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02018<br/>M车"
    trainnoyear[14213] = "线路：1号线<br/>车号：01031<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02018<br/>M车"
    trainnoyear[14222] = "线路：1号线<br/>车号：01031<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02018<br/>Mp车"
    trainnoyear[14232] = "线路：1号线<br/>车号：01032<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02019<br/>Mp车"
    trainnoyear[14243] = "线路：1号线<br/>车号：01032<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02019<br/>M车"
    trainnoyear[14252] = "线路：1号线<br/>车号：01032<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02019<br/>Mp车"
    trainnoyear[14263] = "线路：1号线<br/>车号：01032<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02019<br/>M车"
    trainnoyear[14273] = "线路：1号线<br/>车号：01032<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02019<br/>M车"
    trainnoyear[14282] = "线路：1号线<br/>车号：01032<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02019<br/>Mp车"
    trainnoyear[14112] = "线路：1号线<br/>车号：01033<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02020，首列扩编且上线<br/>Mp车"
    trainnoyear[14123] = "线路：1号线<br/>车号：01033<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02020，首列扩编且上线<br/>M车"
    trainnoyear[14132] = "线路：1号线<br/>车号：01033<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02020，首列扩编且上线<br/>Mp车"
    trainnoyear[14143] = "线路：1号线<br/>车号：01033<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02020，首列扩编且上线<br/>M车"
    trainnoyear[14153] = "线路：1号线<br/>车号：01033<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02020，首列扩编且上线<br/>M车"
    trainnoyear[14162] = "线路：1号线<br/>车号：01033<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02020，首列扩编且上线<br/>Mp车"
    trainnoyear[14052] = "线路：1号线<br/>车号：01034<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02021<br/>Mp车"
    trainnoyear[14063] = "线路：1号线<br/>车号：01034<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02021<br/>M车"
    trainnoyear[14072] = "线路：1号线<br/>车号：01034<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02021<br/>Mp车"
    trainnoyear[14083] = "线路：1号线<br/>车号：01034<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02021<br/>M车"
    trainnoyear[14093] = "线路：1号线<br/>车号：01034<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02021<br/>M车"
    trainnoyear[14102] = "线路：1号线<br/>车号：01034<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02021<br/>Mp车"
    trainnoyear[13872] = "线路：1号线<br/>车号：01035<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02022<br/>Mp车"
    trainnoyear[13883] = "线路：1号线<br/>车号：01035<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02022<br/>M车"
    trainnoyear[13892] = "线路：1号线<br/>车号：01035<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02022<br/>Mp车"
    trainnoyear[13903] = "线路：1号线<br/>车号：01035<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02022<br/>M车"
    trainnoyear[13913] = "线路：1号线<br/>车号：01035<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02022<br/>M车"
    trainnoyear[13922] = "线路：1号线<br/>车号：01035<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02022<br/>Mp车"
    trainnoyear[13932] = "线路：1号线<br/>车号：01036<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02023<br/>Mp车"
    trainnoyear[13943] = "线路：1号线<br/>车号：01036<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02023<br/>M车"
    trainnoyear[13952] = "线路：1号线<br/>车号：01036<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02023<br/>Mp车"
    trainnoyear[13963] = "线路：1号线<br/>车号：01036<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02023<br/>M车"
    trainnoyear[13973] = "线路：1号线<br/>车号：01036<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02023<br/>M车"
    trainnoyear[13982] = "线路：1号线<br/>车号：01036<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02023<br/>Mp车"
    trainnoyear[14292] = "线路：1号线<br/>车号：01037<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02024<br/>Mp车"
    trainnoyear[14303] = "线路：1号线<br/>车号：01037<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02024<br/>M车"
    trainnoyear[14312] = "线路：1号线<br/>车号：01037<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02024<br/>Mp车"
    trainnoyear[14323] = "线路：1号线<br/>车号：01037<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02024<br/>M车"
    trainnoyear[14333] = "线路：1号线<br/>车号：01037<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02024<br/>M车"
    trainnoyear[14342] = "线路：1号线<br/>车号：01037<br/>车型：01A04 伪八<br/>特殊性：Tc车曾在2号线，车号02024<br/>Mp车"
    if (trainnoyear[userinputn] == undefined) {
        document.getElementById('output').innerHTML = '车体号有误';
    } else {
        document.getElementById('output').innerHTML = trainnoyear[userinputn];
    }
};

function output() {
    if (final <= 1055 && final >= 1040) {
        type = "01A05 胖头鱼"
    } else {
        if (final <= 1066 && final >= 1056) {
            type = "01A06 钢铁侠"
        } else {
            if (final <= 1086 && final >= 1067) {
                type = "01A06 钢铁侠"
            } else {
                if (final <= 2053 && final >= 2033) {
                    type = "02A02 青鱼"
                } else {
                    if (final <= 2069 && final >= 2054) {
                        type = "02A03 鲶鱼"
                    } else {
                        if (final <= 2085 && final >= 2070) {
                            type = "02A04 扩编鲶鱼"
                        } else {
                            if (final <= 2116 && final >= 2086) {
                                type = "02A05 绿灯侠"
                            } else {
                                if (final <= 3036 && final >= 3029) {
                                    type = "03A02 黑包公"
                                } else {
                                    if (final <= 3049 && final >= 3037) {
                                        type = "04A02 叛徒包公"
                                    } else {
                                        if (final <= 4005 && final >= 4001 || final <= 4011 && final >= 4007 || final <= 4016 && final >= 4013 || final <= 4020 && final >= 4018 || final <= 4028 && final >= 4022) {
                                            type = "04A01 奶嘴"
                                        } else {
                                            if (final <= 4055 && final >= 4029) {
                                                type = "04A02 黑包公"
                                            } else {
                                                if (final <= 5051 && final >= 5019) {
                                                    type = "05C02 紫罗兰"
                                                } else {
                                                    if (final <= 6023 && final >= 6001) {
                                                        type = "06C01 KITTY"
                                                    } else {
                                                        if (final <= 6036 && final >= 6025) {
                                                            type = "06C02 花木兰"
                                                        } else {
                                                            if (final <= 6056 && final >= 6037) {
                                                                type = "06C03 花木兰二世"
                                                            } else {
                                                                if (final <= 6082 && final >= 6057) {
                                                                    type = "06C04 花木兰三世"
                                                                } else {
                                                                    if (final <= 7042 && final >= 7001) {
                                                                        type = "07A01 芬达"
                                                                    } else {
                                                                        if (final <= 7072 && final >= 7043) {
                                                                            type = "07A02 邦迪"
                                                                        } else {
                                                                            if (final <= 7079 && final >= 7073) {
                                                                                type = "07A03 邦迪二世"
                                                                            } else {
                                                                                if (final <= 8028 && final >= 8001) {
                                                                                    type = "08C01 蓝精灵"
                                                                                } else {
                                                                                    if (final <= 8046 && final >= 8029) {
                                                                                        type = "08C02 泥鳅"
                                                                                    } else {
                                                                                        if (final <= 8066 && final >= 8047) {
                                                                                            type = "08C03 泥鳅二世"
                                                                                        } else {
                                                                                            if (final <= 8090 && final >= 8067) {
                                                                                                type = "08C04 泥鳅三世"
                                                                                            } else {
                                                                                                if (final <= 9010 && final >= 9001) {
                                                                                                    type = "09A01 蚕宝宝"
                                                                                                } else {
                                                                                                    if (final <= 9051 && final >= 9011) {
                                                                                                        type = "09A02 坂田"
                                                                                                    } else {
                                                                                                        if (final == 9052) {
                                                                                                            type = "09ASY 电气男孩"
                                                                                                        } else {
                                                                                                            if (final <= 9088 && final >= 9053) {
                                                                                                                type = "09A03 创可贴"
                                                                                                            } else {
                                                                                                                if (final <= 9105 && final >= 9089) {
                                                                                                                    type = "09A04 创可贴二世"
                                                                                                                } else {
                                                                                                                    if (final <= 10041 && final >= 10001) {
                                                                                                                        type = "10A01 热带鱼"
                                                                                                                    } else {
                                                                                                                        if (final <= 10067 && final >= 10042) {
                                                                                                                            type = "10A02 热带鱼二世"
                                                                                                                        } else {
                                                                                                                            if (final <= 11066 && final >= 11001) {
                                                                                                                                type = "11A01 奶咖"
                                                                                                                            } else {
                                                                                                                                if (final <= 11072 && final >= 11067) {
                                                                                                                                    type = "11A02 伪咖"
                                                                                                                                } else {
                                                                                                                                    if (final <= 11082 && final >= 11073) {
                                                                                                                                        type = "11A03 奶咖二世"
                                                                                                                                    } else {
                                                                                                                                        if (final <= 12041 && final >= 12001) {
                                                                                                                                            type = "12A01 雪碧"
                                                                                                                                        } else {
                                                                                                                                            if (final <= 12056 && final >= 12042) {
                                                                                                                                                type = "12A02 雪碧二世"
                                                                                                                                            } else {
                                                                                                                                                if (final <= 12075 && final >= 12057) {
                                                                                                                                                    type = "12A03 雪碧三世"
                                                                                                                                                } else {
                                                                                                                                                    if (final <= 13024 && final >= 13001) {
                                                                                                                                                        type = "13A01 奶粉"
                                                                                                                                                    } else {
                                                                                                                                                        if (final <= 13062 && final >= 13025) {
                                                                                                                                                            type = "13A02 奶粉二世"
                                                                                                                                                        } else {
                                                                                                                                                            if (final <= 14049 && final >= 14001) {
                                                                                                                                                                type = "14A01 高达"
                                                                                                                                                            } else {
                                                                                                                                                                if (final <= 15054 && final >= 15001) {
                                                                                                                                                                    type = "15A01 长鼻猴"
                                                                                                                                                                } else {
                                                                                                                                                                    if (final <= 16046 && final >= 16001) {
                                                                                                                                                                        type = "16A01 抹茶"
                                                                                                                                                                    } else {
                                                                                                                                                                        if (final <= 16061 && final >= 16047) {
                                                                                                                                                                            type = "16A02 抹茶二世"
                                                                                                                                                                        } else {
                                                                                                                                                                            if (final <= 17028 && final >= 17001) {
                                                                                                                                                                                type = "17A01 西柚"
                                                                                                                                                                            } else {
                                                                                                                                                                                if (final <= 18050 && final >= 18001) {
                                                                                                                                                                                    type = "18A01 闪电侠"
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (final <= 17038 && final >= 17029) {
                                                                                                                                                                                        type = "17A02 西柚二世"
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (final == 4006 || final == 4021 || final == 4012 || final == 4017) {
                                                                                                                                                                                            type = "04A01 奶嘴（信改）"
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (final <= 5013 && final >= 5001 || final <= 5018 && final >= 5015) {
                                                                                                                                                                                                type = "05C01 番茄炒蛋"
                                                                                                                                                                                            } else {
                                                                                                                                                                                                carnoerror = 1;
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
    if (final == 1040) {
        sp = "<br/>特殊性：曾为备件车，首列改5位数车体号的01A05，012373车厢的车体号被错印成012573（在01042上），"
    } else {
        if (final == 1041) {
            sp = "<br/>特殊性：左上角有编号、首列交付且上线"
        } else {
            if (final == 1050) {
                sp = "<br/>特殊性：上海火车站事故车"
            } else {
                if (final == 1053 || final == 1066 || final == 1082 || final == 2087 || final == 2116 || final == 3048 || final == 7071 || final == 7074 || final == 8028 || final == 8045 || final == 8081 || final == 9085 || final == 9100 || final == 10052 || final == 11066 || final == 11068 || final == 11076 || final == 12029 || final == 12056 || final == 12075 || final == 13054 || final == 16061) {
                    sp = "<br/>特殊性：最后一列上线"
                } else {
                    if (final == 1056 || final == 3038 || final == 8072 || final == 9053 || final == 9091 || final == 10043 || final == 11069 || final == 11077 || final == 13027 || final == 16048) {
                        sp = "<br/>特殊性：首列上线"
                    } else {
                        if (final == 1057 || final == 2086 || final == 5019 || final == 6001 || final == 8047 || final == 8067 || final == 9090 || final == 10004 || final == 10045 || final == 11002 || final == 11067 || final == 11080 || final == 12002 || final == 13026 || final == 14002 || final == 15003 || final == 16003 || final == 16047 || final == 17001 || final == 18003 || final == 17030) {
                            sp = "<br/>特殊性：首列交付"
                        } else {
                            if (final == 1065 || final == 1067 || final == 2071 || final == 5051 || final == 8090 || final == 9105 || final == 10066 || final == 14001 || final == 16059) {
                                sp = "<br/>特殊性：最后一列交付"
                            } else {
                                if (final == 1069 || final == 2034 || final == 3030 || final == 4030 || final == 6025 || final == 6037 || final == 6057 || final == 7043 || final == 7073 || final == 8029 || final == 9012 || final == 12043 || final == 12057) {
                                    sp = "<br/>特殊性：首列交付且上线"
                                } else {
                                    if (final == 2038 || final == 4024 || final == 6006 || final == 7034 || final == 8027 || final == 9005 || final == 9024 || final == 11033 || final == 11055) {
                                        sp = "<br/>特殊性：曾为备件车"
                                    } else {
                                        if (final == 2043) {
                                            sp = "<br/>特殊性：纪念汶川地震曾改涂黑鱼"
                                        } else {
                                            if (final == 2052) {
                                                sp = "<br/>特殊性：曾为备件车;首列安装CBTC信号"
                                            } else {
                                                if (final == 2055) {
                                                    sp = "<br/>特殊性：首列交付，最后一列上线"
                                                } else {
                                                    if (final == 2056) {
                                                        sp = "<br/>特殊性：02056号车曾多次缩为4节作缩编实验，现已归还。"
                                                    } else {
                                                        if (final == 2064) {
                                                            sp = "<br/>特殊性：首列上线；首列安装CBTC信号"
                                                        } else {
                                                            if (final == 2074) {
                                                                sp = "<br/>特殊性：首列扩编改造且改后首列上线"
                                                            } else {
                                                                if (final == 2078) {
                                                                    sp = "<br/>特殊性：首列交付；首列安装CBTC信号"
                                                                } else {
                                                                    if (final == 2088) {
                                                                        sp = "<br/>特殊性：'“上海地铁第5000节”仪式用车，首列上线"
                                                                    } else {
                                                                        if (final == 3033 || final == 4029) {
                                                                            sp = "<br/>特殊性：贴纸在窗户上"
                                                                        } else {
                                                                            if (final == 3035) {
                                                                                sp = "<br/>特殊性：曾借调给4号线"
                                                                            } else {
                                                                                if (final == 4001) {
                                                                                    sp = "<br/>特殊性：进口列车，其余均在株机组装"
                                                                                } else {
                                                                                    if (final == 4002) {
                                                                                        sp = "<br/>特殊性：进口列车，其余均在株机组装"
                                                                                    } else {
                                                                                        if (final == 4005) {
                                                                                            sp = "<br/>特殊性：曾作为张江实训专用车"
                                                                                        } else {
                                                                                            if (final == 4055 || final == 6082 || final == 18050) {
                                                                                                sp = "<br/>特殊性：最后一列交付且上线"
                                                                                            } else {
                                                                                                if (final == 5025) {
                                                                                                    sp = "<br/>特殊性：平庄公路事故车（含修复车厢051073），最后一列上线"
                                                                                                } else {
                                                                                                    if (final == 7011) {
                                                                                                        sp = "<br/>特殊性：2008年调试时车头贴有世博标志，首列交付"
                                                                                                    } else {
                                                                                                        if (final == 7012) {
                                                                                                            sp = "<br/>特殊性：2008年调试时车头贴有世博标志"
                                                                                                        } else {
                                                                                                            if (final == 7035) {
                                                                                                                sp = "<br/>特殊性：“上海地铁第2000节”仪式用车"
                                                                                                            } else {
                                                                                                                if (final == 8001) {
                                                                                                                    sp = "<br/>特殊性：西班牙进口列车；拖车车厢有无障碍设施"
                                                                                                                } else {
                                                                                                                    if (final == 8002) {
                                                                                                                        sp = "<br/>特殊性：首列交付；拖车车厢有无障碍设施"
                                                                                                                    } else {
                                                                                                                        if (final == 8003) {
                                                                                                                            sp = "<br/>特殊性：080142车厢有圆环扶手"
                                                                                                                        } else {
                                                                                                                            if (final == 8021) {
                                                                                                                                sp = "<br/>特殊性：“上海地铁第1000节”仪式用车（实际不存在）"
                                                                                                                            } else {
                                                                                                                                if (final == 8052) {
                                                                                                                                    sp = "<br/>特殊性：SATCO试车撞墙事故车；最后一列上线"
                                                                                                                                } else {
                                                                                                                                    if (final == 9002) {
                                                                                                                                        sp = "<br/>特殊性：首列转场至9号线车库"
                                                                                                                                    } else {
                                                                                                                                        if (final == 9011) {
                                                                                                                                            sp = "<br/>特殊性：第一次大修后改为白色头灯"
                                                                                                                                        } else {
                                                                                                                                            if (final == 9042 || final == 9043 || final == 9044 || final == 9045) {
                                                                                                                                                sp = "<br/>特殊性：世博期间曾借调给13号线"
                                                                                                                                            } else {
                                                                                                                                                if (final == 9048) {
                                                                                                                                                    sp = "<br/>特殊性：世博期间曾借调给13号线;最后一列上线"
                                                                                                                                                } else {
                                                                                                                                                    if (final == 9052) {
                                                                                                                                                        sp = "<br/>特殊性：国产首列A型车、实训专用车，SATCO组装"
                                                                                                                                                    } else {
                                                                                                                                                        if (final == 9054) {
                                                                                                                                                            sp = "<br/>特殊性：“上海地铁第4000节”仪式用车，首列交付"
                                                                                                                                                        } else {
                                                                                                                                                            if (final == 10005 || final == 10016) {
                                                                                                                                                                sp = "<br/>特殊性：“927”事故车、含修复车厢"
                                                                                                                                                            } else {
                                                                                                                                                                if (final == 10021) {
                                                                                                                                                                    sp = "<br/>特殊性：曾经备件车，最后一列上线"
                                                                                                                                                                } else {
                                                                                                                                                                    if (final == 10023) {
                                                                                                                                                                        sp = "<br/>特殊性：首列拆除驾驶室的10A01"
                                                                                                                                                                    } else {
                                                                                                                                                                        if (final == 10047) {
                                                                                                                                                                            sp = "<br/>特殊性：首列拆除驾驶室的10A02"
                                                                                                                                                                        } else {
                                                                                                                                                                            if (final == 13001) {
                                                                                                                                                                                sp = "<br/>特殊性：“上海地铁第3000节”仪式用车，首列交付"
                                                                                                                                                                            } else {
                                                                                                                                                                                if (final == 13024) {
                                                                                                                                                                                    sp = "<br/>特殊性：车内灯光为冷色光，最后一列上线"
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (final == 13058 || final == 13059 || final == 13060) {
                                                                                                                                                                                        sp = "<br/>特殊性：显示屏特殊"
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (final == 13061) {
                                                                                                                                                                                            sp = "<br/>特殊性：显示屏特殊（独苗）（现跟1358-1360一样）"
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (final == 13062) {
                                                                                                                                                                                                sp = "<br/>特殊性：显示屏特殊（独苗且LCD类似成都地铁）（现跟1358-1360一样）；最后一列交付"
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (final == 14033 || final == 15030 || final == 18045) {
                                                                                                                                                                                                    sp = "<br/>特殊性：“上海地铁第7000节”仪式用车"
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (final == 16002) {
                                                                                                                                                                                                        sp = "<br/>特殊性：曾因重连测试致车钩断裂"
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (final == 16052) {
                                                                                                                                                                                                            sp = "<br/>特殊性：“上海地铁第6000节”仪式用车"
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (final == 17006) {
                                                                                                                                                                                                                sp = "<br/>特殊性：车号与车体号为细字体"
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (final == 4006) {
                                                                                                                                                                                                                    sp = "<br/>特殊性：首列完成LCD与信号改造并上线的04A01型列车"
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (final == 1022) {
                                                                                                                                                                                                                        sp = "<br/>特殊性：通河新村事故车"
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (final == 1031) {
                                                                                                                                                                                                                            sp = "<br/>特殊性：双十一人民广场事故车"
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            if (final == 1068) {
                                                                                                                                                                                                                                sp = "<br/>特殊性：徐家汇事故车"
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                if (final <= 4028 && final >= 4021) {
                                                                                                                                                                                                                                    sp = "<br/>特殊性：04021-04028曾借调给2号线，编号为02025-02032"
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    if (final <= 9010 && final >= 9001) {
                                                                                                                                                                                                                                        sp = "<br/>特殊性：09001-09010曾在1号线运行，编号为01030-01039"
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                        if (final == 11020) {
                                                                                                                                                                                                                                            sp = "<br/>特殊性：双十一嘉定新城事故车"
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            if (final == 15051) {
                                                                                                                                                                                                                                                sp = "<br/>特殊性：车头装有魔窗"
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                if (final == 15052) {
                                                                                                                                                                                                                                                    sp = "<br/>特殊性：曾为“永久性”消防专列涂装，现已恢复原涂装"
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                    if (final == 15020) {
                                                                                                                                                                                                                                                        sp = "<br/>特殊性：祁安路事故车"
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                        if (final == 7032) {
                                                                                                                                                                                                                                                            sp = "<br/>特殊性：内部装有新款电视（显示到站信息）"
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                            if (final == 1042) {
                                                                                                                                                                                                                                                                sp = "<br/>特殊性：012373（在01040上）车厢的车体号被错印成012573"
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                if (final == 5001) {
                                                                                                                                                                                                                                                                    sp = "<br/>特殊性：阿尔斯通进口列车"
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                    if (final == 5018) {
                                                                                                                                                                                                                                                                        sp = "<br/>特殊性：推算编号应为05014"
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                        if (final == 11013) {
                                                                                                                                                                                                                                                                            sp = "<br/>特殊性：225涂鸦事件车"
                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                            sp = ""
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
                        }
                    }
                }
            }
        }
    }
    finalnum = userinput.substr(5, 1);
    if (finalnum == 1) {
        tcmpm = "Tc车"
    } else {
        if (finalnum == 2) {
            tcmpm = "Mp车"
        } else {
            if (finalnum == 3) {
                tcmpm = "M车"
            } else {
                if (finalnum == 4) {
                    tcmpm = "M车"
                } else {
                    tcmpm = "尾号有误"
                }
            }
        }
    }
    if (carnoerror == 0) {
        document.getElementById('output').innerHTML = "线路：" + parseFloat(lineno) + "号线<br/>车号：" + final.toString().padStart(5, "0") + "<br/>车型：" + type + sp + "<br/>" + tcmpm;
    } else {
        document.getElementById('output').innerHTML = "车体号有误";
        carnoerror = 0;
    }
}
function output_3() {
    if (final <= 3011 && final >= 3001 || final <= 3028 && final >= 3013) {
        type = "03A01 黄鱼"
    } else {
        if (final == 3012) {
            type = "03A01 黄鱼（信改）"
        } else {
            carnoerror = 1;
        }
    }
    if (final == 3001) {
        sp = "<br/>特殊性：法国进口列车"
    } else {
        if (final == 3002) {
            sp = "<br/>特殊性：法国进口列车"
        } else {
            if (final == 3003) {
                sp = "<br/>特殊性：曾为备件车"
            } else {
                if (final == 3026) {
                    sp = "<br/>特殊性：曾为备件车"
                } else {
                    if (final == 3012) {
                        sp = "<br/>特殊性：首列完成翻新的03A01型列车"
                    } else {
                        sp = ""
                    }
                }
            }
        }
    }
    finalnum = userinput.substr(4, 1);
    if (finalnum == 1) {
        tcmpm = "Tc车"
    } else {
        if (finalnum == 2) {
            tcmpm = "Mp车"
        } else {
            if (finalnum == 3) {
                tcmpm = "M车"
            } else {
                if (finalnum == 4) {
                    tcmpm = "M车"
                } else {
                    tcmpm = "尾号有误"
                }
            }
        }
    }
    if (carnoerror == 0) {
        document.getElementById('output').innerHTML = "线路：3号线<br/>车号：" + final.toString().padStart(5, "0") + "<br/>车型：" + type + sp + "<br/>" + tcmpm;
    } else {
        document.getElementById('output').innerHTML = "车体号有误";
        carnoerror = 0;
    }
}
function output_t01() {
    if (final == "T0101" || final == "T0102" || final == "T0103" || final == "T0104" || final == "T0105" || final == "T0106" || final == "T0107" || final == "T0108" || final == "T0109" || final == "T0110" || final == "T0111") {
        type = "Bombardier APM 300 小灰灰<del>泰美之子</del> <del>墨水之孙</del>"
    } else {
        carnoerror = 1;
    }
    if (final == "T0101") {
        sp = "<br/>特殊性：首列交付"
    } else {
        sp = ""
    }
    finalnum = userinput.substr(6, 1);
    if (finalnum == 1) {
        tcmpm = "Tc车"
    } else {
        if (finalnum == 2) {
            tcmpm = "Mp车"
        } else {
            if (finalnum == 3) {
                tcmpm = "M车"
            } else {
                if (finalnum == 4) {
                    tcmpm = "M车"
                } else {
                    tcmpm = "尾号有误"
                }
            }
        }
    }
    if (carnoerror == 0) {
        document.getElementById('output').innerHTML = "线路：浦江线<br/>车号：" + final.toString().padStart(5, "0") + "<br/>车型：" + type + sp + "<br/>" + tcmpm;
    } else {
        document.getElementById('output').innerHTML = "车体号有误";
        carnoerror = 0;
    }
}
function output_jc() {
    if (final == "JC4001" || final == "JC4002" || final == "JC4003" || final == "JC4004" || final == "JC4005" || final == "JC4006" || final == "JC4007" || final == "JC4008" || final == "JC4009" || final == "JC4010" || final == "JC4011" || final == "JC4012" || final == "JC4013" || final == "JC4014") {
        type = "4节"
    } else {
        if (final == "JC8001" || final == "JC8002" || final == "JC8003") {
            type = "8节"
        } else {
            carnoerror = 1;
        }
    }
    if (final == "JC4001") {
        sp = "<br/>特殊性：首列交付"
    } else {
        sp = ""
    }
    if (carnoerror == 0) {
        document.getElementById('output').innerHTML = "线路：机场联络线<br/>车号：" + final.toString().padStart(5, "0") + "<br/>车型：" + type + sp + "<br/>（注：由于机场联络线目前仅交付1列4节编组列车，故车体号格式可能与正确的车体号格式不同，目前计算出的结果仅供参考！）";
    } else {
        document.getElementById('output').innerHTML = "车体号有误";
        carnoerror = 0;
    }
}