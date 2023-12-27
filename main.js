//          card game

function mixCards(a) {
  for (i = 0; i < a.length; i++) {
    let newPlace = Number(Math.floor(Math.random() * dubleCard.length)); //newPlace מספר אקראי לתא במערך הקלפים ע"י עיגול מס' רנדומלי בטווח הקלפים שיש
    let temp = dubleCard[newPlace]; //מכניס ל temp את הקלף במקום האקראי
    dubleCard[newPlace] = dubleCard[i];
    dubleCard[i] = temp;
  }
  return dubleCard;
}

let counter = 0,
  countPears = 0;

//              הקוד והמשתנים
let card1 = "",
  card2 = "",
  wasChoosen = false,
  isTrue = false,
  playerName = "",
  points = 0;
const card = [
  "https://w7.pngwing.com/pngs/618/70/png-transparent-moon-moon-atmosphere-monochrome-sphere-thumbnail.png",
  "https://eoimages.gsfc.nasa.gov/images/imagerecords/78000/78349/arctic_vir_2012147.jpg",
  "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcGQzNi0xLXBpYTAwMjcxLWpvYjYyM18xLWwxcHFiZnNjLnBuZw.png",
  "https://toppng.com/uploads/preview/planet-png-11553974536i25hsmrvew.png",
  "https://w7.pngwing.com/pngs/393/477/png-transparent-veil-nebula-popsockets-mobile-phones-astronomy-nebula-gadget-atmosphere-computer-wallpaper-thumbnail.png",
];
const dubleCard = card.concat(card);
const stars = "*".repeat(dubleCard.length).split("");
const boardElement = document.getElementsByClassName("board")[0]; //  הכנתסתי את הלוח לתוך משתנה

const flipetCards2 = [];

mixCards(dubleCard);
console.log(stars);
playerName = prompt("what is your name?");
document.getElementById("playerName").innerText = playerName;

function makeCardsInJS() {
  dubleCard.forEach((card) => {
    const cardElement = document.createElement("div"); //  יצרתי אלמנט, ושמתי בו "דיב"
    cardElement.className = "card";
    cardElement.value = card; //  הערך של הכרטיס שווה לכרטיס עצמו (כדי שיהיה כוכבית)

    cardElement.onclick = (e) => {
      if (counter < 2) {
        cardElement.style.backgroundImage = `url(${e.target.value})`; //  התצוגה של הפנימי הוא הערך של הכרטיס שלחצתי עליו
        card2 = e.target;
        flipetCards2.push(card2);
        console.log(flipetCards2);
      }
      counter++;
      if (counter == 2) ifFalse();
    };

    boardElement.appendChild(cardElement); //  משייך את הכרטיס ללוח
  });
}

setInterval;

//      הפונקציה אמורה להחליף את התמונה של הרקע לתמונה של מלון (לצורך הבדיקה) לאחר מכן מאפסת את
//      המערך, ואת המונה
let turn = 0;
function ifFalse() {
  setTimeout(() => {
    if (
      flipetCards2[0].style.backgroundImage !=
      flipetCards2[1].style.backgroundImage
    ) {
      flipetCards2[0].style.backgroundImage = `url(https://www.vhv.rs/dpng/d/91-918998_galaxy-circle-png-transparent-png.png)`;
      flipetCards2[1].style.backgroundImage = `url(https://www.vhv.rs/dpng/d/91-918998_galaxy-circle-png-transparent-png.png)`;
      console.log(flipetCards2[0].style.backgroundImage);
      turn = turn + 1;
    } else {
      //  אם הם זהים - הופך את הלחיצה עליהם לפונקציה ריקה, כלומר - ללא אפשרית
      flipetCards2[0].onclick = () => {};
      flipetCards2[1].onclick = () => {};
      countPears++;
      alert("you are wight!!");
      turn = turn + 1;
      points = points + 10;
      console.log("points = ", points);
    } //  אחרי שהמונה שווה ל-2, מאפס את המונה ואת המערך שאוסף את הכוכבים
    counter = 0;
    flipetCards2.pop();
    flipetCards2.pop();

    if (countPears == 5) {
      alert(`${playerName}, you played ${turn} turn, and got 50 points!
      😀🏆🥇
      let's play another game`);
      location.reload();
    }
    console.log(turn);
    document.getElementById("turn").innerText = turn;
    document.getElementById("points").innerText = points;
  }, 1500);
}

makeCardsInJS();

/* initialization of different variables 
to be used in Count-Up App*/
var clearTime;
var seconds = 0,
  minutes = 0,
  hours = 0;
var secs, mins, gethours;

function startWatch() {
  /* check if seconds is equal to 60 and add a +1 
    to minutes, and set seconds to 0 */
  if (seconds === 60) {
    seconds = 0;
    minutes = minutes + 1;
  }

  /* i used the javascript tenary operator to format 
    how the minutes should look and add 0 to minutes if 
    less than 10 */
  mins = minutes < 10 ? "0" + minutes + ": " : minutes + ": ";
  /* check if minutes is equal to 60 and add a +1 
    to hours set minutes to 0 */
  if (minutes === 60) {
    minutes = 0;
    hours = hours + 1;
  }
  /* i used the javascript tenary operator to format 
    how the hours should look and add 0 to hours if less than 10 */
  gethours = hours < 10 ? "0" + hours + ": " : hours + ": ";
  secs = seconds < 10 ? "0" + seconds : seconds;

  var continueButton = document.getElementById("continue");
  continueButton.removeAttribute("hidden");

  /* display the Count-Up Timer */
  var x = document.getElementById("timer");
  x.innerHTML = gethours + mins + secs;

  /* call the seconds counter after displaying the Count-Up 
    and increment seconds by +1 to keep it counting */
  seconds++;

  /* call the setTimeout( ) to keep the Count-Up alive ! */
  clearTime = setTimeout("startWatch( )", 1000);
}
//create a function to start the Count-Up
function startTime() {
  /* check if seconds, minutes, and hours are equal to zero 
    and start the Count-Up */
  if (seconds === 0 && minutes === 0 && hours === 0) {
    /* hide the fulltime when the Count-Up is running */
    var fulltime = document.getElementById("fulltime");
    fulltime.style.display = "none";
    var showStart = document.getElementById("start");
    showStart.style.display = "none";

    /* call the startWatch( ) function to execute the Count-Up 
        whenever the startTime( ) is triggered */
    startWatch();
  }
}
var start = document.getElementById("start");
start.addEventListener("click", startTime);

/*create a function to stop the time */
function stopTime() {
  /* check if seconds, minutes and hours are not equal to 0 */
  if (seconds !== 0 || minutes !== 0 || hours !== 0) {
    var continueButton = document.getElementById("continue");
    continueButton.setAttribute("hidden", "true");
    var fulltime = document.getElementById("fulltime");
    fulltime.style.display = "block";
    fulltime.style.color = "#ff4500";
    var time = gethours + mins + secs;
    fulltime.innerHTML = "Time Recorded is " + time;
    // reset the Count-Up
    seconds = 0;
    minutes = 0;
    hours = 0;
    secs = "0" + seconds;
    mins = "0" + minutes + ": ";
    gethours = "0" + hours + ": ";

    /* display the Count-Up Timer after it's been stopped */
    var x = document.getElementById("timer");
    var stopTime = gethours + mins + secs;
    x.innerHTML = stopTime;

    /* display all Count-Up control buttons */
    var showStart = document.getElementById("start");
    showStart.style.display = "inline-block";
    var showStop = document.getElementById("stop");
    showStop.style.display = "inline-block";
    var showPause = document.getElementById("pause");
    showPause.style.display = "inline-block";

    /* clear the Count-Up using the setTimeout( ) 
        return value 'clearTime' as ID */
    clearTimeout(clearTime);
  }
}
window.addEventListener("load", function () {
  var stop = document.getElementById("stop");
  stop.addEventListener("click", stopTime);
});
/*********** End of Stop Button Operations *********/

/*********** Pause Button Operations *********/
function pauseTime() {
  if (seconds !== 0 || minutes !== 0 || hours !== 0) {
    /* display the Count-Up Timer after clicking on pause button */
    var x = document.getElementById("timer");
    var stopTime = gethours + mins + secs;
    x.innerHTML = stopTime;

    /* display all Count-Up control buttons */
    var showStop = document.getElementById("stop");
    showStop.style.display = "inline-block";

    /* clear the Count-Up using the setTimeout( ) 
        return value 'clearTime' as ID */
    clearTimeout(clearTime);
  }
}

var pause = document.getElementById("pause");
pause.addEventListener("click", pauseTime);
/*********** End of Pause Button Operations *********/

/*********** Continue Button Operations *********/
function continueTime() {
  if (seconds !== 0 || minutes !== 0 || hours !== 0) {
    /* display the Count-Up Timer after it's been paused */
    var x = document.getElementById("timer");
    var continueTime = gethours + mins + secs;
    x.innerHTML = continueTime;

    /* display all Count-Up control buttons */
    var showStop = document.getElementById("stop");
    showStop.style.display = "inline-block";
    /* clear the Count-Up using the setTimeout( ) 
        return value 'clearTime' as ID.
        call the setTimeout( ) to keep the Count-Up alive ! */
    clearTimeout(clearTime);
    clearTime = setTimeout("startWatch( )", 1000);
  }
}

window.addEventListener("load", function () {
  var cTime = document.getElementById("continue");
  cTime.addEventListener("click", continueTime);
});
/*********** End of Continue Button Operations *********/
