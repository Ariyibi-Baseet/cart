//get html element
const productArea = document.querySelector('.product-area');
console.log(productArea)
const productCartBtn = document.querySelector('.product-to-cart-btn');
const productName = document.querySelector('.product-name');
const productDescription = document.querySelector('.product-description');
const productPrice = document.querySelector('.product-price');

// btn
const addToCartBtn = document.querySelector('.product-to-cart');

// function to fetch product data api
fetchData();

function fetchData()
{
    fetch('product.json').then((response) => response.json()
    ).then((data) => {
        let allData = data.data;
        
        let appendProductData = '';
        for(datas in allData)
        {
            appendProductData += `
            <div class="product-card" title="click to view full description">
            <div class="product-image">
                <img src="${allData[datas].Image}" alt="">
            </div>
            <div class="product-content">
                <h2>Product Name</h2>
                <p class="product-name">${allData[datas].name}</p>
                <h2>Description</h2>
                <p class="product-description">${allData[datas].shortDescription}</p>
                <h2>Price</h2>
                <div class="price-n-button">
                    <p class="product-price">$${allData[datas].price}.000</p>
                    <button class="product-to-cart-btn" title="Add to cart">+</button>
                </div>
            </div>
        </div> 
            `
            productArea.innerHTML = appendProductData;
        }
    })
}

// document.querySelector('product-to-cart-btn').addEventListener('click', ()=>{
//     alert('fuck');
// })
