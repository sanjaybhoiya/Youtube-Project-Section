const selectDate = document.getElementById("days")
const selectHours = document.getElementById("hours")
const selectMinutes = document.getElementById("minutes")
const selectSeconds = document.getElementById("seconds")
const birthdayMessage = document.getElementById("message-box")
const pre = document.getElementById('prebirthday')

// for calc of time

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24
let timer


// set the date of birthday

let birthday = new Date("December 21,2022 00:00:00")

// making function for countDown

function countDown(){
  
  // get currentDate

  const today = new Date()

  // calc remaining time

  let timeRemain = birthday - today

  //  creating if statement for showing birthday message and limiting the timer to zero

  if(timeRemain <= -day){
    birthdayMessage.style.display = 'flex'
    pre.innerHTML = "Hope you had Amazing Birthday"

    // set timer back to empty
    clearInterval(timer)

  }

  if(timeRemain <= 0){
    birthdayMessage.style.display = 'flex'
    clearInterval(timer)
    return
  }

  // for displaying our time and date on screen

  const days = Math.floor(timeRemain /day)
  const hours = Math.floor((timeRemain %day) / hour)
  const minutes = Math.floor((timeRemain %hour) / minute)
  const seconds = Math.floor((timeRemain %minute) / second)

  // update display

  selectDate.innerHTML = days + "<br> DAYS"
  selectHours.innerHTML = hours + "<br> HOURS"
  selectMinutes.innerHTML = minutes + "<br> MINUTES"
  selectSeconds.innerHTML = seconds + "<br> SECONDS"
}

setInterval(countDown,second)
