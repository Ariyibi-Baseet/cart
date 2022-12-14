//get html element
const productArea = document.querySelector('.product-area');
const productCartList = document.getElementById('cartItemWrapper');
const productCartBtn = document.querySelector('.product-to-cart-btn');
const productName = document.querySelector('.product-name');
const productDescription = document.querySelector('.product-description');
const productPrice = document.querySelector('.product-price');

// console.log('aaaaaaaa', productCartList)
// btn
const addToCartBtn = document.querySelector('.product-to-cart');

let allData2;
let cartList = [];
let itemQty = []
let totalItemPrice = []
// function to fetch product data api
fetchData();

function fetchData()
{
    fetch('product.json').then((response) => response.json()
    ).then((data) => {
        let allData = data.data;
        allData2 = data.data;
        
        let appendProductData = '';
        for(let i=0; i<=allData.length; i++)
        {
            appendProductData += `
            <div class="product-card" title="click to view full description" id onclick="displayDescription(${i})">
            <div class="product-image">
                <img src="${allData[i].Image}" alt="">
            </div>
            <div class="product-content">
                <h2>Product Name</h2>
                <p class="product-name">${allData[i].name}</p>
                <h2>Description</h2>
                <p class="product-description">${allData[i].shortDescription}</p>
                <h2>Price</h2>
                <div class="price-n-button">
                    <p class="product-price">$${allData[i].price}.000</p>
                    <button class="product-to-cart-btn" onclick="myFunction(${i})" title="Add to cart">+</button>
                </div>
            </div>
        </div> 
            `
            productArea.innerHTML = appendProductData;
        }
    })
}


// fetchCartListData();

function fetchCartListData(){
    let appendProductData = '';
    result = {};
        for(let i=0; i<cartList.length; i++)
        {
            appendProductData += `
            <div class="cart-item">
                <div class="item-image">
                    <img src="${cartList[i].Image}" alt="">
                </div>
                <div>
                <p class="cart-item-name">${cartList[i].name}</p>
                </div>
                <div>
                    <button class="minus-btn" onclick="decreaseItem(${i})">-</button>
                    <span class="quantity" id="quantity${i}">0</span>
                    <button class="plus-btn" onclick="increaseItem(${i})">+</button>
                </div>
                <div>
                <p>=</p>
                </div>
                <div>
                <p class="total" id="price${i}"></</p>
                </div>
            </div> 
            `
            productCartList.innerHTML = appendProductData;
        }
}

const myFunction = (e) => {
    cartList = [...new Set(cartList)];
    cartList.push(allData2[e])
    var itemName = document.getElementById(`countCart`);
    itemName.innerText = cartList.length
}

const myPurchase = (e) => {
    var finalAmount = document.getElementById(`finalAmount`).innerText;
    var deductedAmount = document.getElementById(`deductedAmount`).innerText;
    alert(`Successfully purchased item for ${finalAmount} after ${deductedAmount} discount`)
}


function increaseItem(e)
{
    if(itemQty[e] == undefined){
        itemQty[e] = 0
        itemQty[e] = itemQty[e] + 1
    } else
{
    itemQty[e] = itemQty[e] + 1

}    
    var itemName = document.getElementById(`quantity${e}`);
    var itemPrice = document.getElementById(`price${e}`);
    var finalAmount = document.getElementById(`finalAmount`);
    var deductedAmount = document.getElementById(`deductedAmount`);
    itemName.innerText = itemQty[e];
    itemPrice.innerText = Number(itemQty[e]) * Number(cartList[e].price);
    totalItemPrice[e] = (Number(itemQty[e]) * Number(cartList[e].price))
    let totalPrice = totalItemPrice.reduce((a,b)=> a + b, 0)
    if(totalPrice >= 80 && totalPrice <= 99){
        deductedAmount.innerText = totalPrice * 0.15;
        finalAmount.innerText = totalPrice - (totalPrice * 0.15);
    } else if(totalPrice >= 100){
        deductedAmount.innerText = totalPrice * 0.2;
        finalAmount.innerText = totalPrice - (totalPrice * 0.2);
    } else {
        deductedAmount.innerText = 0 
        finalAmount.innerText = totalPrice
    }

}

function decreaseItem(e)
{
    if(itemQty[e] == undefined){
        itemQty[e] = 0
    } else
{
    itemQty[e] = itemQty[e] - 1

} 
var itemName = document.getElementById(`quantity${e}`);
var itemPrice = document.getElementById(`price${e}`);
var finalAmount = document.getElementById(`finalAmount`);
    itemName.innerText = itemQty[e];
    itemPrice.innerText = Number(itemQty[e]) * Number(cartList[e].price);
    totalItemPrice[e] = (Number(itemQty[e]) * Number(cartList[e].price))
    let totalPrice = totalItemPrice.reduce((a,b)=> a + b, 0)
    
    if(totalPrice >= 80 && totalPrice <= 99){
        deductedAmount.innerText = totalPrice * 0.15;
        finalAmount.innerText = totalPrice - (totalPrice * 0.15);
    } else if(totalPrice >= 100){
        deductedAmount.innerText = totalPrice * 0.2;
        finalAmount.innerText = totalPrice - (totalPrice * 0.2);
    } else {
        deductedAmount.innerText = 0 
        finalAmount.innerText = totalPrice
    }
}

function displayCart() {
    var viewCartArea = document.getElementById("cartDiv");
    if(viewCartArea.style.display = 'none')
    {
        viewCartArea.style.display = 'block';
    }
    fetchCartListData();
  }

function closeCart(){
    var viewCartArea = document.getElementById("cartDiv");
    if(viewCartArea.style.display = 'block')
    {
        viewCartArea.style.display = 'none';
    }
}

function stopPropagation()
{
    document.querySelectorAll('.product-to-cart-btn')[0].addEventListener('click', (e)=>{
        e.stopPropagation();
    })
    document.querySelectorAll('.product-to-cart-btn')[1].addEventListener('click', (e)=>{
        e.stopPropagation();
    })
    document.querySelectorAll('.product-to-cart-btn')[2].addEventListener('click', (e)=>{
        e.stopPropagation();
    })
    document.querySelectorAll('.product-to-cart-btn')[3].addEventListener('click', (e)=>{
        e.stopPropagation();
    })
    document.querySelectorAll('.product-to-cart-btn')[4].addEventListener('click', (e)=>{
        e.stopPropagation();
    })
}
function displayDescription(e) {
    var itemsDetailsPageWrapper = document.querySelector(".items-details-page-wrapper");
    stopPropagation()
    if (itemsDetailsPageWrapper.style.display === "none") {
        itemsDetailsPageWrapper.style.display = "block";
        var itemName = document.getElementById("itemName");
        var itemPrice = document.getElementById("itemPrice");
        var itemDescription= document.getElementById("itemDescription");
        var itemManufacturer = document.getElementById("itemManufacturer");
        var itemImage = document.getElementById("itemImage");
        console.log(itemImage);
        itemName.innerText = allData2[e].name;
        itemPrice.innerText = allData2[e].price;
        itemDescription.innerText = allData2[e].description;
        itemManufacturer.innerText = allData2[e].manufacturer;
        itemImage.src = allData2[e].Image;
    } else {
        itemsDetailsPageWrapper.style.display = "none";
    }
    // ,,
  }

// close modal
function closeDescriptionModal()
{
    let descriptionModal = document.querySelector(".items-details-page-wrapper");
    if(descriptionModal.style.display === 'block')
    {
        descriptionModal.style.display = 'none';
    }
}