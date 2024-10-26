
var tl = gsap.timeline()
tl.from("#nav h3", {
    y: -50,
    opacity: 0,
    dalay: 0.2,
    duration: 1,
    stagger:0.5
})

tl.from("#main h1", {
    x: -500,
    opacity: 0,
    duration: 0.8,
    dalay: 0.2,
    stagger:0.3
})

tl.from("img", {
    x: 100,
    rotate: 45,
    opacity: 0,
    delay:0.5,
    duration: 0.8,
    stagger:1
})