const getFirst = document.getElementById('first');
const getSecond = document.getElementById('second')
const getThird = document.getElementById('third')
const getDotFirst = document.getElementById('dot-show')
const getDotSecond = document.getElementById('dot-show-second')
const getDotThird = document.getElementById('dot-show-third')
const getShowNumber = document.getElementById('showNumber')
var x = 3;

getShowNumber.innerHTML = x;

function minus() {
    result = x--
}

function putMinus() {
    minus()
    getShowNumber.innerText = x;
    if(x < 0) {
        getShowNumber.innerHTML = 0;
    }
}



function removeFirst() {
    getFirst.style.backgroundColor = 'white';
    getDotFirst.style.display = 'none';
    putMinus()

}


function removeSecond() {
    getSecond.style.backgroundColor = 'white';
    getDotSecond.style.display = 'none';
    putMinus()
}

function removeThird() {
    getThird.style.backgroundColor = 'white';
    getDotThird.style.display = 'none';
    putMinus()
}


function removeAll() {
    removeFirst();
    removeSecond();
    removeThird();
}
