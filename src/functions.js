function addToCard(productName, quantity = 12) {
    console.log("Sepete eklendi : " + productName + ", Adedi : " + quantity)
}

// addToCard("Elma")
// addToCard("Bilgisayar")
// addToCard("TV")

let sayHello = ()=>{
    console.log("Hello Word")
}

let product1 = {productName:"Elma", unitPrice:50, quantity: 80}

function addToCard2(product){
    console.log("Ürün: " + product.productName + ", Fiyat: "
    + product.unitPrice + ", Miktar: " + product.quantity)
}

// addToCard2( product1)


let product2 = {productName:"Elma", unitPrice:50, quantity: 80}
let product3 = {productName:"Elma", unitPrice:50, quantity: 80}

product2 = product3
product2.productName = "KARPUZ"
// console.log(product3.productName)
// console.log(product2.productName)
//veri sayısal ise -> değer tip, veri objeyse veya snıfı vb. -> rederans tiptir

function addToCard4(x){
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:50, quantity: 80},
    {productName:"Karpuz", unitPrice:60, quantity: 90},
    {productName:"Şeftali", unitPrice:30, quantity: 40}
]

// addToCard4(products)

function add(...numbers){ //rest kullandık ve parametre olrak en sona yazılır
    let total = 0
    for (let i = 0; i < numbers.length; i++){
        total += numbers[i]
    }
    console.log(total)
}

// add(20,30)
// add(60,80,100)

let numbers = [30,10,500,600,8921000]
console.log(Math.max(...numbers)) // spread kullandık 

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri, marmaraSehirleri, karadenizSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karanediz", population:"10M"},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"],
    ]
]

// console.log(icAnadolu.name)
// console.log(karadeniz.population)
// console.log(karadenizSehirleri)

let newProductName, newUnitPrice, newQuantity 
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} 
= {productName:"Elma", unitPrice:10, quantity:12})

console.log(newProductName)