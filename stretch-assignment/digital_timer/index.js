let myTimer = setInterval(el => {
    increment();
}, 1000);

let inc = 0
function increment() {
    if(inc < 10){
        document.querySelector('#msTens').textContent = inc;
        inc++;
    }else{
        document.querySelector('#msTens').textContent = '0';
        document.querySelector('#msHundreds').textContent = '1';
        // document.querySelector('#colon ~ div.digit').style.color = "red";
        document.querySelector('#msTens').style.color = 'red';
        document.querySelector('#msHundreds').style.color = 'red';
        clearInterval(myTimer);
    }    
}