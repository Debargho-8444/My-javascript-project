



var odchk=document.getElementById('odchk');

odchk.addEventListener("click",gobtn);

function gobtn(){
    var a=document.getElementById('od').value;
    if(a%2==0){
        document.getElementById('res').innerHTML="Even"
    }
    else{
        document.getElementById('res').innerHTML="Odd"
    }
}

