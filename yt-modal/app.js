const openBtn = document.getElementById('open-btn')
const closeBtn = document.getElementById('close-btn')
const modalContainer = document.getElementById('modal-container')


// with eventlistener

openBtn.addEventListener('click',function(){
    modalContainer.style.display = 'block'
    modalContainer.style.transition = 'ease-in 0.4s'
})

// for closing the card or modal

closeBtn.addEventListener('click',function(){
    modalContainer.style.display = 'none'
    modalContainer.style.transition = 'ease-in 0.4s'
})

// close no matter wherever you click

// use arrow function for this example

window.addEventListener('click',(e)=>{
    if(e.target === modalContainer){
        modalContainer.style.display='none'
    }
})