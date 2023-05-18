var brightness = localStorage.getItem("darkmode");
if (brightness == null) {
    localStorage.setItem("darkmode", "2");
    brightness = localStorage.getItem("darkmode");
    document.getElementById("body").classList.add("mdui-theme-layout-auto");
    document.getElementById("body").classList.add("body_auto");
    document.getElementById("card1").classList.add("card_auto");
    document.getElementById("card2").classList.add("card_auto");
    document.getElementById("drawer").classList.add("drawer_auto");
    document.getElementById("brightness_control").innerHTML = "brightness_auto";
}
if (brightness == 0) {
    document.getElementById("body").classList.add("body_light");
    document.getElementById("card1").classList.add("card_light");
    document.getElementById("card2").classList.add("card_light");
    document.getElementById("drawer").classList.add("drawer_light");
    document.getElementById("brightness_control").innerHTML = "brightness_5";
};
if (brightness == 1) {
    document.getElementById("body").classList.add("mdui-theme-layout-dark");
    document.getElementById("body").classList.add("body_dark");
    document.getElementById("card1").classList.add("card_dark");
    document.getElementById("card2").classList.add("card_dark");
    document.getElementById("drawer").classList.add("drawer_dark");
    document.getElementById("brightness_control").innerHTML = "brightness_3";
};
if (brightness == 2) {
    document.getElementById("body").classList.add("mdui-theme-layout-auto");
    document.getElementById("body").classList.add("body_auto");
    document.getElementById("card1").classList.add("card_auto");
    document.getElementById("card2").classList.add("card_auto");
    document.getElementById("drawer").classList.add("drawer_auto");
    document.getElementById("brightness_control").innerHTML = "brightness_auto";
};
function change() {
    if (brightness == 2) {
        document.getElementById("body").classList.remove("mdui-theme-layout-auto");
        document.getElementById("body").classList.remove("body_auto");
        document.getElementById("card1").classList.remove("card_auto");
        document.getElementById("card2").classList.remove("card_auto");
        document.getElementById("drawer").classList.remove("drawer_auto");
        document.getElementById("body").classList.add("body_light");
        document.getElementById("card1").classList.add("card_light");
        document.getElementById("card2").classList.add("card_light");
        document.getElementById("drawer").classList.add("drawer_light");
        document.getElementById("brightness_control").innerHTML = "brightness_5";
        localStorage.setItem("darkmode", "0");
        brightness = localStorage.getItem("darkmode");
    } else {
        if (brightness == 0) {
            document.getElementById("body").classList.remove("body_light");
            document.getElementById("card1").classList.remove("card_light");
            document.getElementById("card2").classList.remove("card_light");
            document.getElementById("drawer").classList.remove("drawer_light");
            document.getElementById("body").classList.add("mdui-theme-layout-dark");
            document.getElementById("body").classList.add("body_dark");
            document.getElementById("card1").classList.add("card_dark");
            document.getElementById("card2").classList.add("card_dark");
            document.getElementById("drawer").classList.add("drawer_dark");
            document.getElementById("brightness_control").innerHTML = "brightness_3";
            localStorage.setItem("darkmode", "1");
            brightness = localStorage.getItem("darkmode");
        } else {
            if (brightness == 1) {
                document.getElementById("body").classList.remove("mdui-theme-layout-dark");
                document.getElementById("body").classList.remove("body_dark");
                document.getElementById("card1").classList.remove("card_dark");
                document.getElementById("card2").classList.remove("card_dark");
                document.getElementById("drawer").classList.remove("drawer_dark");
                document.getElementById("body").classList.add("mdui-theme-layout-auto");
                document.getElementById("body").classList.add("body_auto");
                document.getElementById("card1").classList.add("card_auto");
                document.getElementById("card2").classList.add("card_auto");
                document.getElementById("drawer").classList.add("drawer_auto");
                document.getElementById("brightness_control").innerHTML = "brightness_auto";
                localStorage.setItem("darkmode", "2");
                brightness = localStorage.getItem("darkmode");
            }
        }
    }
};