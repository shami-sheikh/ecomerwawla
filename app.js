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
    allimg.forEach(e =>{
        e.addEventListener('click',()=>{
            bigimg.src = e.src;
        })
    })
}
// loginbtn in registor
let loginre = document.getElementById('loginre');
let registerlogin=document.getElementById('registerlogin')
if(loginre){
    loginre.addEventListener('click',()=>{
        window.location.href='login.html'
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

 // Contact form handling+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        let contactform = document.getElementById("contact-form");
        const statusMessage = document.getElementById("status-message");
        const buttonText = document.getElementById("button-text");
        const loadingText = document.getElementById("loading-text");
        const submitBtn = document.getElementById("contact-submitbtn");

        if (contactform) {
            contactform.addEventListener("submit", (e) => {
                e.preventDefault(); // prevent form reload
                sendemail();
            });
        }

        function showStatus(message, isError = false) {
            statusMessage.textContent = message;
            statusMessage.className = `p-3 rounded-lg text-center ${isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`;
            statusMessage.classList.remove('hidden');
            
            // Hide status after 5 seconds
            setTimeout(() => {
                statusMessage.classList.add('hidden');
            }, 5000);
        }

        function setLoading(loading) {
            if (loading) {
                buttonText.classList.add('hidden');
                loadingText.classList.remove('hidden');
                submitBtn.disabled = true;
                submitBtn.classList.add('opacity-50');
            } else {
                buttonText.classList.remove('hidden');
                loadingText.classList.add('hidden');
                submitBtn.disabled = false;
                submitBtn.classList.remove('opacity-50');
            }
        }

        function sendemail() {
            setLoading(true);

            const name = document.getElementById("contact-name").value;
            const email = document.getElementById("contact-email").value;
            const message = document.getElementById("contact-message").value;

            // Validate inputs
            if (!name || !email || !message) {
                showStatus("Please fill in all fields.", true);
                setLoading(false);
                return;
            }

            // First attempt: Web3Forms API
            // Replace YOUR_WEB3FORMS_ACCESS_KEY_HERE with your real access_key from Web3Forms dashboard
            const formData = new FormData();
            formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY_HERE');
            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', message);
            formData.append('subject', 'New Contact Form Message from ' + name);

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            }).then(res => res.json()).then(data => {
                setLoading(false);
                console.log('Web3Forms response:', data);
                if (data.success) {
                    showStatus('Message sent successfully via Web3Forms!');
                    contactform.reset();
                } else {
                    // If Web3Forms responded with failure, show message and fall back to SMTP.js
                    showStatus('Web3Forms failed: ' + (data.message || JSON.stringify(data)), true);
                    sendBySMTP(name, email, message);
                }
            }).catch(err => {
                console.error('Web3Forms error:', err);
                // Try SMTP.js fallback
                showStatus('Web3Forms error, trying SMTP fallback...', true);
                sendBySMTP(name, email, message);
            });
        }

        // Helper to send via SMTP.js as a fallback
        function sendBySMTP(name, email, message) {
            setLoading(true);
            Email.send({
                SecureToken: "YOUR_ACTUAL_SECURE_TOKEN_HERE", // Get this value from smtpjs.com or configure SMTP credentials
                To: "samidev.co@gmail.com",
                From: email, // note: using the visitor's email as From may be rejected by some SMTP providers
                Subject: "New Contact Form Message from " + name,
                Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
            }).then((response) => {
                setLoading(false);
                if (response === "OK") {
                    showStatus("Message sent successfully via SMTP.js!");
                    contactform.reset();
                } else {
                    showStatus("Failed to send message via SMTP.js: " + response, true);
                }
            }).catch((error) => {
                setLoading(false);
                console.error("SMTP email sending error:", error);
                showStatus("Failed to send message. Please try again or check console for details.", true);
            });
        }

        // Alternative method using mailto (fallback)
        function sendEmailFallback() {
            const name = document.getElementById("contact-name").value;
            const email = document.getElementById("contact-email").value;
            const message = document.getElementById("contact-message").value;
            
            const subject = encodeURIComponent("Contact Form Message from " + name);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
            
            window.location.href = `mailto:samisheikh620555@gmail.com?subject=${subject}&body=${body}`;
        }
        // addcard from productdetail
        let cardbtn=document.getElementById('cardbtn')
        if(cardbtn){
            cardbtn.addEventListener('click',()=>{
                cardbtn.innerHTML='under devloping phase'
                cardbtn.style.color='white'
            })
        }
        // serach buttonText++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//           const searchBox = document.getElementById("searchBox");
//   const productCards = document.querySelectorAll("#product1 .grid > div");

//   searchBox.addEventListener("keyup", () => {
//     let filter = searchBox.value.toLowerCase();

//     productCards.forEach((card) => {
//       let text = card.innerText.toLowerCase(); // includes brand, title, description, price
//       if (text.includes(filter)) {
//         card.style.display = ""; // show
//       } else {
//         card.style.display = "none"; // hide
//       }
//     });
//   });