console.log('Hello World!')

//INSTRUCTIONAL STEPS

const slides = [
    "Welcome to Beerline Buddy!",
    "Follow the steps below to ensure your beer line is clean",
    "Before you start, you will need two buckets, some line cleaner and some litmus paper.",
    "Ensure you are wearing gloves and eye protection at all times",
    "Good luck!"
];

let currentSlide = 0;

function updateSlide() {
    document.getElementById('info-text').innerText = slides[currentSlide];
    document.getElementById('previous-button').disabled = currentSlide === 0;
    document.getElementById('next-button').disabled = currentSlide === slides.length - 1;
}

document.getElementById('previous-button').addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
});

document.getElementById('next-button').addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlide();
    }
});

updateSlide(); 

//TIMER

let [seconds, minutes] = [60,1];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch(){
    seconds--;
    if(seconds == 0){
        seconds = 60;
        minutes--;
        if(minutes == 0){
            minutes = 0;
        }
    }
    displayTime.innerHTML = minutes +":"+ seconds;
}

function watchStart(){
    if(timer!== null) 
    {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000);

}