window.addEventListener('mousemove', det =>{
    var rect = document.querySelector('.rect').getBoundingClientRect();
    let xval = gsap.utils.mapRange(
        0,
        window.innerWidth,
        100+rect.width/2,
        window.innerWidth - (100+rect.width/2),
        det.clientX
    )
    gsap.to('.rect',{
        left: xval +'px',
        ease : Power4
    })
})