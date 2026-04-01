let cart=JSON.parse(localStorage.getItem("cart"))||[]

// !targetting the cart count 
let cartCount=document.getElementById('cartCount')
console.log(cartCount)

// ! function to increment the count of cart
function updateCartCount(){
    cartCount.textContent=cart.length;
}

// !targetting all the buttons 
let buttons=document.querySelectorAll('button')
console.log(buttons)
buttons.forEach((btn)=>{
    console.log(btn)

    // ! adding event to buttons
    btn.onclick=(e)=>{
        // console.log("Btn Clicked")

        // ! targetting the nearby product
        let productsData=e.target.closest('.product')
        console.log(productsData)

        // ! string product details in respective variables

        let productImg=productsData.querySelector('img').src
        let productprice=productsData.querySelector('p').textContent
        let productName=productsData.querySelector('h3').textContent

        let item={productImg,productprice,productName}

        // !adding product to an "cart" arrag
        cart.push(item)

        // !storing products in local storage 

        alert(`${productName} Product has been added to cart`)
        localStorage.setItem("cart",JSON.stringify(cart))
        console.log(item)

        // ! to increment the count of cart
        updateCartCount()


    }

})