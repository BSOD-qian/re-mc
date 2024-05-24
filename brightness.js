var brightness = localStorage.getItem("darkmode");
function theme_after_load() {
    if (brightness == null) {
        localStorage.setItem("darkmode", "2");
        brightness = localStorage.getItem("darkmode");
        mdui.setTheme('auto');
        document.getElementById("brightness_tooltip").content = "当前主题：跟随系统"
        document.getElementById("brightness_control").icon = "brightness_auto";
        intro();
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
function intro() {
    const driver = window.driver.js.driver;

    const driverObj = driver({
        showProgress: true,
        nextBtnText: '下一步➡️',
        prevBtnText: '⬅️上一步',
        doneBtnText: '完成✅',
        steps: [
          { element: 'body', popover: { title: '你好', description: '看起来你是第一次使用Re:地铁计算器，接下来将向您介绍Re:地铁计算器的使用方法', side: "left", align: 'start' }},
          { element: '#input', popover: { title: '这是输入框', description: '在这里输入车体号', side: "left", align: 'start' }},
          { element: '#calcbutton', popover: { title: '这是计算按钮', description: '按下这个按钮以开始计算', side: "left", align: 'start' }},
          { element: '#output', popover: { title: '这是输出区', description: '计算结果会输出在这里', side: "left", align: 'start' }},
          { element: '#drawer_opener', popover: { title: '这是抽屉', description: '在这里查看更新记录', side: "left", align: 'start' }},
          { element: '#brightness_control', popover: { title: '这是色彩模式切换键', description: '在这里切换色彩模式', side: "left", align: 'start' }},
          { element: '#moremenu', popover: { title: '这是菜单', description: '在这里可以查看版本信息，访问KOOK频道、贴吧原帖、Github仓库，或者重新观看本教程', side: "left", align: 'start' }},
          { element: 'body', popover: { title: '您已完成教程', description: '祝您玩得愉快', side: "left", align: 'start' }},
        ]
      });

    driverObj.drive();
}