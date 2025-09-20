// Mobile Menu Toggle Script
let menubtn = document.getElementById("mobileMenuBtn");
let menu = document.getElementById("mobileMenu");
let closeMenuBtn = document.getElementById("closeMobileMenuBtn");

//open menu
if(menu && menubtn){
    menubtn.addEventListener('click',()=>{
        menu.classList.remove('hidden')
        menu.classList.add('flex')
        document.body.style.overflow='hidden'
    })
}
//close menu
if(menu && menubtn){
    closeMenuBtn.addEventListener('click',function(){
        menu.classList.add('hidden')
        menu.classList.remove('flex')
        document.body.style.overflow='auto'
    })
}
//close witg screen menu
if(menu){
menu.addEventListener('click',function(e){
    if (e.target===menu) {
    menu.classList.add('hidden')
        menu.classList.remove('flex')
        document.body.style.overflow='auto'
    }
})
}

// close on escape
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu && !menu.classList.contains('hidden')) {
        // use the correct variable `menu` (not mobileMenu)
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }
});


//alternate
function toggleMobileMenu(){
    if(menu){
        if(menu.classList.contains('hidden')){
            menu.classList.remove('flex')
            menu.classList.add('hidden')
            document.body.style.overflow='auto'
        }
    }
}

// forproduct click+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

let imgclick = document.getElementById('imgclick');
if (imgclick) {
    imgclick.addEventListener('click', function () {
        window.location.href = 'productdetails.html';
    });
}

// // for cart click
// let cartclick = document.getElementById('cartclick');
// if (cartclick) {
//     cartclick.addEventListener('click', function () {
//         window.location.href = 'cart.html';
//     });
// }

let allimg=document.querySelectorAll('#Small-img img')
let bigimg=document.querySelector('#bigimg img')

if(allimg && allimg.length && bigimg){
   allimg.forEach(e=>{
e.addEventListener('click',()=>{
    bigimg.src=e.src
})
   })
}
//login register section+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=


let loginform=document.getElementById('logincontactform')
let registerform=document.getElementById('contactFormregis')
let loginre = document.getElementById('loginre');
let registerlogin=document.getElementById('registerlogin')
//forgot password
let forgotpassword=document.getElementById('forgotpassword')
if(forgotpassword){
    forgotpassword.addEventListener('click',(e)=>{
        e.preventDefault();
        alert('still under construction')
    })
}
//for login
if(loginre){
    loginre.addEventListener('click',()=>{
        window.location.href='login.html'
    })
}
if(loginform){
    loginform.addEventListener('submit',(e)=>{
        e.preventDefault();
        let emaillogin=document.getElementById('email-login').value;
        let passwordlogin=document.getElementById('password-login').value;
        let user=localStorage.getItem(emaillogin)
        if(user){
            let userphase = JSON.parse(user);
       if(userphase.password===passwordlogin){
             localStorage.setItem('user',JSON.stringify(userphase))
            window.location.href='index.html'
        }else{
            alert('incorrect password!')
        }
       }else{
        alert('user not found')
       }
            
    
    })
}
   // for register
if(registerform){
    registerform.addEventListener('submit',(e)=>{
        e.preventDefault();
        let registername=document.getElementById('Name-register').value;
        let registeremail=document.getElementById('email-register').value;
        let registerpass=document.getElementById('password-register').value;
        let confirmpass=document.getElementById('conpassword-register').value;
        if(registerpass !==confirmpass){
            alert('password did not match')
            return;
        }
    //if account allredy registered
if (localStorage.getItem(registeremail.trim())) {
    alert('account already registered');
    return;
}
     if(localStorage.getItem(registeremail.trim())){
        alert('accout already registered!')
        return;
     }  
        const user={
            name:registername,
            email:registeremail,
            password:registerpass
        }
        localStorage.setItem(registeremail,JSON.stringify(user))
        let registerbtn=document.getElementById('registerbtn')
        if(registerbtn){
            registerbtn.addEventListener('click',()=>{
                window.location.href='login.html'
            })
        }else{
            alert('register was succesfull')
        }
    })
}
if(registerlogin){
    registerlogin.addEventListener('click',()=>{
        window.location.href='register.html'
    })
}

//shopnowbtn+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let shopidfuck=document.getElementById('shopidfuck')
if(shopidfuck){
    shopidfuck.addEventListener('click',()=>{
        alert('fuck you bitch! tu abhi shop mai hi hai')
    })
}
let shopbtn=document.getElementById('shopbtn')
if(shopbtn){
    shopbtn.addEventListener('click',()=>{
        window.location.href='shop.html'
    })
}

// addcard from productdetail
let cardbtn=document.getElementById('cardbtn')
if(cardbtn){
    cardbtn.addEventListener('click',()=>{
      alert('your cart is added')
    })
}
 // Contact form handling+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      
