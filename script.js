function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

function navanimation(){
    var nav = document.querySelector("nav")

nav.addEventListener("mouseenter",function(){
    var tl = gsap.timeline()
    tl.to("#nav-bottom1",{
        height:"21vh",
        duration: 0.5
    })
    tl.to(".nav-part2 h5",{
        display:"block",
        duration: 0.1

    })
    tl.to(".nav-part2 h5 span",{
        y: 0,
        // duration:0.3,
        stagger: {
            amount: 0.6}
    })

})

nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline()
    tl.to(".nav-part2 h5 span", {
        y: 25,
        stagger: {
            amount: 0.1
        }
    })
    tl.to(".nav-part2 h5", {
        display: "none",
        duration: 0.1
    })
    tl.to("#nav-bottom1", {
        height: 0,
        duration: 0.4
    })
})

}
 
function page2animation(){
    var rightelem = document.querySelectorAll(".right-elem")

rightelem.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(elem.childNodes[3], {
            opacity: 1,
            scale: 1
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3], {
            opacity: 0,
            scale: 0
        })
    })
    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x-60,
            y:dets.y - elem.getBoundingClientRect().y-150
        })
      

    })
})
}

function page3videoanimation(){
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })

video.addEventListener("click",function(){
    video.pause()
    gsap.to(video, {
        transform: "scaleX(0.7) scaleY(0)",
        opacity: 0,
        borderRadius: "30px"
    })

})
}

function scrolltigger(){

}

function loadinganimation(){
    var tl = gsap.timeline()
tl.from("#page1",{
    opacity:0,
    duration:0.3,
    delay:0.2
})
tl.from("#page1", {
    transform: "scaleX(0.7) scaleY(0.2) translateY(80%) ",
    borderRadius: "150px",
    duration:2,
    ease:"expo.out"
    
   
})
tl.from("nav", {
    opacity: 0,
    delay:-0.2
})
tl.from("#page1 h1, #page1 p, #page1 div", {
    opacity: 0,
    duration:0.5,
    stragger:0.2
})

}


locomotiveAnimation()

navanimation()

page2animation()

page3videoanimation()

loadinganimation()
