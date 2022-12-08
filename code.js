
//HAIR PRODUCTS//
let hairProducts=[
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
    },
    {
        id: 5,
        productName: "Soft curls",
        productPrice:"R2000",
        productColor:"Brown",
        productSize:"14 inche",
        image:"https://i.postimg.cc/cJ7xrnXD/short-Curly-black-removebg-preview.png"
    },
    {
        id: 6,
        productName: "Soft curls",
        productPrice:"R3000",
        productColor:"Black",
        productSize:"24 inche",
        image:"https://i.postimg.cc/LsLqDG5s/black-curly-long-removebg-preview.png"
    },
    {
        id: 7,
        productName: "Soft curls",
        productPrice:"R2000",
        productColor:"Blonde",
        productSize:"12 inches",
        image:"https://i.postimg.cc/sgvGQwhT/curly-blonde-short-removebg-preview.png"
    },
    {
        id: 8,
        productName: "Soft curls",
        productPrice:"R2700",
        productColor:"White",
        productSize:"22 inche",
        image:"https://i.postimg.cc/zBWnLp4s/curly-long-white-removebg-preview.png"
    },
    {
        id: 9,
        productName: "Straight",
        productPrice:"R3000",
        productColor:"Black",
        productSize:"26 inche",
        image:"https://i.postimg.cc/YqRHwRGC/long-black-straight-removebg-preview.png"
    },
    {
        id: 10,
        productName: "Straight",
        productPrice:"R1700",
        productColor:"Brown",
        productSize:"10 inche",
        image:"https://i.postimg.cc/QNkQhKXM/short-brown-straight-removebg-preview.png"
    },
    {
        id: 11,
        productName: "Straight",
        productPrice:"R2500",
        productColor:"White",
        productSize:"20 inche",
        image:"https://i.postimg.cc/jSykbdkQ/white-straight-long-removebg-preview.png"
    },
    {
        id: 12,
        productName: "Straight",
        productPrice:"R1800",
        productColor:"Brown",
        productSize:"14 inche",
        image:"https://i.postimg.cc/5NTZJr91/straight-short-black-removebg-preview.png"
    }
    ]
    console.log(hairProducts);
    
    localStorage.setItem('Xole', JSON.stringify(hairProducts));
    
    let name = localStorage.getItem('Xole');
    async function display() {
        let info =document.querySelector ('.row');
        hairProducts.forEach( (item)=> {
        info.innerHTML +=`<div class="card">
        <div class="card-body">
        <img src="${item.image}" class="card-img-top" alt="${item.name}">
              <h5 class="card-title">${item.productName}</h5>
              <p class="card-text">${item.productColor}<br>${item.productPrice}<br>${item.productSize}
              </p>
              <p>
              <a href="admin.html" class="btn btn-primary" >Go somewhere</a>
              </p>
            </div>
          </div>`
        })
    }
    display();
    //ADMIN//
    
let adminList=[
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
    },
    {
        id: 5,
        productName: "Soft curls",
        productPrice:"R2000",
        productColor:"Brown",
        productSize:"14 inche",
        image:"https://i.postimg.cc/cJ7xrnXD/short-Curly-black-removebg-preview.png"
    },
    {
        id: 6,
        productName: "Soft curls",
        productPrice:"R3000",
        productColor:"Black",
        productSize:"24 inche",
        image:"https://i.postimg.cc/LsLqDG5s/black-curly-long-removebg-preview.png"
    },
    {
        id: 7,
        productName: "Soft curls",
        productPrice:"R2000",
        productColor:"Blonde",
        productSize:"12 inches",
        image:"https://i.postimg.cc/sgvGQwhT/curly-blonde-short-removebg-preview.png"
    },
    {
        id: 8,
        productName: "Soft curls",
        productPrice:"R2700",
        productColor:"White",
        productSize:"22 inche",
        image:"https://i.postimg.cc/zBWnLp4s/curly-long-white-removebg-preview.png"
    },
    {
        id: 9,
        productName: "Straight",
        productPrice:"R3000",
        productColor:"Black",
        productSize:"26 inche",
        image:"https://i.postimg.cc/YqRHwRGC/long-black-straight-removebg-preview.png"
    },
    {
        id: 10,
        productName: "Straight",
        productPrice:"R1700",
        productColor:"Brown",
        productSize:"10 inche",
        image:"https://i.postimg.cc/QNkQhKXM/short-brown-straight-removebg-preview.png"
    },
    {
        id: 11,
        productName: "Straight",
        productPrice:"R2500",
        productColor:"White",
        productSize:"20 inche",
        image:"https://i.postimg.cc/jSykbdkQ/white-straight-long-removebg-preview.png"
    },
    {
        id: 12,
        productName: "Straight",
        productPrice:"R1800",
        productColor:"Brown",
        productSize:"14 inche",
        image:"https://i.postimg.cc/5NTZJr91/straight-short-black-removebg-preview.png"
    }
    ];
    localStorage.setItem('Xole', JSON.stringify(adminList));
    let names = JSON.parse(localStorage.getItem('Xole'));
    console.log(names);
    Object.keys(names).forEach(element => {
        
        console.log(names[element].productSize);
    });

    async function show() {
        let info =document.querySelector('#prods');
        adminList.forEach((item)=> {
        info.innerHTML +=`<tr><td class="col">${item.productName}</td>
                          <td>${item.productColor}</td>
                          <td>${item.productPrice}</td>
                          <td>${item.productSize}</td>
                          <td><button type ='button'></button></td>
                          <td><button type='button></td>`
                          
        })
    }
    show();