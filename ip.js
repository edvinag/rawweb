var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
});

// Boat
//ip = "http://192.168.32.145"
ip = "http://192.168.8.112"

// Lars
//ip = "http://192.168.1.112"

// if (vars['ip'] == "localhost") {
//     ip = "http://127.0.0.1:5000"
// }
// if (vars['ip'] == "Connect") {
//     ip = "http://192.168.86.50:5000"
// }

console.log(ip)