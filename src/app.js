let student = {id:1, name:"Yusuf"}

function save(puan=10, ogrenci)
{
    console.log(ogrenci.name + " : " + puan)
}

//save(undefined,student);

let student2 = [student, {id:2, name:"Duşti"}, "Van", {city:"Denizli"}]
//console.log(student2)