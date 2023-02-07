



var odchk=document.getElementById('odchk');

odchk.addEventListener("click",gobtn);

function gobtn(){
    var a=document.getElementById('od').value;
    if(a%2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}

