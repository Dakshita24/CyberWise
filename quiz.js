
        let currentQuiz = [];
        let currentQuestionIndex = 0;
        let score = 0;

        function startQuiz(quizName) {
            currentQuiz = quizzes[quizName];
            currentQuestionIndex = 0;
            score = 0;
            document.getElementById('quiz-title').textContent = quizName;
            document.getElementById('quiz-content').style.display = 'block';
            document.querySelector('.quiz-container').style.display = 'none';
            document.getElementById('main-header').style.display = 'none';
            displayQuestion();
        }

        function displayQuestion() {
            const questionData = currentQuiz[currentQuestionIndex];
            document.getElementById('question').textContent = questionData.question;
            const optionsHtml = questionData.options.map((option, index) => 
                `<button class="option" onclick="selectAnswer(${index})">${option}</button>`
            ).join('');
            document.getElementById('options').innerHTML = optionsHtml;
            document.getElementById('feedback').textContent = '';
            document.getElementById('next-button').style.display = 'none';
        }

        function selectAnswer(selectedIndex) {
            const questionData = currentQuiz[currentQuestionIndex];
            const feedbackElement = document.getElementById('feedback');
            if (selectedIndex === questionData.correctAnswer) {
                feedbackElement.textContent = 'Correct!';
                feedbackElement.style.color = 'green';
                score++;
            } else {
                feedbackElement.textContent = `Incorrect. The correct answer was: ${questionData.options[questionData.correctAnswer]}`;
                feedbackElement.style.color = 'red';
            }
            document.querySelectorAll('.option').forEach(button => button.disabled = true);
            document.getElementById('next-button').style.display = 'block';
        }

        function nextQuestion() {
            currentQuestionIndex++;
            if (currentQuestionIndex < currentQuiz.length) {
                displayQuestion();
            } else {
                showResult();
            }
        }

        function showResult() {
            const resultHtml = `
                <h3>Quiz Completed!</h3>
                <p>Your score: ${score} out of ${currentQuiz.length}</p>
                <button onclick="location.reload()">Take Another Quiz</button>
            `;
            document.getElementById('result').innerHTML = resultHtml;
            document.getElementById('result').style.display = 'block';
            document.getElementById('question').style.display = 'none';
            document.getElementById('options').style.display = 'none';
            document.getElementById('feedback').style.display = 'none';
            document.getElementById('next-button').style.display = 'none';
        }
