function mailupmenu(){
  var x = document.getElementById("changer");
  document.getElementById("letter-changer").className = "mail";
  if (x.className === "mail-container"){
    x.className += " first";
    document.getElementById("mail-letter").className = "letter";
  }else{
    x.className = "mail-container";
    document.getElementById("letter-changer").className = "mail";
  }
}

function letterpageschanger() {
    const pagecarousel = document.querySelector(".inner-letter");
    const carouselpages = document.querySelectorAll(".inner-letter p");
    const prevbtn = document.querySelector("#prevbtn");
    const nextbtn = document.querySelector("#nextbtn");
    let counter = 1;
    let size = carouselpages[0].clientWidth;
    pagecarousel.style.transition = "none";
    pagecarousel.style.transform =  "translateX(" + (-size*counter) + "px)"; 
   
    prevbtn.addEventListener("click", ()=>{
      if (counter <= 0) return;
      pagecarousel.style.transition = "transform .6s ease-in-out";
      size = carouselpages[0].clientWidth;
      counter--;
      pagecarousel.style.transform = "translateX(" + (-size*counter) + "px)";
    })
    nextbtn.addEventListener("click", ()=>{
      if (counter >= carouselpages.length - 1) return;
      pagecarousel.style.transition = "transform .6s ease-in-out";
      size = carouselpages[0].clientWidth;
      counter++;
      pagecarousel.style.transform = "translateX(" + (-size*counter) + "px)";
    })
}


function mailupmenulast() {
  letterpageschanger();
  var x = document.getElementById("changer");
  document.getElementById("letter-changer").className = "mail";
  if (x.className === "mail-container first"){
    x.className += " last";
  }
}


function letterback() {
  document.getElementById("letter-changer").className += " last";
}

// Global function var for playing Christmas Sound
var check = "off";
var ssound = new Audio();
ssound.src = "app/js/Happy Christmas Background Music For Videos (128 kbps).mp3";


function toggle_sound() {
  if (check === "off"){
    check = "on";
    ssound.play();
  } else if (check === "on") {
    check = "off";
    ssound.pause();
  }
}

// Section for letter pages

