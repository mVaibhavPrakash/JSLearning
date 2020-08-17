document.addEventListener('DOMContentLoaded',()=>{
var btn=document.getElementById('btn');
var btnn=document.getElementById('worker');
btnn.addEventListener('click',()=>{
    // Change the value of 'data' variable to 500000 and then see the behaviour of dom
    var data=50000;
    for(var i=0;i<data;i++){
        for(var j=0;j<data;j++){

            //Some useless claculation to delay the process by little extra time
            i*j;
            j-i;
        }
    }
    console.log(i);
});
btn.addEventListener('click', ()=> {
    var child=document.createElement("p");
    var node=document.createTextNode("If you have clicked 'Click me!' button quickly after clicking 'Click worker' button then I have appeared after some interval");
    child.appendChild(node);
    var parent = document.getElementById('div');
    parent.appendChild(child);
})
})