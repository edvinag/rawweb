var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
});


function findResponsiveIP() {
    const ipList = [
        '192.168.86.112',
        '192.168.0.2',
        "127.0.0.1:5000",
        '192.168.0.4',
        '192.168.123.19',
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
                            console.log(`Found responsive IP: ${_ip}`);
                            ip = `http://${_ip}`
                            resolve(_ip);
                        }
                    }
                }
            };
            xhttp.onerror = function () {
                // Do nothing, the IP did not respond
            };
            xhttp.open("GET", `http://${_ip}/all`, true);
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