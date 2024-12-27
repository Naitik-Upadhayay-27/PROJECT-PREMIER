gsap.from(".nav h1,a",{
    y:-50,
    duration:1,
    delay:0.2,
    opacity:0,
    stagger:0.2,
    scale:2
})
let blog=document.querySelectorAll(".letter")
console.log(blog)
let count=0;
blog.forEach(() => {
    setInterval(() => {
        if(count<4){
            blog[0].classList.remove("color")
            blog[1].classList.remove("color")
            blog[2].classList.remove("color")
            blog[3].classList.remove("color")
            blog[count].classList.add('color')  
            count ++;
        }
        else{
            count=0;
        }
    },450)
    
});