const ratingNumbers = document.querySelectorAll('.rating-number li');
  const submitButton = document.querySelector('.btn');
  const firstComponent = document.querySelector('#first-component');
  const secondComponent = document.querySelector('#second-component');
  const selectedRatingText = document.querySelector('#selected');
  const switchMode = document.getElementById("light-mode");

  let selectedRating;

  ratingNumbers.forEach((number) => {
    number.addEventListener('click', () => {
      ratingNumbers.forEach((num) => num.classList.remove('selected'));

     
      number.classList.add('selected');
      selectedRating = number.dataset.value;
    });
  });

  submitButton.addEventListener('click', () => {
    if (selectedRating) {
      selectedRatingText.textContent = selectedRating;

      firstComponent.setAttribute('aria-hidden', 'true');
      firstComponent.style.display = 'none';
      secondComponent.hidden = false;
    } else {
      alert('Please select a rating before submitting.');
    }
  });

  switchMode.addEventListener("click", () => {
    const switchBtn = document.body;
    switchBtn.classList.toggle("light-mode");
  });