this.onmessage=e=>{
    const num=e.data;

    // Do some heavy calculation in this file. Although this example does not contain heavy claculations but it is enough to show some delay in your DOM events
    for(var i=0;i<num;i++){
        for(var j=0;j<num;j++){

            // Some useless calculation to delay the process by little extra time
            j/i;j+i*j;
        }
    }
    this.postMessage(i);
}