var userinput = 0;
var userinputn = 0;
var lineno = 0;
var year = 0
var carno = 0;
var year = 0;
var trainno = 0;
var trainno5 = 0;
var final = 0;
var length = 0;
function wuc() {
    if (document.getElementById('05C01').checked == true) {
        m5();
    } else {
        receive();
    };
}
function receive() {
    userinput = document.getElementById('input').value;
    length = userinput.length;
    //lineno = Math.trunc(userinput / 100000 % 10) * 10 + Math.trunc(userinput / 10000 % 10);
    lineno = userinput.substr(0, 2)
    if (length != 0) {
        if (length == 5) {
            year = userinput.substr(0, 2);
            if (year == 02 || year == 03 || year == 04) {
                calc3();
            }else{
                document.getElementById('output').innerHTML = "暂不支持！"
            }
        } else {
            if (length != 6) {
                if (length != 7) {
                    document.getElementById('output').innerHTML = "暂不支持！"
                } else {
                    calct01();
                }
            } else {
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
            };
        }
    } else { document.getElementById('output').innerHTML = "额，你输入车体号了吗？(⊙﹏⊙)" }
}
function calccommon() {
    //carno = Math.trunc(userinput / 1000 % 10) * 100 + Math.trunc(userinput / 100 % 10) * 10 + Math.trunc(userinput / 10 % 10);
    carno = userinput.substr(2, 3)
    trainno = Math.ceil(carno / 6);
    final = lineno * 1000 + trainno
    if (final <= 4049 && final >= 4037){
        final = final - 1000;
        lineno = lineno - 1;
        document.getElementById('output').innerHTML = parseFloat(lineno) + ":" + final.toString().padStart(5, "0") + "（借调）";
    }else{
        document.getElementById('output').innerHTML = parseFloat(lineno) + ":" + final.toString().padStart(5, "0");
    }
}
function calc14() {
    //carno = Math.trunc(userinput / 1000 % 10) * 100 + Math.trunc(userinput / 100 % 10) * 10 + Math.trunc(userinput / 10 % 10);
    carno = userinput.substr(2, 3)
    trainno = Math.ceil(carno / 8);
    final = lineno * 1000 + trainno;
    document.getElementById('output').innerHTML = "14:" + final.toString().padStart(5, "0");
}
function calc5() {
    //carno = Math.trunc(userinput / 1000 % 10) * 100 + Math.trunc(userinput / 100 % 10) * 10 + Math.trunc(userinput / 10 % 10);
    carno = userinput.substr(2, 3)
    trainno = Math.ceil( (carno - 68) / 6 + 18);
    final = lineno * 1000 + trainno;
    document.getElementById('output').innerHTML = "5:" + final.toString().padStart(5, "0");
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
    document.getElementById('output').innerHTML = "6:" + final.toString().padStart(5, "0");
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
    document.getElementById('output').innerHTML = "8:" + final.toString().padStart(5, "0");
}
function calc16() {
    //carno = Math.trunc(userinput / 1000 % 10) * 100 + Math.trunc(userinput / 100 % 10) * 10 + Math.trunc(userinput / 10 % 10);
    carno = userinput.substr(2, 3)
    if (carno <= 138 && carno >= 1) {
        trainno = Math.ceil(carno / 3);
    } else {
        if (carno <= 228 && carno >= 139) {
            trainno = Math.ceil(carno / 6 + 23);
        } else {

        }
    }
    final = lineno * 1000 + trainno;
    document.getElementById('output').innerHTML = "16:" + final.toString().padStart(5, "0");
}

function calct01() {
    lineno = userinput.substr(0, 3);
    carno = userinput.substr(3, 3);
    trainno = Math.ceil(carno / 4);
    final = lineno + trainno.toString().padStart(2, "0");
    document.getElementById('output').innerHTML = "浦江线:" + final;
}

function m5() {
    userinput = document.getElementById('input').value;
    userinputn = Number(userinput);
    trainno5 = new Array();
    trainno5[2011] = "5:05001"
    trainno5[2022] = "5:05001"
    trainno5[2032] = "5:05001"
    trainno5[2041] = "5:05001"
    trainno5[3011] = "5:05002"
    trainno5[3022] = "5:05002"
    trainno5[3032] = "5:05002"
    trainno5[3041] = "5:05002"
    trainno5[3051] = "5:05003"
    trainno5[3062] = "5:05003"
    trainno5[3072] = "5:05003"
    trainno5[3081] = "5:05003"
    trainno5[3091] = "5:05004"
    trainno5[3102] = "5:05004"
    trainno5[3112] = "5:05004"
    trainno5[3121] = "5:05004"
    trainno5[3131] = "5:05005"
    trainno5[3142] = "5:05005"
    trainno5[3152] = "5:05005"
    trainno5[3161] = "5:05005"
    trainno5[3171] = "5:05006"
    trainno5[3182] = "5:05006"
    trainno5[3192] = "5:05006"
    trainno5[3201] = "5:05006"
    trainno5[3211] = "5:05007"
    trainno5[3222] = "5:05007"
    trainno5[3232] = "5:05007"
    trainno5[3241] = "5:05007"
    trainno5[3251] = "5:05008"
    trainno5[3262] = "5:05008"
    trainno5[3272] = "5:05008"
    trainno5[3281] = "5:05008"
    trainno5[3291] = "5:05009"
    trainno5[3302] = "5:05009"
    trainno5[3312] = "5:05009"
    trainno5[3321] = "5:05009"
    trainno5[3331] = "5:05010"
    trainno5[3342] = "5:05010"
    trainno5[3352] = "5:05010"
    trainno5[3361] = "5:05010"
    trainno5[3371] = "5:05011"
    trainno5[3382] = "5:05011"
    trainno5[3392] = "5:05011"
    trainno5[3401] = "5:05011"
    trainno5[4011] = "5:05012"
    trainno5[4022] = "5:05012"
    trainno5[4032] = "5:05012"
    trainno5[4041] = "5:05012"
    trainno5[4051] = "5:05013"
    trainno5[4062] = "5:05013"
    trainno5[4072] = "5:05013"
    trainno5[4081] = "5:05013"
    trainno5[4091] = "5:05018"
    trainno5[4102] = "5:05018"
    trainno5[4112] = "5:05018"
    trainno5[4121] = "5:05018"
    trainno5[4131] = "5:05015"
    trainno5[4142] = "5:05015"
    trainno5[4152] = "5:05015"
    trainno5[4161] = "5:05015"
    trainno5[4171] = "5:05016"
    trainno5[4182] = "5:05016"
    trainno5[4192] = "5:05016"
    trainno5[4201] = "5:05016"
    trainno5[4211] = "5:05017"
    trainno5[4222] = "5:05017"
    trainno5[4232] = "5:05017"
    trainno5[4241] = "5:05017"
    trainno5[52011] = "5:05001"
    trainno5[52022] = "5:05001"
    trainno5[52032] = "5:05001"
    trainno5[52041] = "5:05001"
    trainno5[53011] = "5:05002"
    trainno5[53022] = "5:05002"
    trainno5[53032] = "5:05002"
    trainno5[53041] = "5:05002"
    trainno5[53051] = "5:05003"
    trainno5[53062] = "5:05003"
    trainno5[53072] = "5:05003"
    trainno5[53081] = "5:05003"
    trainno5[53091] = "5:05004"
    trainno5[53102] = "5:05004"
    trainno5[53112] = "5:05004"
    trainno5[53121] = "5:05004"
    trainno5[53131] = "5:05005"
    trainno5[53142] = "5:05005"
    trainno5[53152] = "5:05005"
    trainno5[53161] = "5:05005"
    trainno5[53171] = "5:05006"
    trainno5[53182] = "5:05006"
    trainno5[53192] = "5:05006"
    trainno5[53201] = "5:05006"
    trainno5[53211] = "5:05007"
    trainno5[53222] = "5:05007"
    trainno5[53232] = "5:05007"
    trainno5[53241] = "5:05007"
    trainno5[53251] = "5:05008"
    trainno5[53262] = "5:05008"
    trainno5[53272] = "5:05008"
    trainno5[53281] = "5:05008"
    trainno5[53291] = "5:05009"
    trainno5[53302] = "5:05009"
    trainno5[53312] = "5:05009"
    trainno5[53321] = "5:05009"
    trainno5[53331] = "5:05010"
    trainno5[53342] = "5:05010"
    trainno5[53352] = "5:05010"
    trainno5[53361] = "5:05010"
    trainno5[53371] = "5:05011"
    trainno5[53382] = "5:05011"
    trainno5[53392] = "5:05011"
    trainno5[53401] = "5:05011"
    trainno5[54011] = "5:05012"
    trainno5[54022] = "5:05012"
    trainno5[54032] = "5:05012"
    trainno5[54041] = "5:05012"
    trainno5[54051] = "5:05013"
    trainno5[54062] = "5:05013"
    trainno5[54072] = "5:05013"
    trainno5[54081] = "5:05013"
    trainno5[54091] = "5:05018"
    trainno5[54102] = "5:05018"
    trainno5[54112] = "5:05018"
    trainno5[54121] = "5:05018"
    trainno5[54131] = "5:05015"
    trainno5[54142] = "5:05015"
    trainno5[54152] = "5:05015"
    trainno5[54161] = "5:05015"
    trainno5[54171] = "5:05016"
    trainno5[54182] = "5:05016"
    trainno5[54192] = "5:05016"
    trainno5[54201] = "5:05016"
    trainno5[54211] = "5:05017"
    trainno5[54222] = "5:05017"
    trainno5[54232] = "5:05017"
    trainno5[54241] = "5:05017"
    document.getElementById('output').innerHTML = trainno5[userinputn];
}

function calc3() {
    carno = userinput.substr(2, 2);
    if(year == 02){
        trainno = Math.ceil(carno / 6)
        final = trainno + 3000
        document.getElementById('output').innerHTML = "3:" + final.toString().padStart(5, "0");
    }else{
        if(year == 03){
            trainno = Math.ceil(carno / 6 + 5)
            final = trainno + 3000
            document.getElementById('output').innerHTML = "3:" + final.toString().padStart(5, "0");
        }else{
            if(year == 04){
                trainno = Math.ceil(carno / 21)
                final = trainno + 3000
                document.getElementById('output').innerHTML = "3:" + final.toString().padStart(5, "0");
            }
        }
    }
}