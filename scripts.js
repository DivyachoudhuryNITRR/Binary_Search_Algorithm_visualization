// var msg=document.getElementById("message");
// function f1(){
//     setTimeout(function(){
//         msg.innerHTML+="<p>f1 is starting</p>";
//         msg.innerHTML+="<p>f1 is ending</p>";
//     },100);
// }
// function f2(){
//     msg.innerHTML+="<p>f2 is starting</p>";
//     f1();
//     msg.innerHTML+="<p>f2 is ending</p>";
//     f2();
// }

//f2 is starting
//f2 is ending
//f1 is starting
//f1 is ending


//async
//promise
//await


/*var msg = document.getElementById("message"); 
   
function f1() { 
    return new Promise(function (resolve, reject) { 
        setTimeout(function () { 
        msg.innerHTML += "<p>f1 is starting</p>"; 
            msg.innerHTML += "<p>f1 is ending</p>"; 
            resolve(); 
        }, 100); 
    }) 
} 

async function f2() { 
    msg.innerHTML += "<p>f2 is starting</p>"; 
       
    // Engine waits for f1() to finish it's  
    // execution before executing the next line 
    await f1();  
    msg.innerHTML += "<p>f2 is ending</p>"; 
} 

f2(); */

// f2 is starting
// f1 is starting
// f1 is ending
// f2 is ending



// If we want the Promise to return some value, we can pass it in resolve(variable).  

/*var msg = document.getElementById("message"); 
   
        function f1() { 
            return new Promise(function (resolve, reject) { 
                setTimeout(function () { 
                   msg.innerHTML += "<p>f1 is starting</p>"; 
                    msg.innerHTML += "<p>f1 is ending</p>"; 
                    resolve(1); 
                }, 100); 
            }) 
        } 
   
        async function f2() { 
            msg.innerHTML += "<p>f2 is starting</p>"; 
            var p = await f1(); 
            if (p == 1) msg.innerHTML += "<p>Promise Received</p>" 
            msg.innerHTML += "<p>f2 is ending</p>"; 
        } 
   
        f2(); */
    

        // f2 is starting
        // f1 is starting
        // f1 is ending
        // Promise Received
        // f2 is ending






        // We can write multiple await statements sequentially.

        var msg = document.getElementById("message"); 
   
        function f1() { 
            return new Promise(function (resolve, reject) { 
                setTimeout(function () { 
                   msg.innerHTML += "<p>f1 is starting</p>"; 
                   msg.innerHTML += "<p>f1 is ending</p>"; 
                   resolve(); 
                }, 1000); 
            }) 
        } 
   
        function f3() { 
            return new Promise(function (resolve, reject) { 
                setTimeout(function () { 
                   msg.innerHTML += "<p>f3 is starting</p>"; 
                   msg.innerHTML += "<p>f3 is ending</p>"; 
                   resolve(); 
                }, 1000); 
            }) 
        } 
   
        async function f2() { 
            msg.innerHTML += "<p>f2 is starting</p>"; 
            // await f1(); 
            // await f3();
            
            await Promise.all([f1(), f3()]); 
            msg.innerHTML += "<p>f2 is ending</p>"; 
        } 
   
        f2(); 

        // f2 is starting
        // f1 is starting
        // f1 is ending
        // f3 is starting
        // f3 is ending
        // f2 is ending

