        const ul = document.querySelector('ul');

        const input = document.querySelector('input');

        const button = document.getElementById('button');

        const timer = document.getElementById('clock');

        let answers = ['title', 'style', 'base', 'meta', 'link', 'script', 'noscript', 'template'];

        var guesses = 0;

        var correct = 0;

        var i = 60;

        var width = 100;



        timer.onclick = function () {

            function countDown() {
                var progressionbar = (i / 60) * 100;
                var bar = document.getElementById("progress");
                width--;
                bar.style.width = progressionbar + "%";
                var time = document.getElementById("mycounter");
                time.innerHTML = i + " seconds remaning";
                i--;
                if (i === 0) {
                    time.innerHTML = ("Time's up! " + "Score " + correct + "/" + guesses);
                    clearInterval(timer);
                    i = 60;
                    width = 100;
                    correct = 0;
                    guesses = 0;
                }
            }

            var timer = setInterval(countDown, 1000);

            button.onclick = function () {
                var userInput = input.value;
                var userAnswer = userInput.toLowerCase();

                if (userAnswer !== '') {


                    const li = document.createElement('li');
                    const span = document.createElement('span');
                    const buttonList = document.createElement('button');


                    li.appendChild(span);
                    li.appendChild(buttonList);
                    ul.appendChild(li);


                    span.textContent = userAnswer;


                    buttonList.textContent = 'Delete';

                    buttonList.onclick = function () {
                        li.remove();
                    };




                    input.value = '';
                    input.focus();
                  

                        if (answers.indexOf(userAnswer) > -1) {
                            li.classList.add('correct');
                            span.classList.add('correct');
                            buttonList.classList.add('correct');
                            correct++;
                            guesses++;
                        } else {
                            li.classList.add('wrong');
                            span.classList.add('wrong');
                            buttonList.classList.add('wrong');
                            guesses++;
                        }
                }
                if (userAnswer === '') {
                    alert("Type an answer");
                }


            };
        };
