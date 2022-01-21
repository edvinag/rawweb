var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
});

ip = "http://192.168.8.112"

if (vars['ip'] == "localhost") {
    ip = "http://127.0.0.1:5000"
}
else if (vars['ip'] != undefined) {
    ip = "http://" + vars['ip']
}

console.log(ip)