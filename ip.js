var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
});

ip = "http://192.168.32.112"
ip_found = false;

function findResponsiveIP() {
    const ipList = [
        'http://192.168.32.112',
        'http://192.168.86.112',
        'http://192.168.1.112',
        "http://127.0.0.1:5000",
        "http://localhost:9080",
        "https://192.168.86.207"
        // Add more IPs as needed
    ];

    return new Promise((resolve) => {
        let found = false;

        ipList.forEach(_ip => {
            if (found) return;
            console.log(`Trying IP: ${_ip}`);

            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        if (!found) {
                            found = true;
                            ip_found = true;
                            console.log(`Found responsive IP: ${_ip}`);
                            ip = `${_ip}`
                            resolve(_ip);
                        }
                    }
                }
            };
            xhttp.onerror = function () {
                // Do nothing, the IP did not respond
            };
            xhttp.open("GET", `${_ip}/all`, true);
            xhttp.send();
        });

        // If no IP responds within 5 seconds, resolve with null
        setTimeout(() => {
            if (!found) {
                resolve(null);
            }
        }, 5000);
    });
}