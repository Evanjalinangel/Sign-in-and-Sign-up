var btn = document.getElementById("submit")
btn.addEventListener("click",function(){
    var namef=document.getElementById("namef").value;

      a=empty()
      b=CheckPass()
      c=namef
    if(a==true && b==true && c=="true"){
        alert("submitted")
    }
})

//validation
var uname = document.getElementById("name")
var mail = document.getElementById("email")
var password = document.getElementById("password")
var cpassword = document.getElementById("cpassword")
uname.addEventListener("focusin",function(){
    let para1 = document.getElementById("p1")
        para1.style.display="none"
})
mail.addEventListener("focusin",function(){
    let para2 = document.getElementById("p3")
        para2.style.display="none"
    if(uname.value==``){
        let para1 = document.getElementById("p1")
        para1.style.display="block"
    }
  
})
password.addEventListener("focusin",function(){
    var para3 = document.getElementById("p4")
        para3.style.display="none"
    if(uname.value==``){
        let para1 = document.getElementById("p1")
        para1.style.display="block"
       
    }
    if(mail.value==``){
        let para2 = document.getElementById("p3")
        para2.style.display="block"
       
    }

})
cpassword.addEventListener("focusin",function(){
    let para33= document.getElementById("p5")
    para33.style.display="none"

    if(uname.value==``){
        var para1 = document.getElementById("p1")
        para1.style.display="block"
      
    }
    if(mail.value==``){
        var para2 = document.getElementById("p3")
        para2.style.display="block"
       
    }
    if(password.value==``){
        var para3 = document.getElementById("p4")
        para3.style.display="block"
        
    }

})
//check password
function CheckPass(){
    var password = document.getElementById("password").value
    var cpassword = document.getElementById("cpassword").value
       let flag=true;
    if(!(password.localeCompare(cpassword))==0)
    {
        var para6= document.getElementById("p6")
        para6.style.display="block"
        flag=false
    }
    else{
        var para6= document.getElementById("p6")
        para6.style.display="none"
        flag=true;
    }
    return flag
    
}
//user name

var uname = document.getElementById("name")
uname.addEventListener("input",function(){
var letter=/^[A-Za-z]+$/
var namef=document.getElementById("namef");
namef.value="true"
   if(!(uname.value.match (letter)))
   {
    let para2=document.getElementById("p2")
    para2.style.display="block"
    namef.value="false"
   }
   else{
    let para2=document.getElementById("p2")
    para2.style.display="none"
    namef.value="true"
   }
})

function empty(){
    var flag = true;
    var uname = document.getElementById("name")
    var mail = document.getElementById("email")
    var password = document.getElementById("password")
    var cpassword = document.getElementById("cpassword")
if(uname.value==``){
    var para1 = document.getElementById("p1")
    para1.style.display="block"
    flag=false
}
if(mail.value==``){
    var para2 = document.getElementById("p3")
    para2.style.display="block"
    flag=false
}
if(password.value==``){
    var para3 = document.getElementById("p4")
    para3.style.display="block"
    flag=false
}
if(cpassword.value==``){
    var para4 = document.getElementById("p5")
    para4.style.display="block"
    flag=false
 
}
 return flag
}
