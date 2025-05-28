const allProducts = [
    { name: "Smart watch", price: 20000, category: "Electronics", image: "https://media.s-bol.com/3lQmykxBN51Q/1200x1196.jpg", quantity: 0 },
    { name: "Air pods", price: 1500, category: "Electronics", image: "https://tse3.mm.bing.net/th?id=OIP.XgC-gqKGiKeJygKqgfuhyAAAAA&pid=Api&P=0&h=180", quantity: 0 },
    { name: "Camera", price: 6000, category: "Electronics", image: "http://infinigeek.com/assets/81ZiesIIjpL._SL1500_.jpg", quantity: 0 },
    { name: "Ipad", price: 30000, category: "Electronics", image: "https://www.resetdigitale.it/118801-thickbox_default/tablet-apple-ipad-pro-12-128gb-wifi-grigio.jpg", quantity: 0 },
    { name: "Lenovo laptop", price: 65000, category: "Electronics", image: "https://nextrift.com/wp-content/uploads/2021/06/lenovo-legion-5-pro-review-5-1536x865.jpg", quantity: 0 },
    { name: "braclet", price: 900, category: "Accesorries", image: "https://cdn.shopify.com/s/files/1/0948/4808/products/s-l1600_1_4cf8ad14-4033-4968-9ae2-eebbd88fb0c6_1024x1024@2x.jpg?v=1528723043", quantity: 0 },
    { name: "Suitcase", price: 4000, category: "Accesorries", image: "https://m.media-amazon.com/images/I/61uXJ7djDnL._AC_UY1100_.jpg", quantity: 0 },
    { name: "hand bag", price: 700, category: "Accesorries", image: "https://i5.walmartimages.com/asr/91b94351-a207-408c-b5a9-3c8e6065687f_1.eaaf420fb9a4fe7d50173ac3f2a95027.jpeg", quantity: 0 },
    { name: "Make up kit", price: 1300, category: "Accesorries", image: "https://beautysupplie.com/wp-content/uploads/2020/11/makeup-gift-sets-for-a-wedding.jpg", quantity: 0 },
    { name: "Stylish shirt", price: 500, category: "Clothing", image: "https://youraverageguystyle.com/wp-content/uploads/2022/12/Essential-Fashion-Items-For-Men-To-Create-A-Casual-Chic-Style-White-Button-Down-Shirt.jpg", quantity: 0 },
    { name: "stylish pant", price: 600, category: "Clothing", image: "https://media.sivasdescalzo.com/media/catalog/product/I/0/I020075-1YA02_sivasdescalzo-Carhartt_WIP-SIMPLE_PANT-1701791672-3.jpg?quality=70&auto=webp&fit=bounds&width=720", quantity: 0 },
    { name: "kids fashion", price: 200, category: "Clothing", image: "https://sc01.alicdn.com/kf/HTB1spWlSVXXXXXoapXXq6xXFXXXb/228921941/HTB1spWlSVXXXXXoapXXq6xXFXXXb.jpg", quantity: 0 },
    { name: "Maxi dress", price: 800, category: "Clothing", image: "https://images-na.ssl-images-amazon.com/images/I/81nuWwh9PnL.jpg", quantity: 0 },
    { name: "Bicycle", price: 10000, category: "Vechicles", image: "https://unspokin.com/cdn/shop/files/Belt_Drive_Bike_website_banner_1024x1024.jpg?v=1682500411", quantity: 0 },
    { name: "Bike", price: 90000, category: "Vechicles", image: "http://cdni.autocarindia.com/ExtraImages/20190226123546_Honda-CB-Unicorn-150-ABS.jpg", quantity: 0 },
    { name: "Car", price: 1500000, category: "Vechicles", image: "https://images.livemint.com/img/2022/09/24/1600x900/Mahindrathar_1664005874494_1664005874760_1664005874760.jpg", quantity: 0 },
    { name: "kids cycle", price: 5000, category: "Vechicles", image: "https://m.media-amazon.com/images/I/81ACrbgHQOL._SL1500_.jpg", quantity: 0 },
    { name: "Milk", price: 60, category: "Grocery", image: "https://www.bigbasket.com/media/uploads/p/l/20005539_3-heritage-toned-milk-special.jpg", quantity: 0 },
    { name: "Fruits", price: 250, category: "Grocery", image: "https://c8.alamy.com/comp/A7EJFM/variety-of-fruit-watermelon-apples-banana-grapes-strawberries-plums-A7EJFM.jpg", quantity: 0 },
    { name: "vegetables", price: 270, category: "Grocery", image: "https://rukminim1.flixcart.com/image/832/832/j6b2f0w0/plant-seed/n/h/r/15-cauliflower-onion-tomato-bottle-gourd-bitter-gourd-lady-original-imaewrujqaj3y5zp.jpeg?q=70", quantity: 0 },
    { name: "Curd", price: 50, category: "Grocery", image: "https://m.media-amazon.com/images/I/71lnpGid2GL.jpg", quantity: 0 },
    { name: "Sofa", price: 450000, category: "Furniture", image: "https://i5.walmartimages.com/asr/f1536896-722c-41fd-951a-089114fb14c1_2.da934cfab2ebd5db15b11a2b6ab78acc.jpeg", quantity: 0 },
    { name: "Uyyala", price: 3500, category: "Furniture", image: "https://m.media-amazon.com/images/I/71SkjWXjTZL._SL1157_.jpg", quantity: 0 },
    { name: "Bed & cot", price: 35000, category: "Furniture", image: "https://sleepworksny.com/wp-content/uploads/2014/03/jakarta_platform_bed_black.jpg", quantity: 0 },
    { name: "Dinning table", price: 17000, category: "Furniture", image: "https://m.media-amazon.com/images/I/61nv7imqcmL._SL1200_.jpg", quantity: 0 }
];

let filteredProducts = []


function showProducts(list) {
    const container = document.getElementById("products");
    container.innerHTML = "";
    list.forEach((p, index) => {
        container.innerHTML += `
            <div class="product">
                <img src="${p.image}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p>₹${p.price}</p>
                <p>${p.category}</p>
                <div class="cart-controls">
                    <button onclick="decrease(${index})">−</button>
                    <span id="qty-${index}">${p.quantity}</span>
                    <button onclick="increase(${index})">+</button>
                </div>
            </div>
        `;
    });
    updateCart();
}

function updateCart() {
    const total = filteredProducts.reduce((sum, p) => sum + p.quantity, 0);
    document.getElementById("cart-count").innerText = total;
}

function increase(index) {
    filteredProducts[index].quantity++;
    document.getElementById(`qty-${index}`).innerText = filteredProducts[index].quantity;
    updateCart();
}

function decrease(index) {
    if (filteredProducts[index].quantity > 0) {
        filteredProducts[index].quantity--;
        document.getElementById(`qty-${index}`).innerText = filteredProducts[index].quantity;
        updateCart();
    }
}

function applyChanges() {
    const cat = document.getElementById("filter").value;
    filteredProducts = allProducts.filter(p => cat === "all" || p.category === cat);

    const sort = document.getElementById("sort").value;
    filteredProducts.sort((a, b) => sort === "low" ? a.price - b.price : b.price - a.price);

    showProducts(filteredProducts);
}

function checkout() {
    const totalItems = filteredProducts.reduce((sum, p) => sum + p.quantity, 0);
    const msgEl = document.getElementById("checkout-msg");
    if (totalItems > 0) {
        msgEl.innerText = `✅ You purchased ${totalItems} item(s). Thank you!`;
        allProducts.forEach(p => p.quantity = 0);
        applyChanges();
    } else {
        msgEl.innerText = "⚠ Your cart is empty.";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("filter").value = "all";
    document.getElementById("sort").value = "low";
    applyChanges();
});
