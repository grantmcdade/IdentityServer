function log() {
    document.getElementById('results').innerText = '';

    Array.prototype.forEach.call(arguments, function (msg) {
        if (msg instanceof Error) {
            msg = "Error: " + msg.message;
        }
        else if (typeof msg !== 'string') {
            msg = JSON.stringify(msg, null, 2);
        }
        document.getElementById('results').innerHTML += msg + '\r\n';
    });
}

document.getElementById("api").addEventListener("click", api, false);

function api() {

    var access_token = document.querySelector('#id_token').value;

    var url = "http://localhost:5001/identity";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
        log(xhr.status, JSON.parse(xhr.responseText));
    }
    xhr.setRequestHeader("Authorization", "Bearer " + access_token);
    xhr.send();
}
