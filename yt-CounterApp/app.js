const addBtn = document.querySelector('#in-btn')

const subBtn = document.querySelector('#dec-btn')
const displayEl = document.querySelector('.display-el')

let i=0

// reset Btn

function resetBtn(){

    i= 0
    displayEl.innerText = i

}

addBtn.addEventListener('click',function(){
    if(i>= 0){
        i+=1
    }
    displayEl.innerText = i
})

subBtn.addEventListener('click',function(){
    if(i>0){
        i-=1
    }
    displayEl.innerText = i
})