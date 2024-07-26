
// -------menu ---------


let enes = document.querySelector("#menuItems") ;
enes.style.height = "0px";
function menu(){
if (enes.style.height=="0px"){
    enes.style.height = "200px";
}
else{
    enes.style.height="0px";
}
};


// // ------------detailed products----------


let bigImage = document.querySelector("#bigImage");
let smallImages = document.querySelectorAll(".smallImage");

smallImages.forEach((smallImage, index) => {
    smallImage.onclick = function () {
        bigImage.src = smallImage.src;
    }
});
//     // -------------account---------

const loginForm = document.querySelector(".loginform");
const registerForm = document.querySelector(".regform");
const signInSignUpBtns = document.querySelectorAll(".signin-signup-btn");
const indicator = document.querySelector("#indicate");
const formContainer = document.querySelector(".form-container");
        
for (let i = 0; i < signInSignUpBtns.length; i++) {
    signInSignUpBtns[i].addEventListener('click', (e)=>{
        if(e.target.className === "signin-signup-btn loginBtn"){
            indicator.classList.add("indicate-active");
            indicator.classList.remove("indicate");
            loginForm.style.left = "0%";
            registerForm.style.right = "100%";
            formContainer.style.height = "400px";
        }else{
            indicator.classList.remove("indicate-active");
            indicator.classList.add("indicate");
            loginForm.style.left = "100%";
            registerForm.style.right = "0%";
            formContainer.style.height = "400px";
        }
    })
}
        