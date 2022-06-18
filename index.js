function myFun() {

    window.location.href = "signup.html"
}

function myData() {
    window.location.href = "beauty.html"
}

function mySum() {
    window.location.href = "product.html"
}

function makeUp() {
    window.location.href = "Makeup.html"
}


// object orientrd
let makeup = [
    {
        image: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/7/277cf77missc00000081_1.jpg',
        title: 'Miss Claire Eyelash Glue - Clear Tone',
        weight: '(50gm)',
        quantity: 1,
        id: 'BBJ0003398',
        strikedOffPrice: '350.00',
        price: "322.00",
        discount: '8% Off'

    },
    {
        image: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/b/5b990e16902395773146_3.jpg',
        title: 'Maybelline New York Fit Me Primer - Dewy+Smooth',
        weight: '(30ml)',
        quantity: 1,
        id: 'BBJ0003397',
        strikedOffPrice: "549.00",
        price: "521.00",
        discount: '5% off'

    },
    {
        image: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/i/m/image1_600x.jpg',
        title: 'LOreal Paris Infallible Full Wear Concealer',
        weight: '(15ml)',
        quantity: 1,
        id: 'BBJ0003395',
        strikedOffPrice: "799.00",
        price: "735.00",
        discount: '8% Off'

    },
    {
        image: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904304651284_1.jpg',
        title: 'Faces Canada Ultime Pro Matte Play Eyeliner',
        weight: '(2.5ml)',
        quantity: 1,

        strikedOffPrice: "649.00",
        price: "604.00",
        discount: '7% Off'

    },
]


var arr = JSON.parse(localStorage.getItem("icon")) || []
append(makeup)


function append(makeup) {
    makeup.map(function (elem) {
        // console.log(elem)
        var div = document.createElement("div")

        var image = document.createElement("img")
        image.src = elem.image;

        var title = document.createElement("p")
        title.innerText = elem.title;

        let rating = document.createElement('div')
        rating.setAttribute('id', 'rating')
        rating.innerHTML = `<span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span> 
    <span>(1)</span>`

        var div2 = document.createElement("div")
        div2.setAttribute("id", "motive")

        var sdprice = document.createElement("h4");
        sdprice.setAttribute('id', 'motive2')
        sdprice.innerText = `₹${elem.strikedOffPrice}`;

        var price = document.createElement("h4");
        price.setAttribute('id', 'motive3')
        price.innerText = `₹${elem.price}`;

        var dis = document.createElement("h4");
        dis.setAttribute('id', 'motive4')
        dis.innerText = elem.discount;

        var div3 =document.createElement("div")
        div3.setAttribute("id","humdiv")

        var btn = document.createElement("button")
        btn.innerHTML = '<img src="/cart-38-24.png" alt="">'
        btn.addEventListener("click", function () {
            addToCarts(elem)
        })

        let heart = document.createElement("span")
        heart.innerHTML='🤍'
        heart.setAttribute("id","suraj")

        let spanBtn = document.createElement('span')
        spanBtn.innerText = 'Add To Cart'
        btn.append(spanBtn)

        div2.append(sdprice, price, dis)
        div3.append(btn,heart)
        div.append(image, title, rating, div2, div3);

        document.getElementById("attto").append(div)


    });
}
function addToCarts(elem) {

    arr.push(elem)
    localStorage.setItem("icon", JSON.stringify(arr))
}




// second ======




var arr2 = JSON.parse(localStorage.getItem("icons")) || []
display(makeup)


function display(makeup) {
    makeup.map(function (elem) {
        // console.log(elem)
        var div = document.createElement("div")

        var image = document.createElement("img")
        image.src = elem.image;

        var title = document.createElement("p")
        title.innerText = elem.title;

        let rating = document.createElement('div')
        rating.setAttribute('id', 'rating')
        rating.innerHTML = `<span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span> 
    <span>(1)</span>`

        var div2 = document.createElement("div")
        div2.setAttribute("id", "tomar")

        var sdprice = document.createElement("h4");
        sdprice.setAttribute('id', 'tomar2')
        sdprice.innerText = `₹${elem.strikedOffPrice}`;

        var price = document.createElement("h4");
        price.setAttribute('id', 'tomar3')
        price.innerText = `₹${elem.price}`;

        var dis = document.createElement("h4");
        dis.setAttribute('id', 'tomar4')
        dis.innerText = elem.discount;

        var div3 =document.createElement("div")
        div3.setAttribute("id","btndiv")

        var btn = document.createElement("button")
        btn.innerHTML = '<img src="/cart-38-24.png" alt="">'
        btn.addEventListener("click", function () {
            addToCarts(elem)
        })

        let heart = document.createElement("span")
        heart.innerHTML='🤍'
        heart.setAttribute("id","heart2")

        let spanBtn = document.createElement('span')
        spanBtn.innerText = 'Add To Cart'
        btn.append(spanBtn)

        div2.append(sdprice, price, dis)
        div3.append(btn,heart)
        div.append(image, title, rating, div2, div3);

        document.getElementById("atiksh").append(div)


    });
}
function addToCarts(elem) {

    arr2.push(elem)
    localStorage.setItem("icons", JSON.stringify(arr2))
}

