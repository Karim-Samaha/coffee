let data = [
    {
        id: "1",
        name: "CAFFÈ LATTE.",
        img: "./assets/menu-1.png",
        price: "9.99",
        type: "drink"
    },
    {
        id: "2",
        name: "CAPPUCCINO",
        img: "./assets/menu-2.png",
        price: "9.99",
        type: "drink"
    },
    {
        id: "3",
        name: "CAFÈ AU LAIT",
        img: "./assets/menu-3.png",
        price: "9.99",
        type: "drink"
    },
    {
        id: "4",
        name: "ESPRESSO",
        img: "./assets/menu-4.png",
        price: "9.99",
        type: "drink"
    },
    {
        id: "5",
        name: "FLAT WHITE",
        img: "./assets/menu-5.png",
        price: "9.99",
        type: "drink"
    },
    {
        id: "6",
        name: "LATTE MACCHIATO",
        img: "./assets/menu-6.png",
        price: "9.99",
        type: "drink"
    },
    {
        id: "7",
        name: "Fresh Coffee",
        img: "./assets/product-1.png",
        price: "15.99",
        type: "product"
    },
    {
        id: "8",
        name: "Fresh Coffee",
        img: "./assets/product-2.png",
        price: "15.99",
        type: "product"
    },
    {
        id: "9",
        name: "Fresh Coffee",
        img: "./assets/product-3.png",
        price: "15.99",
        type: "product"
    },
];
// Menu products
data.filter((item) => item.type === "drink").map((item) => {
    const { id, name, img, price } = item;
    document.querySelector(".products").innerHTML += `<div key=${id} class="product">
    <img src=${img} alt=${name} />
    <h3 class="productName">${name}</h3>
    <p class="productPrice">${price}$</p>
    <button id=${id} class="addToCart">Add To Cart</button>
</div>`
});
//Latest Product
data.filter((item) => item.type === "product").map((item) => {
    const { id, name, img, price } = item;
    document.querySelector(".latestProduct-container").innerHTML += `
    <div key=${id} class="latestProduct-item">
    <img src=${img} src=${name} />
    <h3 class="productName">${name}</h3>
    <p class="productPrice">${price}$</p>
    <button id=${id} class="addToCart">Add To Cart</button>
    </div>`
});
//handle contact section
document.querySelector(".contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector(".contact .sectionTwo").innerHTML = `
    <h2 class="submitedMsg">We will get back to you shortly</h2>
    `
});

//Handle Opening Sidebar
let sidebar = document.querySelector(".nav-sectionTwo");
let openSidebarIcon = document.querySelector(".sidebarOpen");
let sidebarLinks = document.querySelectorAll(".nav-links a");
openSidebarIcon.addEventListener("click", () => {
    sidebar.style.right = "0%";
    openSidebarIcon.style.opacity = ".4";
    cartMoudle.classList.remove("moudleOpen")
});
sidebarLinks.forEach((item) => {
    item.addEventListener("click", () => {
        sidebar.style.right = "-50%";
        openSidebarIcon.style.opacity = "1";
    });
});
//Handle Closing Sidebar
document.querySelector(".sidebarClose").addEventListener("click", () => {
    sidebar.style.right = "-50%";;
    openSidebarIcon.style.opacity = "1";
});

//Handle Cart Moudle
let cartMoudle = document.querySelector(".cartMoudle");
let cartIcon = document.querySelector(".cart");
let cartButton = document.querySelector(".cartButton")

cartIcon.addEventListener("click", () => {
    cartMoudle.classList.toggle("moudleOpen");
    sidebar.style.right = "-50%";
    cartButton.style.display = "block"
});
cartMoudle.addEventListener("mouseleave", () => {
    cartMoudle.classList.remove("moudleOpen")
    cartButton.style.display = "none"
});
cartMoudle.addEventListener("mouseover", () => {
    cartMoudle.classList.add("moudleOpen")
    cartMoudle.style.opacity = "1";
});

//Handle Cart Products
var buttons = document.querySelectorAll(".addToCart");
var msg = document.querySelector(".msg-Container")
buttons.forEach((item) => {
    item.addEventListener('click', () => {
        data.filter((product) => product.id === item.id)
            .map((item) => {
                const { id, name, img, price } = item;
                document.querySelector(".cartMoudle").innerHTML +=
                    `<div key=${id} class="cartItem">
                <img src=${img} alt=${name} />
                <h4>${name}h</h4>
                </div>`
            });
        
        msg.style.right = "2%";
        msg.style.opacity = "1"
        setTimeout(() => {
            msg.style.right = "-150%"
            msg.style.opacity = "0"
        }, 2000)

    });
});
console.log(JSON.parse({ "first": "sara" }))
        