const arrows =document.querySelectorAll(".arrow")
const movielist=document.querySelectorAll('.movie-list')

arrows.forEach((arrow,i)=>{
    console.log(movielist[i])
    arrow.addEventListener("click",()=>{
        movielist[i].scrollLeft+=100
    })
})


const larrows=document.querySelectorAll(".larrow")

larrows.forEach((arrow,i)=>{
    console.log(movielist[i])
    arrow.addEventListener("click",()=>{
        movielist[i].scrollLeft-=100
    })
})


const ball=document.querySelector(".toggle-ball")
const items=document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle")


ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active");
    })
    ball.classList.toggle("active")
})