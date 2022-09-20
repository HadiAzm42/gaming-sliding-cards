const cards = document.querySelectorAll(".card-container");

const cardTitle = document.querySelector(".card-title");

cardTitle.style.opacity = "1";

// console.log(cards[4]);

cards.forEach(function (card) {
    card.addEventListener("click", function (e) {
        // Console.log("something");
        // card.classList.add("active");

        if(!card.classList.contains('active')) {
            cards.forEach((card)=> {
                card.classList.remove("active");
                card.childNodes[3].style.opacity = '0';
            });
        }
        card.classList.toggle("active");
        card.childNodes[3].style.opacity = '1';
    });
});