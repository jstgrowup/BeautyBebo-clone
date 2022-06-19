document.getElementById("form").addEventListener("submit", userData);

function userData() {
  event.preventDefault();

  let obj = {
    first_name: form.f_name.value,
    last_name: form.l_name.value,
    Email: form.email.value,
    phone: form.phone.value,
    password: form.password.value,
    Confirm: form.c_password.value,
  };
  console.log(obj);

  if (obj.password === obj.Confirm) {
    localStorage.setItem("UserDetail", JSON.stringify(obj));
    window.location.href = "Login.html";
  } else {
    alert("Password not match!");
  }
  // window.location.reload();
}
let amnt = localStorage.getItem("totalamt");
dis(amnt);
function dis(amnt) {
  if (amnt === null) {
    document.getElementById("irfancart").innerText = "0.0";
  } else {
    document.getElementById("irfancart").innerHTML = amnt;
  }
}
