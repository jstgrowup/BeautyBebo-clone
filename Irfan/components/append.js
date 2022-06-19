function append(data, container) {
  container.innerHTML = null;

  data.forEach((elem) => {
    let card = document.createElement("div");
    card.setAttribute("id", "card");

    let img = document.createElement("img");
    img.src = elem.image;
    img.addEventListener("click", function () {
      aariftit(elem);
    });

    let sale = document.createElement("div");
    sale.setAttribute("id", "sale");
    sale.innerText = "Sale";

    let info = document.createElement("div");
    info.setAttribute("id", "info");

    let title = document.createElement("p");
    title.innerText = elem.title;
    title.addEventListener("click", function () {
      aariftit(elem);
    });

    let rating = document.createElement("div");
    rating.setAttribute("id", "rating");
    rating.innerHTML = `<span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span> 
        <span>(1)</span>`;

    let priceDiv = document.createElement("div");
    priceDiv.setAttribute("id", "price-div");

    let span1 = document.createElement("div");
    span1.setAttribute("id", "span1");
    if (elem.strikedOffPrice != "") {
      span1.innerText = `₹${elem.strikedOffPrice}`;
    } else {
      span1.innerText = "";
    }

    let span2 = document.createElement("div");
    span2.setAttribute("id", "span2");
    span2.innerText = `₹${elem.price}`;

    let span3 = document.createElement("div");
    span3.setAttribute("id", "span3");
    span3.innerText = elem.discount;

    let btnDiv = document.createElement("div");
    btnDiv.setAttribute("id", "btn-div");

    let button = document.createElement("button");
    button.innerHTML = '<img src="cart-38-24.png" alt="">';
    button.addEventListener("click", function () {
      addel(elem);
    });
    let spanBtn = document.createElement("span");
    spanBtn.innerText = "Add To Cart";
    button.append(spanBtn);

    let spanfav = document.createElement("span");
    spanfav.setAttribute("id", "fav");
    spanfav.innerHTML = "🤍";

    priceDiv.append(span1, span2, span3);
    btnDiv.append(button, spanfav);
    info.append(title, rating, priceDiv, btnDiv);
    card.append(img, sale, info);
    container.append(card);
  });
}

let mainarr = JSON.parse(localStorage.getItem("irfanATC")) || [];
let UserDetail = JSON.parse(localStorage.getItem("UserDetail"));
if (UserDetail === null) {
  document.getElementById("UserName").innerHTML = "My Account";
} else {
  document.getElementById("UserName").innerHTML = UserDetail.first_name;
}

function addel(elem){
  if (UserDetail === null) {
    alert("create an account first");
    window.location.href = "../aarif/Register.html";
  } else {

    mainarr.push(elem);
    
    alert("Item Added To Cart");
    
    localStorage.setItem("irfanATC", JSON.stringify(mainarr));
    let cartData=JSON.parse(localStorage.getItem("irfanATC"))
    let total = cartData.reduce(function (acc, el) {
      return acc + el.price * el.quantity;
    }, 0);
    document.getElementById("irfancart").innerText=total
    
  }
}

function aariftit(elem) {
  if (UserDetail === null) {
    alert("create an account first");
    window.location.href = "../aarif/Register.html";
  } else {
    localStorage.setItem("aarifobj", JSON.stringify(elem));
    window.location.href = "../aarif/Desc.html";
  }
}

export default append;
