let products = {
    data: [
        {
            productName: "Harden vol 8",
            price: "4.200.000",
            image: "https://www.footlocker.com.vn/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/8/0882-ADIIE269600W11H-1.jpg"
        },

        {
            productName: "AE 1",
            price: "2.900.000",
            image: "https://www.footlocker.com.vn/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/8/0882-ADIIF1863PC0007-1.jpg"
        },

        {
            productName: "GT CUT 3",
            price: "5,589,000",
            image: "https://titan22.com/cdn/shop/files/DV2918-401-A_685x.png?v=1711531754"
        },

        {
            productName: "GT CUT 2",
            price: "4.900.000",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwoOoO2s8rSu2ryYmRRbFQ3VGU-x4WgWJ7g&s"
        },

        {
            productName: "ANTA KAI 1",
            price: "3.180.000",
            image: "https://www.kickscrew.com/cdn/shop/files/33-square_449bf141-2af3-4fb4-b8b5-17e039442e73_540x.png?v=1713322088"
        },

        {
            productName: "AR 1",
            price: "2.800.000",
            image: "https://product.hstatic.net/200000495177/product/giay_rigorer_ar1__valentine_s_day__z323360104-11__1__1ccfabf16f51463480c62ebab8b33955_master.jpg"
        },

        {
            productName: "SABRINA 1",
            price: "4,190,000",
            image: "https://product.hstatic.net/200000037626/product/vyll4828_b26bb3536bb5463fbe4bdcea08ecca4a_grande.png"
        },

        {
            productName: "KOBE 8",
            price: "11.690.000",
            image: "https://sneakerdaily.vn/wp-content/uploads/2023/08/Giay-Nike-Kobe-8-Protro-Halo-Triple-White-FJ9364-100.png"
        },

        {
            productName: "Nike Dunk Low",
            price: "763.275.000",
            image: "https://static.sneakerjagers.com/p/qiT9rI83rCk0tnphZtwsRAjaeoq5P9jKu4cMisRl.png"
        },
    ]
}

for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);

    imgContainer.appendChild(image);
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5")
    name.classList.add("product-name")
    name.innerText = i.productName.toUpperCase()
    container.appendChild(name)

    let price = document.createElement("h6")
    price.innerText = "₫" + i.price

    container.appendChild(price)

    card.appendChild(container)
    document.getElementById("products").appendChild(card)
}

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value.toUpperCase()
    let cards = document.querySelectorAll(".card")
    let productName = document.querySelectorAll(".product-name")

    productName.forEach((items, index) => {
        if (items.innerText.includes(searchInput)) {
            cards[index].classList.remove("hide")
        } else {
            cards[index].classList.add("hide")
        }
    })
})
