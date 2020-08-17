document.addEventListener('DOMContentLoaded',()=>{
    var btn=document.getElementById('btn');
    var bttn = document.getElementById('worker');

    // New worker thread created using Worker constructor
    const worker= new Worker('./worker.js');

    bttn.addEventListener('click',()=>{

        // Change the value of 'data' to 500000 and see the behaviour of DOM with worker thread
        const data=50000;

        //Sending data to worker object
        worker.postMessage(data);
    });
    // Recieved data from worker object
    worker.onmessage =e =>{
        console.log(e.data);
    }
    btn.addEventListener('click', ()=> {
        var child=document.createElement("p");
        var node=document.createTextNode("Hello I am new paragraph");
        child.appendChild(node);
        var parent = document.getElementById('div');
        parent.appendChild(child);
    });
});