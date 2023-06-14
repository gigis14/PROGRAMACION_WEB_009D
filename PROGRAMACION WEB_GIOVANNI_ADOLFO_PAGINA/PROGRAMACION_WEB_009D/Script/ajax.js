window.onload = function NavFoot() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("nav2").innerHTML = this.responseText;
    }
};
xhttp.open("GET", "menu.html", true);
xhttp.send();
var xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("footer2").innerHTML = this.responseText;
    }
};
xhttp2.open("GET", "footer.html", true);
xhttp2.send();    
}