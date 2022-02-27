function myFunction() {
    var x = document.getElementById("mySelect").value;
    if(x === "1") {
   document.getElementById("spaghetti").classList.remove("hidden");
   document.getElementById("Pizza").classList.add("hidden");
   document.getElementById("hamburger").classList.add("hidden");
    document.getElementById("demo").innerHTML = "Correct! " ;
    } else{
   if(x === "2"){
   document.getElementById("Pizza").classList.remove("hidden");
   document.getElementById("spaghetti").classList.add("hidden");
   document.getElementById("hamburger").classList.add("hidden"); 
  }
  
  if(x === "3"){
   document.getElementById("hamburger").classList.remove("hidden");
   document.getElementById("spaghetti").classList.add("hidden");
   document.getElementById("Pizza").classList.add("hidden");
  }
    document.getElementById("demo").innerHTML ="Wrong";}
  } 
  function myFunction2() {
    var x = document.getElementById("options").value;
    document.getElementById("answer").innerHTML = "Thanks for your response: " + x;
  }