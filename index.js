// const let var 

// DOM Document Object Model
//  RAM BIZ SENE BTN ADLI DEYISHENI VERIRIK - BEYAN ETMEK

// FOR DOVR OPEARTORUNDA let ishledirik


// const btn = document.getElementById('btn')
// // qiymet deyishmesi
// // var btn redeclare yeniden teyin etmek
// // block scope elementler let const 
//   btn = document.getElementById('navbtn') //qiymet deyishmek

// console.log(btn)


// VERILENLERIN TIPLERI
// const btn = document.getElementById('btn')

// const ad = "Davudxan"

// // console.log(typeof ad);
// // NaN Not a Number
// // console.log(typeof Number(ad))

// // null undefined

// // let x 

// // console.log(typeof x)
// // Javascriptdeki bir bug dir null tipi objectdir 
// console.log(typeof null)


// let isMarried  = false

// isMarried = true

// // = == ===

// if(5=="5") {
//     console.log("Dogrudur")
// }

// else if(5==="5") {

// }
// const isEducated = true
// Massivler (matris, coxluq, dizi)

// const telebe1 = "Davudxan"
// const telebe2 = "Vusal"
// const telebe3 = "Nermin"


// const telebeler = ["Davudxan", "Vusal", "Nermin"]

// console.log(telebeler[1])




// console.log(DavudxanHaqqindaMelumat.age);

// const x = 25
// const y = "35"

// const z =  y% x //


const btn = document.querySelector('.btnn')


// html elementi secici
const idEl = document.querySelector('#id')
const soyadEl = document.getElementById('soyad')
const adEl = document.querySelector('#ad')
const tehsilEl = document.getElementsByClassName('tehsilstatusu')[0]
const editIcon = document.querySelector('.edit')

console.log(tehsilEl)



const DavudxanHaqqindaMelumat =  {
    id: 120124,
    ad: "Davudxan",
    soyad: "Sheydayev",
    age: 25,
    isEducated: true
}


// PascalCase 
// class Person
// camelCase
// const telebeninAdi

// const ADD_BASKET

// const telebeAdi454 = "Filankes"
// {durationEl,currentTime}


btn.addEventListener('click', melumatiGetir)


function melumatiGetir() {
    // alert("Function works!")
    // Alt shift asagi ox
    idEl.innerText = DavudxanHaqqindaMelumat.id
    soyadEl.textContent = DavudxanHaqqindaMelumat.soyad
    adEl.innerText = DavudxanHaqqindaMelumat.ad

    // ternary operator ?  if i bildirir  : else i
    tehsilEl.innerHTML = DavudxanHaqqindaMelumat.isEducated ? "Orta tehsilli" : "Ali tehsilli"

    editIcon.innerHTML = "<i class=\"fa-solid fa-pen-to-square\"></i>"

    // if(DavudxanHaqqindaMelumat.isEducated) {
    //     tehsilEl.textContent = "Ali tehsilli"
    // }
    // else {
    //     tehsilEl.textContent = "Orta tehsilli"

    // }
}





