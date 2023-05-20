//rest -> geri kalan (istediğin kadar parametre gönder bu arkadaş array olarak tutar)
let showProducts = function (id, ...products)
{
    console.log(id)
    console.log(products)
}

//console.log(typeof showProducts)
//showProducts(10, ["ELma","Armut","Karpuz"])

//spread -> ayrıştırmak (bu arkadaş arrray olanı ayrıştırır)
let points = [1,2,3,3,50,7,89,512]
console.log(...points)
console.log(Math.max(...points))
console.log("------------------------------------------------------------------")

//Dustructring -> elinizdeki array in değerlerini, değişkenlere atama yöntemi
let populations = [10000,20000,30000,[40000,50000]]
let [small,medium,high,[veryhigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryhigh)
console.log(maximum)
console.log("------------------------------------------------------------------")

function someFunction([samll1],number)
{
    console.log(samll1)
}

someFunction(populations)
console.log("------------------------------------------------------------------")

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)