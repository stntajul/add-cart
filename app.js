
const idArray =[];
const counterArray=[];
for(let i=0;i<20;i++){
    counterArray[i]=0;
}
let subtotal=0.00;
//console.log(typeof(subtotal));

const products=[
    {
        id:1,
        imgUrl:'https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/hp-14s/hp-14s-0001-500x500.jpg',
        price:1000,
        name:'HP Laptop'
    },
    {
        id:2,
        imgUrl:'https://www.startech.com.bd/image/cache/catalog/laptop/dell/15-3505/3505-01-500x500.jpg',
        price:2000,
        name:'DELL Laptop'
    },
    {
        id:3,
        imgUrl:'https://www.startech.com.bd/image/cache/catalog/camera/dslr-camera/canon/4000d/4000d-1-500x500.jpg',
        price:3000,
        name:'Canon-DSLR'
    },
    {
        id:4,
        imgUrl:'https://www.startech.com.bd/image/cache/catalog/dslr-camera/nikon/d-3500/d-3500-500x500.jpg',
        price:4000,
        name:'NIKON-DSLR'
    },
    {
        id:5,
        imgUrl:'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/20mk400h-b/20mk400h-b-500x500.jpg',
        price:5000,
        name:'LG-Monitor'
    },
    {
        id:6,
        imgUrl:'https://www.startech.com.bd/image/cache/catalog/television/samsung/ls22r350/ls22r350-1-500x500.jpg',
        price:6000,
        name:'Samsung-Monitor'
    },
    {
        id:7,
        imgUrl:'https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air/MGN73/macbook-mgn73Zp-a-500x500.jpg',
        price:7000,
        name:'Macbook Air'
    },
    {
        id:8,
        imgUrl:'https://www.startech.com.bd/image/cache/catalog/desktop-pc/apple-pc/mac-mini/mrtr2zp-a/mac-mini-pc-500x500.jpg',
        price:8000,
        name:'MAC-Mini'
    },
    {
        id:9,
        imgUrl:'https://www.startech.com.bd/image/cache/catalog/tablet/samsung/galaxy-tab-a7/galaxy-tab-a7-001-500x500.jpg',
        price:9000,
        name:'Samsung Tab A7'
    },
    {
        id:10,
        imgUrl:'https://www.startech.com.bd/image/cache/catalog/mouse/asus/p704-rog-chakram/p704-rog-chakram-01-500x500.jpg',
        price:10000,
        name:'Asus-Gaming Mouse'
    },
    {
        id:11,
        imgUrl:'https://www.startech.com.bd/image/cache/catalog/tablet/apple/ipad-pro/silver/apple-ipad-pro-silver-500x500.jpg',
        price:11000,
        name:'Ipad-Pro'
    },
    {
        id:12,
        imgUrl:'https://www.startech.com.bd/image/cache/catalog/laptop/microsoft/surface-pro-7/surface-pro-7-1-500x500.jpg',
        price:12000,
        name:'Microsoft-Surface Pro'
    },
    {
        id:13,
        imgUrl:'https://www.startech.com.bd/image/cache/catalog/laptop/acer/nitro-5-an515-44/nitro-5-an515-44-01-500x500.jpg',
        price:13000,
        name:'ACER-Nitro'
    },
    {
        id:14,
        imgUrl:'https://www.startech.com.bd/image/cache/catalog/monitor/xiaomi/mi-1c/mi-1c-1-500x500.jpeg',
        price:14000,
        name:'MI-monitor'
    },
    {
        id:15,
        imgUrl:'https://www.startech.com.bd/image/cache/catalog/tablet/lenovo/tab-m10/m10-grey-500x500.jpg',
        price:15000,
        name:'LENOVO-Tab'
    }
    
];
showItems(products);
function showItems(items){
    const allProducts=items.map(t=>t);
    //console.log(allProducts);
    const productList=document.getElementById('productlist');
    //console.log(productList);
    
    for(const eachProduct of allProducts){
        //console.log(eachProduct.imgUrl);
        const div = document.createElement("div");
      div.classList.add("product");
        div.innerHTML=`
        <button id='productBtnId' onclick="addToCart(\'${eachProduct.id}\',\'${eachProduct.imgUrl}\',\'${eachProduct.price}\',\'${eachProduct.name}\')">
        <img class='product-img' src=${eachProduct.imgUrl}></img>
        <h3>${eachProduct.name}</h3>
        <h4>Price: ${eachProduct.price}</h4> 
        </button>
        
        `;
        productList.appendChild(div);


    }
    


}
//${eachProduct.id},${eachProduct.imgUrl},${eachProduct.price},${eachProduct.name}
//id,imgUrl,price,name

// const btnId=document.getElementById('1');
// btnId.addEventListener('click',addToCart());
let sum=0;

function addToCart(id,imgUrl,price,name){
   
   
    const cartItem=document.getElementById('cartItem');
    if(idArray.includes(id)){
        const numberofOrder=document.getElementById(id);
        const prevOrder=numberofOrder.innerText;
        //console.log(prevOrder);
        let count=parseInt(prevOrder);
        count=count+1;
        //console.log(count);
        //let st=toString(count);
        numberofOrder.innerHTML=count;
        
        subtotal+=parseFloat(price);
        counterArray[id]+=parseFloat(price);
        
        document.getElementById(price).innerHTML='BDT: '+count*price;
        console.log(subtotal);


    }
    else{

    
    const div=document.createElement('div');
    div.classList.add('selectedProduct');
    div.innerHTML=`
    <div class='cartedProduct'>
    <div class='img-container'>
    <img class="cartImg gap" src="${imgUrl}"></img>
    <div id='${id}' class='product-count d-flex justify-content-center'>1</div>
    
    </div>
    
        <h3 class="gap">${name}<h3>
        <h3 id="${price}" class="gap"><span>BDT:</span> ${price}<h3>
        <i onclick="removeFromCart(\'${id}',\'${price}')" class="fas fa-trash-alt"></i>
    </div>
        
        
    
    `;
    cartItem.appendChild(div);
    idArray.push(id);
    subtotal+=parseFloat(price);
    console.log(subtotal);
    //console.log(subtotal);
    counterArray[id]+=parseFloat(price);
    
    
    
    }
    totalPay();



}
function removeFromCart(id,price){

    let temp=0;
    for(let i=0;i<idArray.length;i++)
    {
        if(idArray[i]==id){
            temp=i;
        }
    }
    const amount=document.getElementById(price).innerHTML;
    //console.log(amount);
    
    let list=document.getElementById('cartItem');
 
    list.removeChild(list.childNodes[temp+1]);
    //console.log(list);
    idArray.splice(temp,1);

    subtotal-=counterArray[id];
    counterArray[id]=0;
    //console.log(counterArray[id]);
    totalPay();


}

function totalPay(){
    document.getElementById('subtotal').innerHTML=subtotal;
    document.getElementById('totalPayment').innerHTML=subtotal;
    
}

//console.log(sum);
//console.log(product);
// 
// const p=document.createElement('img');
// p.src=product[0];
// test.appendChild(p);
// console.log(p);
