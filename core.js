var userinput = 0;
var lineno = 0;
var carno = 0;
var year = 0;
var trainno = 0;
var final = 0;
var length = 0;
function receive() {
    userinput = document.getElementById('input').value;
    length = userinput.length;
    lineno = Math.trunc(userinput / 100000 % 10) * 10 + Math.trunc(userinput / 10000 % 10);
    if (length != 0){
        if (length < 6) {
            document.getElementById('output').innerHTML = "暂不支持！"
        } else {
            if (lineno != 6) {
                if (lineno != 8) {
                    if (lineno != 14) {
                        if (lineno != 16) {
                            calccommon();
                        } else {
                            document.getElementById('output').innerHTML = "暂不支持！"
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
        }
    }else{document.getElementById('output').innerHTML = "额，你输入车体号了吗？(⊙﹏⊙)"}
}
function calccommon() {
    carno = Math.trunc(userinput / 1000 % 10) * 100 + Math.trunc(userinput / 100 % 10) * 10 + Math.trunc(userinput / 10 % 10);
    trainno = Math.ceil(carno / 6);
    final = lineno * 1000 + trainno
    document.getElementById('output').innerHTML = lineno + ":" + final.toString().padStart(5, "0");
}
function calc14() {
    carno = Math.trunc(userinput / 1000 % 10) * 100 + Math.trunc(userinput / 100 % 10) * 10 + Math.trunc(userinput / 10 % 10);
    trainno = Math.ceil(carno / 8);
    final = lineno * 1000 + trainno;
    document.getElementById('output').innerHTML = "14:" + final.toString().padStart(5, "0");
}
function calc6() {
    carno = Math.trunc(userinput / 1000 % 10) * 100 + Math.trunc(userinput / 100 % 10) * 10 + Math.trunc(userinput / 10 % 10);
    if (carno <= 12 && carno >= 1){
        trainno = Math.ceil(carno / 4);
    }else{
        if (carno <= 48 && carno >= 13){
            trainno = Math.ceil(carno / 4 + 1);
        }else{
            if (carno <= 84 && carno >= 49){
                trainno = Math.ceil(carno / 4 + 2);
            }else{
                if (carno <= 120 && carno >= 85){
                    trainno = Math.ceil(carno / 4 + 3);
                }else{
                    if (carno <= 156 && carno >= 121){
                        trainno = Math.ceil(carno / 4 + 4);
                    }else{
                        if (carno <= 192 && carno >= 157){
                            trainno = Math.ceil(carno / 4 + 5);
                        }else{
                            if (carno <= 304 && carno >= 193){
                                trainno = Math.ceil(carno / 4 + 6);
                            }else{
                                
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
    carno = Math.trunc(userinput / 1000 % 10) * 100 + Math.trunc(userinput / 100 % 10) * 10 + Math.trunc(userinput / 10 % 10);
    if (carno <= 168 && carno >= 1){
        trainno = Math.ceil(carno / 6);
    }else{
        if (carno <= 602 && carno >= 169){
            trainno = Math.ceil(carno / 7 + 4);
        }else{

        }
    }
    final = lineno * 1000 + trainno;
    document.getElementById('output').innerHTML = "8:" + final.toString().padStart(5, "0");
}
