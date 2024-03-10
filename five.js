// модальное окно фото
document.querySelectorAll('.el_1-img').forEach(img =>{
    img.onclick = () => {
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.modal img').src = img.getAttribute('src')
    }
});

document.querySelector('.modal span').onclick = () => {
    document.querySelector('.modal').style.display = 'none';
}

// корзина
const cards = document.querySelectorAll(".el_1")

cards.forEach((el, idx) => {

    const btn = el.querySelector(".card__add")
    const title = el.childNodes[3].innerText
    const price = el.childNodes[5].innerText
    const img = el.querySelector(".el_1-img").getAttribute('src')


    btn.addEventListener("click", () => {
        const cartStorage = localStorage.getItem("cart") || "[]";
        let id = Math.floor(Math.random() * (1000 - 1) + 1);
        const cart = JSON.parse(cartStorage);
        const card = {
            img,
            title,
            id:id, 
            price
        };
        cart.push(card);
        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload()
    })
})

// Считываем все элементы корзины:
const carttt = document.querySelector("#cart");

// Считываем все элементы попапа:
const popup = document.querySelector(".popup");
const popup2 = document.querySelector("#popup_product_list");

const popupClose = document.querySelector("#popup_close");
const body = document.body;
const popupContainer = document.querySelector("#popup_container");
const popupProductList = document.querySelector("#popup_product_list");
const popupCost = document.querySelector("#popup_cost");

// открытие и закрытие корзины
carttt.addEventListener("click", (e) => {
popup.classList.add("popup--open");
body.classList.add("lock");
});

popupClose.addEventListener("click", (e) => {
e.preventDefault();
popup.classList.remove("popup--open");
body.classList.remove("lock");
});

// заполнение попапа 2.0
const cartStorage = JSON.parse(localStorage.getItem("cart") || "[]");
if (cartStorage.length) {
    cartStorage.forEach(el => {
        const {img, title, id, price} = el
        const newCard = document.createElement("div")
        newCard.className = "popup__product"            
        newCard.innerHTML = `<div class="popup__product-wrap">
            <img
                  src="${img}"
                  class="popup__product-image"
                /> 
            <h2 class="popup__product-title">${title}</h2> 
            </div> <div class="popup__product-wrap"> 
                <div class="popup__product-price">${price}</div> 
                <button class="popup__product-delete" data-id='${id}'><img class="pic_trash" id="trash" src="pic/trash.png" ></button> </div>`            
        popup2.appendChild(newCard)
        console.log(img)
    });
}
// удаление товара
document.querySelectorAll('.popup__product-delete').forEach(function(el) {
    el.addEventListener('click', function(){
        var d = this.closest('.popup__product').remove();
        var id = el.getAttribute('data-id');
        console.log(id);
        let cartStorage = JSON.parse(localStorage.getItem("cart"));
        cartStorage = cartStorage.filter((element) => element.id != id)
        console.log(cartStorage);
        localStorage.setItem("cart", JSON.stringify(cartStorage));
    })
})