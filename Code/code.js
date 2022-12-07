//AFRO HAIR//
let hairStyle = JSON.parse(localStorage.getItem('#items1 ')) ?
JSON.parse(localStorage.getItem('#items1')) :
[
    {
        id: 1,
        productName: "Afro",
        productPrice:"R1500",
        productColor:"Brown",
        productSize:"10 inche",
        image:"https://i.postimg.cc/fT4C5QBG/short-brown-afro-removebg-preview.png"
        
    },
    {
        id: 2,
        productName: "Afro",
        productPrice:"R2000",
        productColor:"White",
        productSize:"20 inche",
        image:"https://i.postimg.cc/L5F9QsqY/afro-long-white-removebg-preview.png"
    },
    {
        id: 3,
        productName: "Afro",
        productPrice:"R1800",
        productColor:"Black",
        productSize:"18 inche",
        image:"https://i.postimg.cc/vH8XgtBj/afro-long-black-removebg-preview-1.png"
    },
    {
        id: 4,
        productName: "Afro",
        productPrice:"R2500",
        productColor:"Blonde",
        productSize:"18 inche",
         image:"https://i.postimg.cc/xCzHbcDc/blonde-long-afro-removebg-preview.png"
    }
];
async function display() {
    let data =document.getElementById  ('items1');
    hairStyle.forEach( (item)=> {
        console.log(item);
        data.innerHTML +=`
        <div class="card" style="width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
          <h5 class="card-title">${item.productName}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
    });
}
display();

 //CURLY HAIR//
let hai = JSON.parse(localStorage.getItem('#items2 ')) ?
JSON.parse(localStorage.getItem('#items2')) :
[
    {
        id: 1,
        productName: "Soft curls",
        productPrice:"R2000",
        productColor:"Brown",
        productSize:"14 inche",
        image:"https://i.postimg.cc/cJ7xrnXD/short-Curly-black-removebg-preview.png" 
    },
    {
        id: 2,
        productName: "Soft curls",
        productPrice:"R3000",
        productColor:"Black",
        productSize:"24 inche",
        image:"https://i.postimg.cc/LsLqDG5s/black-curly-long-removebg-preview.png"
    },
    {
        id: 3,
        productName: "Soft curls",
        productPrice:"R2000",
        productColor:"Blonde",
        productSize:"12 inches",
        image:"https://i.postimg.cc/sgvGQwhT/curly-blonde-short-removebg-preview.png"
    },
    {
        id: 4,
        productName: "Soft curls",
        productPrice:"R2700",
        productColor:"White",
        productSize:"22 inche",
        image:"https://i.postimg.cc/zBWnLp4s/curly-long-white-removebg-preview.png"
    } 
];
async function display() {
    let datad =document.getElementById  ('items2');
    hai.forEach( (item)=> {
        datad.innerHTML +=`<div class="card" style="width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
          <h5 class="card-title">${item.productName}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
    })
}
display();


    //STRAIGHT HAIR//
    let extension = JSON.parse(localStorage.getItem('#items3 ')) ?
    JSON.parse(localStorage.getItem('#items3')) :
    [ 
    {
        id: 1,
        productName: "Straight",
        productPrice:"R3000",
        productColor:"Black",
        productSize:"26 inche",
        image:"https://i.postimg.cc/YqRHwRGC/long-black-straight-removebg-preview.png" 
    },
    {
        id: 2,
        productName: "Straight",
        productPrice:"R1700",
        productColor:"Brown",
        productSize:"10 inche",
        image:"https://i.postimg.cc/QNkQhKXM/short-brown-straight-removebg-preview.png" 
    },
    {
        id: 3,
        productName: "Straight",
        productPrice:"R2500",
        productColor:"White",
        productSize:"20 inche",
        image:"https://i.postimg.cc/jSykbdkQ/white-straight-long-removebg-preview.png"
    },
    {
        id: 4,
        productName: "Straight",
        productPrice:"R1800",
        productColor:"Brown",
        productSize:"14 inche",
        image:"https://i.postimg.cc/5NTZJr91/straight-short-black-removebg-preview.png"
    }

    ];
    localStorage.setItem('Xole', JSON.stringify(extension));
    let prices = localStorage.getItem('Xole');
    async function display() {
        let info =document.getElementById  ('items3');
        extension.forEach( (item)=> {
        info.innerHTML +=`<div class="card" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="${item.name}">
            <div class="card-body">
              <h5 class="card-title">${item.productName}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`
        })
    }
    display();
