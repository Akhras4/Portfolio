import { gsap } from "gsap"
export const animationText=()=>{
    const light  = document.querySelectorAll('[id*="Cloud light"]')
    const dark  = document.querySelectorAll('[id*="Cloud dark"]')
    const stars=document.querySelectorAll('[id*=Ellipse]')
    const elements=document.querySelectorAll('[id*="Hallo"],[id*="HOI"],[id="Bonjour"],#MERHABA,#Hello')
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