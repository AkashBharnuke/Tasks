
// form.addEventListener('submit', (e) => {
//     let msgs = []

//     if(email.value != 'ak@gmail.com'){
//         msgs.push('use correct email address!');

//         // erroremail.innerHTML = msgs;
//     }

    // if(pass.value.length == "AkPass@21"){

    //     msgs.push('use correct email address!');


    // }


//     if(msgs.length > 0)
//     {
//         e.preventDefault();
//         erroremail.innerText = msgs.join(", ");
//     }

// })

// let btnlogin = document.querySelector("#login");

// btnlogin.addEventListener('click', (e) => {
//     e.preventDefault();
//     validate();

// });

function validate(){

// const form = document.getElementById("form");
let email = document.getElementById("useremail");
let pass = document.getElementById("userpass");

let erroremail = document.getElementById("msgemail");
let errorpass = document.getElementById("msgpass");

    let verifyemail = "akash@gmail.com";
    let verifypass = "Akash@21";

    // document.getElementById('msgemail').innerHTML ="Hello";
    if(email.value != verifyemail){
        console.log("success");

        erroremail.innerHTML = "- Enter Correct Email! -";
        erroremail.style.visibility="visible";    

    }
    
    // else{
                
    //     erroremail.innerHTML = "valid!";
    //     erroremail.style.color="green";   
    //     erroremail.style.visibility="visible";    

        // document.getElementById("msgemail").innerHTML = "valid!";
        // document.getElementById("msgemail").style.color="green";
        // document.getElementById("msgemail").style.visibility="visible";

        //    }

    if(pass.value != verifypass){
        console.log("success");
        errorpass.innerHTML = "- Enter Correct Password! -";
        errorpass.style.visibility="visible";    

           }
    
    else{

        // document.getElementById("msgpass").innerHTML = "valid!";
        // document.getElementById("msgpass").style.color="green";
        // document.getElementById("msgpass").style.visibility="visible";


            // errorpass.innerHTML = "valid!";
            // errorpass.style.color="green";   
            // errorpass.style.visibility="visible";    
    }
    // if(email.value !== 'ak@gmail.com'){
    //     msg = 'use correct email address!';

    // }    
}