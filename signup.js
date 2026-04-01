
// let btn=document.querySelector('button')
//     console.log(btn)

//     let form=document.querySelector('form')
//     console.log(form)

//     form.onsubmit=(e)=>{
//         e.preventDefault()
//         console.log("Form Submited")

//     let inputTag=document.querySelectorAll('input')
//     console.log(inputTag)


//     inputTag.forEach((item)=>{
//         // console.log(item.value)
//         console.log(item.name + ":" + item.value)
//     })

//     let form
//     }

let btn = document.querySelector('button');
console.log(btn);

let form = document.querySelector('form');
console.log(form);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    let inputTag = document.querySelectorAll('input');
    console.log(inputTag);

    let formData = {};  // object to store key-value pairs



    inputTag.forEach((item) => {
        if (item.type == "radio") {
            if (item.checked == true) {
                formData[item.name] = item.value
            }

        } else {
            formData[item.name] = item.value
        }
    });

    console.log(formData);

    localStorage.setItem("UserInfo", JSON.stringify(formData))
    alert("User Register Successful")
    window.location.href = "./login.html"

})
