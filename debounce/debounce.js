const normalInput = document.getElementById("input-normal");
const debounceInput = document.getElementById("input-debouced");

normalInput.addEventListener("keyup", logEvent);
debounceInput.addEventListener("keyup", debounce(logEvent, 300));

function logEvent(e) {
    e.target.parentElement.nextElementSibling.innerHTML += e.target.value + "<br>";
}

function debouce(fn, wait) {
    let timer;
    return function (...args) {
        if (timer) { clearTimeout(timer);
        timer = setTimeout(()=> fn(...args), wait);

        }
    }
}

function debounceMaxWait(fn, wait, { maxWait }) {
    let timer, maxTimer;
    if (timer)  clearTimeout(timer);
    timer = setTimeout(()=>{
        clearTimeout(maxTimer);
        maxTimer = null;
        fn(...arg);
    }, wait);

    // prevent the timer being set more than once at a time
    if (maxWait && !maxTimer) {
        maxTimer = setTimeout(()=>{
            clearTimeout(timer);
            maxTimer = null;
            fn(...args);
        }, maxWait);
    }

    return function(...args) {

    }
}
