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
    
    // REVEAL IDDEN DIVIDER
    else if (currentCheckboxIndex = checkboxes.length) {
      hiddenDiv.style.display = 'block';
    }
  }

  // Add event listeners to the checkboxes
  checkboxes.forEach((checkboxes, index) => {
    checkboxes.addEventListener('click', () => checkboxClick(index));
  });

