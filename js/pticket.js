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
            const sen = "seat" + count;
            const seatN = getSeatNum(id);
            console.log(seatN);
            setSeatDetails(count, id);
            totalPrice(count);

            if (count >= 4) {
                document.querySelectorAll(".seat:not(:disabled)").forEach(button => {
                    disableOnclick(button.id);
                });
            }

            if (count == 4) {
                enableElementById('inputCoupon');
                enableElementById('applyCoupon');
                setBgColor('applyCoupon');
                const couponCode = document.getElementById('inputCoupon');

                const coupon = document.getElementById('applyCoupon');
                coupon.addEventListener("click", function (e) {
                    const code = couponCode.value;
                    console.log(code);
                    if (code == "NEW15") {
                        const totalTicketPrice = totalPrice(count);
                        const totalDiscount = (totalTicketPrice / 100) * 15;
                        const discount = document.getElementById('discount');
                        const discountPrice = document.getElementById('discountPrice');
                        discount.innerText = "Discount";
                        discountPrice.innerText = totalDiscount;
                        hideElementById('couponId');
                        const grandTotal = document.getElementById("granTotal");
                        grandTotal.innerText = totalTicketPrice - totalDiscount;
                    } else if (code == "Couple 20") {
                        const totalTicketPrice = totalPrice(count);
                        const totalDiscount = (totalTicketPrice / 100) * 20;
                        const discount = document.getElementById('discount');
                        const discountPrice = document.getElementById('discountPrice');
                        discount.innerText = "Discount";
                        discountPrice.innerText = totalDiscount;
                        hideElementById('couponId');
                        const grandTotal = document.getElementById("granTotal");
                        grandTotal.innerText = totalTicketPrice - totalDiscount;
                    }
                });
            }

            const phoneNumber = document.getElementById('phoneNumber');
            phoneNumber.addEventListener("input", function (e) {
                const phoneValue = e.target.value;
                console.log(phoneValue.length);
                if (count >= 1 && !isNaN(phoneValue) && phoneValue !== "" && phoneValue.length === 11) {

                    enableElementById('confirmation');
                    setBgColor('confirmation');
                } else if(phoneValue === "" || phoneValue !== 11){
                    deleteBgColor('confirmation');
                    disableElementById('confirmation');
                }

                
            });






        } else {
            console.log("eventListener not working")
        }
    });
});

const nextBtn = document.getElementById('confirmation');
nextBtn.addEventListener("click", function(){
    hideElementById('footer1');
    hideElementById('footer2');
    hideElementById('paribahan');
    hideElementById('disCode');
    hideElementById('stat');
    hideElementById('ban');
    hideElementById('nav');
    showElementById('success');
});

const successBtn = document.getElementById('successBtn');
successBtn.addEventListener("click", function(){
    hideElementById('success');
    showElementById('nav');
    showElementById('stat');
    showElementById('disCode');
    showElementById('paribahan');
    showElementById('footer2');
    showElementById('footer1');
    showElementById('ban');

    setTimeout(() => {
        location.reload();
    }, 1000);
});

