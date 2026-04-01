
let form = document.querySelector('form');
console.log(form);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form Submitted");

//! getting user data from the user 
    let email=document.getElementsByTagName('input')[0].value
    let password=document.getElementsByTagName('input')[1].value

    console.log(email)
    console.log(password)

//! getting stored data from local storage

    let storedData=localStorage.getItem('UserInfo')
    console.log(storedData)

    let regularObj=JSON.parse(storedData)
    console.log(regularObj)



    console.log(regularObj.Email,"Email");
    console.log(regularObj.Password,"Password");
    if(email === regularObj.Email && password === regularObj.Password){
        alert("Login Successfull")
        window.location.href="./homePage.html"
    }
    else{
        alert("Mismatch with the data")
    }
    
    // if (storedData && email === storedData.email && password === storedData.password) {
    //     alert("Login Successful");
    //     window.location.href = "./homePage.html";
    // } 
    // else {
    //     alert("Mismatch with the data");
    // }



})


