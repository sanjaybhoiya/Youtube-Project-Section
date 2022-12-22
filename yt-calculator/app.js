// Get all of the buttons on the page

const buttons = document.querySelectorAll('button')

const display = document.querySelector('#display')

const clear = document.querySelector('#clear')

const equal = document.querySelector('#equal')

// Add a click event listener to each button

buttons.forEach(button =>{
  button.addEventListener('click', event =>{

    // Getting value of the button that was clicked
    const buttonValue = event.target.value
    
    // display element on screen

   

    // update the display with button value

    display.value += buttonValue
  })
})

//1- now lets create a click event listener to clear the button

clear.addEventListener('click', event =>{

  

  display.value = ''
})

// 2- now lets create a click event listener for equal button

equal.addEventListener('click', event =>{

  

  display.value = eval(display.value)
})




  
 
  
