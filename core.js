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
            } else {
                myear();
            }
        } else {
            if (length != 6) {
                if (length != 7) {
                    document.getElementById('output').innerHTML = "暂不支持！"
                } else {
                    calct01();
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
                    }else{
                        if (carno <= 234 && carno >= 175) {
                            msp();
                        }else{
                            calc1();
                        }
                    }
                }
            };
        }
    } else { document.getElementById('output').innerHTML = "未输入车体号" }
}
function calccommon() {
    //carno = Math.trunc(userinput / 1000 % 10) * 100 + Math.trunc(userinput / 100 % 10) * 10 + Math.trunc(userinput / 10 % 10);
    carno = userinput.substr(2, 3)
    trainno = Math.ceil(carno / 6);
    final = lineno * 1000 + trainno
    if (final <= 4049 && final >= 4037) {
        final = final - 1000;
        lineno = lineno - 1;
        document.getElementById('output').innerHTML = parseFloat(lineno) + ":" + final.toString().padStart(5, "0") + "（借调）";
    } else {
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
    trainno = Math.ceil((carno - 68) / 6 + 18);
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
    if (trainno5[userinputn] == undefined) {
        document.getElementById('output').innerHTML = '车体号有误';
    } else {
        document.getElementById('output').innerHTML = trainno5[userinputn];
    }
}

function calc3() {
    carno = userinput.substr(2, 2);
    if (year == 02) {
        trainno = Math.ceil(carno / 6)
        final = trainno + 3000
        document.getElementById('output').innerHTML = "3:" + final.toString().padStart(5, "0");
    } else {
        if (year == 03) {
            trainno = Math.ceil(carno / 6 + 5)
            final = trainno + 3000
            document.getElementById('output').innerHTML = "3:" + final.toString().padStart(5, "0");
        } else {
            if (year == 04) {
                trainno = Math.ceil(carno / 21)
                final = trainno + 3000
                document.getElementById('output').innerHTML = "3:" + final.toString().padStart(5, "0");
            }
        }
    }
};

function calc2() {
    carno = userinput.substr(2, 3);
    if (carno <= 424 && carno >= 129 || carno <= 800 && carno >= 553) {
        trainno = Math.ceil(carno / 8 + 16);
        final = lineno * 1000 + trainno;
        document.getElementById('output').innerHTML = "2:" + final.toString().padStart(5, "0");
    } else {
        if (carno <= 488 && carno >= 425) {
            trainno = Math.ceil(carno / 4 - 37);
            final = lineno * 1000 + trainno;
            document.getElementById('output').innerHTML = "2:" + final.toString().padStart(5, "0");
        } else {
            if (carno <= 552 && carno >= 489) {
                trainno = Math.ceil(carno / 4 - 53);
                final = lineno * 1000 + trainno;
                document.getElementById('output').innerHTML = "2:" + final.toString().padStart(5, "0");
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
        document.getElementById('output').innerHTML = "1:" + final.toString().padStart(5, "0");
    } else {
        if (carno <= 715 && carno >= 468) {
            trainno = Math.ceil((carno - 467) / 8 + 55);
            final = lineno * 1000 + trainno;
            document.getElementById('output').innerHTML = "1:" + final.toString().padStart(5, "0");
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
    trainnoyear[92011] = "1:01001"
    trainnoyear[92022] = "1:01001"
    trainnoyear[92033] = "1:01001"
    trainnoyear[93442] = "1:01001"
    trainnoyear[93453] = "1:01001"
    trainnoyear[94102] = "1:01001"
    trainnoyear[94113] = "1:01001"
    trainnoyear[94121] = "1:01001"
    trainnoyear[93121] = "1:01002"
    trainnoyear[93262] = "1:01002"
    trainnoyear[93273] = "1:01002"
    trainnoyear[14652] = "1:01002"
    trainnoyear[14663] = "1:01002"
    trainnoyear[92102] = "1:01002"
    trainnoyear[93233] = "1:01002"
    trainnoyear[93311] = "1:01002"
    trainnoyear[92131] = "1:01003"
    trainnoyear[92142] = "1:01003"
    trainnoyear[92153] = "1:01003"
    trainnoyear[94022] = "1:01003"
    trainnoyear[94033] = "1:01003"
    trainnoyear[92162] = "1:01003"
    trainnoyear[92173] = "1:01003"
    trainnoyear[92181] = "1:01003"
    trainnoyear[92191] = "1:01004"
    trainnoyear[92202] = "1:01004"
    trainnoyear[92213] = "1:01004"
    trainnoyear[94202] = "1:01004"
    trainnoyear[94213] = "1:01004"
    trainnoyear[92222] = "1:01004"
    trainnoyear[92233] = "1:01004"
    trainnoyear[92241] = "1:01004"
    trainnoyear[93011] = "1:01005"
    trainnoyear[93022] = "1:01005"
    trainnoyear[93033] = "1:01005"
    trainnoyear[94162] = "1:01005"
    trainnoyear[94173] = "1:01005"
    trainnoyear[93042] = "1:01005"
    trainnoyear[93053] = "1:01005"
    trainnoyear[93061] = "1:01005"
    trainnoyear[92061] = "1:01006"
    trainnoyear[92053] = "1:01006"
    trainnoyear[92042] = "1:01006"
    trainnoyear[94053] = "1:01006"
    trainnoyear[94042] = "1:01006"
    trainnoyear[94093] = "1:01006"
    trainnoyear[94082] = "1:01006"
    trainnoyear[94071] = "1:01006"
    trainnoyear[93251] = "1:01007"
    trainnoyear[93142] = "1:01007"
    trainnoyear[93153] = "1:01007"
    trainnoyear[93462] = "1:01007"
    trainnoyear[93473] = "1:01007"
    trainnoyear[93282] = "1:01007"
    trainnoyear[93193] = "1:01007"
    trainnoyear[92121] = "1:01007"
    trainnoyear[93191] = "1:01008"
    trainnoyear[93202] = "1:01008"
    trainnoyear[93213] = "1:01008"
    trainnoyear[94142] = "1:01008"
    trainnoyear[94153] = "1:01008"
    trainnoyear[93222] = "1:01008"
    trainnoyear[92113] = "1:01008"
    trainnoyear[93361] = "1:01008"
    trainnoyear[93131] = "1:01009"
    trainnoyear[93322] = "1:01009"
    trainnoyear[93333] = "1:01009"
    trainnoyear[93402] = "1:01009"
    trainnoyear[93413] = "1:01009"
    trainnoyear[93162] = "1:01009"
    trainnoyear[93293] = "1:01009"
    trainnoyear[93301] = "1:01009"
    trainnoyear[93181] = "1:01010"
    trainnoyear[93353] = "1:01010"
    trainnoyear[93342] = "1:01010"
    trainnoyear[94233] = "1:01010"
    trainnoyear[94222] = "1:01010"
    trainnoyear[92093] = "1:01010"
    trainnoyear[92082] = "1:01010"
    trainnoyear[92071] = "1:01010"
    trainnoyear[93071] = "1:01014"
    trainnoyear[93082] = "1:01014"
    trainnoyear[93093] = "1:01014"
    trainnoyear[93382] = "1:01014"
    trainnoyear[93393] = "1:01014"
    trainnoyear[93102] = "1:01014"
    trainnoyear[93113] = "1:01014"
    trainnoyear[93241] = "1:01014"
    //01A02
    trainnoyear[93371] = "1:01011"
    trainnoyear[93421] = "1:01011"
    trainnoyear[93431] = "1:01012"
    trainnoyear[93481] = "1:01012"
    trainnoyear[94011] = "1:01013"
    trainnoyear[94061] = "1:01013"
    trainnoyear[94131] = "1:01015"
    trainnoyear[94181] = "1:01015"
    trainnoyear[94191] = "1:01016"
    trainnoyear[94241] = "1:01016"
    //01A03
    trainnoyear[98011] = "1:01017"
    trainnoyear[98022] = "1:01017"
    trainnoyear[98033] = "1:01017"
    trainnoyear[14672] = "1:01017"
    trainnoyear[14683] = "1:01017"
    trainnoyear[98042] = "1:01017"
    trainnoyear[98053] = "1:01017"
    trainnoyear[98061] = "1:01017"
    trainnoyear[99011] = "1:01018"
    trainnoyear[99022] = "1:01018"
    trainnoyear[99033] = "1:01018"
    trainnoyear[1802] = "1:01018"
    trainnoyear[1813] = "1:01018"
    trainnoyear[99042] = "1:01018"
    trainnoyear[99053] = "1:01018"
    trainnoyear[99061] = "1:01018"
    trainnoyear[99071] = "1:01019"
    trainnoyear[99082] = "1:01019"
    trainnoyear[99093] = "1:01019"
    trainnoyear[1822] = "1:01019"
    trainnoyear[1833] = "1:01019"
    trainnoyear[99102] = "1:01019"
    trainnoyear[99113] = "1:01019"
    trainnoyear[99121] = "1:01019"
    trainnoyear[99131] = "1:01020"
    trainnoyear[99142] = "1:01020"
    trainnoyear[99153] = "1:01020"
    trainnoyear[99502] = "1:01020"
    trainnoyear[99513] = "1:01020"
    trainnoyear[99162] = "1:01020"
    trainnoyear[99173] = "1:01020"
    trainnoyear[99181] = "1:01020"
    trainnoyear[99191] = "1:01021"
    trainnoyear[99202] = "1:01021"
    trainnoyear[99213] = "1:01021"
    trainnoyear[99522] = "1:01021"
    trainnoyear[99533] = "1:01021"
    trainnoyear[99222] = "1:01021"
    trainnoyear[99233] = "1:01021"
    trainnoyear[99241] = "1:01021"
    trainnoyear[99251] = "1:01022" 
    trainnoyear[99262] = "1:01022"
    trainnoyear[99273] = "1:01022"
    trainnoyear[22] = "1:01022"
    trainnoyear[33] = "1:01022"
    trainnoyear[99282] = "1:01022"
    trainnoyear[99293] = "1:01022"
    trainnoyear[99301] = "1:01022"
    trainnoyear[99311] = "1:01023"
    trainnoyear[99322] = "1:01023"
    trainnoyear[99333] = "1:01023"
    trainnoyear[42] = "1:01023"
    trainnoyear[53] = "1:01023"
    trainnoyear[99342] = "1:01023"
    trainnoyear[99353] = "1:01023"
    trainnoyear[99361] = "1:01023"
    trainnoyear[99371] = "1:01024"
    trainnoyear[99382] = "1:01024"
    trainnoyear[99393] = "1:01024"
    trainnoyear[1742] = "1:01024"
    trainnoyear[1753] = "1:01024"
    trainnoyear[99402] = "1:01024"
    trainnoyear[99413] = "1:01024"
    trainnoyear[99421] = "1:01024"
    trainnoyear[99431] = "1:01025"
    trainnoyear[99442] = "1:01025"
    trainnoyear[99453] = "1:01025"
    trainnoyear[1762] = "1:01025"
    trainnoyear[1773] = "1:01025"
    trainnoyear[99462] = "1:01025"
    trainnoyear[99473] = "1:01025"
    trainnoyear[99481] = "1:01025"
    //01A04
    trainnoyear[99541] = "1:01026"
    trainnoyear[99491] = "1:01026"
    trainnoyear[61] = "1:01027"
    trainnoyear[11] = "1:01027"
    trainnoyear[1781] = "1:01028"
    trainnoyear[1731] = "1:01028"
    trainnoyear[1841] = "1:01029"
    trainnoyear[1791] = "1:01029"
    trainnoyear[1251] = "1:01030（Tc车曾在2号线，车号02017）"
    trainnoyear[1301] = "1:01030（Tc车曾在2号线，车号02017）"
    trainnoyear[1311] = "1:01031（Tc车曾在2号线，车号02018）"
    trainnoyear[1361] = "1:01031（Tc车曾在2号线，车号02018）"
    trainnoyear[1371] = "1:01032（Tc车曾在2号线，车号02019）"
    trainnoyear[1421] = "1:01032（Tc车曾在2号线，车号02019）"
    trainnoyear[1431] = "1:01033（Tc车曾在2号线，车号02020）"
    trainnoyear[1481] = "1:01033（Tc车曾在2号线，车号02020）"
    trainnoyear[1491] = "1:01034（Tc车曾在2号线，车号02021）"
    trainnoyear[1541] = "1:01034（Tc车曾在2号线，车号02021）"
    trainnoyear[1551] = "1:01035（Tc车曾在2号线，车号02022）"
    trainnoyear[1601] = "1:01035（Tc车曾在2号线，车号02022）"
    trainnoyear[1611] = "1:01036（Tc车曾在2号线，车号02023）"
    trainnoyear[1661] = "1:01036（Tc车曾在2号线，车号02023）"
    trainnoyear[1671] = "1:01037（Tc车曾在2号线，车号02024）"
    trainnoyear[1721] = "1:01037（Tc车曾在2号线，车号02024）"
    //02A01
    trainnoyear[71] = "2:02001"
    trainnoyear[82] = "2:02001"
    trainnoyear[93] = "2:02001"
    trainnoyear[1262] = "2:02001"
    trainnoyear[1273] = "2:02001"
    trainnoyear[102] = "2:02001"
    trainnoyear[113] = "2:02001"
    trainnoyear[121] = "2:02001"
    trainnoyear[131] = "2:02002"
    trainnoyear[142] = "2:02002"
    trainnoyear[153] = "2:02002"
    trainnoyear[1282] = "2:02002"
    trainnoyear[1293] = "2:02002"
    trainnoyear[162] = "2:02002"
    trainnoyear[173] = "2:02002"
    trainnoyear[181] = "2:02002"
    trainnoyear[191] = "2:02003"
    trainnoyear[202] = "2:02003"
    trainnoyear[213] = "2:02003"
    trainnoyear[1322] = "2:02003"
    trainnoyear[1333] = "2:02003"
    trainnoyear[222] = "2:02003"
    trainnoyear[233] = "2:02003"
    trainnoyear[241] = "2:02003"
    trainnoyear[251] = "2:02004"
    trainnoyear[262] = "2:02004"
    trainnoyear[273] = "2:02004"
    trainnoyear[1342] = "2:02004"
    trainnoyear[1353] = "2:02004"
    trainnoyear[282] = "2:02004"
    trainnoyear[293] = "2:02004"
    trainnoyear[301] = "2:02004"
    trainnoyear[311] = "2:02005"
    trainnoyear[322] = "2:02005"
    trainnoyear[333] = "2:02005"
    trainnoyear[1442] = "2:02005"
    trainnoyear[1453] = "2:02005"
    trainnoyear[342] = "2:02005"
    trainnoyear[353] = "2:02005"
    trainnoyear[361] = "2:02005"
    trainnoyear[371] = "2:02006"
    trainnoyear[382] = "2:02006"
    trainnoyear[393] = "2:02006"
    trainnoyear[1402] = "2:02006"
    trainnoyear[1413] = "2:02006"
    trainnoyear[402] = "2:02006"
    trainnoyear[413] = "2:02006"
    trainnoyear[421] = "2:02006"
    trainnoyear[431] = "2:02007"
    trainnoyear[442] = "2:02007"
    trainnoyear[453] = "2:02007"
    trainnoyear[1382] = "2:02007"
    trainnoyear[1393] = "2:02007"
    trainnoyear[462] = "2:02007"
    trainnoyear[473] = "2:02007"
    trainnoyear[481] = "2:02007"
    trainnoyear[491] = "2:02008"
    trainnoyear[502] = "2:02008"
    trainnoyear[513] = "2:02008"
    trainnoyear[1462] = "2:02008"
    trainnoyear[1473] = "2:02008"
    trainnoyear[522] = "2:02008"
    trainnoyear[533] = "2:02008"
    trainnoyear[541] = "2:02008"
    trainnoyear[551] = "2:02009"
    trainnoyear[562] = "2:02009"
    trainnoyear[573] = "2:02009"
    trainnoyear[1502] = "2:02009"
    trainnoyear[1513] = "2:02009"
    trainnoyear[582] = "2:02009"
    trainnoyear[593] = "2:02009"
    trainnoyear[601] = "2:02009"
    trainnoyear[611] = "2:02010"
    trainnoyear[622] = "2:02010"
    trainnoyear[633] = "2:02010"
    trainnoyear[1522] = "2:02010"
    trainnoyear[1533] = "2:02010"
    trainnoyear[642] = "2:02010"
    trainnoyear[653] = "2:02010"
    trainnoyear[661] = "2:02010"
    trainnoyear[671] = "2:02011"
    trainnoyear[682] = "2:02011"
    trainnoyear[693] = "2:02011"
    trainnoyear[1562] = "2:02011"
    trainnoyear[1573] = "2:02011"
    trainnoyear[702] = "2:02011"
    trainnoyear[713] = "2:02011"
    trainnoyear[721] = "2:02011"
    trainnoyear[731] = "2:02012"
    trainnoyear[742] = "2:02012"
    trainnoyear[753] = "2:02012"
    trainnoyear[1582] = "2:02012"
    trainnoyear[1593] = "2:02012"
    trainnoyear[762] = "2:02012"
    trainnoyear[773] = "2:02012"
    trainnoyear[781] = "2:02012"
    trainnoyear[1011] = "2:02013"
    trainnoyear[1022] = "2:02013"
    trainnoyear[1033] = "2:02013"
    trainnoyear[1622] = "2:02013"
    trainnoyear[1633] = "2:02013"
    trainnoyear[1042] = "2:02013"
    trainnoyear[1053] = "2:02013"
    trainnoyear[1061] = "2:02013"
    trainnoyear[1071] = "2:02014"
    trainnoyear[1082] = "2:02014"
    trainnoyear[1093] = "2:02014"
    trainnoyear[1642] = "2:02014"
    trainnoyear[1653] = "2:02014"
    trainnoyear[1102] = "2:02014"
    trainnoyear[1113] = "2:02014"
    trainnoyear[1121] = "2:02014"
    trainnoyear[1131] = "2:02015"
    trainnoyear[1142] = "2:02015"
    trainnoyear[1153] = "2:02015"
    trainnoyear[1682] = "2:02015"
    trainnoyear[1693] = "2:02015"
    trainnoyear[1162] = "2:02015"
    trainnoyear[1173] = "2:02015"
    trainnoyear[1181] = "2:02015"
    trainnoyear[1191] = "2:02016"
    trainnoyear[1202] = "2:02016"
    trainnoyear[1213] = "2:02016"
    trainnoyear[1702] = "2:02016"
    trainnoyear[1713] = "2:02016"
    trainnoyear[1222] = "2:02016"
    trainnoyear[1233] = "2:02016"
    trainnoyear[1241] = "2:02016"
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
    trainnoyear[14352] = "1:01011"
    trainnoyear[14363] = "1:01011"
    trainnoyear[14372] = "1:01011"
    trainnoyear[14383] = "1:01011"
    trainnoyear[14392] = "1:01011"
    trainnoyear[14403] = "1:01011"
    trainnoyear[14412] = "1:01012"
    trainnoyear[14423] = "1:01012"
    trainnoyear[14432] = "1:01012"
    trainnoyear[14443] = "1:01012"
    trainnoyear[14452] = "1:01012"
    trainnoyear[14463] = "1:01012"
    trainnoyear[14472] = "1:01013"
    trainnoyear[14483] = "1:01013"
    trainnoyear[14492] = "1:01013"
    trainnoyear[14503] = "1:01013"
    trainnoyear[14512] = "1:01013"
    trainnoyear[14523] = "1:01013"
    trainnoyear[14532] = "1:01015"
    trainnoyear[14543] = "1:01015"
    trainnoyear[14552] = "1:01015"
    trainnoyear[14563] = "1:01015"
    trainnoyear[14572] = "1:01015"
    trainnoyear[14583] = "1:01015"
    trainnoyear[14592] = "1:01016"
    trainnoyear[14603] = "1:01016"
    trainnoyear[14612] = "1:01016"
    trainnoyear[14623] = "1:01016"
    trainnoyear[14632] = "1:01016"
    trainnoyear[14643] = "1:01016"
    //01A04
    trainnoyear[13632] = "1:01026"
    trainnoyear[13643] = "1:01026"
    trainnoyear[13652] = "1:01026"
    trainnoyear[13663] = "1:01026"
    trainnoyear[13673] = "1:01026"
    trainnoyear[13682] = "1:01026"
    trainnoyear[13752] = "1:01027"
    trainnoyear[13763] = "1:01027"
    trainnoyear[13772] = "1:01027"
    trainnoyear[13783] = "1:01027"
    trainnoyear[13793] = "1:01027"
    trainnoyear[13802] = "1:01027"
    trainnoyear[13812] = "1:01028"
    trainnoyear[13823] = "1:01028"
    trainnoyear[13832] = "1:01028"
    trainnoyear[13843] = "1:01028"
    trainnoyear[13853] = "1:01028"
    trainnoyear[13862] = "1:01028"
    trainnoyear[13692] = "1:01029"
    trainnoyear[13703] = "1:01029"
    trainnoyear[13712] = "1:01029"
    trainnoyear[13723] = "1:01029"
    trainnoyear[13733] = "1:01029"
    trainnoyear[13742] = "1:01029"
    trainnoyear[13992] = "1:01030（Tc车曾在2号线，车号02017）"
    trainnoyear[14003] = "1:01030（Tc车曾在2号线，车号02017）"
    trainnoyear[14012] = "1:01030（Tc车曾在2号线，车号02017）"
    trainnoyear[14023] = "1:01030（Tc车曾在2号线，车号02017）"
    trainnoyear[14033] = "1:01030（Tc车曾在2号线，车号02017）"
    trainnoyear[14042] = "1:01030（Tc车曾在2号线，车号02017）"
    trainnoyear[14172] = "1:01031（Tc车曾在2号线，车号02018）"
    trainnoyear[14183] = "1:01031（Tc车曾在2号线，车号02018）"
    trainnoyear[14192] = "1:01031（Tc车曾在2号线，车号02018）"
    trainnoyear[14203] = "1:01031（Tc车曾在2号线，车号02018）"
    trainnoyear[14213] = "1:01031（Tc车曾在2号线，车号02018）"
    trainnoyear[14222] = "1:01031（Tc车曾在2号线，车号02018）"
    trainnoyear[14232] = "1:01032（Tc车曾在2号线，车号02019）"
    trainnoyear[14243] = "1:01032（Tc车曾在2号线，车号02019）"
    trainnoyear[14252] = "1:01032（Tc车曾在2号线，车号02019）"
    trainnoyear[14263] = "1:01032（Tc车曾在2号线，车号02019）"
    trainnoyear[14273] = "1:01032（Tc车曾在2号线，车号02019）"
    trainnoyear[14282] = "1:01032（Tc车曾在2号线，车号02019）"
    trainnoyear[14112] = "1:01033（Tc车曾在2号线，车号02020）"
    trainnoyear[14123] = "1:01033（Tc车曾在2号线，车号02020）"
    trainnoyear[14132] = "1:01033（Tc车曾在2号线，车号02020）"
    trainnoyear[14143] = "1:01033（Tc车曾在2号线，车号02020）"
    trainnoyear[14153] = "1:01033（Tc车曾在2号线，车号02020）"
    trainnoyear[14162] = "1:01033（Tc车曾在2号线，车号02020）"
    trainnoyear[14052] = "1:01034（Tc车曾在2号线，车号02021）"
    trainnoyear[14063] = "1:01034（Tc车曾在2号线，车号02021）"
    trainnoyear[14072] = "1:01034（Tc车曾在2号线，车号02021）"
    trainnoyear[14083] = "1:01034（Tc车曾在2号线，车号02021）"
    trainnoyear[14093] = "1:01034（Tc车曾在2号线，车号02021）"
    trainnoyear[14102] = "1:01034（Tc车曾在2号线，车号02021）"
    trainnoyear[13872] = "1:01035（Tc车曾在2号线，车号02022）"
    trainnoyear[13883] = "1:01035（Tc车曾在2号线，车号02022）"
    trainnoyear[13892] = "1:01035（Tc车曾在2号线，车号02022）"
    trainnoyear[13903] = "1:01035（Tc车曾在2号线，车号02022）"
    trainnoyear[13913] = "1:01035（Tc车曾在2号线，车号02022）"
    trainnoyear[13922] = "1:01035（Tc车曾在2号线，车号02022）"
    trainnoyear[13932] = "1:01036（Tc车曾在2号线，车号02023）"
    trainnoyear[13943] = "1:01036（Tc车曾在2号线，车号02023）"
    trainnoyear[13952] = "1:01036（Tc车曾在2号线，车号02023）"
    trainnoyear[13963] = "1:01036（Tc车曾在2号线，车号02023）"
    trainnoyear[13973] = "1:01036（Tc车曾在2号线，车号02023）"
    trainnoyear[13982] = "1:01036（Tc车曾在2号线，车号02023）"
    trainnoyear[14292] = "1:01037（Tc车曾在2号线，车号02024）"
    trainnoyear[14303] = "1:01037（Tc车曾在2号线，车号02024）"
    trainnoyear[14312] = "1:01037（Tc车曾在2号线，车号02024）"
    trainnoyear[14323] = "1:01037（Tc车曾在2号线，车号02024）"
    trainnoyear[14333] = "1:01037（Tc车曾在2号线，车号02024）"
    trainnoyear[14342] = "1:01037（Tc车曾在2号线，车号02024）"
    //09A01
    trainnoyear[11751] = "9:09001（曾在1号线运营，车号01030）"
    if (trainnoyear[userinputn] == undefined) {
        document.getElementById('output').innerHTML = '车体号有误';
    } else {
        document.getElementById('output').innerHTML = trainnoyear[userinputn];
    }
};