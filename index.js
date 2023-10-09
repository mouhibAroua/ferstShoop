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
   // notice we added the index here
   if (predicate(element, index)) {
     // notice we added the index here
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
    function (){
      return  count++;
      
    }
}
var id=generateId();
function phone(name,price,categor,image){
    return{
        name:name,
        price:price,
        categor:categor,
        image:image,
        id:id()
    }
}
function phones(phon){
    return{
        list:[],
        add:add,
        filtreCategory:filtreCategory,
        sortByPrice:sortByPrice
    }
}
var add=function(phon){
    return this.list.push(phon)
}
var sortByPrice(pric){
    this.list.sort(function(a,b){
        return a.price-b.price
    })
}
var filtreCategory(catego){
    filter(this.list,function(element,i){
        return catego===element.categor})
    }
var phone1=phone("Iphone 11ProMax",2100,"iphone",["iphone11VueDeFace.jpg","iphone11vueDeDos.jpg"])
var phone2=phone("Iphone 12ProMax",2500,"iphone",["iphone12VueDeFace.jpg","iphone12VueDeDos.jpg"])
var phone3=phone("Iphone 13ProMax",3100,"iphone",["iphone13vuedeFace.jpg","iphone13vueDeDos.jpg"])
var phone4=phone("Iphone 14ProMax",3600,"iphone",["iphone14VueDeFace.jpg","iphone14vuedeDos.jpg"])
var phone5=phone("S21 Ultras",2150,"samsung",["s21vusdeface.jpg","s21vuededos.jpg"])
var phone6=phone("S22 Ultras",2800,"samsung",["s22vuedeFace.png","s22vuedeDos.png"])
var phone7=phone("S23 Ultras",3500,"samsung",["s23vuedeface.png","s23vuededos.png"])
var phon=phones("name")
function display(arr){
    $("#12").append(`<h4>${arr.name}</h4>
    <img class="3" id=${arr.id.toString()} src=${arr.image[0]}>
    <p>${arr.price}</p>
    <p>${arr.categor}</p>
    `)
}
each(this.list,function(element,i){
    return display(e)
})

function changeImg(array){
        var count=0
        function nextimage(){
           count++
           count=count%array.length
           return array[count]
        }
      return nextimage
    }

$(".3").on("click"function(){
    for(i=0;i<phon.list.length;i++)
})

