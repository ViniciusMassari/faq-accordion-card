import "./sass/styles.scss"

document.documentElement.classList.add("js")

const accordionOpener = document.querySelectorAll("button")
const events = ["click", "touchstart"]



function toggleAccordion({currentTarget}) {
    const hasAria = currentTarget.getAttribute("aria-expanded")
    if (hasAria == "false") {
        currentTarget.children[0].classList.add("selected")
        currentTarget.parentElement.nextElementSibling.removeAttribute("hidden")
        currentTarget.parentElement.nextElementSibling.children[0].classList.add("selected")
        currentTarget.setAttribute("aria-expanded", "true")
    } else{
        currentTarget.parentElement.nextElementSibling.setAttribute("hidden", true)
        currentTarget.setAttribute("aria-expanded", "false")
        currentTarget.children[0].classList.remove("selected")
        currentTarget.parentElement.nextElementSibling.children[0].classList.remove("selected")
    }
 
   
}

events.forEach(userEvent =>{
    accordionOpener.forEach(opener =>{
        opener.addEventListener(userEvent, toggleAccordion)
    })
})