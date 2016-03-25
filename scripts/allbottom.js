var homeurl = ["www.766.com", "www.ptbus.com", "www.tgbus.com", "www.178.com"];
var h_state = true;
var cururl = document.URL.replace("http://", "").replace("http://pc.tgbus.com/", "").replace("index.shtml", "").replace("index-2.html", "").replace("http://pc.tgbus.com/404", "");
for (var hi = 0; hi < homeurl.length; hi++) {
    if (cururl == homeurl[hi]) {
        h_state = false;
        break;
    }
}
if (h_state) {
    var allfooter = document.createElement("script");
    allfooter.src = "../../../gg.stargame.com/c/700.html";
    document.body.appendChild(allfooter);
}