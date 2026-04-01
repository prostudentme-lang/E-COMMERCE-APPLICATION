let cart=JSON.parse(localStorage.getItem('cart'))||[]

let cartItemContainer=document.getElementById('cartItemContainer')
// console.log(cartItemContainer)

let totalPrice=document.getElementById('totalPrice')
// console.log(totalPrice)

function displayCartItems(){
    let total=0;
    cartItemContainer.innerHTML="";

    cart.forEach((item,index)=>{
        console.log(item,index)

        let article=document.createElement('article')
        // console.log(article)
        // article.className="cartItems"
        article.innerHTML=`
        <img src="${item.productImg}" alt="${item.productImg}">
    <h3>${item.productName}</h3>
    <p>${item.productprice}</p>
    <button onClick="removeItem(${index})">Remove items</button>
    `
    cartItemContainer.appendChild(article)
    let itemPrice=parseFloat(item.productprice.replace("₹",""))
    console.log(itemPrice)

    total=total+itemPrice
    console.log(total)

    })

    totalPrice.textContent=total;
}
displayCartItems()

let clearCart =document.getElementById('clearCart')
console.log(clearCart)

clearCart.onclick=()=>{
    cart=[];
    localStorage.setItem('cart', JSON.stringify(cart))
    window.location.href="./cartPage.html"
}

let checkout =document.getElementById('checkout')
console.log(checkout)

checkout.onclick=()=>{
    alert(`ThankYou for Shopping with us, Your TOtal bill is ₹ ${totalPrice.textContent}`)
    cart=[];
    localStorage.setItem('cart', JSON.stringify(cart))
    window.location.href="./homePage.html"
}



function removeItem(index){
    console.log(index,"index from remove cart")
    cart.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(cart))
    displayCartItems()
}