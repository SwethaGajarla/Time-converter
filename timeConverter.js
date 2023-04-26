let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtn = document.getElementById("convertBtn");
let errMsg = document.getElementById("errMsg");
let Seconds = document.getElementById("Seconds");

convertBtn.onclick = () =>{
    if(hoursInputEl.value ===""){
        Seconds.classList.add("d-none")
        errMsg.textContent = "Please enter valid number of hours"
    }
    else if(minutesInputEl.value ===""){
        Seconds.classList.add("d-none")
        errMsg.textContent = "Please enter valid number of minutes"
    }
    else{
        errMsg.textContent = ""
        let timerInseconds = (parseInt(hoursInputEl.value)*60)*60 + parseInt(minutesInputEl.value)*60
        Seconds.classList.remove("d-none")
        Seconds.textContent = timerInseconds + " 'S"
    }
}