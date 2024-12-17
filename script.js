console.log("HELLO-WORLD;");

// // // 1. USING OF OBJECTS IN JS
console.log("------------------------------------------------------------------------------------------------");
console.log("CHAPTER NO.70: USINGS OBJECT" , "'ALL WORK IN PROMPT AND ALERT'") 
console.log("WE ARE HOSTING PACKAGES PLANES !");
alert("WE ARE HOSTING PACKAGES PLANES !");
var plan1 ={
    name: "basic",
    price: "3.99",
    space: "100GB",
    data: "1000GB",
    pages: "10",
}
plan1.name= "basic plan"; // USE OF OBJECT PROPERTIES

alert("The cost of the " + plan1.name + " package is $" + plan1.price + " per month." + "\n"
    + "It Includes: " + plan1.space + " Of Space, " +  plan1.data + " Of Data, " +  plan1.pages + " Site Pages."
); // USE OF OBJECT PROPERTIES IN ALERT BOX;


//
var plan2 ={
    name: "premium",
    price: "9.99",
    space: "500GB",
    data: "2000GB",     
    pages: "100",
}
plan2.name= "premium plan"  // USE OF OBJECT PROPERTIES

alert("The cost of the " + plan2.name + " package is $" + plan2.price + " per month." + "\n"
    + "It Includes: " + plan2.space + " Of Space, " +  plan2.data + " Of Data, " +  plan2.pages + " Site Pages."
);


var plan3 ={
    name: "ultimate",
    price: "14.99",
    space: "1000GB",
    data: "20000GB",
    pages: "200",
}
plan3.name= "ultimate plan" // USE OF OBJECT PROPERTIES
alert("The cost of the " + plan3.name + " package is $" + plan3.price + " per month." + "\n"
    + "It Includes: " + plan3.space + " Of Space, " +  plan3.data + " Of Data, " +  plan3.pages + " Site Pages."
);


var input= prompt("Enter a Plan Name: "+  "\n"  + " (basic plan , premium plan , ultimate plan)")
if(input == plan1.name.toUpperCase().toLowerCase().to){
    console.log("PLAN 1 SUBSCRIBED")
}if(input == plan2.name.toUpperCase().toLowerCase()){
    console.log("PLAN 2 SUBSCRIBED")
}if(input == plan3.name.toUpperCase().toLowerCase()){
    console.log("PLAN 3 SUBSCRIBED")
}




console.log("")
// 2. OBJECTS METHODS
console.log("-------------------------------------------------------------------------------------------------");
console.log("CHAPTER NO.71: USING OBJECT METHODS")
console.log("")
var plan1 = {
     name: "Basic",
     price: 3.99,
     space: 100,
     transfer: 1000,
     pages: 10,
     discountMonths: [6, 7]
     };

function calcAnnual() {
       var bestPrice = plan1.price;
       var currDate = new Date();
       var thisMo = currDate.getMonth();
       for (var i = 0; i < plan1.discountMonths.length; i++) {
       if (plan1.discountMonths[i] === thisMo) {
       bestPrice = plan1.price * .9;
        break;
        }
         }
         return bestPrice * 12;      
}
console.log( "USING OBJECT AND FUNCTION:",calcAnnual())


 var plan2 = {
     name: "Premium",
     price: 5.99,
     space: 1000,
     transfer: 10000,
     pages: 100,
     discountMonths: [4, 9],

    calcAnnual: function(percentIfDisc) {
    var bestPrice = this.price;
     var currDate = new Date();
     var thisMo = currDate.getMonth();
     for (var i = 0; i < this.discountMonths.length; i++) {
     if (this.discountMonths[i] === thisMo) {
     bestPrice = this.price * percentIfDisc;
     break;
     }
     }
     return bestPrice * 12;
     }
     };

     console.log("USING OBJECT METHODS ('this'):" , calcAnnual())


// 3. USING OBJECT CONSTRUCTORS
console.log("")
console.log("-------------------------------------------------------------------------------------------------");
console.log("CHAPTER NO.72: USING OBJECT CONSTRUCTORS");
console.log("")

function Plan(name, price, space, transfer, pages) {
         this.name = name;
         this.price = price;
         this.space = space;
         this.transfer = transfer;
         this.pages = pages;
}

 var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
 var plan2 = new Plan("Premium", 5.99, 500, 5000, 50);
 var plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 500);

 console.log(plan1, plan2, plan3)

// 4. USING OBJECT PROPERTIES AND METHODS:
 console.log(""); 
 console.log("-------------------------------------------------------------------------------------------------");
 console.log("CHAPTER NO.73: USIING OBJECT CONSTRUCTORE WITH PROPERTIES AND METHODS")

 function Plan(name, price, space, transfer, pages, discountMonths) {
     this.name = name;
     this.price = price;
     this.space = space;
     this.transfer = transfer;
     this.pages = pages;
     this.discountMonths = discountMonths;
     this.calcAnnual = function(percentIfDisc) {
     var bestPrice = this.price;
    
    var currDate = new Date();
    var thisMo = currDate.getMonth();
    for (var i = 0; i < this.discountMonths.length; i++) {
     if (this.discountMonths[i] === thisMo) {
     bestPrice = this.price * percentIfDisc;
     break;
     }
     }
     return bestPrice * 12;
     };
     }

var p1 = new Plan("Basic", 3.99, 100, 1000, 10, [6, 7]);
var p2 = new Plan("Premium", 5.99, 500, 5000, 50, [6, 7, 11]);
var p3 = new Plan("Ultimate", 9.99, 2000, 20000, 500, [6, 7]);


console.log(p1 ,p2 ,p3, );
