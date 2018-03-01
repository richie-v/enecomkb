// INIT
document.addEventListener('DOMContentLoaded', function () {
    console.log('connectSalesboard');
    window.salesboard.connect({
            onOpen:function(){
                console.log('Connected!');
            }
        }
    );
});