const rect = document.querySelector(".center");

rect.addEventListener("mousemove", det => {
    const rectLocation = rect.getBoundingClientRect();
    const insideRectVal = det.clientX - rectLocation.left;


    if (insideRectVal < rectLocation.width / 2) {

        const color = gsap.utils.mapRange(0,rectLocation.width / 2 , 255, 0, insideRectVal);
        
        gsap.to(rect, {
            backgroundColor: `rgb(${color},0,0)`,
            ease: Power4
        });
    } else {
        const color = gsap.utils.mapRange(rectLocation.width / 2 ,rectLocation.width,0, 255, insideRectVal);
        
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${color})`,
            ease: Power4
        });
    }
});

rect.addEventListener('mouseleave', ()=>{
    gsap.to(rect,{
        backgroundColor : '#fff',
        ease : Power4
    }
    )
})