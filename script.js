const pages = document.querySelectorAll('.page');

document.querySelectorAll('[data-page]').forEach(button => {
  button.addEventListener('click', () => showPage(button.dataset.page));
});

function showPage(id) {
  pages.forEach(page => page.classList.toggle('active', page.id === id));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const questionBank = {
  Algebra: {
    Routine: [
      {
        q: 'Solve: 2x + 5 = 13.',
        choices: ['2', '3', '4', '5'],
        answer: '4',
        explain: 'Subtract 5 from both sides: 2x = 8. Divide by 2, so x = 4.'
      }
    ],
    'Non-routine': [
      {
        q: 'A school club sells tickets for a show. A student ticket costs ₱40 and an adult ticket costs ₱70. The club sells 18 tickets and collects ₱900. How many adult tickets were sold?',
        choices: ['6', '8', '10', '12'],
        answer: '6',
        explain: 'If all 18 tickets were student tickets, the total would be 18 × ₱40 = ₱720. The actual collection is ₱180 more. Each adult ticket adds ₱30, so ₱180 ÷ ₱30 = 6 adult tickets.'
      },
      {
        q: 'Two consecutive whole numbers have a sum of 41. What are the numbers?',
        choices: ['18 and 23', '19 and 22', '20 and 21', '21 and 22'],
        answer: '20 and 21',
        explain: 'Let the first number be n. The next is n + 1. Then n + (n + 1) = 41, so 2n = 40 and n = 20. The numbers are 20 and 21.'
      },
      {
        q: 'A rectangle has a perimeter of 50 cm. Its length is 5 cm more than its width. What are its dimensions?',
        choices: ['10 cm by 15 cm', '12 cm by 13 cm', '8 cm by 17 cm', '5 cm by 20 cm'],
        answer: '10 cm by 15 cm',
        explain: 'The perimeter is 50 cm, so length + width = 25. Let the width be w and length be w + 5. Then 2w + 5 = 25, so w = 10 and the length is 15 cm.'
      }
    ]
  },
  Geometry: {
    Routine: [
      {
        q: 'What is the sum of the interior angles of a triangle?',
        choices: ['90°', '180°', '270°', '360°'],
        answer: '180°',
        explain: 'The interior angles of every triangle add up to 180°.'
      }
    ],
    'Non-routine': [
      {
        q: 'A rectangular garden is 12 m long and 8 m wide. A 1-m-wide path is built all the way around the outside. What is the area of the path alone?',
        choices: ['36 m²', '40 m²', '44 m²', '48 m²'],
        answer: '44 m²',
        explain: 'The outside dimensions are 14 m by 10 m because the path adds 1 m on each side. The total outside area is 140 m². The garden area is 12 × 8 = 96 m². The path area is 140 − 96 = 44 m².'
      },
      {
        q: 'A square sheet is cut into 4 equal smaller squares. The perimeter of each small square is 12 cm. What was the perimeter of the original square?',
        choices: ['12 cm', '18 cm', '24 cm', '48 cm'],
        answer: '24 cm',
        explain: 'Each small square has side length 12 ÷ 4 = 3 cm. Two small squares fit along each side of the original, so the original side is 6 cm. Its perimeter is 4 × 6 = 24 cm.'
      },
      {
        q: 'A triangle has angles in the ratio 2:3:4. A student says the largest angle is 90°. Is the student correct, and what is the largest angle?',
        choices: ['No; 80°', 'Yes; 90°', 'No; 100°', 'No; 120°'],
        answer: 'No; 80°',
        explain: 'The ratio has 2 + 3 + 4 = 9 equal parts. Each part is 180° ÷ 9 = 20°. The largest angle is 4 × 20° = 80°, not 90°.'
      }
    ]
  },
  Trigonometry: {
    Routine: [
      {
        q: 'In a right triangle, sin θ is equal to:',
        choices: ['opposite/hypotenuse', 'adjacent/hypotenuse', 'opposite/adjacent', 'hypotenuse/opposite'],
        answer: 'opposite/hypotenuse',
        explain: 'Remember SOH: sine = opposite over hypotenuse.'
      }
    ],
    'Non-routine': [
      {
        q: 'At the same time of day, a 1.5-m stick casts a 2-m shadow. A tree nearby casts a 12-m shadow. Assuming the ground is level, how tall is the tree?',
        choices: ['6 m', '8 m', '9 m', '10 m'],
        answer: '9 m',
        explain: 'The stick and tree form similar right triangles. Their height-to-shadow ratios are equal: 1.5/2 = h/12. Therefore h = 12 × 1.5 ÷ 2 = 9 m.'
      },
      {
        q: 'A ramp reaches a platform 1.2 m above the ground. The ramp makes a 30° angle with the level ground. How long is the ramp?',
        choices: ['1.2 m', '2.0 m', '2.4 m', '3.6 m'],
        answer: '2.4 m',
        explain: 'The height is opposite the 30° angle and the ramp is the hypotenuse. sin 30° = 1.2/L. Since sin 30° = 0.5, L = 1.2/0.5 = 2.4 m.'
      },
      {
        q: 'A student walks 40 m toward a building and measures the angle of elevation to the top as 45°. The student is 1.5 m tall. What is the building height, approximately?',
        choices: ['21.5 m', '40 m', '41.5 m', '45 m'],
        answer: '41.5 m',
        explain: 'The height above the student’s eye level is 40 × tan 45° = 40 m. Add the student’s height: 40 + 1.5 = 41.5 m.'
      }
    ]
  },
  Statistics: {
    Routine: [
      {
        q: 'Find the mean of 2, 4, and 6.',
        choices: ['3', '4', '5', '6'],
        answer: '4',
        explain: '(2 + 4 + 6) ÷ 3 = 12 ÷ 3 = 4.'
      }
    ],
    'Non-routine': [
      {
        q: 'Four quiz scores have a mean of 80. Three of the scores are 72, 85, and 78. What must the fourth score be?',
        choices: ['80', '82', '85', '88'],
        answer: '85',
        explain: 'A mean of 80 for 4 scores means the total is 4 × 80 = 320. The known scores total 72 + 85 + 78 = 235. The missing score is 320 − 235 = 85.'
      },
      {
        q: 'Five ordered quiz scores have a median of 12. Four scores are 7, 10, 15, and 18. Which additional score makes the median 12?',
        choices: ['8', '11', '12', '20'],
        answer: '12',
        explain: 'The five scores must be arranged from least to greatest. Adding 12 gives 7, 10, 12, 15, 18. The middle value is 12, so the median is 12.'
      },
      {
        q: 'A class compares two study groups. Group A scores are 6, 7, 8, 9, 10. Group B scores are 4, 7, 8, 9, 12. Both groups have the same mean. Which group has the greater range, and what does this tell you?',
        choices: ['Group A; its scores are more spread out', 'Group B; its scores are more spread out', 'Both have the same range', 'Cannot be determined'],
        answer: 'Group B; its scores are more spread out',
        explain: 'Group A range = 10 − 6 = 4. Group B range = 12 − 4 = 8. Group B has the greater range, so its scores are more spread out, even though the means are equal.'
      }
    ]
  }
};

const notes = {
  Algebra: [
    '<strong>Expressions:</strong> A combination of numbers, variables, and operations.',
    '<strong>Equations:</strong> Mathematical statements showing that two expressions are equal.',
    '<strong>Linear equations:</strong> Equations such as 2x + 5 = 13. Use inverse operations to isolate the variable.',
    '<strong>Patterns:</strong> Look for a rule connecting terms. Consecutive integers can be represented as n and n + 1.'
  ],
  Geometry: [
    '<strong>Perimeter:</strong> The total distance around a two-dimensional shape.',
    '<strong>Area:</strong> The amount of surface covered by a shape.',
    '<strong>Rectangle:</strong> Area = length × width; perimeter = 2(length + width).',
    '<strong>Triangle:</strong> Area = ½ × base × height; interior angles add up to 180°.',
    '<strong>Similar figures:</strong> Corresponding angles are equal and corresponding sides are proportional.'
  ],
  Trigonometry: [
    '<strong>SOH-CAH-TOA:</strong> sin θ = opposite/hypotenuse; cos θ = adjacent/hypotenuse; tan θ = opposite/adjacent.',
    '<strong>Angle of elevation:</strong> The angle measured upward from a horizontal line.',
    '<strong>Angle of depression:</strong> The angle measured downward from a horizontal line.',
    '<strong>Similar right triangles:</strong> They can be used to compare heights and shadows.'
  ],
  Statistics: [
    '<strong>Mean:</strong> Add all values and divide by the number of values.',
    '<strong>Median:</strong> Arrange the data and find the middle value. For an even number of values, average the two middle values.',
    '<strong>Mode:</strong> The value that appears most often.',
    '<strong>Range:</strong> Highest value minus lowest value.',
    '<strong>Interpretation:</strong> Compare measures such as mean and range to describe a data set.'
  ]
};

let currentTopic = 'Algebra';
let currentMode = 'Routine';

document.querySelectorAll('[data-topic]').forEach(button => {
  button.addEventListener('click', () => {
    currentTopic = button.dataset.topic;
    document.getElementById('topic-title').textContent = currentTopic;
    document.getElementById('practice-area').classList.remove('hidden');
    currentMode = 'Routine';
    updateModes();
    renderContent();
    document.getElementById('practice-area').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

document.querySelectorAll('[data-mode]').forEach(button => {
  button.addEventListener('click', () => {
    currentMode = button.dataset.mode;
    updateModes();
    renderContent();
  });
});

document.getElementById('close-topic').addEventListener('click', () => {
  document.getElementById('practice-area').classList.add('hidden');
  document.querySelector('.topic-grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

function updateModes() {
  document.querySelectorAll('[data-mode]').forEach(button => {
    button.classList.toggle('selected', button.dataset.mode === currentMode);
    button.setAttribute('aria-selected', button.dataset.mode === currentMode ? 'true' : 'false');
  });
}

function renderContent() {
  const area = document.getElementById('question-area');

  if (currentMode === 'Notes') {
    area.innerHTML = `
      <div class="question">
        <h3>${currentTopic} Notes</h3>
        <ul class="notes-list">${notes[currentTopic].map(note => `<li>${note}</li>`).join('')}</ul>
      </div>`;
    return;
  }

  const questions = questionBank[currentTopic][currentMode];
  const isNonRoutine = currentMode === 'Non-routine';

  area.innerHTML = `
    <div class="question">
      <span class="question-type">${isNonRoutine ? 'PROBLEM-SOLVING CHALLENGE' : 'SKILL PRACTICE'}</span>
      <p class="notice">Question 1 of ${questions.length}</p>
      <div id="question-content"></div>
    </div>`;

  let questionIndex = 0;
  renderQuestion(questionIndex);

  function renderQuestion(index) {
    const item = questions[index];
    const content = area.querySelector('#question-content');
    content.innerHTML = `
      <h3>${item.q}</h3>
      <div class="answers">
        ${item.choices.map(choice => `<button class="answer" type="button">${choice}</button>`).join('')}
      </div>
      <p class="feedback" aria-live="polite">Choose an answer. Think about the information in the situation before calculating.</p>
      <button class="primary next-question hidden" type="button">${index === questions.length - 1 ? 'Finish' : 'Next question'}</button>`;

    content.querySelectorAll('.answer').forEach(button => {
      button.addEventListener('click', () => {
        const feedback = content.querySelector('.feedback');
        const nextButton = content.querySelector('.next-question');
        const correct = button.textContent.trim() === item.answer;

        content.querySelectorAll('.answer').forEach(choiceButton => {
          choiceButton.disabled = true;
          if (choiceButton.textContent.trim() === item.answer) choiceButton.classList.add('correct');
        });

        if (correct) {
          feedback.innerHTML = `<strong>Correct!</strong> ${item.explain}`;
        } else {
          button.classList.add('incorrect');
          feedback.innerHTML = `<strong>Not quite.</strong> Correct answer: ${item.answer}. ${item.explain}`;
        }
        nextButton.classList.remove('hidden');
      });
    });

    content.querySelector('.next-question').addEventListener('click', () => {
      questionIndex += 1;
      if (questionIndex < questions.length) {
        renderQuestion(questionIndex);
      } else {
        content.innerHTML = `<h3>Practice completed!</h3><p>You finished the ${currentMode} questions in ${currentTopic}.</p><button class="primary" id="try-again" type="button">Try again</button>`;
        content.querySelector('#try-again').addEventListener('click', () => {
          questionIndex = 0;
          renderQuestion(questionIndex);
        });
      }
    });
  }
}

renderContent();
