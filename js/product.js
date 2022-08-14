//get html element
const productArea = document.querySelector('.product-area');
const productCartList = document.getElementById('cartItemWrapper');
const productCartBtn = document.querySelector('.product-to-cart-btn');
const productName = document.querySelector('.product-name');
const productDescription = document.querySelector('.product-description');
const productPrice = document.querySelector('.product-price');

console.log('aaaaaaaa', productCartList)
// btn
const addToCartBtn = document.querySelector('.product-to-cart');

let allData2
let cartList = [];
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


function fetchCartListData(){
    let appendProductData = '';
        for(let i=0; i<=cartList.length; i++)
        {
            appendProductData += `
            <div class="cart-item">
                <div class="item-image">
                    <img src="./img/Itel_A23S.png" alt="">
                </div>
                <div>
                <p class="cart-item-name">${cartList[i].name}</p>
                </div>
                <div>
                    <button class="minus-btn">-</button>
                    <span class="quantity">2</span>
                    <button class="plus-btn">+</button>
                </div>
                <div>
                <p>=</p>
                </div>
                <div>
                <p class="total">Total</p>
                </div>
            </div> 
            `
            productCartList.innerHTML = appendProductData;
        }
}

const myFunction = (e) => {
    console.log('Check me in the console', e)
    cartList.push(allData2[e])
  console.log('hhhhh', cartList)
}

function displayCart() {
    var x = document.getElementById("cartDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
      fetchCartListData()
    } else {
      x.style.display = "none";
    }
  }

function displayDescription(e) {
    var x = document.getElementById("descriptionDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
        var x = document.getElementById("itemName");
        var y = document.getElementById("itemPrice");
        var z = document.getElementById("itemDescription");
        var a = document.getElementById("itemManufacturer");
        var b = document.getElementById("itemManufacturer");
        x.innerText = allData2[e].name
        y.innerText = allData2[e].price
        z.innerText = allData2[e].shortDescription
        a.innerText = allData2[e].manufacturer
        b.src = allData2[e].Image
    } else {
      x.style.display = "none";
    }
  }