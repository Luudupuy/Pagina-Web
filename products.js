window.addEventListener("DOMContentLoaded",()=>{
    const orderbutton = document.querySelectorAll("button[data-order]");
    orderbutton.forEach(item => {
        item.addEventListener('click',(event)=>{
            const button = event.currentTarget;
            const conteiner = button.parentNode;
            let order = {
                title: conteiner.querySelector('.title').innerText,
                price: conteiner.querySelector('.price').innerText,
                id: button.getAttribute("data-order")
            }
            localStorage.setItem("order", JSON.stringify(order));
            const url = window.location.href.replace("products.html", "order.html");
            window.location.href = url;
        })
    })
});