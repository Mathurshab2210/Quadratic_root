
document.getElementById("results").onclick=function(){
    let a;
    let n=document.getElementById("input1");
    a=n.value
   a=parseInt(n.value);
    console.log("type of a is " + typeof(a));
    console.log(a);

    let b;
    let o=document.getElementById("input2");
    b=o.value
     b=parseInt(b);
    console.log("type of b is " + typeof(b));
    console.log(b);
    let c;
    let p=document.getElementById("input3");
    c=p.value;
     c=parseInt(c);
    console.log("type of c is " + typeof(c));

    let d= b*b - 4*a*c;
    console.log("type of d is " + typeof(d));
    console.log(d);
     if(d>0){
         let root1=(-b + Math.sqrt(d))/(2*a);
         let root2=(-b - Math.sqrt(d))/(2*a);
         document.getElementById("answer").innerHTML="Root 1="+ root1 + " and " +  "Root 2="+   root2;
       
     }
    else if(d==0){
         let root1= -b/(2*a);
         let root2= -b/(2*a);
         document.getElementById("answer").innerHTML="Root 1="+ root1 + " and " + "Root2=" + root2;
     }
     else{
         let realPart=-b/(2*a);
         let imagPart=Math.sqrt(-d)/(2*a);
         let root1= realPart +" +"+ (imagPart + "i");
         let root2= realPart + "-"  + (imagPart + "i");
         document.getElementById("answer").innerHTML="Root 1="+ root1 + " and " + "Root2=" + root2;
     }


};
