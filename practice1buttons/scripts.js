function changeText(){
    document.getElementById('yes').innerHTML='aaaa';
    document.getElementById('ok').innerHTML='bbbb';
};

function displayDate(){
    document.getElementById("Demo").innerHTML = Date();
};

function writeText(){
document.write("<h1>jstitle</h1>");
document.write("<p>hello</p>");
};

function timeBasedGreeting(){
    var greet = ''
    var hour = new Date().getHours();
    if (hour<12) { 
        greet = 'Good Morning!';
    }
    else {
        greet = 'Good Afternoon!';
    }
    document.getElementById('greet').innerHTML=greet;
};

function addNumberLoop(){
    var x='';
    for (i=0;i<5;i++){
        x = `The number is ${i} <br>`;
    }
    document.getElementById('add5').innerHTML=x;
};

function namePrompt(){
    var reply='';
    var name=prompt('please enter ur name', 'enter name here');
    if (name!=null){
        reply = `hi ${name}, welcome to my website!`;
        document.getElementById('prompt').innerHTML=reply;
    }

};

let name = 'asad';
name = 'asaddd';
console.log(name);

let list = {a: 'hi', b: 'hey', c: 'bye'};
console.log(list['a']);

window.onscroll = function(){
    var NewParagraph = document.createElement('p');
    NewParagraph.textContent = 'hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii';
    document.body.appendChild(NewParagraph);
};