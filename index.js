// // // template_oix004v
// // service_n4zs2wd
// template_oix004v

function contact(event) {
    event.preventDefault();
  emailjs
  .sendForm(
    'service_n4zs2wd',
    'template_oix004v',
    event.target,
    'yMOJaQP5piIJ5gTev'
  ).then(() => {
    console.log('this worked1')
  })
}