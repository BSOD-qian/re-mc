document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        setTimeout(lcomplete, 1000);
    }
}
function lcomplete() {
    document.getElementById('loadingdiv').style.display = "none"
    document.getElementById('appbar').style.display = "block"
    this.body.classList.add('mdui-appbar-with-toolbar')
}