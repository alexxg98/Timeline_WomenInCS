const women = [
  "1842-3 | Ada Lovelace",
  "Known as the first computer programmer. Lovelace was the first to publish an algorithm intended to be carried out by a machine.",
  "1952 | Grace Hopper",
  "Developed the first compiler, A-o.",
  "1965 | Mary Allen Wilkes",
  "First developer of an operating system, LAP. Wilkes was the first person to use a computer in their personal home.",
  "1965 | Sister May Kenneth Keller",
  "First American women to earn a Ph.D in computer science.",
  "2006 | Melanie Rieback",
  "Programmed the first virus to infect RFID devices.",
  "2006 | Janet Emerson Bashen",
  "First African American women to hold a patent for a software invention.",
  "2009 | Luxia Zhang",
  "Awarded the IEEE Internet Award for her contributions toward developing the internet's architecture.",
  "2014 | Coraline Ada Ehmike",
  "Drafts the first code of conduct for open source projects, the Contributor Covenant."
];
var speed = 50;
var i = 0;
var clicks = 0;
var content = document.getElementById("content");
var modal = document.getElementById("visualTimeline");
var modalbtn = document.getElementById("visualBtn");
var closebtn = document.getElementsByClassName("close")[0];

function typeWriter(txt) {
  if (i < txt.length) { //type each char
    content.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed, txt);
  }
  else if (clicks%2==1) { //for info elmt, no '> ' is shown
      content.innerHTML += "<br/>";
  }
  else if (clicks === women.length) { //after last elmt, modal btn should display
    content.innerHTML += "<br/><br/><br/>";
    content.style.animation = "none";
    content.style.border = "none";
    modalbtn.style.display = "block";
  }
  else { //prints '> ' after each name+info is displayed (except after last)
    content.innerHTML += "<br/><br/>&gt;&nbsp;";
  }
}

function scrollBottom() {
  content.scrollIntoView(false);
}

function displayType() {
  if (clicks < women.length) {
    if (i != 0) {
      i = 0;
    }
    if (clicks%2==0) { //auto prints the info for the corresponding woman
      setTimeout(displayType, 2000);
    }
    // console.log(clicks);
    typeWriter(women[clicks]);
    scrollBottom();
    clicks++;
  }
}


// When the user clicks on the button, open the modal
modalbtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closebtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Display modal btn only after last women info is displayed
function toggleModal() {
  if (modalbtn.style.display === "none") {
    modalbtn.style.display = "block";
  }
  else {
    modalbtn.style.display = "none";
  }
}
