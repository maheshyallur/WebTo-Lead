let capthaChecked=false;
function beforeSubmit(event) {
    if(capthaChecked){
        let elementOut = document.querySelector(".outputdate");
    let elementIn = document.querySelector(".inputdate");
    console.log(elementIn.value);
    let formatedDate = new Date(elementIn.value).toLocaleDateString("en-IN");
    elementOut.value = formatedDate;
    console.log(elementOut.value);
    }else{
        alert(" please check captcha is checked before submitting the form ")
        event.preventDefault();
    }
    
}

function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") { var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value); elems["ts"] = JSON.stringify(new Date().getTime()); document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500);

function capthchasuccess(){
    capthaChecked=true;
}