var gotcard=0;
var win=0;
var ct=0;
// var num1=getrandom();
// var num2=getrandom();
// var num3=getrandom();
// var beforeguess=num1+num2;
// var afterguess=num1+num2+num3;
// var numberquery=[num1,num2,num3];
var numberquery=[];
getrandom();
// var sum=num1+num2;
var sum=0;
var cardo= document.getElementById("cards");
var numsum=document.getElementById("som");
var message= document.getElementById("msg");
var techsum=0;
var ges=0;
var after=2;
var counter=0;
var countey=0;
var geslink=document.getElementById("guessnum");
var worked=0;




function getrandom(){
    for(let i=0;i<7;i++){
    let num= Math.floor(Math.random()*10)+1;
     numberquery.push(num);
    }
}

function start(){
set();

}

function set(){
cardo.innerHTML="cards: ";
gotcard=true;
    for(let i=0 ; i<2; i++){
       cardo.textContent += numberquery[i] + " ";
       sum =numberquery[0]+numberquery[1];

    }
    
     numsum.textContent="sum: "+sum;
     look();
} 
    function look(){
     if(sum<21){
        message.innerText="wanna add another one or guess!?";
        win=false;
       msg.setAttribute("style", "color: rgb(174, 163, 61);")
    
} else if(sum==21){
    message.innerText="you WIN!!!";
    message.setAttribute("style", "color:green")
        win=true;
    }else{
        message.innerText="you lost.";
        message.setAttribute("style", "color:red")
        win=true;
    }

}

function addone(){
    
    if(gotcard==true && win==false && ges==false){
    add();
    sum +=  numberquery[after];
    numsum.textContent = sum;    
        cardo.innerHTML += " " + numberquery[after] ;
    }

    look();
}

function add(){
    after=after + 1;
}


        
 function getcnt(){   
counter= 0;
for(let i=sum; i<=21 ;i++)
{
    counter= counter+1;
}
geslink.innerHTML +=counter;
 }

function getgescnt(){
    var myown=numberquery[after+1];
    
    geslink.textContent=myown;
    var afterone=sum+ myown;
    for(i=21;i<=afterone;i++){
        countey=countey+1;
    }
}


function guess(){
  getcnt();
  getgescnt();
    ges=true;
// if(ges==true && result==false ){
if(countey<counter){
    message.innerHTML="your guess was better";
    win=true;
}else if(counter<countey){
    message.innerHTML="you lose!";
    win=true;

}else{
    message.innerHTML="you are out of the game!!!";
}
// }

}