let hamburger = document.getElementsByClassName("hamburger")[0];
let list = document.getElementsByTagName("ul")[0];
let flag = false;

document.getElementsByClassName("hamburger")[0].addEventListener("click", function (){
    if(flag==false){
        list.style.display = "none";
        flag = true;
    }
    else{
        list.style.display = "flex";
        flag = false;
    }
})