let product = JSON.parse(localStorage.getItem("aarifobj"));

displayData(product);

function displayData(data) {
  let img = document.createElement("img");
  img.src = data.image;
  document.getElementById("image").append(img);
  document.getElementById("title").innerHTML = data.title;
  document.getElementById("weight").innerHTML = data.weight;
  document.getElementById("id").innerHTML = data.id;
  document.getElementById("old_price").innerHTML =
    "₹" + data.strikedOffPrice + ".00";
  document.getElementById("new_price").innerHTML = "₹" + data.price + ".00";
  document.getElementById("discount").innerHTML = data.discount;
  document.getElementById("brandA").innerHTML = data.brand;
  document.getElementById("desc").innerHTML = data.discription;
  // document.getElementById("htu").innerHTML = data.howToUse;
  // htu.style.fontSize="25px";
}
let iradata = JSON.parse(localStorage.getItem("UserDetail"));
if (iradata == null) {
  document.getElementById("UserName").innerHTML = "My Account";
} else {
  document.getElementById("UserName").innerHTML = iradata.first_name;
}

document.getElementById("DTC").addEventListener("click", function () {
  addel(product);
});
let mainarr = JSON.parse(localStorage.getItem("irfanATC")) || [];
function addel(product) {
  mainarr.push(product);

  alert("Item Added To Cart");
  localStorage.setItem("irfanATC", JSON.stringify(mainarr));
  let cartData = JSON.parse(localStorage.getItem("irfanATC"));
  let total = cartData.reduce(function (acc, el) {
    return acc + el.price * el.quantity;
  }, 0);
  document.getElementById("irfancart").innerText = total;
}

let click = document.querySelector("#click");
let lists = document.querySelector(".list");
click.addEventListener("click", function () {
  if (lists.classList.contains("links")) {
    lists.classList.remove("links");
    document.getElementById("plus").innerHTML = "+";
  } else {
    lists.classList.add("links");
    document.getElementById("plus").innerHTML = "-";
  }
});
