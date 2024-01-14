var brightness = localStorage.getItem("darkmode");
function theme_after_load(){
    if (brightness == null) {
        localStorage.setItem("darkmode", "2");
        brightness = localStorage.getItem("darkmode");
        mdui.setTheme('auto');
        document.getElementById("brightness_tooltip").content = "当前主题：跟随系统"
        document.getElementById("brightness_control").icon = "brightness_auto";
    }
    if (brightness == 0) {
        mdui.setTheme('light');
        document.getElementById("brightness_tooltip").content = "当前主题：亮色"
        document.getElementById("brightness_control").icon = "brightness_5";
    };
    if (brightness == 1) {
        mdui.setTheme('dark');
        document.getElementById("brightness_tooltip").content = "当前主题：暗色"
        document.getElementById("brightness_control").icon = "brightness_3";
    };
    if (brightness == 2) {
        mdui.setTheme('auto');
        document.getElementById("brightness_tooltip").content = "当前主题：跟随系统"
        document.getElementById("brightness_control").icon = "brightness_auto";
    };
}
function change() {
    if (brightness == 2) {
        mdui.setTheme('light');
        document.getElementById("brightness_tooltip").content = "当前主题：亮色"
        document.getElementById("brightness_control").icon = "brightness_5";
        localStorage.setItem("darkmode", "0");
        brightness = localStorage.getItem("darkmode");
    } else {
        if (brightness == 0) {
            mdui.setTheme('dark');
            document.getElementById("brightness_tooltip").content = "当前主题：暗色"
            document.getElementById("brightness_control").icon = "brightness_3";
            localStorage.setItem("darkmode", "1");
            brightness = localStorage.getItem("darkmode");
        } else {
            if (brightness == 1) {
                mdui.setTheme('auto');
                document.getElementById("brightness_tooltip").content = "当前主题：跟随系统"
                document.getElementById("brightness_control").icon = "brightness_auto";
                localStorage.setItem("darkmode", "2");
                brightness = localStorage.getItem("darkmode");
            }
        }
    }
};