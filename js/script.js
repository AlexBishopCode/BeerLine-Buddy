console.log('Hello World!');

// INSTRUCTIONAL STEPS

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


// RESET BUTTON
// source link for inspiration = https://developer.mozilla.org/en-US/docs/Web/API/Location/reload

const resetButton = document.getElementById("reset-button");

resetButton.addEventListener('click', function() {
  window.location.reload();
  window.scrollTo(0,0);
});

// CHECKBOX CLICK TRANSFORM

const checkboxes = ['checkbox-one', 'checkbox-two', 'checkbox-three', 
  'checkbox-four', 'checkbox-five', 'checkbox-six', 'checkbox-seven', 'checkbox-eight', 'checkbox-nine', 'checkbox-ten', 'checkbox-eleven'];
  
  // Track the currently clickable checkbox
  let currentCheckboxIndex = 0;

  let hiddenDiv = document.getElementById('hidden-div');
  
  // Function to change the checkbox when clicked and activate the next checkbox
  function checkboxClick(current, next) {
    const checkbox = document.getElementById(current)
    const nextCheckbox = document.getElementById(next)

    if (checkbox) {
      checkbox.classList.remove('fa-circle');
      checkbox.classList.add('fa-circle-check');
      checkbox.classList.add('checkbox-selected');

      let parentDiv = checkbox.parentElement; 
      while (parentDiv && !parentDiv.classList.contains('step-div-box-bottom')) {
          parentDiv = parentDiv.parentElement; 
      }
                
       if (parentDiv) {
           parentDiv.classList.toggle('parent-div-color-change'); 
       }
    }
    
    // Highlight/move to the next checkbox
    if (nextCheckbox) {
      nextCheckbox.classList.remove('inactive-checkbox')
    }
    
  }

  // Add event listeners to the checkboxes
  checkboxes.forEach((checkbox, index) => {
    document.getElementById(checkbox).addEventListener('click', () => {
      checkboxClick(checkbox, checkboxes[index + 1]);
        if (index + 1 === checkboxes.length) {
          hiddenDiv.style.display = 'block';
        }
      });
  });

//TIMERS

function startTimer(timerContainer, checkbox, timer = 900) {
  console.log('starting timer', timerContainer)

  const timeOut = 1000;
  const interval = () => {
    timer--;

    const mm = Math.floor(timer / 60);
    const ss = timer % 60;
    
    const constructMinutes = mm.toString().padStart(2, '0');
    const constructSeconds = ss.toString().padStart(2, '0');

    document.getElementById(timerContainer).innerText = `${constructMinutes}:${constructSeconds}`;
    if (timer < 1) {
        document.getElementById(timerContainer).innerText = "Move to the next step.";
        checkboxClick(null, checkbox);
        document.getElementById(checkbox).addEventListener('click', () => checkboxClick(checkbox))
    }
    else {
      setTimeout(interval, timeOut);
    }
    console.log(timer);
};
setTimeout(interval, timeOut);

}
const buttons = ['timer-button-one', 'timer-button-two', 'timer-button-three']; 
const buttonText = ['timer-one', 'timer-two', 'timer-three']; 
const timedCheckboxes = ['checkbox-five', 'checkbox-six', 'checkbox-seven']; 
buttons.forEach((button, index) => {

  document.getElementById(button).addEventListener('click', () => startTimer(buttonText[index], timedCheckboxes[index], 10));

}) 
