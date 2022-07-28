let newAdvice = document.getElementById('advice');
let getAdvice = document.getElementById('image');
let adviceId = document.getElementById('ide')

getAdvice.addEventListener('click', getNewAdvice)

/*function getNewAdvice () {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then((data) => {
        newAdvice.innerHTML = '<h2>"${slip.advice}"</h2>'
    })
}*/

function getNewAdvice(){
    /*fetch('https://api.adviceslip.com/advice')
    .then(function(res){
        return(res.json());
    })
    .then(function(data){
        console.log(data.slip.advice);
    });*/

    fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
        adviceId.innerHTML = data.slip.id;
        newAdvice.innerHTML = data.slip.advice;
    })
}