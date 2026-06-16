// ========== ТОВАРЫ (16 ШТУК) ==========
const products = [
    { id: 1, name: "Ламинат Deep Oak", category: "laminate", type: "Ламинат", price: 1490, oldPrice: 1890, rating: 4.8, reviews: 124, image: "https://img.santehnica.ru/files/images/resized/products/9/4/9432210-943221_1.600x600.jpg", hit: true },
    { id: 2, name: "Кварцвинил Stone Grey", category: "vinyl", type: "Кварцвинил", price: 2590, oldPrice: 3290, rating: 4.9, reviews: 89, image: "https://cs.p-static.ru/image/65834256/original-600x600-fit.jpg", hit: true },
    { id: 3, name: "Инженерная доска Walnut", category: "engineered", type: "Инженерная доска", price: 5900, oldPrice: 7500, rating: 4.7, reviews: 56, image: "https://avatars.mds.yandex.net/i?id=b672dd92a6d79dfd115c0cd30deb0ca8358abf64-12421485-images-thumbs&n=13", hit: false },
    { id: 4, name: "Паркет Maple Classic", category: "parquet", type: "Паркет", price: 4200, oldPrice: 5200, rating: 4.6, reviews: 203, image: "https://i.pinimg.com/736x/f7/69/61/f7696185deb33c90adf5fa4de8db44e1.jpg", hit: true },
    { id: 5, name: "Ламинат Nordic Pine", category: "laminate", type: "Ламинат", price: 1690, oldPrice: 1990, rating: 4.8, reviews: 312, image: "https://eparket.com/assets/cache_image/images/laminat/Ter%20Hurne/citi%20line/sosna%20seraja_1000x1000_799.jpg", hit: false },
    { id: 6, name: "Кварцвинил Marble White", category: "vinyl", type: "Кварцвинил", price: 2890, oldPrice: 3590, rating: 4.9, reviews: 67, image: "https://avatars.mds.yandex.net/i?id=2737c4603647cf44b29438eafcf83aea_l-4103294-images-thumbs&n=13", hit: true },
    { id: 7, name: "Ковролин Soft Beige", category: "carpet", type: "Ковролин", price: 890, oldPrice: 1290, rating: 4.5, reviews: 45, image: "https://snabimport.ru/uploads/shop_product/big/woolloop-039.jpg", hit: false },
    { id: 8, name: "Пробковый пол CorkNature", category: "cork", type: "Пробковый пол", price: 3200, oldPrice: 4100, rating: 4.9, reviews: 78, image: "https://deko-home.ru/upload/iblock/892/2ca1l8xuedjefdtam60fy5h9qbwjg02h.jpg", hit: false },
    { id: 9, name: "Ламинат Golden Beech", category: "laminate", type: "Ламинат", price: 1350, oldPrice: 1650, rating: 4.7, reviews: 98, image: "https://avatars.mds.yandex.net/i?id=9f0e7704f57487818ac2342522fd25afde85f647-5592183-images-thumbs&n=13", hit: false },
    { id: 10, name: "Кварцвинил Dark Slate", category: "vinyl", type: "Кварцвинил", price: 2790, oldPrice: 3490, rating: 4.8, reviews: 112, image: "https://i.pinimg.com/736x/39/b3/4e/39b34e36049332297f5e6c68c5ab79fe.jpg", hit: true },
    { id: 11, name: "Инженерная доска Oak", category: "engineered", type: "Инженерная доска", price: 6800, oldPrice: 8500, rating: 4.9, reviews: 45, image: "https://adv-parket.ru/f/product/big_verona_3.jpg", hit: false },
    { id: 12, name: "Паркетная доска Ash", category: "parquet", type: "Паркет", price: 4800, oldPrice: 5900, rating: 4.7, reviews: 167, image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/103/295/479/222/219/43/600005518226b1.jpeg", hit: false },
    { id: 13, name: "Ламинат Rustic Pine", category: "laminate", type: "Ламинат", price: 1890, oldPrice: 2290, rating: 4.8, reviews: 234, image: "https://avatars.mds.yandex.net/i?id=652150d9070ca2c5958f74b23c0a10dec6060f89-4011139-images-thumbs&n=13", hit: true },
    { id: 14, name: "Кварцвинил Cream Marble", category: "vinyl", type: "Кварцвинил", price: 3090, oldPrice: 3890, rating: 4.9, reviews: 56, image: "https://avatars.mds.yandex.net/i?id=597d2916903f58a6a9dd818cef89e9ddad502ce4-5216657-images-thumbs&n=13", hit: false },
    { id: 15, name: "Ковролин Lux Velvet", category: "carpet", type: "Ковролин", price: 1290, oldPrice: 1690, rating: 4.6, reviews: 34, image: "https://avatars.mds.yandex.net/i?id=6addb1faef93ca0ca5f8d59c65c46ec516e77b91-5870379-images-thumbs&n=13", hit: false },
    { id: 16, name: "Пробковый пол EcoWarm", category: "cork", type: "Пробковый пол", price: 3500, oldPrice: 4400, rating: 4.8, reviews: 92, image: "https://avatars.mds.yandex.net/i?id=ce91ccf2c4cb155405c0a36ef0ec871867c33c7a-15547930-images-thumbs&n=13", hit: true }
];

// ========== ХРАНИЛИЩА ==========
let cart = JSON.parse(localStorage.getItem("place_cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("place_wishlist")) || [];
let compareList = JSON.parse(localStorage.getItem("place_compare")) || [];

function updateBadges() {
    const cartTotal = cart.reduce((s, i) => s + i.quantity, 0);
    document.querySelectorAll("#cartBadge").forEach(b => b.innerText = cartTotal);
    document.querySelectorAll("#wishlistBadge").forEach(b => b.innerText = wishlist.length);
    document.querySelectorAll("#compareBadge").forEach(b => b.innerText = compareList.length);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(i => i.id === productId);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("place_cart", JSON.stringify(cart));
    updateBadges();
    showToast(`✅ ${product.name} добавлен в корзину`);
}

function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    const index = wishlist.findIndex(p => p.id === productId);
    if (index === -1) {
        wishlist.push(product);
        showToast(`❤️ ${product.name} добавлен в избранное`);
    } else {
        wishlist.splice(index, 1);
        showToast(`❤️ ${product.name} удалён из избранного`);
    }
    localStorage.setItem("place_wishlist", JSON.stringify(wishlist));
    updateBadges();
    updateWishlistButtons();
}

function isInWishlist(productId) {
    return wishlist.some(p => p.id === productId);
}

function updateWishlistButtons() {
    document.querySelectorAll(".wishlist-btn").forEach(btn => {
        const id = parseInt(btn.dataset.id);
        if (isInWishlist(id)) {
            btn.classList.add("active");
            btn.innerHTML = "❤️";
        } else {
            btn.classList.remove("active");
            btn.innerHTML = "🤍";
        }
    });
}

function toggleCompare(productId) {
    const product = products.find(p => p.id === productId);
    const index = compareList.findIndex(p => p.id === productId);
    if (index === -1) {
        if (compareList.length >= 4) {
            showToast("Можно сравнить не более 4 товаров", "error");
            return;
        }
        compareList.push(product);
        showToast(`📊 ${product.name} добавлен в сравнение`);
    } else {
        compareList.splice(index, 1);
        showToast(`📊 ${product.name} удалён из сравнения`);
    }
    localStorage.setItem("place_compare", JSON.stringify(compareList));
    updateBadges();
    updateCompareButtons();
}

function isInCompare(productId) {
    return compareList.some(p => p.id === productId);
}

function updateCompareButtons() {
    document.querySelectorAll(".compare-btn").forEach(btn => {
        const id = parseInt(btn.dataset.id);
        if (isInCompare(id)) {
            btn.classList.add("active");
            btn.innerHTML = "✅";
        } else {
            btn.classList.remove("active");
            btn.innerHTML = "🔄";
        }
    });
}

function showToast(msg, type = "success") {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = msg;
    toast.style.background = type === "success" ? "#2c2522" : "#dc2626";
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

document.addEventListener("DOMContentLoaded", () => {
    updateBadges();
    updateWishlistButtons();
    updateCompareButtons();
});