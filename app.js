const quizData = [
    {
        question: "តើបាវចនាជាតិខ្មែរមានអ្វីខ្លះ?",
        a: "ជាតិ សាសនា រដ្ឋ",
        b: "ជាតិ សាសនា ព្រះមហាក្សត្រ",
        c: "សេរីភាព យុត្តិធម៌ រាជបល្ល័ង្ក",
        d: "រដ្ឋាភិបាល សាសនា រាជវង្ស",
        correct: "b"
    },
    {
        question: "តើស្ដេចអង្គណារំដោះកម្ពុជាចេញការគ្រប់គ្រងរបស់ជ្វា?",
        a: "ជ័យវរ្ម័នទី៧",
        b: "សុរិយវរ័្មនទី២",
        c: "ជ័យវរ្ម័ទី២",
        d: "ជ័យជេដ្ឋា",
        correct: "c"
    },
    {
        question: "តើ កមធ ដែលនៅក្នុងល្បះទោលពេលនៅក្នុងល្បះផ្សំក្លាយជាអ្វី?",
        a: "កិរិយា",
        b: "ធ្នាក់",
        c: "ឈ្នាប់",
        d: "នាម",
        correct: "c"
    },
    {
        question: "តើទន្លេមេគង្គហូរកាត់ប្រទេសកម្ពុជាមានប្រវែងប៉ុន្មានគីឡូម៉ែត្រ?",
        a: "៤០០គីឡូម៉ែត្រ",
        b: "៥០០០គីឡូម៉ែត្រ",
        c: "២០០គីឡូម៉ែត្រ",
        d: "៥០០គីឡូម៉ែត្រ",
        correct: "d"
    }


];

const submit = document.getElementById("submit");
const question = document.getElementById("question");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");
const answer = document.querySelectorAll(".answer");
const container = document.querySelector(".container");
const button = document.querySelector(".button");
let score = 0;

let currentQuiz = 0;
loadQuiz();
function loadQuiz(){
    diselect();
    const questionData = quizData[currentQuiz];
    question.innerHTML = questionData.question;
    a_text.innerHTML = questionData.a;
    b_text.innerHTML = questionData.b;
    c_text.innerHTML = questionData.c;
    d_text.innerHTML = questionData.d;
}

function getSelect(){
    let answerIn = undefined;
    answer.forEach((result) => {
        if(result.checked){
            answerIn = result.id;
        }
    });
    return answerIn;
}

function diselect(){
    answer.forEach((result) => {
        result.checked = false;
    });
}

submit.addEventListener("click", ()=>{
    if(answer){
        if(quizData[currentQuiz].correct === getSelect()){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            container.innerHTML = `<h1 style="text-align: center;">ចូលរួមអបអរសាទរ!​<br>អ្នកទទួលបានពិន្ទុ ${score} / ${quizData.length}។</h1>`;
            button.innerHTML = `<button onClick="location.reload();">Play Again</button>`;
        }
    }
});
