  //input prompt
function solve() {
     let a = prompt("enter a");

     let b = prompt("enter b");

     let c = prompt("enter c");    
  //showing the values of the varibles in console
     console.log("a="+a)
     console.log("b="+b)
     console.log("c="+c)
     console.log("--------------------------------------")
  //showing the values of the varibles in HTML
     document.getElementById("a").innerHTML = "a="+a;
     document.getElementById("b").innerHTML = "b="+b;
     document.getElementById("c").innerHTML = "c="+c;
  //calculating results......
     var x1=((-(b)+((((b)**2)-4*(a)*(c))**(1/2)))/2*a)
     var x2=((-(b)-((((b)**2)-4*(a)*(c))**(1/2)))/2*a)
  //showing the results in the console
     console.log("x1="+x1+";")
     console.log("x2="+x2+";")
  //showing the results HTML
     document.getElementById("x1").innerHTML = "x1="+x1;
     document.getElementById("x2").innerHTML = "x2="+x2;
  
}