let imags = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]
let i = 0
let img = document.getElementById("slider")
let intval
let message
let playing = false

let Next = () => {
    if (i === imags.length - 1) {
        i = -1
    }

    img.setAttribute("src", "asstes/" + imags[++i])
    console.log(i);

}
let prev = () => {
    if (i === 0) {
        i = imags.length
    }
    i -= 1

    img.setAttribute("src", "asstes/" + imags[i])
}
let play = () => {

    if (!playing) {
        intval = setInterval(Next, 1000)
    }
    playing = true

}
let stop = () => {
    clearInterval(intval)
    playing = false
}
///////////////////////////////////////////////////////////////////////////////////
let cat = document.querySelectorAll(".catgory")
let clicked = false
let select
cat.forEach((el) => {
    el.addEventListener("click", (event) => {
        if (clicked === false) {
            clicked = true
            select = event.target.value
            let cards = document.querySelectorAll(".cards .card")
            cards.forEach((card) => {
                card.classList.remove("hide")
                if (!card.classList.contains(event.target.value)) {
                    card.classList.add("hide")
                    console.log(event.target.value);
                }
            })

        }
        else if (clicked === true && event.target.value !== select) {
            select = event.target.value
            let cards = document.querySelectorAll(".cards .card")
            cards.forEach((card) => {
                card.classList.remove("hide")
                if (!card.classList.contains(event.target.value)) {
                    card.classList.add("hide")
                    console.log(event.target.value);
                }
            })
        }
        else {
            clicked = false

            let cards = document.querySelectorAll(".cards .card")
            cards.forEach((card) => {
                card.classList.remove("hide")
            })
        }

    })
})
let adds = document.querySelectorAll("a.add")
let cartOrders = 0
console.log(Array.from(adds));
adds.forEach((add) => {
    add.addEventListener("click", (e) => {
        cartOrders++
        document.querySelector(".total").textContent = cartOrders
    })
})
// Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 