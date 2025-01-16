let btn = document.querySelector('.btn')

window.addEventListener('scroll',()=>{
    console.log(window.scrollY);
    if(window.scrollY > 100)
    {
        
        btn.style.display="flex"
    }
    else{
        btn.style.display="none"
    }
})

btn.addEventListener('click',()=>{
    // window.scrollY = 0   //  => This will not work because it is read only property   
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})
