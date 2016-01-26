// Your code here
var nIntervId;

function updateTime() {
      nIntervId = setInterval(clockTime, 1000);
    }
function clockTime() {
  var today = new Date();
  var hour = today.getHours().toString();
  var min = today.getMinutes().toString();
  var second = today.getSeconds().toString();

  var clock = document.getElementById("clock");

  clock.innerHTML =  hour + ":" + min + ":" + second;

}
