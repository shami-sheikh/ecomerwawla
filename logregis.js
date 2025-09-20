
// let user=localStorage.getItem('user')
// if(user){
//     let userphases=JSON.parse(user)
//     let welcomemsg=document.getElementById('welcomemsg')
//     welcomemsg.innerHTML=`hello ${userphases.name}`
//    let logoutbtn=document.getElementById('logoutbtn')
//    logoutbtn.classList.remove('hidden')
//    logoutbtn.innerHTML='login now'
// }else{
//     document.getElementById('welcomemsg').innerHTML=`hello plase <a class="text-2xl text-red-500 ml-4"  href='index.html'>login</a>`
// }
// let logoutbtn=document.getElementById('logoutbtn')
// logoutbtn.addEventListener('click',()=>{
// window.location.href='login.html'
// })
// document.addEventListener("DOMContentLoaded", () => {
//   const logoutinbtn = document.getElementById("loginlogoutbtn");

//   let user = localStorage.getItem("user");

//   if (user) {
//     // logged in
//     logoutinbtn.innerHTML = "Logout";
// let userphases=JSON.parse(user)
// let welcomemsg=document.getElementById('welcomemsg');
// welcomemsg.innerHTML=`welcome ${userphases.name}`
//     logoutinbtn.addEventListener("click", () => {
//       localStorage.removeItem("user");
//       // send them back to index
//       window.location.href = "index.html";
      
//     });
//   } else {
//     // not logged in
//     logoutinbtn.innerHTML = "Login";

//     logoutinbtn.addEventListener("click", () => {
//       // send them to login page
//       window.location.href = "login.html";
//     });
//   }
// });
document.addEventListener('DOMContentLoaded',()=>{
    let logoutinbtn=document.getElementById('loginlogoutbtn')
    let registerbtn=document.getElementById('register-btn')
    let user=localStorage.getItem("user")
    if(user){
        let userphase=JSON.parse(user)
        logoutinbtn.innerHTML='logout'
        let welcomemsg=document.getElementById('welcomemsg')
        welcomemsg.innerHTML=`hello, ${userphase.name}`
        logoutinbtn.addEventListener('click',()=>{
            localStorage.removeItem("user")
            window.location.href='index.html'
        })
    }else{
        registerbtn.innerHTML='register'
         registerbtn.classList.remove('hidden')
        registerbtn.addEventListener('click',()=>{
            window.location.href='register.html'
           
        })
        logoutinbtn.innerHTML='loggin now'
        logoutinbtn.addEventListener('click',()=>{
            window.location.href='login.html'
        })
    }
})