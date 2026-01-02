// // // template_oix004v
// // service_n4zs2wd
// template_oix004v

function contact(event) {
    event.preventDefault();
const loading = document.querySelector ('.modal__overlay--loading')
const success = document.querySelector ('.modal__overlay--success')
loading.classList += " modal__overlay--visible";

emailjs 
.sendForm (
    'service_n4zs2wd',
    'template_oix004v',
    event.target,
    'yMOJaQP5piIJ5gTev')
    .then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
    }).catch (() => {
    loading.classList.remove("modal__overlay--visible"); 
    alert(
        "The email service is temporarily unavailable. Please contact me directly at shavonnedwhiffin@gmail.com."
    );  
    })
}

function toggleModal() {
    // toggle modal
    console.log('toggleModal()')
}