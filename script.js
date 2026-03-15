fetch("products.json")
.then(res => res.json())
.then(products => {

const list = document.getElementById("productList");

products.forEach(p => {

const li = document.createElement("li");

li.textContent = p.name + " - ₹" + p.price;

list.appendChild(li);

});

});
