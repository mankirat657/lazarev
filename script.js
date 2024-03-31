function navAnimation(){
    var nav = document.querySelector("nav")
nav.addEventListener("mouseenter",function(){
    let tl = gsap.timeline()
    tl.to("#navBottom",{
        height:"21vh"
    })
    tl.to(".navPart2 .navElem h5",{
        display:"block"
    })
    tl.to(".navPart2 .navElem h5 span",{
        y:0,
        stagger:{
            amount:0.6
        }
    })
})
nav.addEventListener("mouseleave",function(){
    let tl = gsap.timeline()
    tl.to(".navPart2 .navElem h5 span",{
        y:25,
        display:this.none,
        stagger:{
            amount:0.1
        }
    })
    tl.to(".navPart2 .navElem h5",{
        display:"none",
        
        duration:0.1
    })
    tl.to("#navBottom",{
        height:0,
        duration:0.1
    })
})
}
navAnimation()
function page2Animation(){
    var rightElems = document.querySelectorAll(".rightElem");
rightElems.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
        })
    })
    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x-50,
            y:dets.y - elem.getBoundingClientRect().y-115
        })
    })
})
}
page2Animation()
function page3Animation(){
    var page3Center = document.querySelector(".page3Center")
var video = document.querySelector("#page3 video");
page3Center.addEventListener("click",function(){
    video.play();
    gsap.to(video,{
        transform : "scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0,
    })
})
video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
        transform : "scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius:"30px",
    })
})
}
page3Animation()

var sections = document.querySelectorAll(".secRight");
sections.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity = 1;
        elem.childNodes[3].play();
       
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity = 0;
        elem.childNodes[3].load();
    })
})
var sec1 = document.querySelector("#sec1");
righteleme2 = document.querySelector(".rightElem2")
video1 = document.querySelector("#video1");
sec1.addEventListener("mouseenter",function(){
    gsap.to(righteleme2,{
        opacity:1,
        scale:1
    })
})
sec1.addEventListener("mouseleave",function(){
    gsap.to(righteleme2,{
        opacity:0,
        scale:0
    })
})

sec1.addEventListener("mousemove",function(dets){
    gsap.to(righteleme2,{
        x:dets.x - righteleme2.getBoundingClientRect().x+233,
        y:dets.y - righteleme2.getBoundingClientRect().y-350
    })
})
var sec2 = document.querySelector("#sec2");
righteleme3 = document.querySelector("#pointer2")
video2 = document.querySelector("#video2");
sec2.addEventListener("mouseenter",function(){
    gsap.to(righteleme3,{
        opacity:1,
        scale:1
    })
})
sec2.addEventListener("mouseleave",function(){
    gsap.to(righteleme3,{
        opacity:0,
        scale:0
    })
})

sec2.addEventListener("mousemove",function(dets){
    gsap.to(righteleme3,{
        x:dets.x - righteleme3.getBoundingClientRect().x+233,
        y:dets.y - righteleme3.getBoundingClientRect().y-350
    })
})


container7video = document.querySelector(".container7 video")
container7video.play()
container7 = document.querySelector(".container7");
container7img = document.querySelector(".container7 img")
container7.addEventListener("mouseenter",function(){
    container7.style.marginTop = "0vh"
    container7video.load()
    container7video.style.opacity = 0;
    
})
container7.addEventListener("mouseleave",function(){
    container7.style.marginTop = "-27vh"
    container7video.play()
    container7video.style.opacity = 1;
})


container7Rvideo = document.querySelector(".container7Right video")
container7Rvideo.play()
container7R = document.querySelector(".container7Right");
container7img = document.querySelector(".container7Right img")
container7R.addEventListener("mouseenter",function(){
    container7R.style.marginTop = "0vh"
    container7Rvideo.load()
    container7Rvideo.style.opacity = 0;
    
})
container7R.addEventListener("mouseleave",function(){
    container7R.style.marginTop = "-27vh"
    container7Rvideo.play()
    container7Rvideo.style.opacity = 1;
})

gsap.to("#btm6Part2 h4",{
    x:100,
    duration : 1,
    stagger:{
        amount:-0.4
    },
    scrollTrigger:{
        trigger:"#btm6Part2",
        scroller: "body",
        start: "top 80%",
        end: "top -80%%",
        scrub:true
    }
})
gsap.to("#btm6Part3 h4",{
    x:50,
    duration : 1,
    stagger:{
        amount:-0.4
    },
    scrollTrigger:{
        trigger:"#btm6Part3",
        scroller: "body",
        start: "top 80%",
        end: "top -80%%",
        scrub:true
    }
})
gsap.to("#btm6Part4 h4",{
    x:50,
    duration : 1,
    stagger:{
        amount:-0.4
    },
    scrollTrigger:{
        trigger:"#btm6Part4",
        scroller: "body",
        start: "top 80%",
        end: "top -80%%",
        scrub:true
    }
})
var tl = gsap.timeline()
tl.from("#page1",{
    opacity:0,
    duration:0.3,
    delay:0.2

})
tl.from("#page1",{
    transform:"scaleX(0.7) scaleY(0.2) ",
    borderRadius : "50px",
    duration : 2,
    ease:"expo.out"
})
tl.from("nav",{
    opacity:0
})

tl.from("#page1 h1,#page1 p,#page1 div",{
    opacity:0,
    stagger : 0.2,
    duration:0.5
})
let toggle = 0
line2 = document.querySelector(".line2");
one = document.querySelector(".line2 .one")
two = document.querySelector(".line2 .two")
containergh = document.querySelector(".menu");


line2.addEventListener("click",function(){
    if(toggle=!toggle){

        one.style.transform = "rotate(45deg)";
        one.style.transition = "0.5s ease"
        two.style.transition = "0.5s ease"
        two.style.transform = "rotate(-45deg) ";
        two.style.marginTop =  "-10%"
        one.style.marginTop =  "10%"
        containergh.style.top ="11%"
    }
    else{
        one.style.transform = "rotate(0deg)";
        one.style.transition = "0.5s ease"
        two.style.transition = "0.5s ease"
        two.style.transform = "rotate(0deg) ";
        two.style.marginTop =  "0%"
        one.style.marginTop =  "0%"
        containergh.style.top ="-111%"
    }
    
})