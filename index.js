// Your code here
var nIntervId;

function updateTime() {
      nIntervId = setInterval(clockTime, 1000);
    }
function clockTime() {
  var today = new Date();
  var term = " AM";
  var hour = today.getHours();
    if (hour > 12){
      hour = hour - 12;
      term = " PM";
    }else if (hour === 12 ){
      term = " PM";
    }else if (hour === 0){
      hour = 12;
    }

  var min = today.getMinutes();
  var second = today.getSeconds();

  var clock = document.getElementById("clock");

  clock.innerHTML =  hour.toString() + ":" + min.toString() + ":" + second.toString() + term;

}
