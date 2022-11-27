let div=document.querySelector('.Total2');
let div2=document.querySelector('.Total1');


let dele1=document.getElementById('4')
let like1=document.getElementById('like1');

let dele2=document.getElementById('5');
let like2=document.getElementById('like2');


 //to store old price
let addPrice= [0];
let addPrice2=[0];

function setPrice1(){//to set product's price for adding
    let price=35;
    add(price);
}
function setPrice3(){
    let price=10;
    Add(price);
}


function setPrice2(){//to set produt's price for substracing
    price=35;
    substract(price);
}
function setPrice4(){
    price=10;
    Substract(price);
}

//FOR PRODUCT 1

function add(price){//To add with old added price
    let i=0;
    while(i<addPrice.length){
        price=price+addPrice[i];
        i++;
    }
    addPrice.push(price);//adding the new calculated price to the array
    addPrice.shift(); console.log(addPrice);//removing old added price
div2.innerHTML= addPrice[0];
}

function substract(price){//to substract from old added price
    let i=0;
    while(i<addPrice.length){
        price=addPrice[i]-price;
        i++;
    }
    if(price>=0){
    addPrice.push(price);//same here
    addPrice.shift(price);
    }
div2.innerHTML= addPrice[0];
}


//FOR PRODUCT 2


function Add(price){//To add with old added price
    let i=0;
    while(i<addPrice2.length){
        price=price+addPrice2[i];
        i++;
    }
    addPrice2.push(price);//adding the new calculated price to the array
    addPrice2.shift(); console.log(addPrice);//removing old added price
div.innerHTML= addPrice2[0];
}

function Substract(price){//to substract from old added price
    let i=0;
    while(i<addPrice2.length){
        price=addPrice2[i]-price;
        i++;
    }
    if(price>=0){
    addPrice2.push(price);//same here
    addPrice2.shift(price);
    }
div.innerHTML= addPrice2[0];
}

/////////////////////////////////////////////////////////////

function Like1(){
    like1.style.color='red';
}

function Like2(){
    like2.style.color='red';
}


////////////////////////////////////////////////////////////
function del1(){
    dele1.remove();
}

function del2(){
    dele2.remove();
}