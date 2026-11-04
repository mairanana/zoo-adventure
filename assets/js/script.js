function checkMatchingAnswers() {
  const feedback = document.getElementById('matching-feedback');
  feedback.style.display = 'block';

  let correctCount = 0;

  // Clear previous colors
  document.querySelectorAll('.match-item').forEach(el => {
    el.classList.remove('correct', 'incorrect');
  });

  matchingPairs.forEach(p => {
    const animalEl = document.getElementById('match-a-' + p.id);
    const descId = userMatches[p.id];
    const descEl = descId ? document.getElementById('match-d-' + descId) : null;

    if (userMatches[p.id] === p.id) {
      correctCount++;
      if (animalEl) animalEl.classList.add('correct');
      if (descEl) descEl.classList.add('correct');
    } else {
      if (animalEl) animalEl.classList.add('incorrect');
      if (descEl) descEl.classList.add('incorrect');
    }
  });

  if (correctCount === matchingPairs.length) {
    feedback.className = 'feedback-box correct';
    feedback.innerText = "Excellent! You matched the animals correctly!";
    document.getElementById('matching-continue-btn').style.display = 'inline-block';
  } else {
    feedback.className = 'feedback-box incorrect';
    feedback.innerText = "Not quite! Try matching them again.";
  }
}