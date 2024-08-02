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

const checkboxes = [
    document.getElementById('checkbox-one'),
    document.getElementById('checkbox-two'),
    document.getElementById('checkbox-three'),
    document.getElementById('checkbox-four'),
    document.getElementById('checkbox-five'),
    document.getElementById('checkbox-six'),
    document.getElementById('checkbox-seven'),
    document.getElementById('checkbox-eight'),
    document.getElementById('checkbox-nine'),
    document.getElementById('checkbox-ten'),
    document.getElementById('checkbox-eleven'),
  ];
  
  // Track the currently clickable checkbox
  let currentCheckboxIndex = 0;

  let hiddenDiv = document.getElementById('hidden-div');
  
  // Function to change the checkbox when clicked and activate the next checkbox
  function checkboxClick(index) {
    checkboxes[index].classList.remove('fa-circle');
    checkboxes[index].classList.add('fa-circle-check');
    checkboxes[index].classList.add('checkbox-selected');
    
    // Highlight/move to the next checkbox
    currentCheckboxIndex++;
    if (currentCheckboxIndex < checkboxes.length) {
      checkboxes[currentCheckboxIndex].classList.remove('inactive-checkbox');
    }
    
    // REVEAL HIDDEN DIVIDER
    else if (currentCheckboxIndex = checkboxes.length) {
      hiddenDiv.style.display = 'block';
    }
  }

  // Add event listeners to the checkboxes
  checkboxes.forEach((checkboxes, index) => {
    checkboxes.addEventListener('click', () => checkboxClick(index));
  });

//TIMERS

document.getElementById('timer-button-one').addEventListener('click', () => {

  let timerOne = 900;
  
  const intervalOne = setInterval(() => {
      timerOne--;
  
      const mm = Math.floor(timerOne / 60);
      const ss = timerOne % 60;
      
      const constructMinutes = mm.toString().padStart(2, '0');
      const constructSeconds = ss.toString().padStart(2, '0');
  
      document.getElementById('timer1').innerText = `${constructMinutes}:${constructSeconds}`;
      if (timerOne < 1) {
          clearInterval(intervalOne);
          document.getElementById('timer1').innerText = "Pull through half a jug and start Timer 2";
      }
      console.log(timerOne);
  }, 1000);
  });
  
  //Timer Two
  
  document.getElementById('timer-button-two').addEventListener('click', () => {
  
  let timerTwo = 900;
  
  const intervalTwo = setInterval(() => {
      timerTwo--;
  
      const mm = Math.floor(timerTwo / 60);
      const ss = timerTwo % 60;
      
      const constructMinutes = mm.toString().padStart(2, '0');
      const constructSeconds = ss.toString().padStart(2, '0');
  
      document.getElementById('timer2').innerText = `${constructMinutes}:${constructSeconds}`;
      if (timerTwo < 1) {
          clearInterval(intervalTwo);
          document.getElementById('timer2').innerText = "Pull through half a jug and start Timer 3";
      }
      console.log(timerTwo);
  }, 1000);
  });
  
  //Timer Three
  
  document.getElementById('timer-button-three').addEventListener('click', () => {
  
      let timerThree = 900;
  
      //didnt use set interval, used setTimeout as set interval overlaps due to javascripts inability to adequately measure in fractions. (ex. 0.1 + 0.2 doesnt make 0.3 in console.)
      const intervalThree = () => {
          timerThree--;
      
          const mm = Math.floor(timerThree / 60);
          const ss = timerThree % 60;
          
          const constructMinutes = mm.toString().padStart(2, '0');
          const constructSeconds = ss.toString().padStart(2, '0');
      
          document.getElementById('timer-three').innerText = `${constructMinutes}:${constructSeconds}`;
          if (timerThree < 1) {
              document.getElementById('timer-three').innerText = "PULL COMPLETE";
          }
          else {
            setTimeout(intervalThree, 1000);
          }
          console.log(timerThree);
      };
      setTimeout(intervalThree, 1000);
      });
  