
let milliseconds = document.querySelector('.milli-seconds')
let seconds = document.querySelector('.seconds')
let minutes = document.querySelector('.minutes')
const startBtn = document.querySelector('.start-btn')
const stopBtn = document.querySelector('.stop-btn')
const lapBtn = document.querySelector('.lap-btn')
const clearBtn = document.querySelector('.clear-btn')
const resetBtn = document.querySelector('.reset-timer-btn')
let parentEl = document.querySelector('.lappedContainer')
let id;

let timeInMinutes = 00;
let timeInSeconds = 00;
let timeInMili = 00;

minutes.innerHTML = '0' + timeInMinutes
seconds.innerHTML = '0' + timeInSeconds
milliseconds.innerHTML = '0' + timeInMili

function timer(){
    milliseconds.innerHTML = timeInMili ++
    if (timeInMili === 99){
        timeInMili = 00
        timeInSeconds ++
    }
    if(timeInSeconds < 10){
        seconds.innerHTML = '0' + timeInSeconds
    }
    if(timeInSeconds >= 10){
        seconds.innerHTML = timeInSeconds
    }
    if(timeInMili < 10){
        milliseconds.innerHTML = '0' + timeInMili
    }
    if(timeInMili >= 10){
        milliseconds.innerHTML = timeInMili
    }
    if(timeInMinutes < 10){
        minutes.innerHTML = '0' + timeInMinutes
    }
    if(timeInMinutes >= 10){
        minutes.innerHTML = timeInMinutes
    }
    if(timeInSeconds === 60){
        timeInSeconds = 00
        timeInMinutes ++
    }
}

startBtn.addEventListener('click', start)

function start(){
    clearInterval(id);
    id = setInterval(timer, 10);
    resetBtn.removeAttribute('disabled');
}

resetBtn.addEventListener('click', function(){
    clearInterval(id);
    timeInMinutes = '00';
    timeInSeconds = '00';
    timeInMili = '00';
    minutes.innerHTML = timeInMinutes;
    seconds.innerHTML = timeInSeconds;
    milliseconds.innerHTML = timeInMili;
    lapBtn.setAttribute('disabled', 'true');
    //create a function that clears lapped times so its easier to call
})

stopBtn.addEventListener('click', stop)

function stop(){
    clearInterval(id)
}

function check(val){
    if(val < 9){
        return "0" + val;
    } else {
        return val;
    }
}

lapBtn.addEventListener('click', function(){
    let newPara = document.createElement('p');
    newPara.innerHTML = `${check(timeInMinutes)}:${check(timeInSeconds)}:${check(timeInMili)}`;
    parentEl.appendChild(newPara);
    clearBtn.removeAttribute('disabled');
    clearBtn.addEventListener('click', function(){
        newPara.remove()
    })
})


