const buyTicket = document.getElementById("buyTickets");
const pahribahan = document.getElementById("paribahan");

buyTicket.addEventListener("click", function () {
    pahribahan.scrollIntoView({ behavior: "smooth" });
});

const seats = ["a1", "a2", "a3", "a4", "b1", "b2", 
    "b3", "b4", "c1", "c2", "c3", "c4", "d1", "d2", 
    "d3", "d4", "e1", "e2", "e3", "e4", "f1", "f2", 
    "f3", "f4", "g1", "g2", "g3", "g4", "h1", "h2", 
    "h3", "h4", "i1", "i2", "i3", "i4", "j1", "j2", 
    "j3", "j4"];

document.querySelectorAll(".seat").forEach(button => {
    button.addEventListener("click", function (e) {
        const id = e.target.id
        console.log(id);
        if (e.target.id && seats.includes(id)) {

            const count = incrementCounter();

            setBgColor(id);
            disableOnclick(id);
            console.log(id);
            console.log(count);
            seatAvailable(count);
            seatSelectedNum(count);

            if(count >= 4){
                document.querySelectorAll(".seat:not(:disabled)").forEach(button=>{
                    disableOnclick(button.id);
                });
            }

            if(count==1){
                
            }

        } else {
            console.log("eventListener not working")
        }
    });
}); 