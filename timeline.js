var i = 0;
var clicks = 0;
var text = "Ada Lovelace";
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
var speed = 20;

function typeWriter(txt) {
  //console.log("txt = ", txt, "i = ", i);
  if (i < txt.length) {
  //  console.log(txt.charAt(i));
    document.getElementById("content").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed, txt);
  }
  else {
    // i = 0;
    if (clicks <= women.length - 1) {
      document.getElementById("content").innerHTML += "<br/>";
    }
    else {
      document.getElementById("content").innerHTML += "<br/><br/>&gt;&nbsp;";
    }
  }
}

function displayType() {
  if (clicks <= women.length - 1) {
    if (i != 0) {
      i = 0;
    }
    if (clicks%2==0) {
      document.getElementById("content").innerHTML += "<br/><br/>&gt;&nbsp;";
      setTimeout(displayType, 1000);
    }
    // console.log(clicks);
    typeWriter(women[clicks]);
    clicks++;
  }
}
