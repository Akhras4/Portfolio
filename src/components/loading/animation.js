import { gsap } from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

export const animationText=()=>{
    const light  = document.querySelectorAll('[id*="Cloud light"]')
    const dark  = document.querySelectorAll('[id*="Cloud dark"]')
    const stars=document.querySelectorAll('[id*=Ellipse]')
    const elements=document.querySelectorAll('[id*="Hallo"],[id*="HOI"],[id="Bonjour"],#MERHABA,#Hello','#Hallo_2')
    const t1=gsap.timeline({defaults:{ease:"power4.out",duration:0.7} })
    t1.from(light ,{
        xPercent: -20,
        duration: 10,
        yoyo:true,
        repeat: -1,
    })
    stars.forEach(star => {
        t1.to(star, {
            scale: 1.4,
            filter: "brightness(400%)",
            duration: 0.2,
        }).to(star, {
            scale: 1,
            filter: "brightness(100%)",
            duration: 0.7,
        });
    });

   const textAnimation=(textid,elements,currentIndex )=>{
    const text= gsap.timeline({defaults:{ease:"power4.out", duration: 0.7 }})
    
    text.from(textid, {
        autoAlpha: 1, 
    })
    if(textid=='#MERHABA'){
    text.from(`${textid} path`, {
            stagger:0.1,
            scale:1,
            opacity:0.9,
            transformOrigin: "center center" ,
            duration:0.4 ,
            delay:0.4,
            autoAlpha:0,
        }) 
    }else{
    text.from(`${textid} path`, {
    stagger:-0.1,
    scale:1,
    opacity:0.9,
    transformOrigin: "center center" ,
    duration:0.4 ,
    delay:0.4,
    autoAlpha:0, 
})
    }
text.to(`${textid} path`,{
    stagger:0.1,
    yPercent:300,
    filter: "brightness(400%)",
    duration:1,
    opacity:0,
    transformOrigin: "center center" ,
})
.to(`${textid}`, {
    delay: 1,
    autoAlpha: 0, 
    onComplete :()=>{
        if (currentIndex < elements.length - 1) {
            pickId(elements, currentIndex + 1);
        }
    }
});
   }
  
   const pickId=(elements,currentIndex)=>{
    const nextIndex = (currentIndex + 1) % elements.length;
    const nextId = `#${elements[nextIndex].id}`;
    return textAnimation(nextId,elements,nextIndex)
   }
   let currentIndex = 0
   pickId(elements,currentIndex )

const t2=gsap.timeline({defaults:{ease:"power4.out",duration:0.7} })
t2.from(dark,{
    xPercent: 20,
    duration: 10,
    yoyo:true,
    repeat: -1
})
let paths=[]
let elementPaths=""
elements.forEach(element=>{
    elementPaths=element.querySelectorAll("path")
    paths = paths.concat(Array.from(elementPaths));
    
})
paths.forEach(path => {
    path.setAttribute('fill', 'url(#text)');
});

}


export  const linearGradient=              
<defs>
<linearGradient id="text" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="ak(1 0 0 -1 0 55.8028)">
    <stop offset="10%" />
    <stop offset="40%" />
    <stop offset="100%" />
</linearGradient>
</defs>