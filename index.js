function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
  }
  
  function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
  }
  
  function filter(array, predicate) {
  var acc = [];
  each(array, function (element, index) {

   if (predicate(element, index)) {
   
     acc.push(element);
   }
  });
  return acc;
  }
  
  function reduce(array, f, acc) {
  if (acc === undefined) {
   acc = array[0];
   array = array.slice(1);
  }
  each(array, function (element, i) {
   acc = f(acc, element, i);
  });
  return acc;
  }
function generateId(){
    count=0;
   return function (){
      return  count++;
      
    }
}
var id=generateId();
function phone(name,price,categor,images){
    return{
        name:name,
        price:price,
        categor:categor,
        images:images,
        id:id()
    }
}

function phoness(phon){
    return{
        phon:phon,
        list:[],
        add:add,
        categoryFilter:categoryFilter,
        sortByPrice:sortByPrice,
        DisplayInformation:DisplayInformation
    }
}
var add=function(phon){
    return this.list.push(phon)
}
var sortByPrice=function(price){
    this.list.sort(function(a,b){
        return a.price-b.price
    })
}
var DisplayInformation=function(category){
  var tab=[]
    each(this.list,function(e){
    if(e.category===category){
      tab.push(e)
    }})
    return tab
  }
var categoryFilter = function (category) {
  
  return this.list.filter(function (phone) {
      return phone.category.toLowerCase() === category.toLowerCase();
  });
};
 
    
    var phone1=phone("Iphone 11ProMax",2100,"iphone","image/iphone11VueDeFace.jpg")
    
  
    
    
    function display(arr){
      
        $("#mouhib1").append(`
        <img src=${arr.images}>
        <h4>${arr.name}</h4>
        <p>${arr.price}</p>
        <p>${arr.categor}</p>
        `)
    }
    
  
    

var phone2=phone("Iphone 12ProMax",2500,"iphone","image/iphone12VueDeFace.jpg")
var phone3=phone("Iphone 13ProMax",3100,"iphone","image/iphone13vuedeFace.jpg")
var phone4=phone("Iphone 14ProMax",3600,"iphone","image/iphone14VueDeFace.jpg")
var phone5=phone("S21 Ultras",2150,"samsung","image/s21vusdeface.jpg")
var phone6=phone("S22 Ultras",2800,"samsung","image/s22vuedeFace.png")
var phone7=phone("S23 Ultras",3500,"samsung","image/s23vuedeface.png")
var phons=phoness("name")


phons.add(phone1);
phons.add(phone2);
phons.add(phone7);
phons.add(phone6);
phons.add(phone3);
phons.add(phone4);
phons.add(phone5);

each(phons.list,function(element,i){
     display(element)
})



   


    $('#mouhib1').append("<button id='btn'>sort by price</button>")
    $("#btn").on('click',function(){
      phons.sortByPrice();
      $("#mouhib1").empty()
      each(phons.list,function(e,i){
        return  display(e)})
    });
  
    var phones = [
      { name: "Iphone 12ProMax", price: 2500 },
      { name: "Iphone 13ProMax", price: 3100 },
      { name: "Iphone 14ProMax", price: 3600 },
      { name: "S21 Ultras", price: 2150 },
      { name: "S22 Ultras", price: 2800 },
      { name: "S23 Ultras", price: 3500 },
      { name: "Iphone 11ProMax", price: 2100 },
  
  
  ];
  
  var cart = [];
  var cartTotal = 0;
  function displayProducts() {
      var productList = document.querySelector(".mouhib");
  
      each(phones,function(phone, index) {
          var product = document.createElement("div");
          product.className = "donnee";
          product.innerHTML = `
            <h3>${phone.name}</h3>
              <p>${phone.price}DT</p>
     <button class="addbtn" id="${index}">Add to Cart</button>
          `;
          productList.appendChild(product);
  
          var addBtn = product.querySelector(".addbtn");
      addBtn.addEventListener("click", function(){ addCart(index)});
      });
  }
  function addCart(i) {
  var phone = phones[i];
      cart.push(phone);
     cartTotal += phone.price;
      var cartItemsList = document.getElementById("items");
      var cartItem = document.createElement("ul");
       cartItem.innerHTML = `
          <span>${phone.name}</span>
          <span>${phone.price}DT</span>     
      `;
      cartItemsList.appendChild(cartItem);
   var cartTotalElement = document.getElementById("total");
      cartTotalElement.textContent = cartTotal.toFixed(2);
  }
  
  function checkout() {
      alert("Thank you for visiting our site");
      clearCart();
  }
  
  function clearCart() {
      cart.length = 0;
      cartTotal = 0;
      var cI = document.getElementById("items");
      cI.innerHTML = "";
      var cT = document.getElementById("total");
      cT.textContent = "0";
  }
  
  displayProducts();
  var checBtn = document.getElementById("btn1");
  checBtn.addEventListener("click", checkout);