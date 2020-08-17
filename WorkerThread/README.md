## Here we see how worker thread works

** We will see two exmaples one with worker thread and one without worker thread **


Example
1. Without worker
   Files used:
   1. withoutWorker.html ---> This file contains UI for this examples and buttons for triggering events
   2. nonworker.js ---> This file handles dom events

  Run the file 'withoutWorker.html'. Now open the console in your web browser and press 'Click worker' button and suddenly try to press 'Click me!' button then you will see new paragraph not appeared till event triggered by 'Click worker' not printed some value in console. It is because 'Click worker' button blocks the DOM thread till its execution as both , the calculation by 'Click worker' and DOM event by 'Click me' is done on single main thread. 

2. With worker
   Files used:
   1. withWorker.html ---> This file contains UI for this examples and buttons for triggering events
   2. workerTriggerer.js ---> This file handles dom events and also craetes Worker object for worker.js file
   3. worker.js ---> This file contains the code having some heavy calculation

   Run the file 'withWorker.html' Now open the console in your web browser and press 'Click Worker' button and quickly click 'Click me!' button then you will see new paragraph appeared without waiting for event triggered by 'Click worker' to print some value in console. It is beacuse now worker does all the calculations for us and thus DOM thread run independently.

   If you are not satisfied with these examples the change the value of 'data' variable in both 'workerTriggerer.js' and 'nonworker.js' and repeat the steps mentioned in both the examples and observe the behaviour of DOM. Shocked!!!!!!