document.querySelector("#text").addEventListener("focusout", myText);
document.querySelector("#text").addEventListener("focusout", myPass);



document.querySelector('#btn').addEventListener('click',function(){myText();}

)

function myText(){
    let message,text;
    let errElement = getElementById('#text');
    message=document.getElementById('#err');
    text = document.getElementById("text").value;
   try{
     if(text==""){
         errElement.classList.add("err");
         throw 'bosh';
     }
     if(text.lengt>0){
         errElement.classList.remove("err");
         errElement.classList.add("valid");
         message.innerHTML="";
     }
    }catch(e){
        message.innerHTML="qiymat"+e;
    }
}

function myPass(){
    let message,pass;
    let errElement = getElementById('#password');
    message=document.getElementById('#err2');
    pass = document.getElementById("password").value;
   try{
     if(pass==""){
         errElement.classList.add("err");
         throw 'bosh';
     }
     if(pass.lengt>0){
         errElement.classList.remove("err");
         errElement.classList.add("valid");
         message.innerHTML="";
     }
    }catch(e){
        message.innerHTML="qiymat"+e;
    }
}