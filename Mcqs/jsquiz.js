
const quiz=[
    {
        question: "Q1 Which type of JavaScript language is ___ ?",
        a:" Object-Oriented",
        b:" Object-Based",
        c:" Assembly-language",
        d:" High-level",
        ans:"ans2"
    },
    {
        question: "Q2  Which one of the following also known as Conditional Expression:?",
        a:" Alternative to if-else",
        b:"Switch statement",
        c:"If-then-else statement",
        d:"immediate if",
        ans:"ans4"

    },
    {
        question: "Q3 n JavaScript, what is a block of statement?",
        a:"Conditional block",
        b:"block that combines a number of statements into a single compound statement",
        c:"both conditional block and a single statement",
        d:"block that contains a single statement",
        ans:"ans2"

    },
    {
        question: "Q4 When interpreter encounters an empty statements, what it will do:",
        a:"Shows a warning",
        b:"Prompts to complete the statement",
        c:"Throws an error",
        d:"Ignores the statements",
        ans:"ans4"
    },
    {
        question: "Q5 The 'function' and  'var' are known as:",
        a:"Keywords",
        b:"Data types",
        c:"Declaration statements",
        d:"Prototypes",
        ans:"ans3"
    },
]

const qstn=document.getElementById("question");
const ans1=document.getElementById('option1');
const ans2=document.getElementById('option2');
const ans3=document.getElementById('option3');
const ans4=document.getElementById('option4');
const submit=document.getElementById('submit');
const answer=document.querySelectorAll('.answer');
const quiez=document.getElementById("qiz")
const sbrd=document.getElementById("sboard");
const abb=document.querySelector(".bb");


console.log(abb);
     
let flag=false;

let index=0;


let score=0;
const loadq=()=>
{
    // console.log(quiz[index].question);
    
    unselect();
    const qi=quiz[index];
   
    qstn.innerHTML=qi.question;
    ans1.innerHTML=`&nbsp ${qi.a}`;
    ans2.innerHTML=`&nbsp ${qi.b}`;
    ans3.innerHTML=`&nbsp ${qi.c}`;
    ans4.innerHTML=`&nbsp ${qi.d}`;
}
loadq();
const getcheckedans= ()=>
{let ansr;
    answer.forEach(element => {
       if(element.checked)
       {
          ansr=element.id;
           
       }
   });
   return ansr;
}

submit.addEventListener('click',()=>
{
let checkedans=getcheckedans();
// console.log(checkedans);
if(checkedans){
    // console.log(checkedans,quiz[index].ans)
if( checkedans===quiz[index].ans)
score++;
   

index++;
if( index<quiz.length)
{
    
    loadq();
}
else if(index===quiz.length)
{
    submit.addEventListener('click',()=>
{console.log(index,quiz.length);
    if(index==quiz.length)
alert("you have attempted all question u can retry");

});


   
    if(flag==true)
    abb.style.display=`block`;
    sbrd.classList.remove('bb');
   sbrd.innerHTML=`<strong>woooh!</strong><br><br>
 <h2>  you hve coorectly answered <br> <strong> ${score}</strong> <br> out of <br>${index} </h2>
 
 <button id="replay" >Retry</button>
  ` ;
 
  
   replay.addEventListener('click',()=>
   {
    //    onclick="refresh";
       index=0;
       score=0;
       loadq();
       abb.style.display=`none`;
       flag=true;
    
      
   })
}

}});
function unselect()
{
    answer.forEach(element => {
        if(element.checked)
        {
            element.checked=false;
            
        }
    }); 
}

console.log(score,index);