// INIT
document.addEventListener('DOMContentLoaded', function () {
    consoleLog('connectSalesboard');
    window.salesboard.connect({
            onOpen:function(){
                consoleLog('Connected!');
            }
        }
    );
});