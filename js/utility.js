
function setBgColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]');

}

function deleteBgColor(elementId){
  const element = document.getElementById(elementId);
    element.classList.remove('bg-[#1DD100]');

}

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
  const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function enableElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('pointer-events-none');
}

function disableElementById(elementId){
  const element = document.getElementById(elementId);
    element.classList.add('pointer-events-none');
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
  return seatNum;
}

function setSeatDetails(count, elementId){
 const seatId = "seat" + count;
 const seatType = "seatType" + count;
 const seatPrice = "unitPrice" + count;
 const seat = document.getElementById(seatId);
 seat.innerText = getSeatNum(elementId);
 const type = document.getElementById(seatType);
 type.innerText = "Economoy";
 console.log(seatPrice);
 const price = document.getElementById(seatPrice);
 price.innerText = "550";
}

function totalPrice(count){
  const price = 550 * count;
  const totalPriceId = document.getElementById("totalPrice");
  totalPriceId.innerText = price;
  return price;
}


