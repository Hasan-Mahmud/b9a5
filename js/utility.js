
function setBgColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]');

}

function disableOnclick(elementId){
    const element = document.getElementById(elementId);
    element.disabled = true;
    // element.classList.remove('btn');
    // element.classList.add('cursor-not-allowed');
    element.style.pointerEvents = "none";
}

let seatCount = 0;

function incrementCounter() {
  seatCount += 1;
//   document.getElementById("seatCounter").textContent = seatCount;
  return seatCount;
}

function seatAvailable(count){
  const seatLeftId = document.getElementById("seatLeft");
  const seatLeft = seatLeftId.innerText;
  console.log(seatLeft);
  const seatNum = parseInt(seatLeft);
  const totalSeatAvailable = seatNum - count;
  console.log(totalSeatAvailable);
  seatLeftId.innerText = totalSeatAvailable;
  console.log(seatLeft);
  
}

function seatSelectedNum(count){
  const elementId = document.getElementById("seatSelected");
  elementId.classList.add("bg-[#1DD100]");
  elementId.innerText= count;
  
  
}

function getSeatNum(elementId){
  const seatId = document.getElementById(elementId);
  const seatNum = seatId.innerText;

}