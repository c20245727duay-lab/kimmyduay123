import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    defaults: {
        duration: 0.5,
        ease: "power2.out"
    }
});

tl.from("nav a", {
    y: -20,
    opacity: 0,
    stagger: 0.15
})
.from("#Hero h1", {
    y: 35,
    opacity: 0
}, "-=0.3")
.from("#About", {
    rotateY: -360,
    transformPerspective: 900,
    transformOrigin: "left center",
    opacity: 0,
    duration: 1,
    ease: "power2.inOut"
}, "-=0.1")
.from("#Contact", {
    y: 30,
    opacity: 0
}, "-=0.2");

const replayButton = document.querySelector("#replayTimeline");
if (replayButton) {
    replayButton.addEventListener("click", function () {
        tl.restart();
    });
}

const toggleButton = document.querySelector("#toggledark");
const html = document.documentElement;

if (toggleButton) {
    toggleButton.addEventListener("click", function () {
        html.classList.toggle("dark");

        gsap.to(toggleButton, {
            rotation: "+=360",
            duration: 0.3,
            ease: "power2.inOut"
        });
    });
}

gsap.from("#Services", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#Services",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

const progressBar = document.querySelector("#progressBar");
if (progressBar) {
    gsap.fromTo(
        progressBar,
        { scaleX: 0 },
        {
            scaleX: 1,
            ease: "none",
            transformOrigin: "left center",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.2
            }
        }
    );
}

ScrollTrigger.create({
    trigger: "#Services",
    start: "top top",
    end: "+=300",
    pin: true,
    markers: false
});
