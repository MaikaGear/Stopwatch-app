
let milliseconds = document.querySelector('.milli-seconds')
let seconds = document.querySelector('.seconds')
let minutes = document.querySelector('.minutes')
const startBtn = document.querySelector('.start-btn')
const stopBtn = document.querySelector('.stop-btn')
const lapBtn = document.querySelector('.lap-btn')
const clearBtn = document.querySelector('.clear-btn')
const resetBtn = document.querySelector('.reset-timer-btn')
let newChild = document.querySelector('.new-para')
let parentEl = document.querySelector('.lappedContainer')
let id;
let id2;

let countStart = 3;
let timeInMinutes = 00;
let timeInSeconds = 00;
let timeInMili = 00;




minutes.innerHTML = '0' + timeInMinutes
seconds.innerHTML = '0' + timeInSeconds
milliseconds.innerHTML = '0' + timeInMili

startBtn.addEventListener('click', start)

function activateButton(button){
    if(button.hasAttribute('disabled')){
        button.removeAttribute('disabled')
    }
}
function deactivateButton(button){
    if(!button.hasAttribute('disabled')){
        button.setAttribute('disabled', 'true');
    }
}

resetBtn.addEventListener('click', function(){
    clearInterval(id);
    timeInMinutes = 0;
    timeInSeconds = 0;
    timeInMili = 0;
    minutes.innerHTML = timeInMinutes + '0';
    seconds.innerHTML = timeInSeconds + '0';
    milliseconds.innerHTML = timeInMili + '0';
    lapBtn.setAttribute('disabled', 'true');
    clearLaps();
    startBtn.removeAttribute('disabled');
    stopBtn.setAttribute('disabled', 'true');
})


function start(){
    clearInterval(id);
    id = setInterval(timer, 10);
    /* resetBtn.removeAttribute('disabled');
    stopBtn.removeAttribute('disabled'); */
    deactivateButton(resetBtn);
    activateButton(stopBtn);
    activateButton(resetBtn);
    activateButton(lapBtn);
    lapCount = 0;
}
function timer(){
    milliseconds.innerHTML = timeInMili ++
    if (timeInMili === 99){
        timeInMili = 00
        timeInSeconds ++
    }
    if(timeInSeconds < 10 && typeof timeInSeconds !== 'string'){
        seconds.innerHTML = '0' + timeInSeconds
    }
    if(timeInSeconds >= 10){
        seconds.innerHTML = timeInSeconds
    }
    if(timeInMili < 10 && typeof timeInMili !== 'string'){
        milliseconds.innerHTML = '0' + timeInMili
    }
    if(timeInMili >= 10){
        milliseconds.innerHTML = timeInMili
    }
    if(timeInMinutes < 10 && typeof timeInMinutes !== 'string'){
        minutes.innerHTML = '0' + timeInMinutes
    }
    if(timeInMinutes >= 10){
        minutes.innerHTML = timeInMinutes
    }
    if(timeInSeconds === 60){
        timeInSeconds = 00
        timeInMinutes ++
    }
    activateButton(lapBtn);
    deactivateButton(startBtn);
}

stopBtn.addEventListener('click', function(){
    clearInterval(id)
    activateButton(startBtn);
    deactivateButton(stopBtn);
}
)


function check(val){
    if(val <= 9){
        return "0" + val;
    } else {
        return val;
    }
}

let lapCount = 0;
lapBtn.addEventListener('click', function(){
    let newPara = document.createElement('p');
    newPara.innerHTML = `${check(timeInMinutes)}:${check(timeInSeconds)}:${check(timeInMili)}`;
    newPara.classList.add('new-para');
    parentEl.appendChild(newPara);
    activateButton(clearBtn);
    clearBtn.addEventListener('click', function(){
        newPara.remove();
        deactivateButton(clearBtn);
    })
    lapCount ++;
    if(lapCount === 10){
        clearLaps();
    }    
})



function clearLaps(){
    while(parentEl.firstChild){
        parentEl.replaceChildren();
    }
    lapCount = 0;
}

function clrCnt(){
    clearCountdown.innerHTML = countStart --;
    if(countStart === 0){
        clearCountdown.innerHTML = '';
    }
}


