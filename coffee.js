const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
})

// Testimonial Slider 

const reviews = document.querySelectorAll(".review");
let current=0;

function changeReview() {
    reviews[current].classList.remove("active");
    current = (current + 1) % reviews.length;
    reviews[current].classList.add("active");
}

setInterval(changeReview,3000);

//Counter animation

const counters = document.querySelectorAll(".counter");

const animateCounter = () => {
    counters.forEach(counter => {
        const target = +counter.dataset.target;
        let count = 0;
        const increment = target / 100;
        
        const update = () => {
            count += increment;

            if(count < target){
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(update);
            }
            else{
                counter.innerText = target;
            }
        };

        update();
    });
};

window.addEventListener("load",animateCounter);
