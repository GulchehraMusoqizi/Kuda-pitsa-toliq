"use strict"
window.addEventListener('DOMContentLoaded', () =>{
// loader
let loader = document.querySelector('.loader-body')

setTimeout(() => {
  loader.style.display = 'none'
}, 4000);

// bars
let icon = document.querySelector('.bars');
// let span = document.querySelector('span');
let menu = document.querySelector('.menu');

icon.addEventListener('click',()=>{
    icon.classList.toggle('change')
    menu.classList.toggle('close')
    
})

window.addEventListener('scroll', ()=>{
  // console.log('salom');
  if(document.documentElement.scrollTop > 40){
    document.querySelector('.items').style.opacity = 1
    document.querySelector('.navbar').style.position = 'fixed'
    document.querySelector('.navbar').style.left = '0'
    document.querySelector('.navbar').style.top = '0'
    document.querySelector('.navbar').style.right = '0'
  }else{
    document.querySelector('.items').style.opacity = '0'
    document.querySelector('.navbar').style.position = 'absolute'
    document.querySelector('.navbar').style.top = '100%'
    document.querySelector('.hero').style.margin = '70px 0'
    
  }
})



// drugoe
let drug = document.querySelector('.link-item-drug')
let drugoe = document.querySelector('.items .drugoe')
drug.addEventListener('click', ()=>{
  drugoe.classList.toggle('close')
})



//vremya 
let minut = document.querySelector('.minut'),
   second = document.querySelector('.second');
let setSecond = 60,
    setMinut = 30

let timing = setInterval(() => {
      minut.textContent = setMinut
      second.textContent = setSecond
      setSecond--;
      if(setSecond == 0){
        setSecond = 60;
        setMinut--;
      }

    }, 1000);
  

setInterval(() =>{
 if( minut.textContent == 0){
  clearInterval(timing) 
    minut.textContent == "--"
    second.textContent == "--"
 } 

}, 1000)


// account
let about = document.querySelector('.about')
let user = document.querySelector('.nav-time .user')
let userBars = document.querySelector('.menu .user-bars')

user.addEventListener('click', ()=>{
    about.style.display = 'block'
    about.classList.toggle('close')
})

userBars.addEventListener('click', ()=>{
  // about.classList.toggle('close')
  about.style.display = 'block'
})

document.querySelector('.about .fa-xmark').addEventListener('click',()=>{
  about.style.display = 'none'
})



let number = document.querySelector('#tell')
let selKod = document.querySelector('.about a')
let kod = document.querySelector('.kod')
let mark = document.querySelector('.kod i')
let myUser = document.querySelector('.nav-time .my-user')
let time = document.querySelector('.kod p span')
let allert = document.querySelector('.allert')
let qaytBtn = document.querySelector('.kod button')
let passWord = document.querySelector('.kod input')
let z = 60
const numberPhone = ['998905008539' , '998906008539', '9998907008539']
const randomCode = [1234, 3456,  4565, 4455, 6789, 7685, 3456, 3456, 3344, 1234 ]
const pass = Math.floor(Math.random() * 10)




selKod.addEventListener('click', () =>{
  if(number.value == ''){
    allert.style.display = 'block'
    allert.textContent = 'Telefon raqam kiriting'
    // alert('Telefon raqam kiriting')
    number.style.border = '1px solid red' 
    setTimeout(() => {
      allert.style.display = 'none'
    }, 5000);

}else {
  numberPhone.forEach((val) =>{
    if(number.value == val){
      allert.style.display = 'block'
      allert.textContent =  randomCode[pass]
      setTimeout(() => {
        allert.style.display = 'none'
      }, 5000);

      kod.style.display = 'block'
      kod.classList.toggle('close')

      let timer = setInterval(() =>{
        time.textContent = z
        z--
        if(time.textContent == 0){
          clearInterval(timer)
      
         if(passWord.value == ''){
          qaytBtn.style.display = 'block'
          
        }
      }
    
    }, 1000)
    }
  })
}
})

qaytBtn.addEventListener('click', ()=>{
  allert.style.display = 'block'
  allert.textContent =  randomCode[pass]
  setTimeout(() => {
    allert.style.display = 'none'
  }, 5000);
})

document.querySelector('.kod .vhod').addEventListener('click', ()=>{
  randomCode.forEach((cod)=>{
        if(document.querySelector('.kod input').value == cod){
          kod.style.display = 'none'
          about.style.display = 'none'
          user.style.display = 'none'
          myUser.style.display = 'block'
          userBars.style.display = 'none'
          document.querySelector('.menu .my-user').style.display = 'block'

        }
      })
})

mark.addEventListener('click', ()=>{
  kod.style.display = 'none'
})
let myAccount = document.querySelector('.nav-time .my-account')

myUser.addEventListener('click', ()=>{
  myAccount.classList.toggle('close');
})


// karzina

let vibBtn = document.querySelectorAll('.vib-btn')
let karzina = document.querySelector('.logotip a span')
let summa = document.querySelectorAll('.summa')
let summaBir = document.querySelectorAll('.summa-bir')
let shopBox = document.querySelector('.shop-box')
let itog = document.querySelector('.itog')
let zakazBox = document.querySelectorAll('.zakaz-box')
let pokupkiBox = document.querySelector('.pokupki-box')
let schet = document.querySelectorAll('.schet')
let minBtn = document.querySelectorAll('.min')
let donaBtn = document.querySelectorAll('.dona')
let maxBtn = document.querySelectorAll('.max')


vibBtn.forEach((btn, i) =>{
  btn.addEventListener('click', ()=>{

    karzina.innerHTML = karzina.textContent * 1 + summa[i].textContent * 1
    itog.textContent = karzina.textContent
    document.querySelector('.logotip button span').textContent++

    let newZakaz = document.importNode(zakazBox[i], true)
    pokupkiBox.appendChild(newZakaz)   
    newZakaz.append(schet[i])
    
    // console.log(summa);
  })

})

karzina.addEventListener('click', ()=>{
    shopBox.style.display = 'block'
})

document.querySelector('.logotip button').addEventListener('click', ()=>{
   shopBox.style.display = 'block'
})

document.querySelector('.shop-box .fa-xmark').addEventListener('click',()=>{
  shopBox.style.display = 'none'
})

minBtn.forEach((min, i) =>{
  min.addEventListener('click', ()=>{
    donaBtn[i].textContent--
    itog.textContent = itog.textContent * 1 - summaBir[i].textContent * 1

    if(donaBtn[i].textContent == 0){
    
      let newZakaz = document.importNode(zakazBox[i], false)
     
      
      
      //removeAttributeNode.
    }
    // console.log(minBtn);
    
  })
})

maxBtn.forEach((max, i) =>{
  max.addEventListener('click', ()=>{
    donaBtn[i].textContent++
    itog.textContent = itog.textContent * 1 + summaBir[i].textContent * 1
    // console.log(maxBtn);
    
  })
})



});














