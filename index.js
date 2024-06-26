let links=document.getElementsByClassName("link");
let prev=document.getElementsByClassName("prev");
let next=document.getElementsByClassName("next");


let currentValue=1;

function linkmain(){
    for(l of links){
        l.classList.remove("active");
    }
    event.target.classList.add("active");
    currentValue=event.target.value;  
}

function prevbtn(){
    if(currentValue > 1){
        for(l of links){
            l.classList.remove("active");
            
        }currentValue--;
        links[currentValue-1].classList.add("active");
        console.log(this);  
    }
}

function nextbtn(){
    if(currentValue <8){
        for(l of links){
            l.classList.remove("active");
            
        }currentValue++;
        links[currentValue-1].classList.add("active");
        console.log(this);  
    }
}
