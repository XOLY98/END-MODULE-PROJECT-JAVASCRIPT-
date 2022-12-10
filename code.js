//HAIR PRODUCTS//
let hairProducts = [
  {
    id: 1,
    productName: "Afro",
    productPrice: "R1500",
    productColor: "Brown",
    productSize: "10 inche",
    image:
      "https://i.postimg.cc/fT4C5QBG/short-brown-afro-removebg-preview.png",
  },
  {
    id: 2,
    productName: "Afro",
    productPrice: "R2000",
    productColor: "White",
    productSize: "20 inche",
    image: "https://i.postimg.cc/L5F9QsqY/afro-long-white-removebg-preview.png",
  },
  {
    id: 3,
    productName: "Afro",
    productPrice: "R1800",
    productColor: "Black",
    productSize: "18 inche",
    image:
      "https://i.postimg.cc/vH8XgtBj/afro-long-black-removebg-preview-1.png",
  },
  {
    id: 4,
    productName: "Afro",
    productPrice: "R2500",
    productColor: "Blonde",
    productSize: "18 inche",
    image:
      "https://i.postimg.cc/xCzHbcDc/blonde-long-afro-removebg-preview.png",
  },
  {
    id: 5,
    productName: "Soft curls",
    productPrice: "R2000",
    productColor: "Brown",
    productSize: "14 inche",
    image:
      "https://i.postimg.cc/cJ7xrnXD/short-Curly-black-removebg-preview.png",
  },
  {
    id: 6,
    productName: "Soft curls",
    productPrice: "R3000",
    productColor: "Black",
    productSize: "24 inche",
    image:
      "https://i.postimg.cc/LsLqDG5s/black-curly-long-removebg-preview.png",
  },
  {
    id: 7,
    productName: "Soft curls",
    productPrice: "R2000",
    productColor: "Blonde",
    productSize: "12 inches",
    image:
      "https://i.postimg.cc/sgvGQwhT/curly-blonde-short-removebg-preview.png",
  },
  {
    id: 8,
    productName: "Soft curls",
    productPrice: "R2700",
    productColor: "White",
    productSize: "22 inche",
    image:
      "https://i.postimg.cc/zBWnLp4s/curly-long-white-removebg-preview.png",
  },
  {
    id: 9,
    productName: "Straight",
    productPrice: "R3000",
    productColor: "Black",
    productSize: "26 inche",
    image:
      "https://i.postimg.cc/YqRHwRGC/long-black-straight-removebg-preview.png",
  },
  {
    id: 10,
    productName: "Straight",
    productPrice: "R1700",
    productColor: "Brown",
    productSize: "10 inche",
    image:
      "https://i.postimg.cc/QNkQhKXM/short-brown-straight-removebg-preview.png",
  },
  {
    id: 11,
    productName: "Straight",
    productPrice: "R2500",
    productColor: "White",
    productSize: "20 inche",
    image:
      "https://i.postimg.cc/jSykbdkQ/white-straight-long-removebg-preview.png",
  },
  {
    id: 12,
    productName: "Straight",
    productPrice: "R1800",
    productColor: "Brown",
    productSize: "14 inche",
    image:
      "https://i.postimg.cc/5NTZJr91/straight-short-black-removebg-preview.png",
  },
];
let checkout = [];
console.log(hairProducts);

localStorage.setItem("Xole", JSON.stringify(hairProducts));

let name = localStorage.getItem("Xole");
async function display() {
  let info = document.querySelector(".row");
  hairProducts.forEach((item) => {
    info.innerHTML += `
    <div class="card ">
        <div class="card-body">
        <img src="${item.image}" class="card-img-top" alt="${item.name}">
              <h5 class="card-title">${item.productName}</h5>
              <p class="card-text">${item.productColor}<br>${
      item.productPrice
    }<br>${item.productSize}
              </p>
              <p>
              <a href="../MY HTML CODES/checkout.html" class="btn btn-danger" onclick='addToCheckout(${JSON.stringify(
                item
              )})'>Go somewhere</a>
              </p>
            </div>
          </div>
          `;
  });
}
display();
//END OF HAIR PRODUCTS//

//ADMIN PAGE//
let adminList = [
  {
    id: 1,
    productName: "Afro",
    productPrice: "R1500",
    productColor: "Brown",
    productSize: "10 inche",
    image:
      "https://i.postimg.cc/fT4C5QBG/short-brown-afro-removebg-preview.png",
  },
  {
    id: 2,
    productName: "Afro",
    productPrice: "R2000",
    productColor: "White",
    productSize: "20 inche",
    image: "https://i.postimg.cc/L5F9QsqY/afro-long-white-removebg-preview.png",
  },
  {
    id: 3,
    productName: "Afro",
    productPrice: "R1800",
    productColor: "Black",
    productSize: "18 inche",
    image:
      "https://i.postimg.cc/vH8XgtBj/afro-long-black-removebg-preview-1.png",
  },
  {
    id: 4,
    productName: "Afro",
    productPrice: "R2500",
    productColor: "Blonde",
    productSize: "18 inche",
    image:
      "https://i.postimg.cc/xCzHbcDc/blonde-long-afro-removebg-preview.png",
  },
  {
    id: 5,
    productName: "Soft curls",
    productPrice: "R2000",
    productColor: "Brown",
    productSize: "14 inche",
    image:
      "https://i.postimg.cc/cJ7xrnXD/short-Curly-black-removebg-preview.png",
  },
  {
    id: 6,
    productName: "Soft curls",
    productPrice: "R3000",
    productColor: "Black",
    productSize: "24 inche",
    image:
      "https://i.postimg.cc/LsLqDG5s/black-curly-long-removebg-preview.png",
  },
  {
    id: 7,
    productName: "Soft curls",
    productPrice: "R2000",
    productColor: "Blonde",
    productSize: "12 inches",
    image:
      "https://i.postimg.cc/sgvGQwhT/curly-blonde-short-removebg-preview.png",
  },
  {
    id: 8,
    productName: "Soft curls",
    productPrice: "R2700",
    productColor: "White",
    productSize: "22 inche",
    image:
      "https://i.postimg.cc/zBWnLp4s/curly-long-white-removebg-preview.png",
  },
  {
    id: 9,
    productName: "Straight",
    productPrice: "R3000",
    productColor: "Black",
    productSize: "26 inche",
    image:
      "https://i.postimg.cc/YqRHwRGC/long-black-straight-removebg-preview.png",
  },
  {
    id: 10,
    productName: "Straight",
    productPrice: "R1700",
    productColor: "Brown",
    productSize: "10 inche",
    image:
      "https://i.postimg.cc/QNkQhKXM/short-brown-straight-removebg-preview.png",
  },
  {
    id: 11,
    productName: "Straight",
    productPrice: "R2500",
    productColor: "White",
    productSize: "20 inche",
    image:
      "https://i.postimg.cc/jSykbdkQ/white-straight-long-removebg-preview.png",
  },
  {
    id: 12,
    productName: "Straight",
    productPrice: "R1800",
    productColor: "Brown",
    productSize: "14 inche",
    image:
      "https://i.postimg.cc/5NTZJr91/straight-short-black-removebg-preview.png",
  },
];
//ADMIN TABLE//
localStorage.setItem("Xole", JSON.stringify(adminList));
let names = JSON.parse(localStorage.getItem("Xole"));
console.log(names);
Object.keys(names).forEach((element) => {
  console.log(names[element].productSize);
});

async function show() {
  let info = document.querySelector("#prods");
  info.innerHTML = "";
  adminList.forEach((item, index) => {
    info.innerHTML += `
        <tr>
        <td>${item.productName}</td>
        <td>${item.productColor}</td>
        <td>${item.productPrice}</td>
        <td>${item.productSize}</td>
        <td><button type="button" class="btn btn-danger"id="bp" data-bs-toggle="modal" data-bs-target="#hair-products-edit" onclick="editProducts(${index})">Edit</button></td>
        <td><button id="Xolelwa" type="clear" class="btn btn-danger" onclick="deleteProduct(this)">Delete</button></td>
        </tr>`;

    console.log(index);
  });
}
show();

//ADD BUTTON IN ADMIN//

let addProduct = () => {
  let id = parseInt(document.querySelector(`#id`).value);
  let productName = document.querySelector(`#type`).value;
  let productPrice = document.querySelector(`#price`).value;
  let productColor = document.querySelector(`#color`).value;
  let productSize = document.querySelector(`#size`).value;
  let image = document.querySelector(`#image`).value;
  adminList.push({
    id,
    productName,
    productPrice,
    productColor,
    productSize,
    image,
  });
  console.log(adminList);
  localStorage.setItem("Xole", JSON.stringify(adminList));
  show();
};
document.getElementById("hair-products").addEventListener("click", addProduct);

//Edit BUTTON FOR ADMIN//
function editProducts(i) {
  console.log(i);
  console.log(adminList[i]);
  let arr = adminList[i];
  console.log(arr.adminList);
  document.querySelector(`#editid`).value = arr.id;
  document.querySelector(`#edittype`).value = arr.productName;
  document.querySelector(`#editprice`).value = arr.productPrice;
  document.querySelector(`#editcolor`).value = arr.productColor;
  document.querySelector(`#editsize`).value = arr.productSize;
  document.querySelector(`#editimage`).value = arr.image;
}
document.getElementById("#bp").addEventListener("click", editProducts);

//DELETE BUTTON//
function deleteProduct(i) {
  let id = document.querySelector(`#id`).value;
  let type = document.querySelector(`#type`).value;
  let price = document.querySelector(`#price`).value;
  let color = document.querySelector(`#color`).value;
  let size = document.querySelector(`#size`).value;
  let image = document.querySelector(`#image`).value;
  let del = i.parentNode.parentNode.rowIndex;
  document.querySelector(".admin").deleteRow(del);
  adminList,
    hairProducts.pop({
      id,
      type,
      price,
      color,
      size,
      image,
    });
  localStorage.setItem("Xole", JSON.stringify(adminList));
}

//SORTING//

  adminList.sort();
  adminList.sort((a, b) => {
    return a.productColor.toLowerCase() < b.productColor.toLowerCase() ? -1 : 1;
  });
  localStorage.setItem("Xole", JSON.stringify(adminList));
console.log(productColor);
//END OF ADMIN PAGE//

//CHECKOUT //
let add = document.querySelectorAll(".btn");
Object.keys(add).forEach((item) => {
  add[item].addEventListener("click", (e) => {
    console.log("clicked", add[item]);
    console.log(names[item]);
    checkout.push(names[item]);
    console.log(addEventListener);
    localStorage.setItem("Xole", JSON.stringify(adminList));
  });
});

let checkout1 = [];
localStorage.setItem("addToCheck", JSON.stringify(checkout1));
let check = JSON.parse(localStorage.getItem("addToCheck"));

function checkout3(i) {
  if (check.includes(names[i])) {
    names[i].number++;
    localStorage.setItem("check", JSON.stringify(addToCheck));
  } else {
    names[i].number = 1;
    check.push(names[i]);
    localStorage.setItem("check", JSON.stringify(addToCheck));
  }
}
async function showItems() {
    let info = document.querySelector("#checkout4");
    info.innerHTML = "";
    adminList.forEach((item, index) => {
      info.innerHTML += `
          <tr>
          <td>${item.productName}</td>
          <td>${item.productColor}</td>
          <td>${item.productPrice}</td>
          <td>${item.productSize}</td>
          <td>${item.number++}</td>`
          console.log(index)
    })
}
showItems()
