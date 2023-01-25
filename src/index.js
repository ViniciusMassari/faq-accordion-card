import "./sass/styles.scss"

document.documentElement.classList.add("js")

const accordionOpener = document.querySelectorAll("dt img")
const accordionQuestion = document.querySelectorAll("dt")
const accordion = document.querySelectorAll("dd")
const events = ["click", "touchstart"]

if (document.documentElement.classList.contains("js") && accordionOpener && accordionQuestion) {
    

    function openAccordion(event) {
        event.preventDefault()
       
        accordionQuestion.forEach(question =>{
            question.classList.remove("selected")
        })
        accordion.forEach(accordion =>{
            accordion.classList.remove("selected")
        })
        event.target.parentElement.classList.toggle("selected")
        event.target.parentElement.nextElementSibling.classList.toggle("selected");
    }

events.forEach(userEvent =>{
    accordionOpener.forEach(opener =>{
        opener.addEventListener(userEvent, openAccordion)
    })
})





}