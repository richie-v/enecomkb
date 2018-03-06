// INIT
document.addEventListener('DOMContentLoaded', function () {
    console.log('connectSalesboard');
    window.salesboard.connect({
            onOpen: function () {
                console.log('Connected!2');
                getUser();

            }
        }
    )
    ;
});

function getUser() {
    consoleLog('getUser');
    window.salesboard.api.system.getUser({}, onResponse());
};

function consoleLog(text) {
    var myDate = new Date();
    var clock = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds() + ":" + myDate.getMilliseconds();
    var message = '[' + clock + ']' + " " + text;
    document.getElementById('console').value += message + '\n';
    document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
    console.log(message);
};