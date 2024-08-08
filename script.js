let navIcons = document.querySelectorAll('footer nav ul li')
let pages = document.querySelectorAll("main section")
navIcons.forEach((icon,index) =>{
    icon.addEventListener('click',()=>changePage(icon,index))
})

function changePage(page,index){
    pages.forEach((page => page.classList.remove('active')))
    pages[index].classList.add('active')
}