// Get the year circles 
const yearBubble = document.querySelectorAll('.time-2014');
console.log(yearBubble);

//Get the card 
const infoCard = document.querySelectorAll('.info-card');
console.log(infoCard);

//Get the time line section 
const timeLine = document.querySelector('#timeline');

//Get the leaders section
const leaders = document.querySelector('#leaders');
console.log(leaders);

//Create a animation function 
//HeartBeat function 
function  heartBeat(element) {
    //element.classList.add('animate__animated','animate__heartBeat','animate__repeat-2');
    element.forEach(function (item,index) {
        item.classList.add('animate__animated','animate__heartBeat','animate__infinite');
        item.style.setProperty('--animate-duration', '4s');
    })
}

//Create a animation function
//zoomIn function  
function zoomIn(element) {
    element.forEach(function (item,index) {
        item.classList.add('animate__animated','animate__zoomIn');
        item.style.setProperty('--animate-duration', '2s');
    })
}

let options_timeline = {};

//Create the intersection observer
const observeTimeline = new IntersectionObserver(function (entities) {
    if(entities[0].isIntersecting){
        heartBeat(yearBubble);
    }
}, options_timeline);

observeTimeline.observe(timeLine);

let options_leaders = {
    rootMargin : '0px 0px -110px 0px'
};

//Create the intersection observer
const observeLeaders = new IntersectionObserver(function (entities) {
    if(entities[0].isIntersecting){
        zoomIn(infoCard);
    }
}, options_leaders);

observeLeaders.observe(leaders);