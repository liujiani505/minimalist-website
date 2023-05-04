const burger = document.querySelector('nav svg');

burger.addEventListener("click", ()=>{

    if(burger.classList.contains('active')){
        gsap.to('.links', { x: "100%"});
        gsap.to(".line", { stroke: "white" });
        gsap.set("body", { overflow: "auto" });
    } else {
        gsap.to('.links', { x: "0%"});
        gsap.to(".line", { stroke: "black" });
        gsap.fromTo(
            ".links a",
            { opacity: 0, y: 0 },
            { opacity: 1, y: 20, delay: 0.25, stagger: 0.25 }
        );
        gsap.set("body", { overflow: "hidden" });
    }

    // classList.toggle() is a method in JavaScript that is used to add or remove a CSS class from an HTML element. If the element already has the class, classList.toggle() removes it. If the element does not have the class, classList.toggle() adds it.
    burger.classList.toggle("active");

})

