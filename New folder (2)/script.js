const questions = [  

    {  
        question: "ما معنى HTML؟",  
        answers: [  
            "Hyper Text Markup Language",  
            "High Tech Modern Language",   
            "Hyper Transfer Markup Link",   
            "Home Tool Markup Language"  
        ],  
        correct: 0  
    },  
    {  
        question: "أي وسم يستخدم لإنشاء رابط في HTML؟",  
        answers: ["<link>", "<a>", "<href>", "<url>"],  
        correct: 1  
    },  
    {  
        question: "ما هو الوسم الصحيح للعنوان الرئيسي في HTML؟",  
        answers: ["<title>", "<head>", "<h1>", "<header>"],  
        correct: 2  
    },  
    {  
        question: "ما هو الوسم الصحيح لإضافة فيديو في HTML؟",  
        answers: ["<style>", "<title>", "<video>", "<br>"],  
        correct: 2  
    },  
    {  
        question: "أي وسم يستخدم لإنشاء قائمة غير مرتبة في HTML؟",  
        answers: ["<ol>", "<ul>", "<li>", "<list>"],  
        correct: 1  
    },  
    {  
        question: "ما هو الوسم الصحيح لإنشاء جدول في HTML؟",  
        answers: ["<table>", "<tr>", "<td>", "<grid>"],  
        correct: 0  
    },  
    {  
        question: "كيفية إضافة صورة في HTML؟",  
        answers: ["<picture>", "<img>", "<image>", "<src>"],  
        correct: 1  
    },  
    {  
        question: "أي خاصية تستخدم لربط صفحة CSS خارجية؟",  
        answers: ["<style>", "<link>", "<css>", "<href>"],  
        correct: 1  
    },  
    {  
        question: "ما هو الوسم الصحيح للفقرة في HTML؟",  
        answers: ["<text>", "<paragraph>", "<p>", "<line>"],  
        correct: 2  
    },  
    {  
        question: "كيف يتم إنشاء نموذج في HTML؟",  
        answers: ["<input>", "<form>", "<submit>", "<send>"],  
        correct: 1  
    },  
    {  
        question: "أي خاصية تستخدم لإضافة نص بديل للصور؟",  
        answers: ["<alternative>", "title", "alt", "text"],  
        correct: 2  
    },  
    {  
        question: "ما هو الوسم الصحيح للتعليق في HTML؟",  
        answers: ["//", "/* */", "<!--  -->", "<comment>"],  
        correct: 2  
    },  
    {  
        question: "كيف يتم إنشاء زر في HTML؟",  
        answers: ["<button>", "<click>", "<submit>", "<press>"],  
        correct: 0  
    },  
    {  
        question: "أي وسم يستخدم للتقسيم في HTML؟",  
        answers: ["<section>", "<div>", "<part>", "<block>"],  
        correct: 1  
    },  
    {  
        question: "كيفية كتابة رمز HTML الأساسي؟",  
        answers: [  
            "<html> <body> </body> </html>",   
            "<html>",   
            "<body>",   
            "<!DOCTYPE html>"  
        ],  
        correct: 0  
    },  
    {  
        question: "ما هو الوسم الصحيح لتخطي سطر في HTML؟",  
        answers: ["<style>", "<title>", "<video>", "<br>"],  
        correct: 2  
    },  

 
    {  
        question: "ما معنى CSS؟",  
        answers: [  
            "Computer Style Sheets",   
            "Cascading Style Sheets",   
            "Creative Style System",   
            "Colorful Style Sheets"  
        ],  
        correct: 1  
    },  
    {  
        question: "أي خاصية CSS تستخدم لتغيير لون النص؟",  
        answers: ["text-color", "font-color", "color", "text-style"],  
        correct: 2  
    },  
    {  
        question: "كيفية تحديد عنصر بواسطة ID في CSS؟",  
        answers: [".id", "#id", "*id", "&id"],  
        correct: 1  
    },  
    {  
        question: "أي خاصية تستخدم لإضافة هامش خارجي في CSS؟",  
        answers: ["spacing", "padding", "margin", "border"],  
        correct: 2  
    },  
    {  
        question: "كيفية إضافة تنسيق خارجي CSS إلى صفحة HTML؟",  
        answers: [  
            "<link rel='stylesheet' href='style.css'>",   
            "<style src='style.css'>",   
            "<css href='style.css'>",   
            "<import stylesheet='style.css'>"  
        ],  
        correct: 0  
    },  
    {  
        question: "أي خاصية تستخدم لتغيير حجم الخط؟",  
        answers: ["text-size", "font-size", "size", "text-scale"],  
        correct: 1  
    },  
    {  
        question: "كيفية جعل العنصر عريض في CSS؟",  
        answers: ["font-weight", "text-bold", "bold", "font-style"],  
        correct: 0  
    },  
    {  
        question: "ما هو نوع العرض الافتراضي للعناصر؟",  
        answers: ["flex", "grid", "block", "inline"],  
        correct: 2  
    },  
    {  
        question: "أي خاصية تستخدم لتغيير لون الخلفية؟",  
        answers: ["color", "background", "background-color", "bg-color"],  
        correct: 2  
    },  
    {  
        question: "كيفية إخفاء عنصر في CSS؟",  
        answers: ["display: none", "visible: hidden", "opacity: 0", "show: false"],  
        correct: 0  
    },  
    {  
        question: "أي خاصية تستخدم للتنسيق المرن؟",  
        answers: ["grid", "flex", "position", "layout"],  
        correct: 1  
    },  
    {  
        question: "كيف يتم تحديد العناصر المتتابعة في CSS؟",  
        answers: [":next", ":after", ":first-child", "+"],  
        correct: 3  
    },  
    {  
        question: "أي قيمة تستخدم لجعل العنصر مرن؟",  
        answers: ["flex: 1", "display: flex", "flexible: true", "flow: flex"],  
        correct: 0  
    },  
    {  
        question: "كيفية تغيير نوع العرض؟",  
        answers: ["type", "display", "view", "layout"],  
        correct: 1  
    }  
];





let currentQuestion = 0;
let score = 0;
let timeLeft = 600; 
let timerInterval;

function startQuiz() {
    const studentName = document.getElementById('student-name').value;
    const seatNumber = document.getElementById('seat-number').value;

    if (!studentName || !seatNumber) {
        alert('يرجى إدخال اسم الطالب ورقم الجلوس');
        return;
    }

    document.getElementById('login-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    startTimer();
    showQuestion();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress');
    const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

function showQuestion() {
    const questionEl = document.getElementById("question");
    const answersEl = document.getElementById("answers");
    questionEl.textContent = questions[currentQuestion].question;
    answersEl.innerHTML = "";
    
    questions[currentQuestion].answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => checkAnswer(index);
        answersEl.appendChild(button);
    });

    updateProgressBar();
}

function checkAnswer(selected) {
    const buttons = document.getElementById("answers").children;
    const correctIndex = questions[currentQuestion].correct;


    for (let button of buttons) {
        button.disabled = true;
    }

    if (selected === correctIndex) {
        buttons[selected].classList.add('correct');
        score++;
    } else {
        buttons[selected].classList.add('incorrect');
        buttons[correctIndex].classList.add('correct');
    }


    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    }, 350);
}

function endQuiz() {
    clearInterval(timerInterval);
    const quizPage = document.getElementById("quiz-page");
    const resultPage = document.getElementById("result-page");
    const finalScoreEl = document.getElementById("final-score");

    quizPage.style.display = 'none';
    resultPage.style.display = 'block';

    let resultMessage = `لقد حصلت على ${score} من ${questions.length}`;
    if (score === questions.length) {
        resultMessage += " 🏆 نتيجة مثالية!";
    } else if (score >= questions.length * 0.7) {
        resultMessage += " 👍 أداء جيد!";
    } else {
        resultMessage += " 💪 يمكنك التحسن!";
    }
    
    if (timeLeft <= 0) {  
        resultMessage += "\n ⏰ انتهى الوقت!";  
    }  

    finalScoreEl.textContent = resultMessage;  



}

function restartQuiz() {

    currentQuestion = 0;
    score = 0;
    timeLeft = 600;


    document.getElementById('result-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
}